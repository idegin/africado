"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconMail, IconPhone, IconWorld, IconDownload, IconCalendar } from "@tabler/icons-react"

export function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000"
                    alt="African Business Growth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-4xl space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Ready to Transform Your Organization for <span className="text-primary">Sustainable Growth?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl">
                            Over 50 organizations including World Bank and UNFPA have partnered with us—secure your transformation session this month.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold">
                            <IconCalendar className="mr-2 h-6 w-6" />
                            Schedule a Free Consultation
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold bg-white/10 text-white border-white/20 hover:bg-white/20">
                            <IconDownload className="mr-2 h-6 w-6" />
                            Download Our Service Brochure
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                        <div className="flex items-center gap-3 text-white/90">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <IconPhone size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Call Us</p>
                                <p className="font-semibold text-sm">+234 704 747 0548</p>
                                <p className="font-semibold text-sm">+234 803 897 5857</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <IconMail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Email Us</p>
                                <p className="font-semibold">africadonig@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-white/90">
                            <div className="p-3 rounded-full bg-primary/20 text-primary">
                                <IconWorld size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Visit Us</p>
                                <p className="font-semibold">www.africado.ng</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-gray-300 uppercase">CMD-Accredited Training Firm</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-bold text-gray-300 uppercase">NITDA-Registered IT Provider</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-bold text-gray-300 uppercase">COREN Category A License</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Decorative Elements */}
            <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    )
}
