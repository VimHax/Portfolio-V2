import Image from 'next/image';

import HeroImage from './hero.png';
import Logo from '@/app/components/Logo';

export default function Footer() {
	return (
		<main className="topography flex w-full items-center justify-between p-12">
			{/* <div className="flex items-center gap-10">
				<Logo className="h-8 w-8" />
				<div className="h-8 w-[1px] bg-white/50"></div>
				<span className="text-2xl font-bold uppercase tracking-widest">Vimukthi Weerabahu</span>
			</div> */}
			{/* <div className="flex items-center gap-12">
				<Logo className="h-16 w-16" />
				<h1 className="text-2xl font-bold uppercase tracking-widest">Vimukthi Weerabahu</h1>
			</div> */}
			<div className="flex items-center gap-8">
				<Logo className="h-8 w-8" />
				<div className="h-8 w-[1px] bg-white/50"></div>
				<span className="text-2xl font-bold uppercase tracking-widest">Vimukthi Weerabahu</span>
			</div>
			{/* <div className="content-center">© 2024 Vimukthi Weerabahu</div> */}
			<div className="text-md flex gap-5">
				<div className="rounded-lg border-[1px] border-solid border-neutral-900 bg-black px-5 py-3 text-lg transition hover:cursor-pointer hover:border-white hover:bg-white hover:text-black">
					me@vimhax.com
				</div>
				<div className="rounded-lg border-[1px] border-solid border-neutral-900 bg-black px-5 py-3 text-lg transition hover:cursor-pointer hover:border-white hover:bg-white hover:text-black">
					Instagram
				</div>
			</div>
		</main>
	);
}
