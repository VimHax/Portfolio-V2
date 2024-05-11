'use client';

import { createRef, useEffect } from 'react';
import vsSource from './vertex.vs';
import noise3D from './noise3D.glsl';
import type { Main2Renderer, Renderer2Main } from './types';

function assert(x: boolean): asserts x {
	if (!x) throw new Error('Assertion failed.');
}

const targets = new Set<string>();
const worker = new Worker(new URL('./renderer', import.meta.url));

const sendMessage: (tx: Main2Renderer, transfers: Transferable[]) => void = (tx, transfers) =>
	worker.postMessage(tx, transfers);

worker.addEventListener('message', (event: MessageEvent<Renderer2Main>) => {
	switch (event.data.type) {
		case 'log': {
			console.log(`[WebWorker] ${event.data.message}`);
			break;
		}
	}
});

export default function Shader({
	id,
	className = '',
	scale = 1,
	source: fs,
	uniforms = {}
}: {
	id: string;
	className?: string;
	scale?: number;
	source: string;
	uniforms?: Record<string, number>;
}) {
	const canvas = createRef<HTMLCanvasElement>();

	useEffect(() => {
		assert(canvas.current !== null);

		if (targets.has(id)) return;
		targets.add(id);

		const fsSource = `precision mediump float;\n${noise3D}\n${fs}`;
		const size = canvas.current.getBoundingClientRect();
		const offscreen = canvas.current.transferControlToOffscreen();
		sendMessage(
			{
				type: 'new_target',
				id,
				size,
				canvas: offscreen,
				vsSource,
				fsSource,
				scale,
				uniforms
			},
			[offscreen]
		);

		console.log(`OffscreenCanvas sent for ${id}!`);

		const visibilityObserver = new IntersectionObserver((entries) => {
			assert(canvas.current !== null);
			for (const entry of entries) {
				console.log(id, entry.isIntersecting);
				sendMessage({ type: 'visibility', id, visible: entry.isIntersecting }, []);
			}
		});
		visibilityObserver.observe(canvas.current);

		const resizeObserver = new ResizeObserver((entries) => {
			assert(canvas.current !== null);
			for (const entry of entries) {
				const size = canvas.current.getBoundingClientRect();
				console.log(id, entry.target.getBoundingClientRect());
				sendMessage({ type: 'size', id, size }, []);
			}
		});
		resizeObserver.observe(canvas.current);
	});

	return <canvas className={`shader ${className}`} ref={canvas}></canvas>;
}
