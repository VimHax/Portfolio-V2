import Image, { StaticImageData } from 'next/image';

import SonarImg from './sonar.png';
import AresImg from './ares.png';
import EeliosImg from './eelios.png';
import bg from './shader.fs';
import Shader from '../components/shader/Shader';
import { FC } from 'react';

function Tag({ name, href }: { name: string; href: string }) {
	return (
		<a
			target="_blank"
			href={href}
			className="h-fit w-fit rounded-2xl px-2 pb-1 pt-1.5 text-sm font-bold uppercase text-white/50 transition hover:border-white hover:bg-white hover:text-black"
		>
			#{name}
		</a>
	);
}

function Project({
	title,
	subtitle,
	image: Image,
	description,
	url: url,
	tags
}: {
	title: string;
	subtitle: string;
	url: string;
	image: FC;
	description: string;
	tags: { name: string; url: string }[];
}) {
	return (
		<div className="group relative flex flex-col overflow-clip rounded-2xl transition-colors">
			<Shader
				id={`work_${title}`}
				className="absolute left-0 top-0 -z-10 h-full w-full rounded-2xl"
				source={bg}
				scale={1.0}
				uniforms={{ Light: 1 }}
			/>
			<div className="grid grid-cols-2">
				<div className="flex flex-grow flex-col items-start justify-between bg-neutral-950/50 p-20 backdrop-blur-3xl">
					<div className="flex flex-wrap gap-2">
						{tags.map(({ name, url }, idx) => (
							<Tag key={idx} name={name} href={url} />
						))}
					</div>
					<div>
						<h1 className="mt-10 font-title text-9xl font-medium">{title}</h1>
						<h2 className="font-title text-4xl font-medium">{subtitle}</h2>
						<p className="my-10 max-w-prose text-white/50">{description}</p>
					</div>
					<a
						target="_blank"
						href={url}
						className="rounded-2xl bg-white/10 px-5 py-3 transition-colors hover:bg-white hover:text-black"
					>
						Visit GitHub Repository
					</a>
				</div>
				<div className="relative h-full rounded-2xl p-10 pr-0 group-even:-order-1">
					<Image />
					{/* <Shader
						id={`work_${title}`}
						className="absolute left-0 top-0 h-full w-full group-odd:rounded-r-2xl group-even:rounded-l-2xl"
						source={bg}
						scale={1.0}
						uniforms={{ SocialType: -1 }}
					/> */}
					{/* <Image
						className="object-cover object-left group-odd:rounded-r-2xl group-even:rounded-l-2xl"
						src={image.src}
						alt={image.alt}
						fill
						quality={100}
					/> */}
				</div>
			</div>
		</div>
	);
	// return (
	// 	<div className="group grid grid-cols-1 grid-rows-2 rounded-lg 2xl:grid-cols-2 2xl:grid-rows-1">
	// 		{/* <div className="relative w-full mix-blend-screen">
	// 			<Image
	// 				className="object-cover object-center max-2xl:rounded-t-lg 2xl:group-odd:rounded-r-lg 2xl:group-even:rounded-l-lg"
	// 				src={image.src}
	// 				alt={image.alt}
	// 				fill
	// 				quality={100}
	// 			/>
	// 			<div className="absolute left-0 top-0 h-full w-full from-black via-transparent to-transparent max-2xl:rounded-t-lg max-2xl:bg-gradient-to-t 2xl:group-odd:rounded-r-lg 2xl:group-odd:bg-gradient-to-r 2xl:group-even:rounded-l-lg 2xl:group-even:bg-gradient-to-l"></div>
	// 			<div className="absolute left-0 top-0 h-full w-full border-[1px] border-solid border-white/5 max-2xl:rounded-t-lg max-2xl:border-b-0 2xl:group-odd:rounded-r-lg 2xl:group-odd:border-l-0 2xl:group-even:rounded-l-lg 2xl:group-even:border-r-0"></div>
	// 			<div className="absolute left-0 top-0 h-full w-full border-[1px] border-solid border-white mix-blend-overlay max-2xl:rounded-t-lg max-2xl:border-b-0 2xl:group-odd:rounded-r-lg 2xl:group-odd:border-l-0 2xl:group-even:rounded-l-lg 2xl:group-even:border-r-0"></div>
	// 		</div> */}
	// 		<div className="flex flex-col items-center justify-center gap-7	border-[1px] border-solid border-neutral-900 p-unit max-2xl:rounded-b-lg max-2xl:border-t-0 2xl:p-32 2xl:group-odd:-order-1 2xl:group-odd:rounded-l-lg 2xl:group-odd:border-r-0 2xl:group-even:rounded-r-lg 2xl:group-even:border-l-0">
	// 			<div className="flex w-full items-end justify-between">
	// 				<div className="flex flex-col gap-2">
	// 					<h1 className="text-7xl font-bold">{title}</h1>
	// 					<h2 className="text-sm font-bold uppercase tracking-widest">{subtitle}</h2>
	// 				</div>
	// 				<div className="flex gap-2">
	// 					{links.map(({ network, url }, idx) => (
	// 						<Social key={idx} network={network} href={url} />
	// 					))}
	// 				</div>
	// 			</div>
	// 			<div className="flex w-full flex-wrap items-center gap-2">
	// 				{tags.map(({ name, url }, idx) => (
	// 					<Tag key={idx} name={name} href={url} />
	// 				))}
	// 				<hr className="flex-grow border-neutral-900" />
	// 			</div>
	// 			<div className="flex flex-col gap-5">
	// 				<p>{description}</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
}

export default function Work() {
	return (
		<main id="work" className="mt-32 max-w-screen-xl">
			{/* <h1 className="font-title mt-32 text-7xl font-medium">Some of my work;</h1> */}
			<h1 className="text-center font-title text-7xl font-medium">Work</h1>
			<div className="mt-16 flex w-full flex-col gap-10">
				<Project
					title="Ares"
					subtitle="A Programming Language"
					url="https://github.com/VimHax/Ares"
					image={() => {
						return (
							<div className="relative h-full w-full">
								<Image
									className="object-cover object-left p-10 pr-0 mix-blend-luminosity"
									src={AresImg.src}
									alt={'a'}
									fill
									quality={100}
								/>
							</div>
						);
					}}
					tags={[
						{ name: 'Rust', url: 'https://www.rust-lang.org/' },
						{ name: 'LLVM', url: 'https://llvm.org/' }
					]}
					description="A statically typed compiled programming language, inspired by Rust and TypeScript, with advanced static analysis enabling compile-time type inference."
				/>
				<Project
					title="Sonar"
					subtitle="A Desktop Application"
					url="https://github.com/VimHax/Sonar"
					image={() => {
						return (
							<div className="relative h-full w-full">
								<Image
									className="object-cover object-left mix-blend-luminosity"
									style={{ maskImage: 'linear-gradient(90deg, #000 75%, transparent)' }}
									src={SonarImg.src}
									alt={'a'}
									fill
									quality={100}
								/>
							</div>
						);
					}}
					tags={[
						{ name: 'Flutter', url: 'https://flutter.dev/' },
						{ name: 'Supabase', url: 'https://supabase.com/' },
						{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
						{ name: 'HTML/CSS', url: 'https://en.wikipedia.org/wiki/HTML' }
					]}
					description="Enhance your Discord Server experience by adding custom sound effects that can be played with just a click of a button whenever you like."
				/>
				<Project
					title="Eelios"
					subtitle="A Programming Language"
					url="https://github.com/VimHax/Eelios"
					image={() => {
						return <div>A</div>;
					}}
					tags={[
						{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
						{ name: 'Node.js', url: 'https://nodejs.org/' }
					]}
					description="A dynamically typed interpreted programming language, created as an entry for a competition, distinguished by its concept: treating statements as manipulable array elements."
				/>
			</div>
		</main>
	);
}
