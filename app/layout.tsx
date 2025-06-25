import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narayani Hotel - Luxury Accommodation & Hospitality",
  description: "Experience luxury and comfort at Narayani Hotel. Premium rooms, world-class amenities, exceptional service, and unforgettable hospitality in the heart of the city.",
  keywords: "luxury hotel, accommodation, hospitality, premium rooms, spa, restaurant, business center, Narayani Hotel",
  authors: [{ name: "Narayani Hotel" }],
  creator: "Narayani Hotel",
  publisher: "Narayani Hotel",
  openGraph: {
    title: "Narayani Hotel - Luxury Accommodation & Hospitality",
    description: "Experience luxury and comfort at Narayani Hotel. Premium rooms, world-class amenities, exceptional service.",
    type: "website",
    locale: "en_US",
    siteName: "Narayani Hotel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayani Hotel - Luxury Accommodation & Hospitality",
    description: "Experience luxury and comfort at Narayani Hotel. Premium rooms, world-class amenities, exceptional service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
