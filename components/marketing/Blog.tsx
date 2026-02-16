"use client"

import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"
import { BlogCard } from "./blog/BlogCard"

const posts = [
    {
        title: "Digital Transformation in Nigerian Public Sector",
        excerpt: "How government agencies are leveraging modern IT infrastructure to improve service delivery through transparent digital workflows.",
        date: "May 12, 2024",
        author: "Godwin Onime",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        href: "/blog/digital-transformation-public-sector"
    },
    {
        title: "The Future of Human Capital Development",
        excerpt: "Strategies for organizations to build resilient and highly skilled workforces in the AI era. Focus on lifelong learning.",
        date: "April 28, 2024",
        author: "Chinwe Okoro",
        category: "Human Capital",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        href: "/blog/future-human-capital"
    },
    {
        title: "Strategic Planning for SME Expansion",
        excerpt: "Key considerations for small and medium enterprises looking to scale across West African hubs like Accra and Dakar.",
        date: "March 15, 2024",
        author: "Sarah Adebayo",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        href: "/blog/sme-expansion-strategy"
    },
]

export function Blog() {
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
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}
