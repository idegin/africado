import { notFound } from "next/navigation"
import { getInsightBySlug, getInsights, getCategories } from "@/lib/fetchers"
import { PageHero } from "@/components/ui/PageHero"
import { BlogSidebar } from "@/components/marketing/blog/BlogSidebar"
import { BlogCard } from "@/components/marketing/blog/BlogCard"
import { ShareLinks } from "@/components/marketing/blog/ShareLinks"
import { IconCalendar, IconArrowLeft } from "@tabler/icons-react"
import Link from "next/link"

interface BlogPageProps {
    params: {
        slug: string
    }
}

export default async function BlogDetailsPage({ params }: BlogPageProps) {
    const { slug } = await params
    const [post, allInsights, categories] = await Promise.all([
        getInsightBySlug(slug),
        getInsights(1, 50),
        getCategories(),
    ])

    if (!post) {
        notFound()
    }

    const otherPosts = allInsights.entries
        .filter(p => p.data.slug !== slug)
        .slice(0, 4)

    const postUrl = `https://africado.com/blog/${slug}`

    return (
        <main className="min-h-screen pb-24">
            <PageHero
                title={post.data.name}
                subtitle={post.data.excerpt}
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    { label: post.data.category?.data?.name ?? "Uncategorized", href: "/blog" },
                ]}
                backgroundImage={post.data.thumbnail.url}
            />

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-12">
                        <div className="flex flex-wrap items-center gap-8 py-6 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <IconCalendar size={16} className="text-primary" />
                                {new Date(post.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </span>
                            <div className="flex-1" />
                            <ShareLinks title={post.data.name} url={postUrl} />
                        </div>

                        <article
                            className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-a:text-primary prose-a:underline-offset-4 prose-a:font-bold hover:prose-a:text-primary/80 prose-img:rounded-none prose-img:border prose-img:border-border prose-img:w-full prose-hr:border-border prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:italic prose-blockquote:font-medium prose-strong:text-foreground prose-pre:bg-zinc-900 prose-pre:rounded-none prose-code:text-primary prose-code:font-mono prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:uppercase prose-figcaption:tracking-widest prose-table:border prose-table:border-border prose-th:border prose-th:border-border prose-th:p-3 prose-td:border prose-td:border-border prose-td:p-3 prose-li:marker:text-primary"
                            dangerouslySetInnerHTML={{ __html: post.data.content }}
                        />

                        <div className="py-8 border-t border-border">
                            <ShareLinks title={post.data.name} url={postUrl} />
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all"
                            >
                                <IconArrowLeft size={18} />
                                Back to All Insights
                            </Link>
                        </div>

                        {otherPosts.length > 0 && (
                            <div className="pt-24 space-y-12 border-t border-border mt-12">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Discover More Insights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {otherPosts.map((entry) => (
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
                        )}
                    </div>

                    <div className="lg:col-span-4 pl-0 lg:pl-12 border-l-0 lg:border-l border-border">
                        <div className="sticky top-24">
                            <BlogSidebar categories={categories} recentPosts={allInsights.entries.slice(0, 3)} activeCategorySlug={post.data.category?.data?.slug} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
