import Footer from './sections/footer';
import Landing from './sections/landing';
import Skills from './sections/skills';
import Work from './sections/work';

export default function Main() {
	return (
		<div className="flex flex-col items-center">
			<Landing />
			<Work />
			<hr className="border-neutral-900" />
			<Skills />
			<hr className="border-neutral-900" />
			<Footer />
		</div>
	);
}
