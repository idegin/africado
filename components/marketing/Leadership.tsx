"use client"

import { IconBrandLinkedin } from "@tabler/icons-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const leaders = [
    {
        name: "Godwin A. Onime",
        title: "Managing Director / CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        linkedin: "#"
    },
    {
        name: "Chinwe Okoro",
        title: "Director of Strategy & Human Capital Development",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
        linkedin: "#"
    },
    {
        name: "Musa Ibrahim",
        title: "Director of Operations & Supply Chain",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
        linkedin: "#"
    },
    {
        name: "Sarah Adebayo",
        title: "Head of Research & Digital Transformation",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
        linkedin: "#"
    },
    {
        name: "Kelechi Onyekwere",
        title: "General Counsel & Compliance Officer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        linkedin: "#"
    }
]

export function Leadership() {
    return (
        <section className="py-32 bg-background border-t border-border/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-foreground">Guiding Africa’s Growth Journey</h2>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.3em] max-w-2xl mx-auto">
                        Strategic Board & Executive Management
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {leaders.map((leader, i) => (
                        <div key={i} className="space-y-6 group">
                            {/* Image Container */}
                            <div className="relative aspect-4/5 overflow-hidden rounded-2xl grayscale transition-all duration-700 border border-primary/20 group-hover:border-primary/60 group-hover:border-2">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Hover Overlay - 70% opacity charcoal */}
                                <div className="absolute inset-0 bg-[#333333]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <Link
                                        href={leader.linkedin}
                                        target="_blank"
                                        className="w-16 h-16 bg-white flex items-center justify-center text-[#333333] rounded-full animate-pulse transition-transform hover:scale-110"
                                    >
                                        <IconBrandLinkedin size={32} />
                                    </Link>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-[#333333] tracking-tight">{leader.name}</h3>
                                <p className="text-gray-500 italic font-medium text-sm md:text-base leading-snug">
                                    {leader.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Unifying Caption */}
                <div className="mt-24 pt-12 border-t border-border/40 text-center">
                    <p className="text-base md:text-lg font-bold uppercase tracking-widest text-gray-400 italic max-w-4xl mx-auto px-4">
                        "Our leaders combine decades of public-sector insight, private-sector agility, and deep-rooted commitment to Africa’s institutional advancement."
                    </p>
                </div>
            </div>
        </section>
    )
}
