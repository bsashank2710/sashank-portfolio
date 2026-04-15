import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const siteUrl = "https://sashankbn.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sashank Badri Narayan — Software Engineer",
    template: "%s | Sashank Badri Narayan",
  },
  description:
    "Software engineer specializing in backend systems, cloud infrastructure, and security. M.S. Computer Science, NYU (May 2026). F-1 OPT authorized from July 6, 2026.",
  keywords: [
    "Sashank Badri Narayan",
    "Software Engineer",
    "Backend Engineer",
    "Platform Engineer",
    "Cloud Engineer",
    "Security Engineer",
    "NYU",
    "New York",
    "F-1 OPT",
  ],
  authors: [{ name: "Sashank Badri Narayan", url: siteUrl }],
  creator: "Sashank Badri Narayan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sashank Badri Narayan",
    title: "Sashank Badri Narayan — Software Engineer",
    description:
      "Software engineer specializing in backend systems, cloud infrastructure, and security. M.S. CS @ NYU.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sashank Badri Narayan — Software Engineer",
    description:
      "M.S. CS @ NYU | Backend · Cloud · Security. Building systems that scale.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#fafaf8] text-[#1c1c1c] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
