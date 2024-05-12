import Logo from '@/app/components/svg/Logo';

import bg from './shader.fs';
import Shader from '../components/shader/Shader';

function Link({ name, url }: { name: string; url: string }) {
	return (
		<a
			href={url}
			className="flex h-full items-center justify-center px-6 font-semibold transition hover:bg-white hover:text-black"
		>
			{name}
		</a>
	);
}

export default function Landing() {
	return (
		<main
			id="home"
			className="relative flex h-[800px] max-h-screen w-full items-center justify-center"
		>
			<h1 className="whitespace-nowrap font-title text-9xl font-semibold leading-[0.75]">
				Every detail <br /> accounted for.
			</h1>
			<Shader
				key={bg}
				id="front_image_bg"
				className="absolute left-0 top-0 -z-10 h-full w-full"
				source={bg}
				uniforms={{ Light: 1 }}
			/>
			<div className="absolute left-0 top-0 mt-8 flex w-full justify-center">
				<div className="flex h-14 w-full max-w-screen-xl items-center justify-between">
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
			</div>
		</main>
	);
}
