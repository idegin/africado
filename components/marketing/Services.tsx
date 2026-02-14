import {
    IconSchool,
    IconChess,
    IconMicroscope,
    IconDevices,
    IconTruckDelivery,
    IconArrowRight
} from "@tabler/icons-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
    const services = [
        {
            title: "Training & Capacity Building",
            description: "Tailored executive coaching and technical workshops to enhance skills and productivity.",
            href: "#training",
            icon: IconSchool,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Strategy Development",
            description: "Actionable growth plans aligned with current market opportunities and trends.",
            href: "#strategy",
            icon: IconChess,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            title: "Research & Development",
            description: "Feasibility studies, market research, and impact assessments for data-driven decisions.",
            href: "#research",
            icon: IconMicroscope,
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
        {
            title: "IT Integration",
            description: "Software implementation, IT infrastructure development, and digital transformation.",
            href: "#it",
            icon: IconDevices,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
        {
            title: "General Contracts",
            description: "Procurement, logistics, and contract management via robust supply chain networks.",
            href: "#contracts",
            icon: IconTruckDelivery,
            color: "text-red-500",
            bg: "bg-red-500/10",
        },
    ]

    return (
        <section id="services" className="bg-muted/50 py-20 md:py-32 lg:py-40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-semibold text-foreground/80 border border-border">
                            Our Expertise
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Comprehensive Services
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We offer a wide range of services designed to help you succeed in today's competitive landscape.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-background transition-all hover:shadow-lg hover:-translate-y-1">
                            <CardHeader>
                                <div className={`p-2 w-fit rounded-md ${service.bg} ${service.color} mb-2`}>
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base line-clamp-3">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Link href={service.href} className={`flex items-center text-sm font-medium ${service.color} hover:underline`}>
                                    Learn more <IconArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                    {/* CTA Card */}
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-dashed bg-background/50 p-8 text-center md:col-span-1 lg:col-span-1 border-border">
                        <div className="max-w-[280px] space-y-2">
                            <h3 className="font-bold text-xl">Need something else?</h3>
                            <p className="text-muted-foreground text-sm">Contact us directly to discuss your specific needs.</p>
                            <Button variant="outline" className="w-full mt-4" asChild>
                                <Link href="#contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
