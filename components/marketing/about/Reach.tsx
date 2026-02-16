"use client"

import { IconMapPin, IconRoute, IconWorldUp } from "@tabler/icons-react"

export function Reach() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Location & Operational Reach</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Strategically headquartered in Nigeria's administrative heart, we deliver services
                                nationwide with a clear roadmap for continental expansion.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-none bg-primary/10 text-primary flex items-center justify-center">
                                    <IconMapPin size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-bold uppercase tracking-tight">Abuja Headquarters</h4>
                                    <p className="text-muted-foreground">
                                        1, M.M. Alkali Street, CITEC Villa Estate, Gwarimpa, Abuja.
                                    </p>
                                    <p className="text-sm font-semibold text-primary">Nationwide reach: Lagos | Port Harcourt | Kano</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-none bg-primary/10 text-primary flex items-center justify-center">
                                    <IconWorldUp size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-bold uppercase tracking-tight">International Roadmap</h4>
                                    <p className="text-muted-foreground">
                                        West African expansion (2026–2028) establishing operational hubs in Accra and Dakar.
                                    </p>
                                    <p className="text-sm font-semibold text-primary">Serving ECOWAS & Multinationals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="aspect-[4/3] bg-muted overflow-hidden border border-border rounded-none relative">
                            <img
                                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200"
                                alt="Map and Strategy"
                                className="w-full h-full object-cover grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 duration-1000"
                            />
                            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />

                            {/* Decorative marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 bg-primary rounded-full animate-ping opacity-20" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
