import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import { Titillium_Web } from 'next/font/google';
import './globals.css';

const titleFont = localFont({ src: './CabinetGrotesk-Variable.woff2', variable: '--font-title' });
const bodyFont = localFont({ src: './Satoshi-Variable.woff2', variable: '--font-body' });

// const robotoMono = Titillium_Web({
// 	weight: '600',
// 	subsets: ['latin']
// });

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
			<body className={`${titleFont.variable} ${bodyFont.variable}`}>{children}</body>
		</html>
	);
}
