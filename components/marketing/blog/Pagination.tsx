"use client"

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

export function Pagination() {
    return (
        <div className="flex items-center justify-center gap-2 py-12">
            <button className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none">
                <IconChevronLeft size={20} />
            </button>

            {[1, 2, 3, "...", 8].map((page, i) => (
                <button
                    key={i}
                    className={cn(
                        "w-12 h-12 flex items-center justify-center font-black text-xs uppercase tracking-widest border-2 transition-all",
                        page === 1
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-foreground hover:border-primary/50"
                    )}
                >
                    {page}
                </button>
            ))}

            <button className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <IconChevronRight size={20} />
            </button>
        </div>
    )
}
