import Image, { StaticImageData } from 'next/image';

import AresImg from './ares.png';
import EeliosImg from './eelios.png';
import Social from '../components/Social';

function Tag({ name, href }: { name: string; href: string }) {
	return (
		<a
			target="_blank"
			href={href}
			className="h-fit w-fit rounded-lg border-[1px] border-solid border-neutral-900 bg-black px-2 pb-1 pt-1.5 text-sm font-bold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-black"
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
	links,
	tags
}: {
	title: string;
	subtitle: string;
	image: { src: StaticImageData; alt: string };
	description: string;
	links: { network: string; url: string }[];
	tags: { name: string; url: string }[];
}) {
	return (
		<div className="topography group grid grid-cols-1 grid-rows-2 rounded-lg 2xl:grid-cols-2 2xl:grid-rows-1">
			<div className="relative w-full mix-blend-screen">
				<Image
					className="object-cover object-center max-2xl:rounded-t-lg 2xl:group-odd:rounded-r-lg 2xl:group-even:rounded-l-lg"
					src={image.src}
					alt={image.alt}
					fill
					quality={100}
				/>
				<div className="absolute left-0 top-0 h-full w-full from-black via-transparent to-transparent max-2xl:rounded-t-lg max-2xl:bg-gradient-to-t 2xl:group-odd:rounded-r-lg 2xl:group-odd:bg-gradient-to-r 2xl:group-even:rounded-l-lg 2xl:group-even:bg-gradient-to-l"></div>
				<div className="absolute left-0 top-0 h-full w-full border-[1px] border-solid border-white/5 max-2xl:rounded-t-lg max-2xl:border-b-0 2xl:group-odd:rounded-r-lg 2xl:group-odd:border-l-0 2xl:group-even:rounded-l-lg 2xl:group-even:border-r-0"></div>
				<div className="absolute left-0 top-0 h-full w-full border-[1px] border-solid border-white mix-blend-overlay max-2xl:rounded-t-lg max-2xl:border-b-0 2xl:group-odd:rounded-r-lg 2xl:group-odd:border-l-0 2xl:group-even:rounded-l-lg 2xl:group-even:border-r-0"></div>
			</div>
			<div className="p-unit flex flex-col items-center justify-center	gap-7 border-[1px] border-solid border-neutral-900 max-2xl:rounded-b-lg max-2xl:border-t-0 2xl:p-32 2xl:group-odd:-order-1 2xl:group-odd:rounded-l-lg 2xl:group-odd:border-r-0 2xl:group-even:rounded-r-lg 2xl:group-even:border-l-0">
				<div className="flex w-full items-end justify-between">
					<div className="flex flex-col gap-2">
						<h1 className="text-7xl font-bold">{title}</h1>
						<h2 className="text-sm font-bold uppercase tracking-widest">{subtitle}</h2>
					</div>
					<div className="flex gap-2">
						{links.map(({ network, url }, idx) => (
							<Social key={idx} network={network} href={url} />
						))}
					</div>
				</div>
				<div className="flex w-full items-center gap-2">
					{tags.map(({ name, url }, idx) => (
						<Tag key={idx} name={name} href={url} />
					))}
					<hr className="flex-grow border-neutral-900" />
				</div>
				<div className="flex flex-col gap-5">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default function Work() {
	return (
		<main className="gap-unit p-unit grid w-full grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1">
			<Project
				title="Ares"
				subtitle="A Programming Language"
				image={{ src: AresImg, alt: 'Sample Ares code' }}
				tags={[
					{ name: 'Rust', url: 'https://www.rust-lang.org/' },
					{ name: 'LLVM', url: 'https://llvm.org/' }
				]}
				links={[{ network: 'github', url: 'https://github.com/VimHax/Ares' }]}
				description="A statically typed compiled programming language inspired by TypeScript and Rust. This
							was my first dive into making a compiled language, with static analysis that can infer
							data types at compile time."
			/>
			<Project
				title="Eelios"
				subtitle="A Programming Language"
				image={{ src: EeliosImg, alt: 'Sample Eelios code' }}
				tags={[
					{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
					{ name: 'Node.js', url: 'https://nodejs.org/' }
				]}
				links={[{ network: 'github', url: 'https://github.com/VimHax/Eelios' }]}
				description="A dynamically typed interpreted programming language. This language was an
				entry for a programming language competition. The language was built on a gimmick:
				'What if statements themselves can be manipulated like array elements?'"
			/>
		</main>
	);
}
