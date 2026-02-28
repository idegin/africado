import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getServices } from "@/lib/fetchers";
import Providers from "./providers";

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
  title: "Africado - Empowering African Businesses with Intelligent Growth Solutions",
  description: "Africado is a leading consulting firm dedicated to driving growth and innovation for African businesses. We specialize in delivering tailored solutions that empower our clients to thrive in the dynamic African market. Our expertise spans across strategy, digital transformation, and operational excellence, enabling us to unlock new opportunities and create sustainable value for our clients. With a deep understanding of the unique challenges and opportunities in Africa, we are committed to helping businesses navigate the complexities of the continent and achieve their growth objectives.",
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
