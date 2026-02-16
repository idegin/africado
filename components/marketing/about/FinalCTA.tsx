"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IconArrowRight, IconDownload } from "@tabler/icons-react"

export function FinalCTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
                    alt="Collaborative Transformation"
                    className="w-full h-full object-cover opacity-40grayscale opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-4xl space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Your organization's transformation journey starts with a <span className="text-primary italic">conversation.</span>
                        </h2>
                        <p className="text-2xl text-gray-300 font-medium font-serif leading-relaxed italic">
                            "Let's architect your growth story together."
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-none transition-all hover:bg-white hover:text-primary group" asChild>
                            <Link href="/contact">
                                Schedule Strategy Session
                                <IconArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-none border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 transition-all font-mono tracking-tighter" asChild>
                            <Link href="#">
                                <IconDownload className="mr-2 h-6 w-6 text-primary" />
                                Download Company Profile
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                        <div className="space-y-1">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Inquiries</p>
                            <p className="text-xl font-bold text-white">+234 704 747 0548</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Primary Email</p>
                            <p className="text-xl font-bold text-white">africadonig@gmail.com</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Website</p>
                            <p className="text-xl font-bold text-white">www.africado.ng</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
