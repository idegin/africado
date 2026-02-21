"use client"

import { IconBrandLinkedin } from "@tabler/icons-react"
import Link from "next/link"
import type { PeopleEntry } from "@/lib/fetchers"

export function Leadership({ people }: { people: PeopleEntry[] }) {
    return (
        <section className="py-32 bg-background border-t border-border/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-foreground">Guiding Africa's Growth Journey</h2>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.3em] max-w-2xl mx-auto">
                        Strategic Board & Executive Management
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {people.map((person) => (
                        <div key={person.id} className="space-y-6 group">
                            <div className="relative aspect-4/5 overflow-hidden rounded-2xl grayscale transition-all duration-700 border border-primary/20 group-hover:border-primary/60 group-hover:border-2">
                                <img
                                    src={person.data.thumbnail.url}
                                    alt={person.data.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#333333]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <Link
                                        href={person.data.linkedin_url}
                                        target="_blank"
                                        className="w-16 h-16 bg-white flex items-center justify-center text-[#333333] rounded-full animate-pulse transition-transform hover:scale-110"
                                    >
                                        <IconBrandLinkedin size={32} />
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-[#333333] tracking-tight">{person.data.name}</h3>
                                <p className="text-gray-500 italic font-medium text-sm md:text-base leading-snug">
                                    {person.data.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 pt-12 border-t border-border/40 text-center">
                    <p className="text-base md:text-lg font-bold uppercase tracking-widest text-gray-400 italic max-w-4xl mx-auto px-4">
                        &ldquo;Our leaders combine decades of public-sector insight, private-sector agility, and deep-rooted commitment to Africa&rsquo;s institutional advancement.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    )
}
