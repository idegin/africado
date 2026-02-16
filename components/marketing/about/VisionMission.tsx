"use client"

import { IconTarget, IconEye } from "@tabler/icons-react"

export function VisionMission() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-6 p-8 bg-card border border-border rounded-none shadow-sm transition-all hover:shadow-md">
                        <div className="w-16 h-16 rounded-none bg-primary flex items-center justify-center text-primary-foreground">
                            <IconEye size={36} />
                        </div>
                        <h3 className="text-3xl font-bold">Our Vision</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                            "To be Africa's leading corporate solutions provider—recognized for transforming institutions through innovation, integrity, and measurable impact."
                        </p>
                    </div>

                    <div className="space-y-6 p-8 bg-card border border-border rounded-none shadow-sm transition-all hover:shadow-md">
                        <div className="w-16 h-16 rounded-none bg-primary flex items-center justify-center text-primary-foreground">
                            <IconTarget size={36} />
                        </div>
                        <h3 className="text-3xl font-bold">Our Mission</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                            "Empowering African organizations with tailored expertise in business transformation and human capital development to achieve sustainable growth, operational resilience, and competitive advantage in dynamic markets."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
