"use client"

import { IconPhone, IconMail, IconMapPin, IconClock, IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook } from "@tabler/icons-react"

export function ContactInfo() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Let's Transform Your Organization Together</h2>
                <p className="text-lg text-muted-foreground">
                    Get in touch with our expert consultants to discuss your business transformation and human capital development needs.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border transition-all hover:border-primary/50 group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconMapPin size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Our Office</h4>
                        <p className="text-muted-foreground leading-relaxed">
                            1, M.M. Alkali Street, CITEC Villa Estate,<br />
                            Gwarimpa, Abuja, FCT, Nigeria.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border transition-all hover:border-primary/50 group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconPhone size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Phone Numbers</h4>
                        <p className="text-muted-foreground">+234 704 747 0548</p>
                        <p className="text-muted-foreground">+234 803 897 5857</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border transition-all hover:border-primary/50 group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconMail size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Email Address</h4>
                        <p className="text-muted-foreground">hello@africado.ng | projects@africado.ng</p>
                        <p className="text-muted-foreground">info@africado.ng</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border transition-all hover:border-primary/50 group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconClock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM WAT</p>
                        <p className="text-muted-foreground">Saturday – Sunday: Closed</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-lg">Follow Our Updates</h4>
                <div className="flex gap-4">
                    <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all">
                        <IconBrandLinkedin size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all">
                        <IconBrandTwitter size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all">
                        <IconBrandFacebook size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
