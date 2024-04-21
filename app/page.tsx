import Footer from './sections/footer';
import Landing from './sections/landing';
import Skills from './sections/skills';
import Work from './sections/work';

export default function Main() {
	return (
		<>
			<Landing />
			<hr className="border-neutral-900" />
			<Work />
			<hr className="border-neutral-900" />
			<Skills />
			<hr className="border-neutral-900" />
			<Footer />
		</>
	);
}
