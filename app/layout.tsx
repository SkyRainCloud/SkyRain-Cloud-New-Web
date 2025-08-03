import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyRain Cloud - Premium Hosting & Servers",
  description: "High-performance VPS & game server hosting with 99.9% uptime and global locations.",
  openGraph: {
    title: "SkyRain Cloud - Premium Hosting & Servers",
    description: "Fast, secure, and affordable hosting. Join SkyRain today.",
    url: "https://skyrain.cloud",
    siteName: "SkyRain Cloud",
    images: [
      {
        url: "https://skyrain.cloud/logo.png", // Make sure this file exists
        width: 1200,
        height: 630,
        alt: "SkyRain Cloud Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyRain Cloud - Premium Hosting & Servers",
    description: "Fast, secure, and affordable hosting. Join SkyRain today.",
    images: ["https://skyrain.cloud/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
