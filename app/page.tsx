import Image from 'next/image';

import HeroImage from './hero10.png';
import Logo from './components/Logo';

export default function Home() {
	return (
		<main className="topography relative h-screen w-full p-12 pt-32">
			<div className="relative h-full w-full">
				<Image
					className="rounded-lg object-cover"
					style={{ objectPosition: 'calc(1/2*100%) center' }}
					src={HeroImage}
					fill
					sizes="100vw"
					quality={100}
					alt="Image of me."
				/>
				<div className="absolute left-0 top-0 h-full w-full rounded-lg border-[1px] border-solid border-white/5"></div>
				<div className="absolute left-0 top-0 h-full w-full rounded-lg border-[1px] border-solid border-white mix-blend-overlay"></div>
				<div className="absolute left-0 top-0 grid h-full w-full grid-cols-2 grid-rows-1">
					{/* <div></div> */}
					<div></div>
					{/* <div className="border-2 border-solid border-white"></div> */}
					<div className="relative">
						<div className="absolute -left-0 top-0 flex h-full w-full items-center justify-center">
							<h1 className="text-8xl font-bold uppercase">
								Vimukthi
								<br />
								Weerabahu
							</h1>
							{/* <h1 className="rounded-lg bg-white p-10 text-8xl font-bold uppercase tracking-widest text-black">
							Vimukthi <br /> Weerabahu
						</h1> */}
						</div>
					</div>
				</div>
			</div>
			{/* <img
				src={HeroImage.src}
				alt=""
				className="absolute left-0 top-0 -z-10 h-full w-full object-cover saturate-100"
			/> */}

			<div className="absolute left-12 top-12 flex w-[calc(100%-2*48px-12px)] items-center justify-between">
				<Logo className="h-8 w-8" />
				<div className="text-md flex gap-20 font-bold uppercase tracking-widest">
					<span>Work</span>
					<span>Skills</span>
					<span>Contact</span>
					<span>About</span>
				</div>
			</div>
		</main>
	);
}
