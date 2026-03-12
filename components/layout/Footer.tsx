"use client"

import Link from "next/link"
import { IconBrandLinkedin, IconBrandX, IconBrandInstagram } from "@tabler/icons-react"
import { APP_DATA } from "@/lib/data"

export function Footer() {
    return (
        <footer className="bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-10 md:space-y-12">
                    {/* <Link href="/" className="inline-block">
                        <span className="text-3xl md:text-4xl font-black tracking-tighter text-primary" style={{ fontFamily: 'monospace' }}>AFRICADO</span>
                    </Link> */}

                    <nav className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-x-10 sm:gap-y-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-400 text-center">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Insights</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    <div className="flex justify-center gap-4">
                        {[
                            { icon: IconBrandX, href: "https://x.com/Africadong" },
                            { icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/africado-nigeria" },
                            { icon: IconBrandInstagram, href: "https://instagram.com/africadoconsulting" },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition-all rounded-none"
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>

                    <div className="max-w-md space-y-3 text-center px-4">
                        <p className="text-sm text-gray-400 font-medium leading-relaxed">
                            {APP_DATA.address}
                        </p>
                        <p className="text-sm text-primary font-bold break-all sm:break-normal">{APP_DATA.phoneNumber} | {APP_DATA.email1} | {APP_DATA.email2}</p>
                    </div>

                    <div className="w-full pt-8 md:pt-12 border-t border-white/5 flex flex-col gap-4 md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-600 text-center">
                        <p>&copy; 2026 Africado Integrated Services Ltd. All Rights Reserved.</p>
                        <div className="flex gap-6 md:gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
