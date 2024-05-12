'use client';

import MenuIcon from './svg/MenuIcon';
import Logo from './svg/Logo';
import { useEffect, useState } from 'react';

function Link({
	name,
	url,
	alwaysVisible = false,
	onClick
}: {
	name: string;
	url: string;
	alwaysVisible?: boolean;
	onClick?: () => void;
}) {
	return (
		<a
			href={url}
			onClick={onClick}
			className={`h-full items-center justify-center px-6 font-semibold transition hover:bg-white hover:text-black ${alwaysVisible ? 'flex' : 'hidden lg:flex'}`}
		>
			{name}
		</a>
	);
}

function Navbar() {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		function onClick(evt: MouseEvent) {
			if (evt.target instanceof HTMLElement && evt.target.matches('#showBtn')) return;
			setHidden(true);
		}

		function onScroll() {
			setHidden(true);
		}

		window.addEventListener('click', onClick);
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('click', onClick);
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<div className="relative mx-4 mt-4 flex h-14 w-full max-w-screen-xl items-center justify-between sm:mx-8 sm:mt-8">
			<a
				href="#home"
				className="group flex h-full items-center justify-center gap-4 rounded-2xl bg-neutral-950/50 px-4 backdrop-blur-3xl transition-colors hover:bg-white hover:text-black"
			>
				<Logo className="h-6 w-6 [&_path]:fill-white [&_path]:transition-colors group-hover:[&_path]:fill-black" />
				<span className="auto -mb-1 hidden font-title text-xl font-semibold md:block">
					Vimukthi Weerabahu
				</span>
			</a>
			<span className="hidden font-bold sm:block">A Full-Stack Developer.</span>
			<div className="flex h-full items-center overflow-clip rounded-2xl bg-neutral-950/50 backdrop-blur-3xl">
				<button
					id="showBtn"
					onClick={() => setHidden(!hidden)}
					className="group flex aspect-square h-full items-center justify-center transition-colors hover:bg-white hover:text-white lg:hidden"
				>
					<MenuIcon className="pointer-events-none h-7 w-7 [&_path]:fill-white [&_path]:transition-colors group-hover:[&_path]:fill-black" />
				</button>
				<Link name="Work" url="#work" />
				<Link name="Skills" url="#skills" />
				<Link name="Contact" url="#contact" />
				<Link name="About" url="#about" />
			</div>
			<div
				className="absolute right-0 top-16 z-50 h-[14rem] w-32 grid-cols-1 grid-rows-4 overflow-clip rounded-2xl bg-neutral-950/50 backdrop-blur-3xl"
				style={{ display: hidden ? 'none' : 'grid' }}
			>
				<Link alwaysVisible name="Work" url="#work" />
				<Link alwaysVisible name="Skills" url="#skills" />
				<Link alwaysVisible name="Contact" url="#contact" />
				<Link alwaysVisible name="About" url="#about" />
			</div>
		</div>
	);
}

export default Navbar;
