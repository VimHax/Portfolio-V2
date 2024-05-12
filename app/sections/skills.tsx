import { ReactNode } from 'react';
import FlutterLogo from '../components/svg/FlutterLogo';
import CLogo from '../components/svg/CLogo';
import SupabaseLogo from '../components/svg/SupabaseLogo';
import SvelteLogo from '../components/svg/SvelteLogo';
import TailwindCSSLogo from '../components/svg/TailwindCSSLogo';
import TSLogo from '../components/svg/TSLogo';
import VitestLogo from '../components/svg/VitestLogo';
import RustLogo from '../components/svg/RustLogo';
import HTMLLogo from '../components/svg/HTMLLogo';
import CSSLogo from '../components/svg/CSSLogo';
import JavaLogo from '../components/svg/JavaLogo';
import LinuxLogo from '../components/svg/LinuxLogo';
import NodeJSLogo from '../components/svg/NodeJSLogo';
import Shader from '../components/shader/Shader';
import bg from './shader.fs';

function Skill({ name, url, children }: { name: string; url: string; children: ReactNode }) {
	return (
		<a
			href={url}
			target="_blank"
			className="group flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl bg-neutral-950/50 text-neutral-500 backdrop-blur-3xl transition-colors hover:bg-white hover:text-black sm:gap-7"
		>
			<div className="text-white group-hover:text-black [&_div]:h-12 [&_div]:w-12 sm:[&_div]:h-16 sm:[&_div]:w-16 xl:[&_div]:h-20 xl:[&_div]:w-20 [&_path]:fill-white [&_path]:transition-colors group-hover:[&_path]:fill-black [&_svg]:h-12 [&_svg]:w-12 sm:[&_svg]:h-16 sm:[&_svg]:w-16 xl:[&_svg]:h-20 xl:[&_svg]:w-20">
				{children}
			</div>
			<span className="text-sm font-bold uppercase">{name}</span>
		</a>
	);
}

export default function Skills() {
	return (
		<main id="skills" className="mt-16 w-full sm:mt-32">
			<h1 className="text-center font-title text-5xl font-medium sm:text-7xl">Skills</h1>
			<div className="relative mt-4 flex w-full justify-center py-4 sm:mt-16 sm:py-8">
				<Shader
					key={bg}
					className="absolute left-0 top-0 -z-10 h-full w-full"
					source={bg}
					uniforms={{ Light: 1 }}
				/>
				<div className="mx-4 grid w-full max-w-screen-xl grid-cols-2 gap-2 min-[500px]:grid-cols-3 sm:mx-8 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
					<Skill name="TypeScript" url="https://www.typescriptlang.org/">
						<TSLogo />
					</Skill>
					<Skill name="Rust" url="https://www.rust-lang.org/">
						<RustLogo />
					</Skill>
					<Skill name="HTML" url="https://en.wikipedia.org/wiki/HTML">
						<HTMLLogo />
					</Skill>
					<Skill name="CSS" url="https://en.wikipedia.org/wiki/CSS">
						<CSSLogo />
					</Skill>
					<Skill name="C" url="https://en.wikipedia.org/wiki/C_(programming_language)">
						<CLogo />
					</Skill>
					<Skill name="Java" url="https://www.java.com/">
						<JavaLogo />
					</Skill>
					<Skill name="GLSL" url="https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language">
						<div className="flex items-center justify-center text-3xl font-bold transition-colors">
							GLSL
						</div>
					</Skill>
					<Skill name="SvelteKit" url="https://kit.svelte.dev/">
						<SvelteLogo />
					</Skill>
					<Skill name="TailwindCSS" url="https://tailwindcss.com/">
						<TailwindCSSLogo />
					</Skill>
					<Skill name="Supabase" url="https://supabase.com/">
						<SupabaseLogo />
					</Skill>
					<Skill name="Linux" url="https://en.wikipedia.org/wiki/Linux">
						<LinuxLogo />
					</Skill>
					<Skill name="Vitest" url="https://vitest.dev/">
						<VitestLogo />
					</Skill>
					<Skill name="Node.js" url="https://nodejs.org/">
						<NodeJSLogo />
					</Skill>
					<Skill name="Flutter" url="https://flutter.dev/">
						<FlutterLogo />
					</Skill>
				</div>
			</div>
		</main>
	);
}
