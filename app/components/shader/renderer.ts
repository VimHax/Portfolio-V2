import type { Main2Renderer, Renderer2Main } from './types';

const sendMessage: (tx: Renderer2Main) => void = postMessage;
const log = (message: string) => sendMessage({ type: 'log', message });

addEventListener('install', () => {
	log('service worker installed');
});

addEventListener('activate', () => {
	log('service worker activated');
});

const startedAt = Date.now();
const offscreen = new OffscreenCanvas(0, 0);
const gl = offscreen.getContext('webgl2');

interface ProgramInfo {
	program: WebGLProgram;
	positionBuffer: WebGLBuffer;
	attribLocations: {
		vertexPosition: number;
	};
	uniformLocations: {
		/** The seconds elapsed since the shader was started. */
		time: WebGLUniformLocation | null;
		/** The aspect ratio of the canvas. */
		aspect: WebGLUniformLocation | null;
		/** A random number which stays constant for a session. `0 <= x <= 1` */
		random: WebGLUniformLocation | null;
		/** The size of the viewport. */
		screen: WebGLUniformLocation | null;
		/** The scaling of the shader. */
		scale: WebGLUniformLocation | null;
	};
	scale: number;
	customUniformLocations: Record<string, [WebGLUniformLocation | null, number]>;
}

interface Target {
	visible: boolean;
	size: DOMRect;
	random: number;
	canvas: OffscreenCanvas;
	ctx: OffscreenCanvasRenderingContext2D;
	programInfo: ProgramInfo;
}

const targets = new Map<string, Target>();

function render(gl: WebGL2RenderingContext, id: string, target: Target) {
	if (!target.visible) return;

	// Set the size of the canvas
	offscreen.width = target.size.width;
	offscreen.height = target.size.height;
	gl.viewport(0, 0, target.size.width, target.size.height);

	// clear to black, fully opaque
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	// clear the canvas before we start drawing on it
	gl.clear(gl.COLOR_BUFFER_BIT);

	// tell WebGL how to pull out the positions from the position
	// buffer into the vertexPosition attribute
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, target.programInfo.positionBuffer);

		// pull out 2 values per iteration
		const numComponents = 2;
		// the data in the buffer is 32bit floats
		const type = gl.FLOAT;
		// don't normalize
		const normalize = false;
		// how many bytes to get from one set of values to the next
		// 0 = use type and numComponents above
		const stride = 0;
		// how many bytes inside the buffer to start from
		const offset = 0;

		gl.vertexAttribPointer(
			target.programInfo.attribLocations.vertexPosition,
			numComponents,
			type,
			normalize,
			stride,
			offset
		);

		gl.enableVertexAttribArray(target.programInfo.attribLocations.vertexPosition);
	}

	// tell WebGL to use our program when drawing
	gl.useProgram(target.programInfo.program);

	// set the time
	const elapsed = Date.now() - startedAt;
	gl.uniform1f(target.programInfo.uniformLocations.time, elapsed / 1000);

	// set the canvas aspect ratio
	gl.uniform1f(target.programInfo.uniformLocations.aspect, target.size.width / target.size.height);

	// set the random number
	gl.uniform1f(target.programInfo.uniformLocations.random, target.random);

	// set the screen size
	gl.uniform2f(target.programInfo.uniformLocations.screen, target.size.width, target.size.height);

	// set the scale
	gl.uniform1f(target.programInfo.uniformLocations.scale, target.programInfo.scale);

	// set custom uniforms
	for (const [uniform, value] of Object.values(target.programInfo.customUniformLocations)) {
		gl.uniform1f(uniform, value);
	}

	// draw the vertices
	{
		const offset = 0;
		const vertexCount = 4;
		gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
	}

	// draw the image on the target
	const bitmap = offscreen.transferToImageBitmap();
	target.canvas.width = target.size.width;
	target.canvas.height = target.size.height;
	target.ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
	bitmap.close();
}

function draw() {
	if (gl === null) return log('Failed to open WebGL context');
	for (const [id, target] of targets.entries()) render(gl, id, target);
	requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

// lot of the code below is taken straight from:
// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial

function initShaderProgram(
	gl: WebGL2RenderingContext,
	vsSource: string,
	fsSource: string
): WebGLProgram | null {
	// load the vertex and fragment shaders
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	if (vertexShader === null) return null;
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
	if (fragmentShader === null) {
		gl.deleteShader(vertexShader);
		return null;
	}

	// create the shader program
	const shaderProgram = gl.createProgram();
	if (shaderProgram === null) {
		gl.deleteShader(vertexShader);
		gl.deleteShader(fragmentShader);
		return null;
	}
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	// if creating the shader program failed, alert
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		console.error('Could not create shader program:', gl.getProgramInfoLog(shaderProgram));
		gl.deleteProgram(shaderProgram);
		return null;
	}

	return shaderProgram;
}

function loadShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
	const shader = gl.createShader(type);
	if (shader === null) return null;

	// set the source of the shader
	gl.shaderSource(shader, source);

	// compile the shader
	gl.compileShader(shader);

	// see if it compiled successfully
	// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error('An error occurred when compiling the shaders:', gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

function initPositionBuffer(gl: WebGL2RenderingContext): WebGLBuffer | null {
	// create a buffer for the canvas' positions
	const positionBuffer = gl.createBuffer();
	if (positionBuffer === null) return null;

	// select the `positionBuffer` as the one to apply buffer
	// operations to from here out
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	// now create an array of positions for the canvas
	const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

	// now pass the list of positions into WebGL to build the
	// shape. we do this by creating a Float32Array from the
	// JavaScript array, then use it to fill the current buffer
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

	return positionBuffer;
}

addEventListener('message', (evt: MessageEvent<Main2Renderer>) => {
	if (gl === null) return;
	switch (evt.data.type) {
		case 'new_target': {
			const { id, size, canvas, vsSource, fsSource, scale, uniforms } = evt.data;
			if (targets.has(id)) throw new Error('Duplicate ID');

			const ctx = canvas.getContext('2d');
			if (ctx === null) {
				log(`Could not get rendering context for ${id}`);
				return;
			}

			// attempt to make a shader program
			const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
			if (shaderProgram === null) {
				log(`Unable to initialize the shader program for ${id}.`);
				return;
			}

			// attempt to make a position buffer
			const positionBuffer = initPositionBuffer(gl);
			if (positionBuffer === null) {
				log(`Unable to initialize the position buffer for ${id}.`);
				gl.deleteProgram(shaderProgram);
				return;
			}
			log(`Initialized shader program for ${id}!`);

			// grab custom uniforms
			const customUniformLocations: ProgramInfo['customUniformLocations'] = {};
			for (const [key, value] of Object.entries(uniforms)) {
				customUniformLocations[key] = [gl.getUniformLocation(shaderProgram, key), value];
			}

			// bundle everything up
			const programInfo: ProgramInfo = {
				program: shaderProgram,
				positionBuffer,
				attribLocations: {
					vertexPosition: gl.getAttribLocation(shaderProgram, 'vertexPosition')
				},
				uniformLocations: {
					time: gl.getUniformLocation(shaderProgram, 'Time'),
					aspect: gl.getUniformLocation(shaderProgram, 'Aspect'),
					random: gl.getUniformLocation(shaderProgram, 'Random'),
					screen: gl.getUniformLocation(shaderProgram, 'Screen'),
					scale: gl.getUniformLocation(shaderProgram, 'Scale')
				},
				scale,
				customUniformLocations
			};

			targets.set(id, {
				canvas,
				ctx,
				programInfo,
				visible: true,
				size,
				random: Math.random()
			});

			log(`Target for ${id} added!`);

			break;
		}
		case 'visibility': {
			const { id, visible } = evt.data;
			log(`Received visibility update for ${id}!`);

			const target = targets.get(id);
			if (!target) throw new Error('No target with the provided ID');

			target.visible = visible;

			break;
		}
		case 'size': {
			const { id, size } = evt.data;
			log(`Received size update for ${id}!`);

			const target = targets.get(id);
			if (!target) throw new Error('No target with the provided ID');

			target.size = size;

			break;
		}
	}
});
