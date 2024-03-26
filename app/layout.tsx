import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotoMono = Roboto_Mono({
	weight: 'variable',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'VimHax | Portfolio'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${robotoMono.className}`}>{children}</body>
		</html>
	);
}
