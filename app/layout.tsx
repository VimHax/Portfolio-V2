import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const outfit = Roboto_Mono({ weight: '400', subsets: ['latin'] });

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
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
