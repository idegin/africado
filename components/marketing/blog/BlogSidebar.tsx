"use client"

import { IconSearch, IconChevronRight } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { CategoryEntry, InsightEntry } from "@/lib/fetchers"

interface BlogSidebarProps {
    categories: CategoryEntry[]
    recentPosts: InsightEntry[]
    activeCategorySlug?: string
}

export function BlogSidebar({ categories, recentPosts, activeCategorySlug }: BlogSidebarProps) {
    const router = useRouter()
    const [query, setQuery] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/blog?search=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <aside className="space-y-12">
            <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-2 inline-block">Search</h3>
                <form onSubmit={handleSearch} className="relative group">
                    <Input
                        placeholder="Search articles..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="rounded-none h-14 pl-12 border-2 border-border focus:border-primary transition-all pr-4 font-bold text-sm"
                    />
                    <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                        <IconSearch size={20} />
                    </button>
                </form>
            </div>

            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-2 inline-block">Categories</h3>
                <div className="flex flex-col border border-border">
                    <Link
                        href="/blog"
                        className={cn(
                            "flex items-center justify-between p-4 transition-all border-b border-border last:border-0 group",
                            !activeCategorySlug
                                ? "bg-primary text-primary-foreground"
                                : "bg-background hover:bg-primary hover:text-primary-foreground"
                        )}
                    >
                        <span className="text-sm font-bold uppercase tracking-tight">All Categories</span>
                        <IconChevronRight size={16} className={cn(
                            "transition-colors",
                            !activeCategorySlug ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary-foreground"
                        )} />
                    </Link>
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/blog?category=${cat.data.slug}`}
                            className={cn(
                                "flex items-center justify-between p-4 transition-all border-b border-border last:border-0 group",
                                activeCategorySlug === cat.data.slug
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-background hover:bg-primary hover:text-primary-foreground"
                            )}
                        >
                            <span className="text-sm font-bold uppercase tracking-tight">{cat.data.name}</span>
                            <IconChevronRight size={16} className={cn(
                                "transition-colors",
                                activeCategorySlug === cat.data.slug ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary-foreground"
                            )} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-2 inline-block">Recent Insights</h3>
                <div className="space-y-6">
                    {recentPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.data.slug}`} className="group block space-y-2">
                            <h4 className="text-sm font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                                {post.data.name}
                            </h4>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                {new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="p-8 bg-black text-white space-y-4 border-l-4 border-primary">
                <h3 className="text-lg font-black uppercase tracking-tighter">Strategic Newsletter</h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-wider">
                    Get monthly leadership insights delivered to your inbox.
                </p>
                <Input
                    placeholder="your@email.com"
                    className="bg-zinc-900 border-zinc-800 rounded-none h-12 text-sm font-bold text-white placeholder:text-zinc-600 focus:border-primary"
                />
                <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black uppercase text-xs tracking-[0.2em] transition-all">
                    Subscribe
                </button>
            </div>
        </aside>
    )
}
