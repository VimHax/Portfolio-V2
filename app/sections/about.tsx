import Image from 'next/image';
import MeImg from './me.png';

export default function About() {
	return (
		<main id="about" className="mt-16 w-full sm:mt-32">
			<h1 className="text-center font-title text-5xl font-medium sm:text-7xl">About</h1>
			<div className="flex w-full justify-center">
				<div className="mx-4 mt-8 flex w-full max-w-screen-xl flex-col gap-4 sm:mx-8 sm:mt-16 lg:grid lg:grid-cols-2">
					<div className="relative aspect-[9/16] h-full w-full">
						<Image
							className="rounded-2xl object-cover object-center"
							src={MeImg.src}
							alt="A picture of me."
							sizes="100vw"
							fill
						/>
					</div>
					<div className="flex w-full flex-col justify-end rounded-2xl bg-neutral-950 p-5 sm:p-10 lg:h-full xl:p-20">
						<div className="text-white/50 [&_a]:text-white">
							<h1 className="mb-5 font-title text-4xl text-white sm:mb-10 sm:text-7xl">
								Vimukthi Weerabahu
							</h1>
							<p className="mb-5">
								Hey! I'm a self-taught full-stack developer from Sri Lanka, with my educational
								background rooted in{' '}
								<a target="_blank" href="https://www.lyceum.lk/">
									Lyceum International School
								</a>
								.
							</p>
							<p className="mb-5">
								My journey into programming started back in 2018, when I delved into the world of
								software through{' '}
								<a target="_blank" href="https://processing.org/">
									Processing
								</a>
								. While prior attempts at programming left me struggling, the visual allure of
								Processing, coupled with the excellent tutorials by{' '}
								<a target="_blank" href="https://thecodingtrain.com/">
									Daniel Shiffman
								</a>
								, kept me engaged. It was through the{' '}
								<a target="_blank" href="https://p5js.org/">
									P5JS
								</a>{' '}
								library, closely tied to Processing, that I found my gateway into web development.
								This opened up avenues to explore a plethora of technologies. Since then, my
								explorations have led me to dabble in various domains, from developing desktop
								applications to crafting games with custom game engines, and even venturing into the
								realm of programming languages.
							</p>
							<p>It's been an exhilarating journey, and there's no end in sight!</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
