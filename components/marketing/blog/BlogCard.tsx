"use client"

import Link from "next/link"
import { IconArrowRight, IconCalendar, IconUser } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export interface BlogCardProps {
    title: string
    excerpt: string
    date: string
    author: string
    category: string
    image: string
    href: string
    className?: string
}

export function BlogCard({
    title,
    excerpt,
    date,
    author,
    category,
    image,
    href,
    className
}: BlogCardProps) {
    return (
        <div className={cn("group bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500", className)}>
            <div className="aspect-16/10 relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">
                    {category}
                </div>
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <IconCalendar size={12} className="text-primary" />
                        {date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <IconUser size={12} className="text-primary" />
                        {author}
                    </span>
                </div>

                <h3 className="text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2 uppercase tracking-tighter">
                    <Link href={href}>{title}</Link>
                </h3>

                <p className="text-muted-foreground line-clamp-3 text-sm font-medium leading-relaxed">
                    {excerpt}
                </p>

                <div className="pt-4 border-t border-border/50">
                    <Link
                        href={href}
                        className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-primary group/link transition-all"
                    >
                        Read Full Insight
                        <IconArrowRight size={14} className="ml-2 transition-transform group-hover/link:translate-x-2" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
