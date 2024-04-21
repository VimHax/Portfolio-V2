import Logo from '@/app/components/svg/Logo';
import Social from '../components/Social';

export default function Footer() {
	return (
		<main className="topography flex w-full items-center justify-between p-unit">
			<div className="flex items-center gap-8">
				<Logo className="h-8 w-8" />
				<div className="h-8 w-[1px] bg-white/50"></div>
				<span className="text-2xl font-bold uppercase tracking-widest">Vimukthi Weerabahu</span>
			</div>
			<div className="text-md flex gap-2">
				<a
					href="mailto: me@vimhax.com"
					className="rounded-lg border-[1px] border-solid border-neutral-900 bg-black px-5 py-3 text-lg transition hover:border-white hover:bg-white hover:text-black"
				>
					me@vimhax.com
				</a>
				<Social network="github" href="https://github.com/VimHax" />
				<Social network="linkedin" href="https://www.linkedin.com/in/vimukthi-weerabahu/" />
				<Social network="instagram" href="https://www.instagram.com/vimhax/" />
				<Social network="twitter" href="https://twitter.com/VimHax" />
			</div>
		</main>
	);
}
