import Contact from './sections/contact';
import Footer from './sections/footer';
import Landing from './sections/landing';
import Skills from './sections/skills';
import Work from './sections/work';

export default function Main() {
	return (
		<div className="flex flex-col items-center">
			<Landing />
			<Work />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}
