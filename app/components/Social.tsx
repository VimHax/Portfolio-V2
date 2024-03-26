import { SocialIcon } from 'react-social-icons';

function Social({ network, href }: { network: string; href: string }) {
	return (
		<a
			target="_blank"
			href={href}
			className="btn-icon h-fit w-fit rounded-lg border-[1px] border-solid border-neutral-900 bg-black transition hover:border-white hover:bg-white"
		>
			<SocialIcon as="div" network={network} fgColor="white" bgColor="none" />
		</a>
	);
}

export default Social;
