import Image from 'next/image';

import HeroImage from './hero.png';
import BgImage from './bg.png';
import Logo from '@/app/components/svg/Logo';

import bg from './shader.fs';
import Shader from '../components/shader/Shader';

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
			className="flex h-full items-center justify-center px-6 font-semibold text-neutral-500 transition hover:bg-white hover:text-black"
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
		<main id="home" className="relative flex h-[800px] max-h-screen w-full justify-center">
			{/* <Image
				className="-z-10 object-cover object-center"
				src={BgImage}
				fill
				sizes="100vw"
				quality={100}
				alt="Image of me."
			/> */}
			<Shader
				id="front_image_bg"
				className="absolute left-0 top-0 -z-10 h-full w-full"
				source={bg}
				scale={1.0}
				uniforms={{ Light: 1 }}
			/>
			<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
				<div>
					<h1 className="mb-8 whitespace-nowrap font-title text-9xl font-semibold leading-[0.75]">
						Every detail <br /> accounted for.
					</h1>
					{/* <p className="max-w-[800px] text-2xl font-semibold text-white/50">
						Hey, I'm a <span className="text-white">full stack developer</span> from Sri Lanka.
						Being able to create anything from your dreams is quite the deal isn't it?
					</p> */}
				</div>
				{/* <div className="whitespace-nowrap font-title text-9xl font-semibold leading-[0.75] text-white/50">
					Every detail <br /> <span className="text-white">accounted</span> for.
				</div> */}
				{/* <div className="whitespace-nowrap font-title text-9xl font-semibold leading-[0.9] text-white/50">
					<span className="text-white">
						Full-Stack <br />
						Developer.
					</span>
				</div> */}
			</div>
			<main className="flex h-full w-full max-w-screen-xl flex-col items-center gap-unit">
				{/* <div className="mt-8 flex h-8 w-full items-center justify-center rounded-2xl bg-neutral-950/75 px-10 py-14 backdrop-blur-2xl">
					<div className="flex items-center gap-6">
						<Logo className="-mt-1 h-10 w-10 [&_path]:fill-white" />
						<span className="font-title text-3xl font-semibold">Vimukthi Weerabahu</span>
					</div>
				</div> */}
				{/* <div className="mt-16 flex items-center gap-6">
					<Logo className="-mt-1 h-10 w-10 [&_path]:fill-white" />
					<span className="font-title text-3xl font-semibold">Vimukthi Weerabahu</span>
				</div> */}
				<div className="mt-8 flex h-14 w-full items-center justify-between">
					<a
						href="#home"
						className="group flex h-full items-center justify-center gap-4 rounded-2xl bg-neutral-950/50 px-4 backdrop-blur-3xl hover:bg-white hover:text-black"
					>
						<Logo className="h-6 w-6 [&_path]:fill-white group-hover:[&_path]:fill-black" />
						<span className="-mb-1 font-title text-xl font-semibold">Vimukthi Weerabahu</span>
					</a>
					<span className="font-bold">A Full-Stack Developer.</span>
					<div className="mr-3 flex h-full items-center overflow-clip rounded-2xl bg-neutral-950/50 backdrop-blur-3xl">
						<Link name="Work" url="#work" />
						<Link name="Skills" url="#skills" />
						<Link name="Contact" url="#contact" />
						<Link name="About" url="#about" />
					</div>
				</div>

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
