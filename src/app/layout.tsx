import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Essungue Ejuma Foundation | Oracles Nursery & Primary School",
  description: "Empowering minds, building futures. Quality education for children in Nursery through Primary 6 with a focus on excellence, creativity, and character development.",
  keywords: "nursery school, primary school, education, foundation, Cameroon, quality education, children development",
  authors: [{ name: "Essungue Ejuma Foundation" }],
  openGraph: {
    title: "Essungue Ejuma Foundation | Oracles Nursery & Primary School",
    description: "Quality education for children in Nursery through Primary 6",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" }
    ],
    apple: [
      { url: "/favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256.png", sizes: "256x256", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  themeColor: "#4f46e5",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Oracles Nursery & Primary School"
  },
  viewport: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
