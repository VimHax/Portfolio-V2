import Logo from '@/app/components/svg/Logo';
import Social from '../components/Social';

export default function Footer() {
	return (
		<main className="mb-16 mt-32 flex w-full max-w-screen-xl items-center justify-between">
			<div className="flex items-center gap-6">
				<Logo className="-mt-1 h-10 w-10 [&_path]:fill-white" />
				<span className="font-title text-3xl font-semibold">Vimukthi Weerabahu</span>
			</div>
			<div className="flex gap-2">
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
