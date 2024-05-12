function Link({ name, user, url }: { name: string; user: string; url: string }) {
	return (
		<a
			target={url.startsWith('https') ? '_blank' : undefined}
			href={url}
			className="group flex w-full flex-col justify-end rounded-2xl bg-neutral-950 p-10 transition-colors hover:bg-white hover:text-black"
		>
			<div>
				<h1 className="font-title text-5xl font-medium">{name}</h1>
				<h2 className="text-xl text-white/50 transition group-hover:text-black">{user}</h2>
			</div>
		</a>
	);
}

export default function Contact() {
	return (
		<main id="contact" className="mt-32 w-full">
			<h1 className="text-center font-title text-7xl font-medium">Contact</h1>
			<div className="flex w-full justify-center">
				<div className="mx-8 mt-16 grid w-full max-w-screen-xl grid-cols-4 gap-4">
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
