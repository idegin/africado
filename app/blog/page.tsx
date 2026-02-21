import { PageHero } from "@/components/ui/PageHero"
import { BlogCard } from "@/components/marketing/blog/BlogCard"
import { BlogSidebar } from "@/components/marketing/blog/BlogSidebar"
import { BlogPagination } from "@/components/marketing/blog/Pagination"
import { queryInsights, getCategories, getLatestInsights, getCategoryBySlug } from "@/lib/fetchers"

interface BlogListingPageProps {
    searchParams: Promise<{
        category?: string
        search?: string
        page?: string
    }>
}

export default async function BlogListingPage({ searchParams }: BlogListingPageProps) {
    const params = await searchParams
    const page = Math.max(1, Number(params.page) || 1)
    const categorySlug = params.category || undefined
    const search = params.search || undefined

    const [categories, recentPosts, activeCategory] = await Promise.all([
        getCategories(),
        getLatestInsights(),
        categorySlug ? getCategoryBySlug(categorySlug) : null,
    ])

    const results = await queryInsights({
        page,
        limit: 10,
        categoryId: activeCategory?.id,
        search,
        sort: "-createdAt",
    })

    const heroTitle = activeCategory
        ? activeCategory.data.name
        : search
            ? `Results for "${search}"`
            : "Strategic Insights"

    const heroSubtitle = activeCategory
        ? `Browse all insights in the ${activeCategory.data.name} category.`
        : search
            ? `${results.pagination.total} article${results.pagination.total !== 1 ? "s" : ""} found.`
            : "Thought leadership and evidence-based analysis for the African institutional landscape."

    const buildHref = (p: number) => {
        const qs = new URLSearchParams()
        if (categorySlug) qs.set("category", categorySlug)
        if (search) qs.set("search", search)
        if (p > 1) qs.set("page", String(p))
        const str = qs.toString()
        return `/blog${str ? `?${str}` : ""}`
    }

    return (
        <main className="min-h-screen pb-24">
            <PageHero
                title={heroTitle}
                subtitle={heroSubtitle}
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    ...(activeCategory ? [{ label: activeCategory.data.name, href: `/blog?category=${categorySlug}` }] : []),
                    ...(search ? [{ label: `Search: ${search}`, href: `/blog?search=${search}` }] : []),
                ]}
                backgroundImage="https://media.istockphoto.com/id/911721268/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=413hwqf6vf5BUL3HcsQYam2sSxwUXGs_ttskwZ_csug="
            />

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-12">
                        {results.entries.length === 0 ? (
                            <div className="py-24 text-center space-y-4">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">No Insights Found</h3>
                                <p className="text-muted-foreground font-medium">
                                    {search
                                        ? `No articles match "${search}". Try a different search term.`
                                        : "No articles available in this category yet."}
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {results.entries.map((entry) => (
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
                        )}

                        {results.pagination.totalPages > 1 && (
                            <div className="pt-12 border-t border-border">
                                <BlogPagination
                                    currentPage={page}
                                    totalPages={results.pagination.totalPages}
                                    buildHref={buildHref}
                                />
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                            <BlogSidebar
                                categories={categories}
                                recentPosts={recentPosts}
                                activeCategorySlug={categorySlug}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
