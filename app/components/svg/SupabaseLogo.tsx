import * as React from 'react';
import { SVGProps } from 'react';

const SupabaseLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 109 113"
		width={109}
		height={113}
		fill="none"
		{...props}
	>
		<path
			d="M63.7084 110.284C60.8489 113.885 55.051 111.912 54.9821 107.314L53.9746 40.0625H99.1943C107.385 40.0625 111.953 49.5226 106.86 55.9372L63.7084 110.284Z"
			fill="white"
		/>
		<path
			d="M45.3177 2.07079C48.1772 -1.53061 53.9752 0.442694 54.0441 5.04076L54.2682 40.1787L55.5 40.5L54.4856 72.292H9.83186C1.64111 72.292 -2.92702 62.8319 2.16623 56.4173L45.3177 2.07079Z"
			fill="white"
		/>
	</svg>
);

export default SupabaseLogo;
