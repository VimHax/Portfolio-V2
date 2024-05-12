import Logo from '@/app/components/svg/Logo';

import bg from './shader.fs';
import Shader from '../components/shader/Shader';
import MenuIcon from '../components/svg/MenuIcon';

function Link({ name, url }: { name: string; url: string }) {
	return (
		<a
			href={url}
			className="hidden h-full items-center justify-center px-6 font-semibold transition hover:bg-white hover:text-black lg:flex"
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
			<h1 className="whitespace-nowrap font-title text-5xl font-semibold leading-[0.75] sm:text-7xl sm:leading-[0.75] md:text-8xl md:leading-[0.75] lg:text-9xl lg:leading-[0.75]">
				Every detail <br /> accounted for.
			</h1>
			<Shader
				key={bg}
				className="absolute left-0 top-0 -z-10 h-full w-full"
				source={bg}
				uniforms={{ Light: 1 }}
			/>
			<div className="absolute left-0 top-0 flex w-full justify-center">
				<div className="mx-4 mt-4 flex h-14 w-full max-w-screen-xl items-center justify-between sm:mx-8 sm:mt-8">
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
						<button className="group flex aspect-square h-full items-center justify-center transition-colors hover:bg-white hover:text-white lg:hidden">
							<MenuIcon className="h-7 w-7 [&_path]:fill-white [&_path]:transition-colors group-hover:[&_path]:fill-black" />
						</button>
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
