import Link from "next/link"
import { IconBrandTwitter, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 py-12 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Africado</h3>
                        <p className="text-sm text-muted-foreground">
                            Empowering African organizations for sustainable growth through business transformation and human capital development.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Quick Links</h3>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                            <Link href="#blog" className="hover:text-primary transition-colors">Blog</Link>
                            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Services</h3>
                        <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link href="#" className="hover:text-primary transition-colors">Training & Capacity</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Strategy Development</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Research & Development</Link>
                            <Link href="#" className="hover:text-primary transition-colors">IT Integration</Link>
                            <Link href="#" className="hover:text-primary transition-colors">General Contracts</Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Contact</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Abuja, Nigeria</p>
                            <p>info@africado.com</p>
                            <p>+234 800 123 4567</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                                <IconBrandLinkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                                <IconBrandTwitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                                <IconBrandFacebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                                <IconBrandInstagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Africado Integrated Services Ltd. All rights reserved.</p>
                    <p className="mt-2">RC 1802273</p>
                </div>
            </div>
        </footer>
    )
}
