import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data"
import { PageHero } from "@/components/ui/PageHero"
import { BlogSidebar } from "@/components/marketing/blog/BlogSidebar"
import { BlogCard } from "@/components/marketing/blog/BlogCard"
import { IconCalendar, IconUser, IconBrandLinkedin, IconBrandX, IconBrandFacebook, IconArrowLeft } from "@tabler/icons-react"
import Link from "next/link"

interface BlogPageProps {
    params: {
        slug: string
    }
}

export default async function BlogDetailsPage({ params }: BlogPageProps) {
    const { slug } = await params
    const post = blogPosts.find(p => p.id === slug)

    if (!post) {
        notFound()
    }

    const similarPosts = blogPosts
        .filter(p => p.id !== slug && p.category === post.category)
        .slice(0, 2)

    // If no similar posts in same category, just get others
    const relatedPostsList = similarPosts.length > 0
        ? similarPosts
        : blogPosts.filter(p => p.id !== slug).slice(0, 2)

    return (
        <main className="min-h-screen pb-24">
            <PageHero
                title={post.title}
                subtitle={`Published on ${post.date} by ${post.author}`}
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    { label: post.category, href: `/blog?category=${post.category}` },
                ]}
                backgroundImage={post.image}
            />

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-8 py-6 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <IconCalendar size={16} className="text-primary" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <IconUser size={16} className="text-primary" />
                                {post.author}
                            </span>
                            <div className="flex-1" />
                            <div className="flex items-center gap-4">
                                <span>Share Article:</span>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-primary/5 hover:text-primary transition-colors"><IconBrandLinkedin size={18} /></button>
                                    <button className="p-2 hover:bg-primary/5 hover:text-primary transition-colors"><IconBrandX size={18} /></button>
                                    <button className="p-2 hover:bg-primary/5 hover:text-primary transition-colors"><IconBrandFacebook size={18} /></button>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <article className="prose prose-lg max-w-none">
                            <div className="space-y-8 font-medium text-lg leading-relaxed text-foreground/80">
                                {post.content.split('\n').map((paragraph, i) => (
                                    paragraph.trim() && (
                                        <p key={i} className="mb-6 first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                                            {paragraph.trim()}
                                        </p>
                                    )
                                ))}
                            </div>
                        </article>

                        {/* Back to Blog */}
                        <div className="pt-12">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all"
                            >
                                <IconArrowLeft size={18} />
                                Back to All Insights
                            </Link>
                        </div>

                        {/* Similar Posts */}
                        <div className="pt-24 space-y-12 border-t border-border mt-24">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Discover Similar Insights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedPostsList.map((relatedPost, i) => (
                                    <BlogCard
                                        key={i}
                                        title={relatedPost.title}
                                        excerpt={relatedPost.excerpt}
                                        date={relatedPost.date}
                                        author={relatedPost.author}
                                        category={relatedPost.category}
                                        image={relatedPost.image}
                                        href={`/blog/${relatedPost.id}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 pl-0 lg:pl-12 border-l-0 lg:border-l border-border">
                        <div className="sticky top-24">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
