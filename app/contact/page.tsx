import { PageHero } from "@/components/ui/PageHero"
import { ContactInfo } from "@/components/marketing/contact/ContactInfo"
import { ContactForm } from "@/components/marketing/contact/ContactForm"
import { ContactMap } from "@/components/marketing/contact/ContactMap"
import { TrustSignals } from "@/components/marketing/contact/TrustSignals"
import { CTA } from "@/components/marketing/CTA"

export const metadata = {
    title: "Contact Us | Africado Consulting",
    description: "Get in touch with Africado Consulting for business transformation and human capital development in Nigeria.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <PageHero
                title="Contact Us"
                subtitle="Let's discuss how we can help your organization achieve sustainable growth."
                breadcrumbs={[
                    { label: "Contact", href: "/contact" }
                ]}
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Side: Info */}
                        <div className="lg:col-span-5">
                            <ContactInfo />
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <ContactMap />

            <TrustSignals />

            {/* Reusing existing CTA section for final push */}
            <CTA />
        </main>
    )
}
