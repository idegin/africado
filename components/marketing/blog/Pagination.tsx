import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface BlogPaginationProps {
    currentPage: number
    totalPages: number
    buildHref: (page: number) => string
}

export function BlogPagination({ currentPage, totalPages, buildHref }: BlogPaginationProps) {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
        pages.push(1)
        if (currentPage > 3) pages.push("...")
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i)
        }
        if (currentPage < totalPages - 2) pages.push("...")
        pages.push(totalPages)
    }

    return (
        <div className="flex items-center justify-center gap-2 py-12">
            {currentPage > 1 ? (
                <Link
                    href={buildHref(currentPage - 1)}
                    className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
                >
                    <IconChevronLeft size={20} />
                </Link>
            ) : (
                <span className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground opacity-30">
                    <IconChevronLeft size={20} />
                </span>
            )}

            {pages.map((page, i) =>
                typeof page === "string" ? (
                    <span
                        key={`ellipsis-${i}`}
                        className="w-12 h-12 flex items-center justify-center font-black text-xs tracking-widest border-2 border-border text-foreground"
                    >
                        ...
                    </span>
                ) : (
                    <Link
                        key={page}
                        href={buildHref(page)}
                        className={cn(
                            "w-12 h-12 flex items-center justify-center font-black text-xs uppercase tracking-widest border-2 transition-all",
                            page === currentPage
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border text-foreground hover:border-primary/50"
                        )}
                    >
                        {page}
                    </Link>
                )
            )}

            {currentPage < totalPages ? (
                <Link
                    href={buildHref(currentPage + 1)}
                    className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
                >
                    <IconChevronRight size={20} />
                </Link>
            ) : (
                <span className="w-12 h-12 flex items-center justify-center border-2 border-border text-muted-foreground opacity-30">
                    <IconChevronRight size={20} />
                </span>
            )}
        </div>
    )
}
