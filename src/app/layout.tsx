import Providers from "@/components/Providers";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://parley-app.vercel.app";
const SITE_TITLE = "Parley — AI Meeting Assistant";
const SITE_DESCRIPTION =
  "Parley joins your calls, transcribes every word, and turns conversations into action items and follow-up emails — automatically.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Parley",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Parley",
  keywords: [
    "AI meeting assistant",
    "meeting notes",
    "call transcription",
    "action items",
    "follow-up emails",
    "Zoom",
    "Google Meet",
    "Microsoft Teams",
  ],
  authors: [{ name: "Parley Labs" }],
  creator: "Parley Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Parley",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${jetbrainsMono.variable}`}>
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
