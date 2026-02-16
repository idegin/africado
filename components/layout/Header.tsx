"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconMenu2, IconX, IconChevronDown, IconArrowRight } from "@tabler/icons-react"
import { services as sharedServices } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Close mobile menu on path change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const services = sharedServices.map(s => ({
        name: s.title,
        href: `/services/${s.id}`
    }))

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Insights", href: "/blog" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-3xl font-black tracking-tighter text-primary" style={{ fontFamily: 'monospace' }}>AFRICADO</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-bold items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-primary uppercase tracking-widest",
                                pathname === link.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary outline-none uppercase tracking-widest">
                            Services <IconChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-[280px] p-2 rounded-none border-2 border-primary">
                            {services.map((service) => (
                                <DropdownMenuItem key={service.name} asChild className="rounded-none focus:bg-primary focus:text-primary-foreground py-3">
                                    <Link href={service.href} className="cursor-pointer font-bold text-sm tracking-tight">{service.name}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button className="rounded-none h-12 px-6 font-bold uppercase tracking-widest" asChild>
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-primary focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Backdrop Overlay */}
            <div
                className={cn(
                    "fixed inset-0 top-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Drawer */}
            <div className={cn(
                "fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col uppercase",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex h-20 items-center justify-between px-6 border-b border-border">
                    <span className="text-2xl font-black tracking-tighter text-primary" style={{ fontFamily: 'monospace' }}>AFRICADO</span>
                    <button onClick={() => setIsOpen(false)} className="text-primary p-2">
                        <IconX size={32} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-12 space-y-12">
                    <nav className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-4xl font-black tracking-tighter transition-all hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="space-y-6">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] border-b border-border pb-2">Our Solutions</p>
                        <div className="flex flex-col gap-4">
                            {services.map((service) => (
                                <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-foreground hover:text-primary flex items-center justify-between"
                                >
                                    {service.name}
                                    <IconArrowRight size={18} className="text-primary" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-border">
                    <Button className="w-full h-16 rounded-none text-xl font-bold uppercase tracking-widest">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>

                            Get Started
                        </Link>

                    </Button>
                </div>
            </div>
        </header>
    )
}
