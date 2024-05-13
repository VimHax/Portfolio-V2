import Image from 'next/image';

import SonarImg from './sonar.png';
import AresImg from './ares.png';
import EeliosImg from './eelios.png';
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
			<Shader className="absolute left-0 top-0 -z-10 h-full w-full rounded-2xl" />
			<div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1">
				<div className="flex flex-grow flex-col items-start justify-between bg-neutral-950/50 p-5 backdrop-blur-3xl sm:p-10 xl:p-20">
					<div className="flex flex-wrap gap-1 sm:flex-nowrap xl:gap-2">
						{tags.map(({ name, url }, idx) => (
							<Tag key={idx} name={name} href={url} />
						))}
					</div>
					<div>
						<h1 className="mt-5 font-title text-7xl font-medium sm:mt-10 sm:text-8xl xl:text-9xl">
							{title}
						</h1>
						<h2 className="font-title text-lg font-medium sm:text-3xl xl:text-4xl">{subtitle}</h2>
						<p className="my-5 max-w-prose text-white/50 sm:my-10">{description}</p>
					</div>
					<a
						target="_blank"
						href={url}
						className="rounded-2xl bg-white/10 px-5 py-3 transition-colors hover:bg-white hover:text-black"
					>
						Visit GitHub Repository
					</a>
				</div>
				<div className="-order-1 h-full rounded-2xl p-5 pr-0 sm:p-10 sm:pr-0 lg:group-odd:order-1">
					<Image />
				</div>
			</div>
		</div>
	);
}

export default function Work() {
	return (
		<main id="work" className="mx-4 mt-16 max-w-screen-xl sm:mx-8 sm:mt-32">
			<h1 className="text-center font-title text-5xl font-medium sm:text-7xl">Work</h1>
			<div className="mt-4 flex w-full flex-col gap-4 sm:mt-16 sm:gap-8">
				<Project
					title="Sonar"
					subtitle="A Desktop Application"
					url="https://github.com/VimHax/Sonar"
					image={() => (
						<div className="flex h-full items-center">
							<div className="relative h-full min-h-96 w-full md:min-h-full md:max-lg:aspect-video md:max-lg:h-auto md:max-lg:w-[calc(100%-2.5rem)]">
								<Image
									className="conditional-fade rounded-md object-cover object-left mix-blend-luminosity backdrop-blur-3xl"
									src={SonarImg.src}
									alt="A screenshot of the Sonar desktop application."
									sizes="100vw"
									fill
								/>
							</div>
						</div>
					)}
					tags={[
						{ name: 'Flutter', url: 'https://flutter.dev/' },
						{ name: 'Supabase', url: 'https://supabase.com/' },
						{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
						{ name: 'HTML/CSS', url: 'https://en.wikipedia.org/wiki/HTML' }
					]}
					description="Enhance your Discord Server experience by adding custom sound effects that can be played with just a click of a button whenever you like."
				/>
				<Project
					title="Ares"
					subtitle="A Programming Language"
					url="https://github.com/VimHax/Ares"
					image={() => (
						<div className="relative h-full min-h-96 w-full">
							<Image
								className="object-cover object-left mix-blend-luminosity"
								style={{ maskImage: 'linear-gradient(90deg, #000 50%, transparent)' }}
								src={AresImg.src}
								alt="Sample Ares code."
								sizes="200vw"
								fill
							/>
						</div>
					)}
					tags={[
						{ name: 'Rust', url: 'https://www.rust-lang.org/' },
						{ name: 'LLVM', url: 'https://llvm.org/' }
					]}
					description="A statically typed compiled programming language, inspired by Rust and TypeScript, with advanced static analysis enabling compile-time type inference."
				/>

				<Project
					title="Eelios"
					subtitle="A Programming Language"
					url="https://github.com/VimHax/Eelios"
					image={() => (
						<div className="relative h-full min-h-96 w-full">
							<Image
								className="conditional-fade object-cover object-left mix-blend-luminosity"
								style={{ maskImage: 'linear-gradient(90deg, #000 50%, transparent)' }}
								src={EeliosImg.src}
								alt="Sample Eelios code."
								sizes="200vw"
								fill
							/>
						</div>
					)}
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
