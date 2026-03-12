import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getServices } from "@/lib/fetchers";
import Providers from "./providers";
import { APP_DATA } from "@/lib/data";

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${APP_DATA.name} - Empowering African Businesses with Intelligent Growth Solutions`,
  description: APP_DATA.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = await getServices()

  return (
    <html lang="en" className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header services={services.map(s => ({ name: s.data.name, href: `/services/${s.data.slug}` }))} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
