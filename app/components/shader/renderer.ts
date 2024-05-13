import { assert } from '../util';
import vsSource from './vertex.vs';
import noise3D from './noise3D.glsl';

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
}

export default class Renderer {
	private _initialized = false;
	private _gl: WebGL2RenderingContext | null = null;
	private _programInfo: ProgramInfo | null = null;
	private _startedAt: number | null = null;
	private _random: number | null = null;
	private _frame: number = 0;
	private _stopPlaying: boolean = false;

	constructor(
		private _canvas: HTMLCanvasElement,
		private _fsSource: string
	) {}

	public initialize(): boolean {
		assert(!this._initialized);
		this._initialized = true;
		console.log('Initializing shader...');

		this._gl = this._canvas.getContext('webgl2');

		// only continue if WebGL is available and working
		if (this._gl === null) {
			console.error('Unable to initialize WebGL.');
			return false;
		}

		function resize(gl: WebGL2RenderingContext, canvas: HTMLCanvasElement): void {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
			console.log(`Updated the shader viewport: ${gl.canvas.width}x${gl.canvas.height}`);
		}

		// resize the canvas and viewport
		window.addEventListener('resize', resize.bind(undefined, this._gl, this._canvas));
		resize(this._gl, this._canvas);

		// attempt to make a shader program
		const shaderProgram = this._initShaderProgram(
			vsSource,
			`precision highp float;\n${noise3D}\n${this._fsSource}`
		);
		if (shaderProgram === null) {
			console.error('Unable to initialize the shader program.');
			return false;
		}

		// attempt to make a position buffer
		const positionBuffer = this._initPositionBuffer();
		if (positionBuffer === null) {
			console.error('Unable to initialize the position buffer.');
			this._gl.deleteProgram(shaderProgram);
			return false;
		}
		console.log('Initialized shader program!');

		// bundle everything up
		this._programInfo = {
			program: shaderProgram,
			positionBuffer,
			attribLocations: {
				vertexPosition: this._gl.getAttribLocation(shaderProgram, 'vertexPosition')
			},
			uniformLocations: {
				time: this._gl.getUniformLocation(shaderProgram, 'Time'),
				aspect: this._gl.getUniformLocation(shaderProgram, 'Aspect'),
				random: this._gl.getUniformLocation(shaderProgram, 'Random'),
				screen: this._gl.getUniformLocation(shaderProgram, 'Screen')
			}
		};

		return true;
	}

	public play() {
		if (this._stopPlaying) return;
		// skip if not visible
		if (!this._isInViewport() || this._frame++ % 2 == 1) {
			// schedule the next draw call
			requestAnimationFrame(() => this.play());
			return;
		}
		this.draw();
		// schedule the next draw call
		requestAnimationFrame(() => this.play());
	}

	public stop() {
		this._stopPlaying = true;
	}

	public draw(blocking = false): number {
		assert(this._gl !== null);
		assert(this._programInfo !== null);

		const renderStart = performance.now();

		if (!this._startedAt) this._startedAt = renderStart;
		if (!this._random) this._random = Math.random();

		// clear to black, fully opaque
		this._gl.clearColor(0.0, 0.0, 0.0, 1.0);

		// clear the canvas before we start drawing on it
		this._gl.clear(this._gl.COLOR_BUFFER_BIT);

		// tell WebGL how to pull out the positions from the position
		// buffer into the vertexPosition attribute
		{
			this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._programInfo.positionBuffer);

			// pull out 2 values per iteration
			const numComponents = 2;
			// the data in the buffer is 32bit floats
			const type = this._gl.FLOAT;
			// don't normalize
			const normalize = false;
			// how many bytes to get from one set of values to the next
			// 0 = use type and numComponents above
			const stride = 0;
			// how many bytes inside the buffer to start from
			const offset = 0;

			this._gl.vertexAttribPointer(
				this._programInfo.attribLocations.vertexPosition,
				numComponents,
				type,
				normalize,
				stride,
				offset
			);

			this._gl.enableVertexAttribArray(this._programInfo.attribLocations.vertexPosition);
		}

		// tell WebGL to use our program when drawing
		this._gl.useProgram(this._programInfo.program);

		// set the time
		const elapsed = renderStart - this._startedAt;
		this._gl.uniform1f(this._programInfo.uniformLocations.time, elapsed / 1000);

		// set the random number
		this._gl.uniform1f(this._programInfo.uniformLocations.random, this._random);

		// set the screen size
		this._gl.uniform2f(
			this._programInfo.uniformLocations.screen,
			this._canvas.width,
			this._canvas.height
		);

		// draw the vertices
		{
			const offset = 0;
			const vertexCount = 4;
			this._gl.drawArrays(this._gl.TRIANGLE_STRIP, offset, vertexCount);
		}

		if (blocking) {
			const pixels = new Uint8Array(1 * 1 * 4);
			this._gl.readPixels(0, 0, 1, 1, this._gl.RGBA, this._gl.UNSIGNED_BYTE, pixels);
			const renderStop = performance.now();
			return renderStop - renderStart;
		}

		return 0;
	}

	// https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
	private _isInViewport(): boolean {
		const rect = this._canvas.getBoundingClientRect();
		const height = window.innerHeight || document.documentElement.clientHeight;
		return rect.top <= height && rect.bottom >= 0;
	}

	// lot of the code below is taken straight from:
	// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial

	private _initShaderProgram(vsSource: string, fsSource: string): WebGLProgram | null {
		assert(this._gl !== null);

		// load the vertex and fragment shaders
		const vertexShader = this._loadShader(this._gl.VERTEX_SHADER, vsSource);
		if (vertexShader === null) return null;
		const fragmentShader = this._loadShader(this._gl.FRAGMENT_SHADER, fsSource);
		if (fragmentShader === null) {
			this._gl.deleteShader(vertexShader);
			return null;
		}

		// create the shader program
		const shaderProgram = this._gl.createProgram();
		if (shaderProgram === null) {
			this._gl.deleteShader(vertexShader);
			this._gl.deleteShader(fragmentShader);
			return null;
		}
		this._gl.attachShader(shaderProgram, vertexShader);
		this._gl.attachShader(shaderProgram, fragmentShader);
		this._gl.linkProgram(shaderProgram);

		// if creating the shader program failed, alert
		if (!this._gl.getProgramParameter(shaderProgram, this._gl.LINK_STATUS)) {
			console.error('Could not create shader program:', this._gl.getProgramInfoLog(shaderProgram));
			this._gl.deleteProgram(shaderProgram);
			return null;
		}

		return shaderProgram;
	}

	private _loadShader(type: number, source: string): WebGLShader | null {
		assert(this._gl !== null);

		const shader = this._gl.createShader(type);
		if (shader === null) return null;

		// set the source of the shader
		this._gl.shaderSource(shader, source);

		// compile the shader
		this._gl.compileShader(shader);

		// see if it compiled successfully
		// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
		if (!this._gl.getShaderParameter(shader, this._gl.COMPILE_STATUS)) {
			console.error(
				'An error occurred when compiling the shaders:',
				this._gl.getShaderInfoLog(shader)
			);
			this._gl.deleteShader(shader);
			return null;
		}

		return shader;
	}

	private _initPositionBuffer(): WebGLBuffer | null {
		assert(this._gl !== null);

		// create a buffer for the canvas' positions
		const positionBuffer = this._gl.createBuffer();
		if (positionBuffer === null) return null;

		// select the `positionBuffer` as the one to apply buffer
		// operations to from here out
		this._gl.bindBuffer(this._gl.ARRAY_BUFFER, positionBuffer);

		// now create an array of positions for the canvas
		const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

		// now pass the list of positions into WebGL to build the
		// shape. we do this by creating a Float32Array from the
		// JavaScript array, then use it to fill the current buffer
		this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(positions), this._gl.STATIC_DRAW);

		return positionBuffer;
	}
}
