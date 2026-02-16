import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconChevronLeft, IconHome } from "@tabler/icons-react"

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center bg-background">
            <div className="container mx-auto px-4 text-center">
                <div className="relative inline-block mb-8">
                    <h1 className="text-[12rem] md:text-[20rem] font-black leading-none text-muted/20 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <div className="inline-flex items-center gap-2 border-l-4 border-primary pl-4">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">Intelligence Gap</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
                            Pathway <span className="text-primary italic">Not Found</span>
                        </h2>
                    </div>
                </div>

                <div className="max-w-md mx-auto space-y-8">
                    <p className="text-muted-foreground font-medium text-lg leading-relaxed uppercase tracking-tight">
                        The strategic resource or insight you are searching for has been moved, archived, or does not exist in our institutional database.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button variant="outline" size="lg" className="h-16 px-8 rounded-none text-xs font-black uppercase tracking-widest border-2" asChild>
                            <Link href="/">
                                <IconHome className="mr-2 h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                        <Button size="lg" className="h-16 px-8 rounded-none text-xs font-black uppercase tracking-widest" asChild>
                            <Link href="/blog">
                                Browse Insights
                                <IconChevronLeft className="ml-2 h-4 w-4 rotate-180" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Decorative Pattern */}
                <div className="mt-24 opacity-5 pointer-events-none">
                    <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent" />
                </div>
            </div>
        </main>
    )
}
