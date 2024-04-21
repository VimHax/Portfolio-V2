import * as React from 'react';
import { SVGProps } from 'react';

const FlutterLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 300 372"
		width={300}
		height={372}
		fill="none"
		{...props}
	>
		<path d="m142.85 328.57 42.87 42.87H300l-99.99-100-57.16 57.13Z" fill="white" />
		<path
			d="m300 171.43-100 100 100 100H185.72l-42.86-42.86-57.15-57.15 100-100 114.29.01ZM185.72 0 0 185.72l57.15 57.15L300 0H185.72Z"
			fill="white"
		/>
	</svg>
);

export default FlutterLogo;
