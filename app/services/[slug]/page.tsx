import { notFound } from "next/navigation"
import { services } from "@/lib/data"
import { PageHero } from "@/components/ui/PageHero"
import { Button } from "@/components/ui/button"
import { IconCheck, IconArrowRight, IconMessageDots } from "@tabler/icons-react"
import Link from "next/link"

interface ServicePageProps {
    params: {
        slug: string
    }
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = services.find(s => s.id === slug)

    if (!service) {
        notFound()
    }

    const otherServices = services.filter(s => s.id !== slug)

    return (
        <main className="min-h-screen pb-24">
            <PageHero
                title={service.title}
                subtitle={service.description}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/#services" },
                    { label: service.title, href: `/services/${service.id}` }
                ]}
                backgroundImage={service.image}
            />

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Column 1: Service Details */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 border-l-4 border-primary pl-4">
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Overview</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase">
                                Strategic <span className="text-primary italic">Solutions</span> for Institutional Growth
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                {service.longDescription}
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 bg-card border border-border group hover:border-primary/50 transition-colors">
                                    <div className="shrink-0 w-8 h-8 bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <IconCheck size={18} strokeWidth={3} />
                                    </div>
                                    <span className="font-bold text-foreground leading-tight uppercase tracking-tight">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="bg-black text-white p-12 md:p-16 border-l-8 border-primary space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Ready to Begin Your Transformation?</h3>
                                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-2xl">
                                    Schedule a strategy session with our specialized consultants to tailor the {service.title} roadmap to your organization's specific needs.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="h-16 px-10 rounded-none text-base font-black uppercase tracking-widest" asChild>
                                    <Link href="/contact">
                                        Book This Service
                                        <IconArrowRight size={20} className="ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-16 px-10 rounded-none text-base font-black uppercase tracking-widest border-white/20 hover:bg-white/10" asChild>
                                    <Link href="/contact">
                                        <IconMessageDots size={20} className="mr-2" />
                                        Inquire Now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Other Services Overlay */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-8 border-2 border-primary bg-background">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-foreground border-b border-primary pb-4 mb-6 inline-block">Our Solutions</h3>
                                <div className="flex flex-col gap-2">
                                    {otherServices.map((other) => (
                                        <Link
                                            key={other.id}
                                            href={`/services/${other.id}`}
                                            className="group flex flex-col p-4 hover:bg-muted transition-all border border-transparent hover:border-border"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                                                    {other.title}
                                                </span>
                                                <IconArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                                            </div>
                                            <p className="text-[11px] text-muted-foreground font-medium line-clamp-2 uppercase tracking-wide">
                                                {other.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-black text-white space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Institutional Reach</span>
                                    <h4 className="text-xl font-black uppercase tracking-tighter">Operating Across 36 States</h4>
                                </div>
                                <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-wider">
                                    Our consultancy footprint spans the entire Nigerian federation with dedicated West African expansion hubs.
                                </p>
                                <Button variant="link" className="p-0 text-white font-black uppercase text-[10px] tracking-widest hover:text-primary" asChild>
                                    <Link href="/about#reach">View Operational Map</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
