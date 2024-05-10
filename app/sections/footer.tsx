import Logo from '@/app/components/svg/Logo';
import Social from '../components/Social';

export default function Footer() {
	return (
		<main className="mt-32 flex w-full max-w-screen-xl items-center justify-between py-unit">
			<div className="flex items-center gap-8">
				<Logo className="h-8 w-8 [&_path]:fill-white" />
				<div className="h-8 w-[1px] bg-white/50"></div>
				<span className="text-2xl font-bold uppercase tracking-widest">Vimukthi Weerabahu</span>
			</div>
			<div className="text-md flex gap-2">
				<a
					href="mailto: me@vimhax.com"
					className="rounded-2xl bg-neutral-950 px-5 py-3 transition-colors hover:bg-white hover:text-black"
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
