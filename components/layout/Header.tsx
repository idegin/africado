import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react"

export function Header() {
    const services = [
        { name: "Training & Capacity Building", href: "#training" },
        { name: "Strategy Development", href: "#strategy" },
        { name: "Research & Development", href: "#research" },
        { name: "IT Integration", href: "#it" },
        { name: "General Contracts", href: "#contracts" },
    ]

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        // Services is handled separately
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight text-primary">Africado</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
                    <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">Home</Link>
                    <Link href="#about" className="text-muted-foreground transition-colors hover:text-primary">About</Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary outline-none">
                            Services <IconChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-[240px]">
                            {services.map((service) => (
                                <DropdownMenuItem key={service.name} asChild>
                                    <Link href={service.href} className="cursor-pointer font-medium">{service.name}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="#blog" className="text-muted-foreground transition-colors hover:text-primary">Blog</Link>
                    <Link href="#contact" className="text-muted-foreground transition-colors hover:text-primary">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Button>Get Started</Button>
                    </div>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <IconMenu2 className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[240px]">
                                <DropdownMenuItem asChild><Link href="/" className="w-full cursor-pointer">Home</Link></DropdownMenuItem>
                                <DropdownMenuItem asChild><Link href="#about" className="w-full cursor-pointer">About</Link></DropdownMenuItem>
                                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Services</div>
                                {services.map((service) => (
                                    <DropdownMenuItem key={service.name} asChild className="pl-6">
                                        <Link href={service.href} className="w-full cursor-pointer">{service.name}</Link>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuItem asChild><Link href="#blog" className="w-full cursor-pointer">Blog</Link></DropdownMenuItem>
                                <DropdownMenuItem asChild><Link href="#contact" className="w-full cursor-pointer">Contact</Link></DropdownMenuItem>
                                <div className="p-2 pt-4">
                                    <Button className="w-full">Get Started</Button>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}
