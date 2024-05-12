'use client';

import { createRef, useEffect, useRef } from 'react';
import vsSource from './vertex.vs';
import noise3D from './noise3D.glsl';

function assert(x: boolean): asserts x {
	if (!x) throw new Error('Assertion failed.');
}

function nonNull<T>(x: T): NonNullable<T> {
	assert(x !== undefined && x !== null);
	return x;
}

/** Information about the shader program. */
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
	};
	customUniformLocations: Record<string, [WebGLUniformLocation | null, number]>;
}

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

// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element: HTMLElement): boolean {
	const rect = element.getBoundingClientRect();
	const height = window.innerHeight || document.documentElement.clientHeight;
	return rect.top <= height && rect.bottom >= 0;
}

function drawScene(
	gl: WebGL2RenderingContext,
	programInfo: ProgramInfo,
	startedAt: number,
	random: number,
	canvas: HTMLCanvasElement,
	skip: boolean
): void {
	// skip if not visible
	if (!isInViewport(canvas) || skip) {
		// schedule the next draw call
		requestAnimationFrame(() => {
			drawScene(gl, programInfo, startedAt, random, canvas, !skip);
		});
		return;
	}

	// clear to black, fully opaque
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	// clear the canvas before we start drawing on it
	gl.clear(gl.COLOR_BUFFER_BIT);

	// tell WebGL how to pull out the positions from the position
	// buffer into the vertexPosition attribute
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, programInfo.positionBuffer);

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
			programInfo.attribLocations.vertexPosition,
			numComponents,
			type,
			normalize,
			stride,
			offset
		);

		gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
	}

	// tell WebGL to use our program when drawing
	gl.useProgram(programInfo.program);

	// set the time
	const elapsed = Date.now() - startedAt;
	gl.uniform1f(programInfo.uniformLocations.time, elapsed / 1000);

	// set the canvas aspect ratio
	gl.uniform1f(programInfo.uniformLocations.aspect, canvas.width / canvas.height);

	// set the random number
	gl.uniform1f(programInfo.uniformLocations.random, random);

	// set the screen size
	gl.uniform2f(programInfo.uniformLocations.screen, canvas.width, canvas.height);

	// set custom uniforms
	for (const [uniform, value] of Object.values(programInfo.customUniformLocations)) {
		gl.uniform1f(uniform, value);
	}

	// draw the vertices
	{
		const offset = 0;
		const vertexCount = 4;
		gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
	}

	// schedule the next draw call
	requestAnimationFrame(() => {
		drawScene(gl, programInfo, startedAt, random, canvas, !skip);
	});
}

function resize(gl: WebGL2RenderingContext, canvas: HTMLCanvasElement): void {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
	console.log(`Updated the shader viewport: ${gl.canvas.width}x${gl.canvas.height}`);
}

export default function Shader({
	className = '',
	source: fs,
	uniforms = {}
}: {
	className?: string;
	scale?: number;
	source: string;
	uniforms?: Record<string, number>;
}) {
	const initialized = useRef(false);
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		console.log('Initializing shader...');

		// initialize the GL context
		assert(canvas.current !== null);
		const gl = canvas.current.getContext('webgl2', { antialias: true });

		// only continue if WebGL is available and working
		if (gl === null) {
			console.error('Unable to initialize WebGL.');
			return;
		}

		// resize the canvas and viewport
		window.addEventListener('resize', resize.bind(undefined, gl, canvas.current));
		resize(gl, canvas.current);

		// set clear color to black, fully opaque
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		// clear the color buffer with specified clear color
		gl.clear(gl.COLOR_BUFFER_BIT);

		// attempt to make a shader program
		const shaderProgram = initShaderProgram(
			gl,
			vsSource,
			`precision mediump float;\n${noise3D}\n${fs}`
		);
		if (shaderProgram === null) {
			console.error('Unable to initialize the shader program.');
			return;
		}

		// attempt to make a position buffer
		const positionBuffer = initPositionBuffer(gl);
		if (positionBuffer === null) {
			console.error('Unable to initialize the position buffer.');
			gl.deleteProgram(shaderProgram);
			return;
		}
		console.log('Initialized shader program!');

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
				screen: gl.getUniformLocation(shaderProgram, 'Screen')
			},
			customUniformLocations
		};

		// start playing
		drawScene(nonNull(gl), nonNull(programInfo), Date.now(), Math.random(), canvas.current, true);
	}, []);

	return <canvas className={`bg-neutral-950 ${className}`} ref={canvas}></canvas>;
}
