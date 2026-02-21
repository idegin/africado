import { Hero } from "@/components/marketing/Hero";
import { About } from "@/components/marketing/About";
import { Services } from "@/components/marketing/Services";
import { Clients } from "@/components/marketing/Clients";
import { Blog } from "@/components/marketing/Blog";
import { CTA } from "@/components/marketing/CTA";
import { Testimonials } from "@/components/marketing/Testimonials";
import { getServices, getLatestInsights, getTestimonials, getClients } from "@/lib/fetchers";

export default async function Home() {
    const [services, insights, testimonials, clients] = await Promise.all([
        getServices(),
        getLatestInsights(),
        getTestimonials(),
        getClients(),
    ])

    return (
        <>
            <Hero />
            <Clients clients={clients} />
            <About />
            <Services services={services} />
            <Testimonials testimonials={testimonials} />
            <CTA />
            <Blog posts={insights} />
        </>
    );
}