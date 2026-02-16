"use client"

import { cn } from "@/lib/utils"

const clients = [
    { name: "World Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/World_Bank_Group_logo.svg" },
    { name: "UNFPA", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/UNFPA_logo.svg" },
    { name: "NIMC", logo: "https://upload.wikimedia.org/wikipedia/en/5/52/NIMC_Logo.png" },
    { name: "AFEX", logo: "https://afexnigeria.com/wp-content/uploads/2021/05/afex-logo.png" },
    { name: "Population Council", logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Population_Council_logo.svg" },
    { name: "Christian Aid", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Christian_Aid_logo.svg" },
    { name: "ActionAid", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/ActionAid_Logo.svg" },
    { name: "NOUN", logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/National_Open_University_of_Nigeria_logo.png" },
]

export function Clients() {
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
                                src={client.logo}
                                alt={client.name}
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
                                src={client.logo}
                                alt={client.name}
                                className="max-h-full max-w-full object-contain filter transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
