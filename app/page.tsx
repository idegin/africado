import { Hero } from "@/components/marketing/Hero";
import { About } from "@/components/marketing/About";
import { Services } from "@/components/marketing/Services";
import { Clients } from "@/components/marketing/Clients";
import { Blog } from "@/components/marketing/Blog";
import { CTA } from "@/components/marketing/CTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Clients />
            <About />
            <Services />
            <Blog />
            <CTA />
        </>
    );
}