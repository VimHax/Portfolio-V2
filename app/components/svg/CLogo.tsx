import * as React from 'react';
import { SVGProps } from 'react';

const CLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 89.641 93.592"
		width={89.641}
		height={93.592}
		fill="none"
		{...props}
	>
		<path
			d="M204.335 132.388c-2.346-22.842-17.533-36.3-44.697-36.3-24.818 0-44.327 17.903-44.327 46.672 0 28.892 17.78 46.92 47.167 46.92 23.46 0 39.881-13.83 42.474-36.795h-28.028c-1.111 8.52-5.556 15.063-14.94 15.063-14.817 0-17.533-11.73-17.533-24.2 0-17.163 6.173-25.93 16.421-25.93 9.137 0 14.94 5.31 15.805 14.57z"
			fill="white"
			transform="translate(-115.311 -96.087)"
		/>
	</svg>
);

export default CLogo;
