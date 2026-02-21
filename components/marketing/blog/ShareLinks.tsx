"use client"

import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"

interface ShareLinksProps {
    title: string
    url: string
}

export function ShareLinks({ title, url }: ShareLinksProps) {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)

    return (
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Share:</span>
            <div className="flex gap-2">
                <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                    <IconBrandLinkedin size={18} />
                </a>
                <a
                    href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-primary/5 hover:text-primary transition-colors"
                >
                    <IconBrandX size={18} />
                </a>
            </div>
        </div>
    )
}
