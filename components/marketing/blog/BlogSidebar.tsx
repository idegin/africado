"use client"

import { IconSearch, IconChevronRight } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const categories = [
    { name: "Digital Transformation", count: 12 },
    { name: "Human Capital", count: 8 },
    { name: "Strategy & Operations", count: 15 },
    { name: "Market Intelligence", count: 6 },
    { name: "Public Sector Reform", count: 9 },
    { name: "Risk Management", count: 4 },
]

const recentPosts = [
    { title: "Building Resilient Workforces in post-COVID Nigeria", date: "May 20, 2024" },
    { title: "The Impact of NITDA Compliance on B2B Trust", date: "May 15, 2024" },
    { title: "Scaling SMES into the West African Hub", date: "May 8, 2024" },
]

export function BlogSidebar() {
    return (
        <aside className="space-y-12">
            {/* Search */}
            <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-2 inline-block">Search</h3>
                <div className="relative group">
                    <Input
                        placeholder="Search articles..."
                        className="rounded-none h-14 pl-12 border-2 border-border focus:border-primary transition-all pr-4 font-bold text-sm"
                    />
                    <IconSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                </div>
            </div>

            {/* Categories */}
            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-2 inline-block">Categories</h3>
                <div className="flex flex-col border border-border">
                    {categories.map((cat, i) => (
                        <Link
                            key={i}
                            href="#"
                            className="flex items-center justify-between p-4 bg-background hover:bg-primary hover:text-primary-foreground transition-all border-b border-border last:border-0 group"
                        >
                            <span className="text-sm font-bold uppercase tracking-tight">{cat.name}</span>
                            <span className="text-[10px] font-black bg-muted px-2 py-1 rounded-none group-hover:bg-primary-foreground group-hover:text-primary transition-colors">{cat.count}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-2 inline-block">Recent Insights</h3>
                <div className="space-y-6">
                    {recentPosts.map((post, i) => (
                        <Link key={i} href="#" className="group block space-y-2">
                            <h4 className="text-sm font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                                {post.title}
                            </h4>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{post.date}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter CTA */}
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
