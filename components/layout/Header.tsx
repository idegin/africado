"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
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
import { cn } from "@/lib/utils"

interface HeaderProps {
    services: { name: string; href: string }[]
}

export function Header({ services }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Insights", href: "/blog" },
    ]

    const drawer = mounted ? createPortal(
        <>
            <div
                className={cn(
                    "fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={cn(
                    "fixed inset-y-0 right-0 z-[999] w-full max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col uppercase",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex h-20 items-center justify-between px-6 border-b border-border shrink-0">
                    <span className="text-2xl font-black tracking-tighter text-primary" style={{ fontFamily: 'monospace' }}>
                        <img src='/img/logoo.jpeg' width={150} />
                    </span>
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

                <div className="p-6 border-t border-border shrink-0">
                    <Button className="w-full h-16 rounded-none text-xl font-bold uppercase tracking-widest" asChild>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </>,
        document.body
    ) : null

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-3xl font-black tracking-tighter text-primary" style={{ fontFamily: 'monospace' }}>
                            <img src='/img/logoo.jpeg' width={150} />
                        </span>
                    </Link>

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

                        <button
                            className="md:hidden p-2 text-primary focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
                        </button>
                    </div>
                </div>
            </header>

            {drawer}
        </>
    )
}
