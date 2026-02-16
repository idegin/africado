"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconArrowRight, IconUsers, IconTarget, IconChartBar, IconBuildingSkyscraper } from "@tabler/icons-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white py-40 2xl:py-0">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Strategic Consulting"
                    className="object-cover w-full h-full opacity-60"
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-left duration-1000">

                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                                <span className="block drop-shadow-2xl">Empowering African</span>
                                <span className="block text-primary drop-shadow-2xl">Growth.</span>
                            </h1>
                            <p className="max-w-[700px] text-xl text-gray-300 md:text-2xl leading-relaxed font-medium">
                                We specialize in business transformation and human capital development, driving excellence across Nigeria's corporate and public sectors.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="rounded-none h-16 px-10 text-lg font-bold transition-all hover:bg-white hover:text-primary group">
                                Get Started Today
                                <IconArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-none h-16 px-10 text-lg font-bold border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
                                Discover Our Strategy
                            </Button>
                        </div>

                        {/* Quick Stats / Trust Points */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">10+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Years Experience</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">50+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Partnerships</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">₦250M+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Contract Eligibility</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-bold">100%</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Local Compliance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Side Element (Right) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 hidden lg:block overflow-hidden">
                <div className="h-full flex flex-col justify-center gap-12 opacity-10 translate-x-1/2">
                    <IconBuildingSkyscraper size={400} />
                    <IconTarget size={400} />
                </div>
                <div className="absolute inset-0 bg-linear-to-l from-black via-black/40 to-transparent" />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
                <div className="w-1 h-12 rounded-full bg-linear-to-b from-white to-transparent" />
            </div>
        </section>
    )
}
