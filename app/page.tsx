import Image from 'next/image';

import MeImage from './me3.png';
import BgImage from './bg.png';
import Bg2Image from './bg2.png';

export default function Home() {
	return (
		<main className="h-screen w-full p-6">
			<div className="flex h-full w-full flex-col gap-6">
				{/* <div className="flex h-20 w-full rounded-md border-[1px] border-solid border-neutral-900 bg-neutral-950">
					<div className="h-full w-20"></div>
					<div className="h-full w-[1px] bg-neutral-900"></div>
					<div className="h-full w-full"></div>
				</div> */}
				<div className="grid flex-grow grid-cols-4 grid-rows-1 gap-6">
					<div className="col-span-2 grid h-full w-full grid-cols-1 grid-rows-2 gap-6">
						<div className="relative flex w-full items-center justify-center gap-40 rounded-md bg-gradient-radial from-black to-neutral-950">
							{/* <Image className="rounded-md object-cover" src={BgImage} fill alt="Image of me." /> */}
							<h1 className="bold z-10 text-5xl font-bold uppercase tracking-widest">
								Vimukthi Weerabahu
							</h1>
							<h1 className="bold pointer-events-none absolute whitespace-nowrap text-[300px] font-bold uppercase tracking-widest mix-blend-overlay">
								VimHax
							</h1>
							<div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md border-[1px] border-solid border-white/5"></div>
							<div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md border-[1px] border-solid border-white mix-blend-overlay"></div>
						</div>
						<div className="relative flex w-full items-center justify-center gap-40 rounded-md bg-gradient-radial from-black to-neutral-950">
							{/* <Image
								className="-scale-x-100 rounded-md object-cover"
								src={BgImage}
								fill
								alt="Image of me."
							/> */}
							{/* <Image
								className="-scale-x-100 rounded-md object-cover"
								src={Bg2Image}
								fill
								alt="Image of me."
							/> */}
							<h1 className="bold z-10 rounded-md bg-white p-5 text-5xl font-bold uppercase tracking-widest text-black">
								Full-Stack Developer
							</h1>
							{/* <h1 className="bold pointer-events-none absolute whitespace-nowrap text-[300px] font-bold uppercase tracking-widest mix-blend-overlay">
								Developer
							</h1> */}
							<div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md border-[1px] border-solid border-white/5"></div>
							<div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md border-[1px] border-solid border-white mix-blend-overlay"></div>
						</div>
					</div>
					<div className="relative col-span-2 h-full w-full object-contain">
						<Image className="rounded-md object-cover" src={MeImage} fill alt="Image of me." />
						<div className="absolute left-0 top-0 h-full w-full rounded-md border-[1px] border-solid border-white/5"></div>
						<div className="absolute left-0 top-0 h-full w-full rounded-md border-[1px] border-solid border-white mix-blend-overlay"></div>
					</div>
				</div>
			</div>
		</main>
	);
}
