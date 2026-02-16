"use client"

import Link from "next/link"
import { IconChevronRight } from "@tabler/icons-react"

interface PageHeroProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    breadcrumbs: { label: string; href: string }[]
}

export function PageHero({
    title,
    subtitle,
    backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    breadcrumbs
}: PageHeroProps) {
    return (
        <section className="relative h-[500px] flex items-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-linear-to-t from-background/20 via-transparent to-transparent" />

                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <nav className="flex mb-6" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm font-medium text-white/60">
                        <li>
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        </li>
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <IconChevronRight size={14} className="text-white/40" />
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-white font-bold">{crumb.label}</span>
                                ) : (
                                    <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="max-w-3xl space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white animate-in slide-in-from-left duration-700">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-gray-300 animate-in slide-in-from-left duration-700 delay-100">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary" />
        </section>
    )
}
