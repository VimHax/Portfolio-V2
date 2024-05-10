import Image from 'next/image';

import HeroImage from './hero.png';
import BgImage from './bg.png';
import Logo from '@/app/components/svg/Logo';

// function Link({ name, url }: { name: string; url: string }) {
// 	return (
// 		<a
// 			target="_blank"
// 			href={url}
// 			className="rounded-2xl bg-neutral-950 px-5 py-3 transition-colors hover:bg-white hover:text-black"
// 		>
// 			{name}
// 		</a>
// 	);
// }

function Link({ name, url }: { name: string; url: string }) {
	return (
		<a
			href={url}
			className="text-base font-bold uppercase text-neutral-500 transition hover:text-white"
		>
			{name}
		</a>
	);
	// return (
	// 	<a
	// 		href={url}
	// 		className="h-fit w-fit rounded-2xl px-3 pb-1 pt-1.5 text-base font-bold uppercase tracking-widest transition hover:border-white hover:bg-white hover:text-black"
	// 	>
	// 		{name}
	// 	</a>
	// );
}

export default function Landing() {
	return (
		<main className="relative flex h-screen w-full justify-center">
			<Image
				className="-z-10 object-cover object-center"
				src={BgImage}
				fill
				sizes="100vw"
				quality={100}
				alt="Image of me."
			/>
			<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
				<div className="font-title font-semibold">
					{/* <div className="whitespace-nowrap text-9xl">Full-stack</div>
					<div className="whitespace-nowrap text-9xl">Developer</div> */}
					<div className="whitespace-nowrap text-9xl">Full-Stack Developer</div>
				</div>
			</div>
			<main className="flex h-full w-full max-w-screen-xl flex-col items-center gap-unit">
				{/* <div className="mt-8 flex h-8 w-full items-center justify-center rounded-2xl bg-neutral-950/75 px-10 py-14 backdrop-blur-2xl">
					<div className="flex items-center gap-6">
						<Logo className="-mt-1 h-10 w-10 [&_path]:fill-white" />
						<span className="font-title text-3xl font-semibold">Vimukthi Weerabahu</span>
					</div>
				</div> */}
				<div className="mt-16 flex items-center gap-6">
					<Logo className="-mt-1 h-10 w-10 [&_path]:fill-white" />
					<span className="font-title text-3xl font-semibold">Vimukthi Weerabahu</span>
				</div>
				{/* <div className="mt-8 flex h-8 w-full items-center justify-between rounded-2xl bg-neutral-950/75 px-10 py-14 backdrop-blur-2xl">
					<div className="flex items-center gap-6">
						<Logo className="-mt-1 h-10 w-10 [&_path]:fill-white" />
						<span className="font-title text-3xl font-semibold">Vimukthi Weerabahu</span>
					</div>
					<div className="mr-3 flex gap-20">
						<Link name="Work" url="#work" />
						<Link name="Skills" url="#skills" />
						<Link name="Contact" url="#contact" />
						<Link name="About" url="#about" />
					</div>
				</div> */}

				{/* <div className="relative h-full w-full">
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
					<div className="font-title font-medium">
						<div className="whitespace-nowrap text-9xl">Full-stack</div>
						<div className="whitespace-nowrap text-9xl">Developer</div>
					</div>
				</div>
			</div> */}
			</main>
		</main>
	);
}
