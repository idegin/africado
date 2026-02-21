"use client"

import { cn } from "@/lib/utils"
import type { ClientEntry } from "@/lib/fetchers"

export function Clients({ clients }: { clients: ClientEntry[] }) {
    return (
        <section className="py-20 bg-background border-y border-border overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Leading Organizations</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    We have partnered with over 50 organizations across government, private sectors, and international agencies.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap py-4 group-hover:paused">
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="mx-4 flex h-32 w-48 items-center justify-center rounded-xl bg-card border border-border p-8 shadow-sm transition-all duration-300 hover:shadow-md grayscale hover:grayscale-0"
                        >
                            <img
                                src={client.data.logo.url}
                                alt={client.data.name}
                                className="max-h-full max-w-full object-contain filter transition-all"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4 group-hover:paused">
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="mx-4 flex h-32 w-48 items-center justify-center rounded-xl bg-card border border-border p-8 shadow-sm transition-all duration-300 hover:shadow-md grayscale hover:grayscale-0"
                        >
                            <img
                                src={client.data.logo.url}
                                alt={client.data.name}
                                className="max-h-full max-w-full object-contain filter transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
