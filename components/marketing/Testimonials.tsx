"use client"

import { useState, useEffect } from "react"
import { IconChevronLeft, IconChevronRight, IconStarFilled } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import type { TestimonialEntry } from "@/lib/fetchers"

interface TestimonialsProps {
    testimonials: TestimonialEntry[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const minSwipeDistance = 50

    useEffect(() => {
        if (isPaused) return
        const interval = setInterval(() => {
            setActiveIndex((prev: number) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isPaused, testimonials.length])

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) {
            setActiveIndex((prev: number) => (prev + 1) % testimonials.length)
        }
        if (isRightSwipe) {
            setActiveIndex((prev: number) => (prev - 1 + testimonials.length) % testimonials.length)
        }
    }

    return (
        <section className="relative py-32 overflow-hidden bg-background">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l10 20h-20l10-20zm0 60l-10-20h20l-10 20zm30-30l-20 10v-20l20 10zm-60 0l20-10v20l-20-10z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
            }} />

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase">Voices of Impact Across Africa</h2>
                    <p className="text-muted-foreground font-medium tracking-tight uppercase text-sm">Trusted validation from high-profile partners</p>
                </div>

                <div
                    className="max-w-4xl mx-auto relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="overflow-hidden relative min-h-[400px]">
                        {testimonials.map((entry, i) => (
                            <div
                                key={entry.id}
                                className={cn(
                                    "absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center p-4",
                                    activeIndex === i ? "translate-x-0 opacity-100 scale-100" : (i < activeIndex ? "-translate-x-full opacity-0 scale-95" : "translate-x-full opacity-0 scale-95")
                                )}
                            >
                                <div className="bg-white border border-border shadow-sm p-12 md:p-16 rounded-none text-center space-y-8 transition-all hover:shadow-2xl hover:-translate-y-2">
                                    <div className="flex justify-center gap-1">
                                        {[...Array(entry.data.rating)].map((_, j) => (
                                            <IconStarFilled key={j} className="text-primary" size={16} />
                                        ))}
                                    </div>

                                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed italic text-foreground tracking-tight">
                                        &ldquo;{entry.data.quote}&rdquo;
                                    </blockquote>

                                    <div className="flex flex-col items-center space-y-4">
                                        <div>
                                            <p className="font-black text-foreground uppercase tracking-wider">{entry.data.name}, {entry.data.organization}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 hidden md:block">
                        <button
                            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                            className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all rounded-none"
                        >
                            <IconChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 hidden md:block">
                        <button
                            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                            className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all rounded-none"
                        >
                            <IconChevronRight size={24} />
                        </button>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={cn(
                                    "w-3 h-3 transition-all duration-300 rounded-none",
                                    activeIndex === i ? "bg-primary w-8" : "bg-border"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
