import { SocialIcon } from 'react-social-icons';

const names = {
	github: 'GitHub',
	linkedin: 'LinkedIn',
	instagram: 'Instagram',
	twitter: 'Twitter'
} as const;

function Social({
	network,
	href,
	large = false
}: {
	network: keyof typeof names;
	href: string;
	large?: boolean;
}) {
	if (large) {
		return (
			<a
				target="_blank"
				href={href}
				className="flex h-[52px] w-full items-center justify-center rounded-2xl bg-neutral-950 px-5 py-0 transition hover:bg-white hover:text-black [&_.social-svg-icon]:!fill-white [&_.social-svg-icon]:!transition [&_.social-svg-icon]:hover:!fill-black"
			>
				<SocialIcon as="div" network={network} fgColor="white" bgColor="none" />
				<span>{names[network]}</span>
			</a>
		);
	} else {
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
}

export default Social;
