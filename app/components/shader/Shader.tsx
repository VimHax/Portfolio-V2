'use client';

import { useEffect, useRef, useState } from 'react';
import FallbackImg from './fallback.png';
import Image from 'next/image';
import { assert } from '../util';
import Renderer from './renderer';
import fs from './fragment.fs';

enum ShaderState {
	Initializing,
	Playing,
	Fallback
}

export default function Shader({ className = '' }: { className?: string }) {
	const [shaderState, setShaderState] = useState(ShaderState.Initializing);
	const initialized = useRef(false);
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		assert(canvas.current !== null);
		const renderer = new Renderer(canvas.current, fs);
		if (!renderer.initialize()) {
			setShaderState(ShaderState.Fallback);
			return;
		}
		if (renderer.draw(true) > 30) {
			setShaderState(ShaderState.Fallback);
			return;
		}
		setShaderState(ShaderState.Playing);
		renderer.play();
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
