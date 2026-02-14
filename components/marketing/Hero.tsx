import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
            {/* 2-level gradient background */}
            <div className="absolute inset-0 z-0 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] opacity-10 pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="block text-primary">Africado Consulting</span>
                            <span className="block text-foreground">Empowering African Organizations.</span>
                        </h1>
                        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                            Africado Integrated Services Ltd specializes in business transformation and human capital development, serving corporates, government agencies, and SMEs.
                        </p>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row">
                            <Button size="lg" className="h-12 px-8 text-base">
                                Get Started
                                <IconArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                View Services
                            </Button>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        {/* Decorative element or Image */}
                        <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-900/10">
                            <img
                                alt="Business Meeting"
                                className="object-cover w-full h-full"
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                        </div>
                        {/* Abstract shape */}
                        <div className="absolute -top-12 -right-12 -z-10 h-[200px] w-[200px] rounded-full bg-secondary/80 blur-3xl" />
                        <div className="absolute -bottom-12 -left-12 -z-10 h-[200px] w-[200px] rounded-full bg-primary/20 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
