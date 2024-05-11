interface Log {
	type: 'log';
	message: string;
}

export type Renderer2Main = Log;

interface NewTarget {
	type: 'new_target';
	id: string;
	size: DOMRect;
	canvas: OffscreenCanvas;
	vsSource: string;
	fsSource: string;
	scale: number;
	uniforms: Record<string, number>;
}

interface Visibility {
	type: 'visibility';
	id: string;
	visible: boolean;
}

interface Size {
	type: 'size';
	id: string;
	size: DOMRect;
}

export type Main2Renderer = NewTarget | Visibility | Size;
