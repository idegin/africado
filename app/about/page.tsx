import { PageHero } from "@/components/ui/PageHero"
import { Story } from "@/components/marketing/about/Story"
import { VisionMission } from "@/components/marketing/about/VisionMission"
import { CoreValues } from "@/components/marketing/about/CoreValues"
import { Credentials } from "@/components/marketing/about/Credentials"
import { Reach } from "@/components/marketing/about/Reach"
import { FinalCTA } from "@/components/marketing/about/FinalCTA"
import { Clients } from "@/components/marketing/Clients"
import { Leadership } from "@/components/marketing/Leadership"
import { getClients, getPeople } from "@/lib/fetchers"

export const metadata = {
    title: "About Us | Africado Consulting",
    description: "Empowering African Organizations Through Strategic Transformation Since 2013.",
}

export default async function AboutPage() {
    const [clients, people] = await Promise.all([
        getClients(),
        getPeople(),
    ])

    return (
        <main className="min-h-screen">
            <PageHero
                title="About Us"
                subtitle="Empowering African Organizations Through Strategic Transformation Since 2013."
                breadcrumbs={[{ label: "About", href: "/about" }]}
                backgroundImage="https://www.shutterstock.com/image-photo/portrait-successful-profile-handsome-attractive-260nw-2281021935.jpg"
            />

            <Story />

            <VisionMission />

            <CoreValues />

            {/* <Leadership people={people} /> */}

            <Credentials />

            <div className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Trusted by Market Leaders</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Over 50 organizations have partnered with us to drive transformational change across
                        public service delivery, digital identity, and institutional capacity building.
                    </p>
                </div>
                <Clients clients={clients} />
            </div>

            <Reach />

            <FinalCTA />
        </main>
    )
}
