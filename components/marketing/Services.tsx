"use client"

import {
    IconCheck,
    IconArrowRight,
    IconSchool,
    IconChess,
    IconMicroscope,
    IconDevices,
    IconTruckDelivery
} from "@tabler/icons-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "Training & Capacity Building",
        description: "We empower your workforce through bespoke learning experiences designed to drive excellence and innovative thinking.",
        longDescription: "Our comprehensive training programs are tailored to address the unique challenges of African organizations. We combine international best practices with local market insights to deliver impactful human capital development.",
        features: [
            "Executive Leadership Coaching",
            "Technical & Vocational Workshops",
            "Soft Skills & Productivity Training",
            "Organizational Culture Alignment"
        ],
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        icon: IconSchool,
        href: "#book-training"
    },
    {
        title: "Strategy Development",
        description: "Transform your vision into actionable reality with data-driven strategic planning and implementation support.",
        longDescription: "We help organizations navigate complex market dynamics by developing robust strategies that ensure long-term sustainability and competitive advantage in the West African landscape.",
        features: [
            "Corporate Strategic Planning",
            "Market Entry & Expansion Support",
            "Operational Excellence Audits",
            "Change Management Frameworks"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        icon: IconChess,
        href: "#book-strategy"
    },
    {
        title: "Research & Development",
        description: "Informed decision-making starts with rigorous analysis. We provide the insights you need to lead with confidence.",
        longDescription: "Our R&D team specializes in evidence-based research, conducting deep dives into market trends, social impact, and feasibility to de-risk your most ambitious projects.",
        features: [
            "Market Research & Insights",
            "Feasibility & Diagnostic Studies",
            "Socio-Economic Impact Assessments",
            "Innovation Strategy Lab"
        ],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
        icon: IconMicroscope,
        href: "#book-research"
    },
    {
        title: "IT Integration",
        description: "Accelerate your digital transformation journey with seamless technology integration and modern infrastructure.",
        longDescription: "From software implementation to robust IT security, we provide end-to-end digital solutions that optimize workflows and enhance organizational resilience.",
        features: [
            "Enterprise Software Deployment",
            "Digital Transformation Roadmaps",
            "Cloud Infrastructure Management",
            "Cybersecurity & Data Protection"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        icon: IconDevices,
        href: "#book-it"
    },
    {
        title: "General Contracts & Supplies",
        description: "Reliable procurement and logistics management to keep your operations running smoothly, every day.",
        longDescription: "Leverage our extensive supply chain network and project management expertise to ensure timely delivery of high-quality goods and services for your organization.",
        features: [
            "Strategic Procurement Services",
            "End-to-End Logistics Management",
            "Facility Maintenance & Supplies",
            "Robust Vendor Management"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        icon: IconTruckDelivery,
        href: "#book-contracts"
    }
]

export function Services() {
    return (
        <section id="services" className="w-full bg-background">
            <div className="py-20 text-center border-b border-border">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Core Expertise</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Delivering end-to-end solutions tailored for sustainable growth in the African corporate and public sectors.
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] border-b border-border overflow-hidden`}
                        >
                            {/* Image Side */}
                            <div className={`relative h-[400px] lg:h-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute top-8 left-8">
                                    <div className="bg-primary text-primary-foreground p-4 rounded-none shadow-xl border border-white/10">
                                        <service.icon size={32} />
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`flex items-center p-8 md:p-16 lg:p-24 bg-card ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="max-w-xl space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                            {service.title}
                                        </h3>
                                        <p className="text-xl font-medium text-primary">
                                            {service.description}
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.longDescription}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center gap-3">
                                                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <IconCheck size={14} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-semibold text-foreground/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <Button size="lg" className="rounded-none h-14 px-8 text-base font-bold transition-all hover:gap-4" asChild>
                                            <Link href={service.href}>
                                                Book This Service
                                                <IconArrowRight size={20} className="ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
