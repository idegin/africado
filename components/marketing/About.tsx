import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconTarget, IconEye } from "@tabler/icons-react"

export function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-20 md:px-6 md:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                        alt="Africado Team Collaboration"
                        className="h-full w-full object-cover"
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:right-10 bg-background p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-primary">RC 1802273</span>
                            <span className="text-sm text-muted-foreground">Registered with CAC Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            About Africado
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Africado Consulting (officially <span className="font-semibold text-foreground">Africado Integrated Services Ltd</span>) is a premier consulting firm headquartered in Abuja, specializing in business transformation and human capital development.
                        </p>
                        <p className="text-base text-muted-foreground">
                            We serve corporates, government agencies, and SMEs across Nigeria with plans for West African expansion. We are CMD-accredited and NITDA-registered.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 p-4 rounded-lg bg-secondary/50 border border-border">
                            <div className="flex items-center gap-2">
                                <IconEye className="h-5 w-5 text-primary" />
                                <h3 className="font-bold">Our Vision</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">To be Africa's leading corporate solutions provider.</p>
                        </div>
                        <div className="space-y-2 p-4 rounded-lg bg-secondary/50 border border-border">
                            <div className="flex items-center gap-2">
                                <IconTarget className="h-5 w-5 text-primary" />
                                <h3 className="font-bold">Our Mission</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">Empowering African organizations for sustainable growth.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm font-medium">Coren Category A IT License Qualified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm font-medium">FIRS, PENCOM, and NSITF Compliant</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
