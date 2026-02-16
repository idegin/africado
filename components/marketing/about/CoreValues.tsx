"use client"

import { IconUserStar, IconAward, IconFileCheck, IconGrowth } from "@tabler/icons-react"

const values = [
    {
        title: "Leadership",
        description: "We lead by example—inspiring teams, clients, and partners through principled action, forward-thinking vision, and unwavering commitment to elevating standards across Africa's corporate landscape.",
        icon: IconUserStar
    },
    {
        title: "Excellence",
        description: "We pursue excellence in every deliverable—setting rigorous benchmarks for quality, continuously refining our methodologies, and delivering results that exceed expectations while respecting cultural context.",
        icon: IconAward
    },
    {
        title: "Accountability",
        description: "We own every outcome—fostering transparent partnerships where commitments are honored, progress is measurable, and trust forms the foundation of long-term collaboration.",
        icon: IconFileCheck
    },
    {
        title: "Development",
        description: "We champion growth at every level—investing in our team's capabilities, our clients' human capital, and Africa's institutional capacity to build self-sustaining ecosystems of progress.",
        icon: IconGrowth
    }
]

export function CoreValues() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Core Values</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The pillars that guide our internal culture and client engagements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="space-y-6 p-8 border border-border rounded-none bg-card hover:bg-muted/30 transition-all group">
                            <div className="w-12 h-12 flex items-center justify-center text-primary border-2 border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <value.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold tracking-tight uppercase">{value.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
