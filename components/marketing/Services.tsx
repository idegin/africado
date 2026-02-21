import {
    IconCheck,
    IconArrowRight,
} from "@tabler/icons-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ServiceEntry } from "@/lib/fetchers"

interface ServicesProps {
    services: ServiceEntry[]
}

export function Services({ services }: ServicesProps) {
    return (
        <section id="services" className="w-full bg-background">
            <div className="py-24 text-center border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="inline-flex items-center gap-2 border-l-4 border-primary pl-4 mb-4">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Specializations</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-foreground uppercase">Expertise that <span className="text-primary italic">Drives</span> Impact</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
                        Delivering end-to-end solutions tailored for sustainable growth in the African corporate and public sectors.
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                {services.map((entry, index) => {
                    const service = entry.data;
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={entry.id}
                            id={service.slug}
                            className={`grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] border-b border-border overflow-hidden scroll-mt-20`}
                        >
                            <div className={`relative h-[400px] lg:h-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <img
                                    src={service.thumbnail.url}
                                    alt={service.name}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            <div className={`flex items-center p-8 md:p-16 lg:p-24 bg-card ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="max-w-xl space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground uppercase leading-none">
                                            {service.name}
                                        </h3>
                                        <p className="text-xl font-bold text-primary italic">
                                            {service.short_description}
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed font-medium">
                                            {service.long_description.slice(0, 200)}...
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.slice(0, 4).map((f, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-3">
                                                <div className="shrink-0 w-6 h-6 bg-primary/10 flex items-center justify-center text-primary">
                                                    <IconCheck size={14} strokeWidth={4} />
                                                </div>
                                                <span className="text-sm font-bold text-foreground/80 uppercase tracking-tight">{f.feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <Button size="lg" className="h-16 px-8 rounded-none text-base font-black uppercase tracking-widest transition-all hover:gap-6 group" asChild>
                                            <Link href={`/services/${service.slug}`}>
                                                Explore Service Details
                                                <IconArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
