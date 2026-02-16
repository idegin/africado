"use client"

import { PageHero } from "@/components/ui/PageHero"
import { BlogCard } from "@/components/marketing/blog/BlogCard"
import { BlogSidebar } from "@/components/marketing/blog/BlogSidebar"
import { Pagination } from "@/components/marketing/blog/Pagination"

const allPosts = [
    {
        title: "Digital Transformation in Nigerian Public Sector",
        excerpt: "How government agencies are leveraging modern IT infrastructure to improve service delivery and citizen engagement through transparent digital workflows.",
        date: "May 12, 2024",
        author: "Godwin Onime",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        href: "/blog/digital-transformation-public-sector"
    },
    {
        title: "The Future of Human Capital Development",
        excerpt: "Strategies for organizations to build resilient and highly skilled workforces in the AI era. Focus on lifelong learning and adaptive leadership.",
        date: "April 28, 2024",
        author: "Chinwe Okoro",
        category: "Human Capital",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        href: "/blog/future-human-capital"
    },
    {
        title: "Strategic Planning for SME Expansion",
        excerpt: "Key considerations for small and medium enterprises looking to scale across West African hubs like Accra and Dakar with sustainable growth models.",
        date: "March 15, 2024",
        author: "Sarah Adebayo",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        href: "/blog/sme-expansion-strategy"
    },
    {
        title: "Research Methodologies in Emerging Markets",
        excerpt: "Navigating the complexities of data collection and consumer behavior analysis within the diverse socio-economic landscapes of West Africa.",
        date: "February 20, 2024",
        author: "Musa Ibrahim",
        category: "Market Research",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
        href: "/blog/research-methodologies-africa"
    },
    {
        title: "IT Integration: Beyond Software Deployment",
        excerpt: "Why successful digital transformation requires cultural alignment and a robust security-first infrastructure for institutional resilience.",
        date: "January 30, 2024",
        author: "Admin",
        category: "IT Integration",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        href: "/blog/it-integration-resilience"
    },
    {
        title: "Leadship Excellence in Times of Crisis",
        excerpt: "Adaptive leadership frameworks for navigating volatile economic periods while maintaining organizational momentum and team morale.",
        date: "January 15, 2024",
        author: "Expert",
        category: "Leadership",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
        href: "/blog/leadership-excellence-crisis"
    }
]

export default function BlogListingPage() {
    return (
        <main className="min-h-screen pb-24">
            <PageHero
                title="Strategic Insights"
                subtitle="Thought leadership and evidence-based analysis for the African institutional landscape."
                breadcrumbs={[{ label: "Blog", href: "/blog" }]}
                backgroundImage="https://media.istockphoto.com/id/911721268/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=413hwqf6vf5BUL3HcsQYam2sSxwUXGs_ttskwZ_csug="
            />

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {allPosts.map((post, i) => (
                                <BlogCard
                                    key={i}
                                    {...post}
                                />
                            ))}
                        </div>

                        <div className="pt-12 border-t border-border">
                            <Pagination />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
