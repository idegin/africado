"use client"

import Link from "next/link"
import { IconBrandLinkedin, IconBrandX, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandTiktok } from "@tabler/icons-react"

export function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col items-center space-y-12">
                    {/* Logo */}
                    <Link href="/" className="inline-block">
                        <span className="text-4xl font-black tracking-tighter text-primary" style={{ fontFamily: 'monospace' }}>AFRICADO</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Insights</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    {/* Social Media */}
                    <div className="flex justify-center gap-6">
                        {[
                            { icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/africado-nigeria" },
                            { icon: IconBrandX, href: "https://x.com/Africadong" },
                            { icon: IconBrandFacebook, href: "https://facebook.com/AfricadoConsulting" },
                            { icon: IconBrandInstagram, href: "https://instagram.com/africadoconsulting" },
                            { icon: IconBrandYoutube, href: "https://youtube.com/@africado_consulting" },
                            { icon: IconBrandTiktok, href: "https://tiktok.com/@africadoconsulting" },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition-all rounded-none"
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>

                    {/* Office Details */}
                    <div className="max-w-md space-y-4">
                        <p className="text-gray-400 font-medium">
                            1 M.M. Alkali Street, 442 Crescent, CITEC Villa Estate, 4th Avenue, Gwarimpa, Abuja, Nigeria.
                        </p>
                        <p className="text-primary font-bold">+234 704 747 0548 | africadonig@gmail.com</p>
                    </div>

                    {/* Bottom Credits */}
                    <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
                        <p>© 2026 Africado Integrated Services Ltd. All Rights Reserved.</p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
