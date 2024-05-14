import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const titleFont = localFont({ src: './CabinetGrotesk-Variable.woff2', variable: '--font-title' });
const bodyFont = localFont({ src: './Satoshi-Variable.woff2', variable: '--font-body' });

export const viewport: Viewport = { themeColor: '#EB237A' };

export const metadata: Metadata = {
	title: 'VimHax | Portfolio',
	description: 'A full-stack developer based in Sri Lanka.',
	openGraph: { url: 'https://vimhax.com' }
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${titleFont.variable} ${bodyFont.variable}`}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
