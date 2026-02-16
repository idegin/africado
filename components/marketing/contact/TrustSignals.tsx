"use client"

import { Badge } from "@/components/ui/badge"

const clients = [
    { name: "World Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/World_Bank_Group_logo.svg" },
    { name: "UNFPA", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/UNFPA_logo.svg" },
    { name: "NIMC", logo: "https://upload.wikimedia.org/wikipedia/en/5/52/NIMC_Logo.png" },
    { name: "AFEX", logo: "https://afexnigeria.com/wp-content/uploads/2021/05/afex-logo.png" },
]

export function TrustSignals() {
    return (
        <div className="py-20 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Verified Credentials</h3>
                            <p className="text-muted-foreground">
                                We maintain full compliance with Nigerian regulatory bodies to ensure seamless engagement with government and private sector partners.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "CMD-Accredited Training Firm", color: "bg-green-500" },
                                { label: "NITDA-Registered IT Provider", color: "bg-blue-500" },
                                { label: "COREN Category A IT License", color: "bg-red-500" },
                                { label: "CAC Registered (RC 1802273)", color: "bg-amber-500" }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-muted rounded-none border-l-4" style={{ borderColor: `var(--color-primary)` }}>
                                    <div className={`w-2 h-2 rounded-full ${badge.color} animate-pulse`} />
                                    <span className="text-sm font-bold uppercase tracking-tight">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold mb-4">Trusted by Organizations Like</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
                            {clients.map((client, i) => (
                                <div key={i} className="h-20 w-40 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
