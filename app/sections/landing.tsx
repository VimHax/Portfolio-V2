import bg from './shader.fs';
import Shader from '../components/shader/Shader';
import Navbar from '../components/Navbar';

export default function Landing() {
	return (
		<main
			id="home"
			className="relative flex h-[800px] max-h-screen min-h-[500px] w-full items-center justify-center"
		>
			<h1 className="whitespace-nowrap font-title text-5xl font-semibold leading-[0.75] sm:text-7xl sm:leading-[0.75] md:text-8xl md:leading-[0.75] lg:text-9xl lg:leading-[0.75]">
				Every detail <br /> accounted for.
			</h1>
			<Shader
				key={bg}
				className="absolute left-0 top-0 -z-10 h-full w-full"
				source={bg}
				uniforms={{ Light: 1 }}
			/>
			<div className="absolute left-0 top-0 flex w-full justify-center">
				<Navbar />
			</div>
		</main>
	);
}
