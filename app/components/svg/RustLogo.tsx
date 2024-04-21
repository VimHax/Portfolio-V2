import * as React from 'react';
import { SVGProps } from 'react';

const RustLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		width={512}
		height={512}
		fill="none"
		{...props}
	>
		<path
			fill="white"
			d="m508.5 249.8-21.8-13.6c-.2-2-.3-3.9-.6-5.9l18.7-17.5a7.4 7.4 0 0 0-2.4-12.3l-24-9c-.5-1.9-1.1-3.8-1.7-5.6l15-20.8a7.4 7.4 0 0 0-4.8-11.5l-25.4-4.2c-.9-1.7-1.8-3.5-2.7-5.2l10.7-23.4a7.4 7.4 0 0 0-7-10.4l-25.8.9-3.6-4.4 5.9-25.1a7.4 7.4 0 0 0-8.8-8.8L405 78.9l-4.4-3.6.9-25.8a7.4 7.4 0 0 0-10.4-7l-23.4 10.7c-1.7-.9-3.4-1.8-5.2-2.7l-4.1-25.4a7.4 7.4 0 0 0-11.5-4.8l-20.9 15c-1.9-.6-3.8-1.1-5.6-1.7l-9-24a7.4 7.4 0 0 0-12.3-2.4l-17.5 18.7c-2-.2-3.9-.4-5.9-.6L262.3 3.5a7.4 7.4 0 0 0-12.5 0l-13.6 21.8c-2 .2-3.9.3-5.9.6L212.9 7.1a7.4 7.4 0 0 0-12.3 2.4l-9 24c-1.9.6-3.8 1.1-5.7 1.7l-20.8-15a7.4 7.4 0 0 0-11.5 4.8l-4.2 25.4c-1.7.9-3.5 1.8-5.2 2.7l-23.3-10.5a7.4 7.4 0 0 0-10.4 7l.9 25.8c-1.5 1.2-3 2.4-4.4 3.6l-25.2-6a7.4 7.4 0 0 0-8.8 8.8l5.9 25.2c-1.2 1.5-2.4 2.9-3.6 4.4l-25.8-.9a7.4 7.4 0 0 0-6.4 3.3 7.4 7.4 0 0 0-.6 7.1l10.7 23.4c-.9 1.7-1.8 3.4-2.7 5.2l-25.4 4.1a7.4 7.4 0 0 0-4.8 11.5l15 20.8c-.6 1.9-1.1 3.8-1.7 5.7l-24 9a7.4 7.4 0 0 0-2.4 12.3l18.7 17.5c-.2 2-.4 3.9-.6 5.9L3.5 249.8a7.4 7.4 0 0 0 0 12.5l21.8 13.5c.2 2 .3 3.9.6 5.9L7.1 299.1a7.4 7.4 0 0 0 2.4 12.3l24 9c.6 1.9 1.1 3.8 1.7 5.7l-15 20.8a7.4 7.4 0 0 0 4.8 11.5l25.4 4.2c.9 1.7 1.8 3.5 2.7 5.1l-10.5 23.4a7.4 7.4 0 0 0 .6 7.1 7.1 7.1 0 0 0 6.4 3.3l25.8-.9L79 405l-6 25.2a7.4 7.4 0 0 0 8.8 8.8l25.2-5.9 4.4 3.6-.9 25.8a7.4 7.4 0 0 0 10.4 7l23.4-10.7 5.1 2.7 4.2 25.4a7.3 7.3 0 0 0 11.5 4.8l20.8-15c1.9.6 3.8 1.1 5.7 1.7l9 24a7.4 7.4 0 0 0 12.3 2.4l17.5-18.7c2 .2 3.9.4 5.9.6l13.5 21.8a7.4 7.4 0 0 0 12.5 0l13.5-21.8c2-.2 3.9-.3 5.9-.6l17.5 18.7a7.4 7.4 0 0 0 12.3-2.4l9-24c1.9-.6 3.8-1.1 5.7-1.7l20.8 15a7.3 7.3 0 0 0 11.5-4.8l4.2-25.4c1.7-.9 3.5-1.8 5.2-2.7l23.4 10.7a7.4 7.4 0 0 0 10.4-7l-.9-25.8 4.4-3.6 25 5.9a7.4 7.4 0 0 0 8.8-8.8l-5.9-25.2 3.6-4.4 25.8.9a7.2 7.2 0 0 0 6.4-3.3 7.4 7.4 0 0 0 .6-7.1l-10.7-23.4c.9-1.7 1.8-3.4 2.7-5.2l25.4-4.2a7.4 7.4 0 0 0 4.8-11.5l-15-20.8c.6-1.9 1.1-3.8 1.7-5.7l24-9a7.4 7.4 0 0 0 2.4-12.3l-18.7-17.5c.2-2 .4-3.9.6-5.9l21.8-13.5a7.4 7.4 0 0 0 0-12.5zm-151 129.1a13.9 13.9 0 0 0-16.5 10.6l-7.6 35.7a187.5 187.5 0 0 1-156.4-.8l-7.6-35.7a13.9 13.9 0 0 0-16.5-10.7l-31.5 6.8a187.4 187.4 0 0 1-16.3-19.2h153.2c1.7 0 2.9-.3 2.9-1.9v-54.1c0-1.6-1.2-1.9-2.9-1.9h-44.8l.1-34.4H262c4.4 0 23.7 1.3 29.8 25.9 1.9 7.6 6.2 32.1 9.1 40 2.9 8.8 14.6 26.5 27.1 26.5h79a187.3 187.3 0 0 1-17.3 20.1zm25.8 34.5a15.2 15.2 0 1 1-15.3-15.3h.4a15.2 15.2 0 0 1 14.8 15.2zm-225.6-.7a15.2 15.2 0 1 1-15.3-15.3h.5a15.3 15.3 0 0 1 14.7 15.2zM69.6 234.2l32.8-14.6a13.9 13.9 0 0 0 7.1-18.3l-6.8-15.3h26.6v119.7H75.7a187.7 187.7 0 0 1-6.1-71.5zm-11.3-36.1a15.2 15.2 0 0 1 15.2-15.3h.5A15.2 15.2 0 1 1 58.3 198zm155.2 24.5.1-35.3h63.3c3.3 0 23.1 3.8 23.1 18.6 0 12.3-15.2 16.7-27.7 16.7zM399 306.7c-9.8 1.1-20.6-4.1-22-10.1-5.8-32.5-15.4-39.4-30.6-51.4 18.9-12 38.5-29.6 38.5-53.3 0-25.5-17.5-41.6-29.4-49.5-16.8-11-35.3-13.2-40.3-13.2H116.3a187.5 187.5 0 0 1 104.9-59.1l23.5 24.6a13.8 13.8 0 0 0 19.6.4l26.3-25A187.5 187.5 0 0 1 419 161.5l-18 40.6a14 14 0 0 0 7 18.3l34.6 15.3a187.1 187.1 0 0 1 .4 32.5h-19.3c-1.9 0-2.7 1.3-2.7 3.1v8.8c0 20.9-11.7 25.5-22 26.6zM240 60.2A15.2 15.2 0 0 1 255.2 45h.5A15.2 15.2 0 1 1 240 60.2zM436.8 214a15.2 15.2 0 1 1 0-30.5h.4a15.2 15.2 0 0 1-.4 30.5z"
		/>
	</svg>
);

export default RustLogo;