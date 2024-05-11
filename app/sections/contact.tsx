import { ReactNode } from 'react';
import Social from '../components/Social';

function Skill({ name, url, children }: { name: string; url: string; children: ReactNode }) {
	return (
		<a
			href={url}
			target="_blank"
			className="group flex aspect-square flex-col items-center justify-center gap-7 rounded-2xl bg-neutral-950/50 text-neutral-500 backdrop-blur-3xl transition-colors hover:bg-white hover:text-black"
		>
			<div className="text-white group-hover:text-black [&_div]:h-20 [&_div]:w-20 [&_path]:fill-white [&_path]:transition-colors group-hover:[&_path]:fill-black [&_svg]:h-20 [&_svg]:w-20">
				{children}
			</div>
			<span className="text-sm font-bold uppercase">{name}</span>
		</a>
	);
}

export default function Contact() {
	return (
		<main id="contact" className="mt-32 max-w-screen-xl">
			<h1 className="text-center font-title text-7xl font-medium">Contact</h1>
			<div className="mt-16 flex items-stretch justify-between gap-5">
				<div className="flex flex-col gap-2 rounded-2xl bg-neutral-950 p-16">
					<h1 className="mb-8 font-title text-5xl font-medium">Let's talk</h1>
					<input
						className="rounded-2xl bg-white/5 px-5 py-3 placeholder:text-neutral-600"
						type="text"
						name="Name"
						placeholder="Name*"
					/>
					<input
						className="rounded-2xl bg-white/5 px-5 py-3 placeholder:text-neutral-600"
						type="text"
						name="Email"
						placeholder="Email*"
					/>
					<textarea
						className="resize-none rounded-2xl bg-white/5 px-5 py-3 placeholder:text-neutral-600"
						name="Message"
						placeholder="Message*"
					></textarea>
					<button className="mt-8 rounded-2xl bg-white/5 px-5 py-3 transition-colors hover:bg-white hover:text-black">
						Send Message
					</button>
				</div>
				<div className="rounded-2xl bg-neutral-950 p-16">
					<h1 className="mb-10 font-title text-5xl font-medium">Socials</h1>
					{/* <a
							href="mailto: me@vimhax.com"
							className="flex justify-center rounded-2xl bg-white/5 px-5 py-3 transition-colors hover:bg-white hover:text-black"
						>
							me@vimhax.com
						</a> */}
					<div className="flex flex-col gap-2">
						<Social large network="github" href="https://github.com/VimHax" />
						<Social
							large
							network="linkedin"
							href="https://www.linkedin.com/in/vimukthi-weerabahu/"
						/>
						<Social large network="instagram" href="https://www.instagram.com/vimhax/" />
						<Social large network="twitter" href="https://twitter.com/VimHax" />
					</div>
				</div>
			</div>
		</main>
	);
}
