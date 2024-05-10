import { SocialIcon } from 'react-social-icons';

function Social({ network, href }: { network: string; href: string }) {
	return (
		<a
			target="_blank"
			href={href}
			className="h-fit w-fit rounded-2xl bg-neutral-950 transition hover:bg-white [&_.social-svg-icon]:!fill-white [&_.social-svg-icon]:!transition [&_.social-svg-icon]:hover:!fill-black"
		>
			<SocialIcon as="div" network={network} fgColor="white" bgColor="none" />
		</a>
	);
}

export default Social;
