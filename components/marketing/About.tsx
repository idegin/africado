"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconCheck, IconTarget, IconEye, IconAward, IconChevronRight } from "@tabler/icons-react"

export function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-10 translate-x-1/2 -skew-x-12" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    {/* Visual Side */}
                    <div className="relative group">
                        <div className="relative z-10 aspect-square md:aspect-4/5 overflow-hidden rounded-none shadow-2xl">
                            <img
                                src="/img/IMG_8481.jpg"
                                alt="Africado Team Collaboration"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                        </div>

                        {/* Status Card */}
                        <div className="absolute -bottom-8 -left-8 z-20 bg-background p-8 border-2 border-primary shadow-[16px_16px_0_0_rgba(var(--primary-rgb),0.1)] hidden md:block max-w-[280px]">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 text-primary">
                                        <IconAward size={24} />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Established 2013</span>
                                </div>
                                <p className="text-lg font-black leading-tight text-foreground">
                                    11+ Years of Strategic Excellence
                                </p>
                                <div className="pt-2 border-t border-border">
                                    <span className="text-xs font-bold text-primary uppercase">RC 1802273</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute top-8 left-8 -right-8 -bottom-8 border-4 border-primary/10 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 border-l-4 border-primary pl-4">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Who We Are</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-foreground uppercase">
                                Transforming <span className="text-primary italic">Potential</span> into Performance.
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                Africado Integrated Services Ltd is a premier Nigerian consulting firm specializing in helping organizations navigate complexity through strategic human capital development and digital innovation.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="group space-y-4 p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <IconEye size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">Our Vision</h3>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">To be Africa's leading platform for institutional advancement and corporate excellence.</p>
                            </div>
                            <div className="group space-y-4 p-6 bg-card border border-border hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <IconTarget size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">Our Mission</h3>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">Empowering African organizations through specialized training and data-driven transformation roadmaps.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button asChild size="lg" className="h-16 px-8 rounded-none text-base font-black uppercase tracking-widest">
                                <Link href="/about">
                                    Discover Our Full Story
                                    <IconChevronRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
