import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { BlogCard } from "./blog/BlogCard"
import type { InsightEntry } from "@/lib/fetchers"

interface BlogProps {
    posts: InsightEntry[]
}

export function Blog({ posts }: BlogProps) {
    return (
        <section id="blog" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="text-left space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 border-l-4 border-primary pl-4">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Intelligence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-foreground">Thought Leadership</h2>
                        <p className="text-muted-foreground text-lg font-medium">
                            Insights and evidence-based strategies from our experts on sustainable growth and organizational development.
                        </p>
                    </div>
                    <div className="pb-2">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-foreground transition-all group"
                        >
                            View All News
                            <IconArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((entry) => (
                        <BlogCard
                            key={entry.id}
                            title={entry.data.name}
                            excerpt={entry.data.excerpt}
                            date={new Date(entry.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            author=""
                            category={entry.data.category?.data?.name ?? ""}
                            image={entry.data.thumbnail.url}
                            href={`/blog/${entry.data.slug}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
