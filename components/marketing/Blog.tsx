"use client"

import Link from "next/link"
import { IconArrowRight, IconCalendar, IconUser } from "@tabler/icons-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const posts = [
    {
        title: "Digital Transformation in Nigerian Public Sector",
        excerpt: "How government agencies are leveraging modern IT infrastructure to improve service delivery.",
        date: "May 12, 2024",
        author: "Admin",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "The Future of Human Capital Development",
        excerpt: "Strategies for organizations to build resilient and highly skilled workforces in the AI era.",
        date: "April 28, 2024",
        author: "Expert",
        category: "Human Capital",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Strategic Planning for SME Expansion",
        excerpt: "Key considerations for small and medium enterprises looking to scale across West Africa.",
        date: "March 15, 2024",
        author: "Consultant",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
]

export function Blog() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="text-left space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Thought Leadership</h2>
                        <p className="text-muted-foreground text-lg">
                            Insights and strategies from our experts on business growth, technology, and organizational development.
                        </p>
                    </div>
                    <div>
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-primary font-semibold hover:underline group"
                        >
                            View All News
                            <IconArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <Card key={index} className="overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-300 py-0">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>
                            <CardHeader className="p-6 pb-2">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1">
                                        <IconCalendar size={14} />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <IconUser size={14} />
                                        {post.author}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <p className="text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter className="py-0 min-h-8 pt-0">
                                <Button variant="link" className="p-0 text-primary font-bold" asChild>
                                    <Link href={`/blog/${index}`}>
                                        Read More <IconArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
