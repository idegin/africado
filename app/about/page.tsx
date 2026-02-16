import { PageHero } from "@/components/ui/PageHero"
import { Story } from "@/components/marketing/about/Story"
import { VisionMission } from "@/components/marketing/about/VisionMission"
import { CoreValues } from "@/components/marketing/about/CoreValues"
import { Credentials } from "@/components/marketing/about/Credentials"
import { Reach } from "@/components/marketing/about/Reach"
import { FinalCTA } from "@/components/marketing/about/FinalCTA"
import { Clients } from "@/components/marketing/Clients"

export const metadata = {
    title: "About Us | Africado Consulting",
    description: "Empowering African Organizations Through Strategic Transformation Since 2013.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <PageHero
                title="About Us"
                subtitle="Empowering African Organizations Through Strategic Transformation Since 2013."
                breadcrumbs={[{ label: "About", href: "/about" }]}
                backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
            />

            <Story />

            <VisionMission />

            <CoreValues />

            <Credentials />

            <div className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Trusted by Market Leaders</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Over 50 organizations have partnered with us to drive transformational change across
                        public service delivery, digital identity, and institutional capacity building.
                    </p>
                </div>
                <Clients />
            </div>

            <Reach />

            <FinalCTA />
        </main>
    )
}
