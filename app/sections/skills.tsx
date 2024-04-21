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

function Skill({ name, url, children }: { name: string; url: string; children: ReactNode }) {
	return (
		<a
			href={url}
			target="_blank"
			className="group relative flex aspect-square flex-col items-center justify-center gap-7 rounded-lg border-[1px] border-solid border-neutral-900 transition hover:border-white hover:bg-white hover:text-black"
		>
			<div className="[&_div]:h-20 [&_div]:w-20 [&_path]:transition group-hover:[&_path]:fill-black [&_svg]:h-20 [&_svg]:w-20">
				{children}
			</div>
			<span className="text-md font-bold uppercase">{name}</span>
		</a>
	);
}

export default function Skills() {
	return (
		<main id="skills" className="topography grid w-full grid-cols-7 gap-unit/2 p-unit">
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
				<div className="flex items-center justify-center text-3xl font-bold">GLSL</div>
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
		</main>
	);
}
