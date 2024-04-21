import Image from 'next/image';

import HeroImage from './hero.png';
import Logo from '@/app/components/svg/Logo';

export default function Landing() {
	return (
		<main className="topography flex h-screen w-full flex-col gap-unit p-unit">
			<div className="flex h-8 w-full items-center justify-between">
				<div className="flex items-center gap-8">
					<Logo className="h-8 w-8" />
					<div className="h-8 w-[1px] bg-white/50"></div>
					<span className="text-2xl font-bold uppercase tracking-widest">Vimukthi Weerabahu</span>
				</div>
				<div className="text-md flex gap-20 font-bold uppercase tracking-widest">
					<a className="line-hover" href="#work">
						Work
					</a>
					<a className="line-hover" href="#skills">
						Skills
					</a>
					<a className="line-hover" href="#contact">
						Contact
					</a>
					<a className="line-hover" href="#about">
						About
					</a>
				</div>
			</div>
			<div className="relative h-full w-full">
				<Image
					className="rounded-lg object-cover"
					style={{ objectPosition: 'calc(1/2*100%) center' }}
					src={HeroImage}
					fill
					sizes="100vw"
					quality={100}
					alt="Image of me."
				/>
				<div className="absolute left-0 top-0 h-full w-full rounded-lg border-[1px] border-solid border-white/5"></div>
				<div className="absolute left-0 top-0 h-full w-full rounded-lg border-[1px] border-solid border-white mix-blend-overlay"></div>
				<div className="absolute left-1/2 top-0 flex h-full w-1/2 items-center justify-center">
					<div className="font-bold uppercase">
						<div className="whitespace-nowrap text-[65px] 2xl:text-[86px]">Full-stack</div>
						<div className="-mt-3 whitespace-nowrap text-7xl 2xl:-mt-5 2xl:text-8xl">Developer</div>
					</div>
				</div>
			</div>
		</main>
	);
}
