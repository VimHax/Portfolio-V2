import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const outfit = Roboto_Mono({ weight: 'variable', subsets: ['latin'], variable: '--font-outfit' });

const panchang = localFont({
	src: './fonts/Panchang-Bold.woff2',
	variable: '--font-panchang'
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
			<body className={`${outfit.className}`}>{children}</body>
		</html>
	);
}
