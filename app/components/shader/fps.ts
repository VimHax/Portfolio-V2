import { assert } from '../util';

type Listener = (fps: number) => void;

export default class FPSMeter {
	private _measuring = false;
	private _measured = 0;
	private _frames = 0;
	private _lastMeasured = 0;
	private _initialFPS: number | null = null;
	private _listeners: Listener[] = [];

	private _measureFPS(time: number) {
		this._frames++;
		if (time - this._lastMeasured > 1000) {
			if (this._measured === 1) this._initialFPS = this._frames;
			this._lastMeasured = time;
			if (this._initialFPS !== null) {
				[...this._listeners].forEach((x) => x(this._frames));
			}
			this._frames = 0;
			this._measured++;
		}
		requestAnimationFrame(this._measureFPS.bind(this));
	}

	getInitialFPS(): Promise<number> {
		return new Promise((resolve) => {
			if (this._initialFPS !== null) {
				resolve(this._initialFPS);
				return;
			}
			const onInitialMeasure = (fps: number) => {
				let idx = this._listeners.indexOf(onInitialMeasure);
				resolve(fps);
			};
			this._listeners.push(onInitialMeasure);
		});
	}

	startMeasuring() {
		assert(!this._measuring);
		this._measuring = true;
		requestAnimationFrame(this._measureFPS.bind(this));
	}

	onMeasure(listener: Listener) {
		this._listeners.push(listener);
	}
}
