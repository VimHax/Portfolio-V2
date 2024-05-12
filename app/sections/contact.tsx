function Link({ name, user, url }: { name: string; user: string; url: string }) {
	return (
		<a
			target={url.startsWith('https') ? '_blank' : undefined}
			href={url}
			className="group flex w-full flex-col justify-end rounded-2xl bg-neutral-950 p-5 transition-colors hover:bg-white hover:text-black sm:p-10"
		>
			<div>
				<h1 className="font-title text-3xl font-medium sm:text-5xl">{name}</h1>
				<h2 className="text-base text-white/50 transition group-hover:text-black sm:text-xl">
					{user}
				</h2>
			</div>
		</a>
	);
}

export default function Contact() {
	return (
		<main id="contact" className="mt-16 w-full sm:mt-32">
			<h1 className="text-center font-title text-5xl font-medium sm:text-7xl">Contact</h1>
			<div className="flex w-full justify-center">
				<div className="mx-4 mt-8 grid max-w-screen-xl grid-cols-1 gap-2 max-sm:w-full min-[400px]:grid-cols-2 sm:mx-8 sm:mt-16 sm:gap-4 xl:w-full xl:grid-cols-4">
					<Link name="Email" user="me@vimhax.com" url="mailto: me@vimhax.com" />
					<Link name="GitHub" user="VimHax" url="https://github.com/VimHax" />
					<Link
						name="LinkedIn"
						user="Vimukthi Weerabahu"
						url="https://www.linkedin.com/in/vimukthi-weerabahu/"
					/>
					<Link name="Twitter" user="@VimHax" url="https://twitter.com/VimHax" />
				</div>
			</div>
		</main>
	);
}
