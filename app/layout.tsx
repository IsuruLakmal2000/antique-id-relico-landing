import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://antiqueidentifier.site'),
  title: {
    default: "Relico - AI Antique Identification App | Identify & Value Antiques Instantly",
    template: "%s | Relico - Antique Identifier"
  },
  description: "Identify antiques instantly with AI-powered antique identification. Discover the history, origin, age, and estimated value of your vintage items, collectibles, and treasures. Free antique appraisal tool.",
  keywords: [
    "antique identification",
    "antique identifier",
    "identify antiques",
    "antique appraisal",
    "vintage item identifier",
    "antique value",
    "AI antique identification",
    "antique recognition app",
    "identify old items",
    "antique furniture identification",
    "collectibles identifier",
    "how to identify antiques",
    "antique authentication",
    "vintage collectibles",
    "antique price guide"
  ],
  authors: [{ name: "Relico Team" }],
  creator: "Relico",
  publisher: "Relico Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://antiqueidentifier.site',
    title: 'Relico - AI Antique Identification App',
    description: 'Identify antiques instantly with AI. Discover the history, age, and value of your vintage items and collectibles.',
    siteName: 'Relico',
    images: [{
      url: '/Assets/header.png',
      width: 1200,
      height: 630,
      alt: 'Relico Antique Identifier App',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Relico - AI Antique Identification App',
    description: 'Identify antiques instantly with AI. Discover the history and value of your treasures.',
    images: ['/Assets/header.png'],
    creator: '@relico',
  },
  icons: {
    icon: "/Assets/appicon1.jpg",
    shortcut: "/Assets/appicon1.jpg",
    apple: "/Assets/appicon1.jpg",
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://antiqueidentifier.site',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-cream text-brown-dark`}
      >
        {children}
      </body>
    </html>
  );
}
