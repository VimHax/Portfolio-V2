import Image, { StaticImageData } from 'next/image';

import SonarImg from './sonar.png';
import AresImg from './ares.png';
import EeliosImg from './eelios.png';
import Social from '../components/Social';

function Tag({ name, href }: { name: string; href: string }) {
	return (
		<a
			target="_blank"
			href={href}
			className="h-fit w-fit rounded-2xl px-2 pb-1 pt-1.5 text-sm font-bold uppercase tracking-widest text-neutral-500 transition hover:border-white hover:bg-white hover:text-black"
		>
			#{name}
		</a>
	);
}

function Project({
	title,
	subtitle,
	image,
	description,
	url: url,
	tags
}: {
	title: string;
	subtitle: string;
	url: string;
	image: { src: StaticImageData; alt: string };
	description: string;
	tags: { name: string; url: string }[];
}) {
	return (
		<div className="group flex flex-col rounded-2xl border-1 border-solid border-neutral-900 bg-neutral-950 transition-colors">
			<div className="grid grid-cols-2">
				<div className="flex flex-grow flex-col items-start justify-between p-20">
					<div className="flex flex-wrap gap-2">
						{tags.map(({ name, url }, idx) => (
							<Tag key={idx} name={name} href={url} />
						))}
					</div>
					<div>
						<h1 className="mt-10 font-title text-9xl font-medium">{title}</h1>
						<h2 className="font-title text-4xl font-medium">{subtitle}</h2>
						<p className="my-10 max-w-prose text-neutral-500">{description}</p>
					</div>
					{/* <div>
						<h2 className="mb-10 font-bold uppercase tracking-widest text-neutral-500">
							{subtitle}
						</h2>
						<h1 className="font-title mb-2 text-9xl font-medium">{title}</h1>
						<p className="mb-10 max-w-prose">{description}</p>
					</div> */}
					<a
						target="_blank"
						href={url}
						className="rounded-2xl bg-neutral-900 px-5 py-3 transition-colors hover:bg-white hover:text-black"
					>
						Visit GitHub Repository
					</a>
					{/* <button className="rounded-2xl bg-neutral-800 px-5 py-3 text-sm font-bold uppercase tracking-widest">
						GitHub
					</button> */}
				</div>
				<div className="relative h-full rounded-2xl bg-neutral-950 group-even:-order-1">
					<Image
						className="object-cover object-left group-odd:rounded-r-2xl group-even:rounded-l-2xl"
						src={image.src}
						alt={image.alt}
						fill
						quality={100}
					/>
				</div>
			</div>
			{/* <div className="flex flex-grow flex-col items-start justify-between p-10">
				<div>
					<h2 className="mb-10 font-bold uppercase tracking-widest text-neutral-500">{subtitle}</h2>
					<h1 className="font-title mb-2 text-9xl font-medium">{title}</h1>
					<p className="mb-10 max-w-prose">{description}</p>
				</div>
				<button className="rounded-2xl bg-neutral-800 px-5 py-3">GitHub</button>
			</div> */}
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
			<div className="mt-16 grid w-full grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-1">
				<Project
					title="Sonar"
					subtitle="A Desktop Application"
					url="https://github.com/VimHax/Sonar"
					image={{ src: SonarImg, alt: 'Screenshot of Sonar' }}
					tags={[
						{ name: 'Flutter', url: 'https://flutter.dev/' },
						{ name: 'Supabase', url: 'https://supabase.com/' },
						{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
						{ name: 'HTML/CSS', url: 'https://en.wikipedia.org/wiki/HTML' }
					]}
					// description="Upload sound effects to your heart's content and play them at will at the press of a button on your Discord Server."
					description="Enhance your Discord Server experience by adding custom sound effects that can be played with just a click of a button whenever you like."
				/>
				<Project
					title="Ares"
					subtitle="A Programming Language"
					url="https://github.com/VimHax/Ares"
					image={{ src: AresImg, alt: 'Sample Ares code' }}
					tags={[
						{ name: 'Rust', url: 'https://www.rust-lang.org/' },
						{ name: 'LLVM', url: 'https://llvm.org/' }
					]}
					description="A statically typed compiled programming language inspired by TypeScript and Rust. This
							was my first dive into making a compiled language, with static analysis that can infer
							data types at compile time."
				/>
				<Project
					title="Eelios"
					subtitle="A Programming Language"
					url="https://github.com/VimHax/Eelios"
					image={{ src: EeliosImg, alt: 'Sample Eelios code' }}
					tags={[
						{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
						{ name: 'Node.js', url: 'https://nodejs.org/' }
					]}
					description="A dynamically typed interpreted programming language. This language was an
				entry for a programming language competition. The language was built on a gimmick:
				'What if statements themselves can be manipulated like array elements?'"
				/>
			</div>
		</main>
	);
}
