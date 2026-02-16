'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { IconRotateClockwise, IconAlertTriangle } from '@tabler/icons-react'
import Link from 'next/link'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="min-h-[80vh] flex items-center justify-center bg-background">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-primary/10 text-primary rounded-none border-2 border-primary">
                    <IconAlertTriangle size={48} strokeWidth={2.5} />
                </div>

                <div className="space-y-6 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 border-l-4 border-primary pl-4">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">System Exception</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-none">
                        Strategic <span className="text-primary italic">Interruption</span>
                    </h1>
                    <p className="text-muted-foreground font-medium text-lg leading-relaxed uppercase tracking-tight">
                        An unexpected technical friction occurred while processing your request. Our systems have logged this event for analysis.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button
                            onClick={() => reset()}
                            size="lg"
                            className="h-16 px-10 rounded-none text-xs font-black uppercase tracking-widest bg-primary hover:bg-primary/90 transition-all"
                        >
                            <IconRotateClockwise className="mr-2 h-4 w-4" />
                            Attempt Recovery
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-16 px-10 rounded-none text-xs font-black uppercase tracking-widest border-2 border-border"
                            asChild
                        >
                            <Link href="/">
                                Return to Safety
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-12 text-[10px] uppercase font-black tracking-widest text-muted-foreground opacity-50">
                        Error ID: {error.digest || 'Institutional-Exception-001'}
                    </div>
                </div>
            </div>
        </main>
    )
}
