'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function FollowingNavbar() {
	const [hidden, setHidden] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState<number | null>(null);

	useEffect(() => {
		function onScroll() {
			const currentScrollPos = window.scrollY;
			setHidden(
				prevScrollPos === null || prevScrollPos <= currentScrollPos || currentScrollPos < 500
			);
			setPrevScrollPos(currentScrollPos);
		}

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	return (
		<div
			className="fixed left-0 z-50 flex w-full justify-center transition-all"
			style={{ top: hidden ? '-100%' : '0px', opacity: hidden ? 0 : 1 }}
		>
			<Navbar />
		</div>
	);
}

export default FollowingNavbar;
