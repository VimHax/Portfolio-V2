import Logo from '@/app/components/svg/Logo';
import Social from '../components/Social';

export default function Footer() {
	return (
		<div className="flex w-full justify-center">
			<main className="mx-4 mb-4 mt-32 flex w-full max-w-screen-xl justify-between gap-10 sm:mx-8 sm:mb-8 sm:flex-row 2xl:mb-16">
				<a href="#home" className="flex items-center gap-6">
					<Logo className="-mt-1 ml-4 h-14 w-14 sm:ml-0 sm:h-8 sm:w-8 lg:h-10 lg:w-10 [&_path]:fill-white" />
					<span className="hidden font-title text-xl font-semibold sm:text-2xl md:block lg:text-3xl">
						Vimukthi Weerabahu
					</span>
				</a>
				<div className="grid justify-center gap-2 max-sm:grid-cols-3 max-sm:grid-rows-2 sm:flex">
					<a
						href="mailto: me@vimhax.com"
						className="rounded-2xl bg-neutral-950 px-5 py-3 transition-colors hover:bg-white hover:text-black max-sm:col-span-3"
					>
						me@vimhax.com
					</a>
					<Social network="github" href="https://github.com/VimHax" />
					<Social network="linkedin" href="https://www.linkedin.com/in/vimukthi-weerabahu/" />
					<Social network="twitter" href="https://twitter.com/VimHax" />
				</div>
			</main>
		</div>
	);
}
