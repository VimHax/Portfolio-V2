'use client';

import { useEffect, useRef, useState } from 'react';
import FallbackImg from './fallback.png';
import Image from 'next/image';
import { assert } from '../util';
import Renderer from './renderer';
import fs from './fragment.fs';
import FPSMeter from './fps';

enum ShaderState {
	Initializing,
	Playing,
	Fallback
}

let fpsMeter: FPSMeter | null = null;

export default function Shader({ className = '' }: { className?: string }) {
	const [shaderState, setShaderState] = useState(ShaderState.Initializing);
	const initialized = useRef(false);
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		if (fpsMeter === null) {
			fpsMeter = new FPSMeter();
			fpsMeter.startMeasuring();
		}

		assert(canvas.current !== null);
		const renderer = new Renderer(canvas.current, fs);
		if (!renderer.initialize()) {
			setShaderState(ShaderState.Fallback);
			return;
		}

		fpsMeter.getInitialFPS().then((targetFPS) => {
			assert(fpsMeter !== null);
			renderer.play();
			setShaderState(ShaderState.Playing);
			let arr: number[] = [];
			fpsMeter.onMeasure((fps) => {
				arr.push(fps);
				if (arr.length > 3) arr.shift();
				if (arr.length === 3 && arr.reduce((acc, x) => acc + x / 3, 0) < targetFPS * 0.75) {
					renderer.stop();
					setShaderState(ShaderState.Fallback);
				}
			});
		});
	}, []);

	return (
		<div className={`bg-neutral-950 ${className}`}>
			<div className="relative h-full w-full">
				{shaderState === ShaderState.Fallback && (
					<Image
						className="object-cover object-center"
						src={FallbackImg}
						alt="Background image."
						sizes="100vw"
						fill
						quality={100}
					/>
				)}
				<canvas
					className={`h-full w-full transition-opacity duration-500 ${className}`}
					style={{ opacity: shaderState === ShaderState.Playing ? 1 : 0 }}
					ref={canvas}
				></canvas>
			</div>
		</div>
	);
}
