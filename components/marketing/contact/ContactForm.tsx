"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import { IconSend, IconLoader2, IconCircleCheck } from "@tabler/icons-react"

export function ContactForm({ services }: { services: { name: string; slug: string }[] }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Trigger auto-reply alert (simulated logic)
        console.log("Auto-reply email sent with tax clearance and PENCOM compliance certificates attached.")
    }

    if (isSubmitted) {
        return (
            <div className="bg-card border border-border p-8 md:p-12 rounded-2xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                    <IconCircleCheck size={40} />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Inquiry Received!</h3>
                    <p className="text-muted-foreground text-lg">
                        Thank you for reaching out. We've sent an auto-reply to your email with our tax clearance and PENCOM compliance certificates.
                    </p>
                </div>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-none">
                    Send Another Inquiry
                </Button>
            </div>
        )
    }

    return (
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Form Header */}
            <div className="mb-10">
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">Complete the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field>
                        <FieldLabel htmlFor="full-name">Full Name <span className="text-primary">*</span></FieldLabel>
                        <Input id="full-name" placeholder="John Doe" required className="rounded-none h-12" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="org-name">Organization Name <span className="text-primary">*</span></FieldLabel>
                        <Input id="org-name" placeholder="Acme Corp Ltd" required className="rounded-none h-12" />
                    </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field>
                        <FieldLabel htmlFor="job-title">Job Title / Position <span className="text-primary">*</span></FieldLabel>
                        <Input id="job-title" placeholder="Managing Director" required className="rounded-none h-12" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email">Email Address <span className="text-primary">*</span></FieldLabel>
                        <Input id="email" type="email" placeholder="john@organization.ng" required className="rounded-none h-12" />
                    </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field>
                        <FieldLabel htmlFor="phone">Phone Number <span className="text-primary">*</span></FieldLabel>
                        <Input id="phone" type="tel" placeholder="+234 000 000 0000" pattern="^(\+234|0)[7-9][01]\d{8}$" required className="rounded-none h-12" />
                    </Field>
                    <Field>
                        <FieldLabel>Service Interest <span className="text-primary">*</span></FieldLabel>
                        <Select required>
                            <SelectTrigger className="w-full min-h-12 rounded-none border-input">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                {services.map((service) => (
                                    <SelectItem key={service.slug} value={service.slug}>{service.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field>
                        <FieldLabel>Organization Type <span className="text-primary">*</span></FieldLabel>
                        <Select required>
                            <SelectTrigger className="w-full min-h-12 rounded-none border-input">
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="corporate">Corporate</SelectItem>
                                <SelectItem value="government">Government Agency</SelectItem>
                                <SelectItem value="sme">SME</SelectItem>
                                <SelectItem value="ngo">NGO / Development Partner</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel>Project Timeline</FieldLabel>
                        <Select>
                            <SelectTrigger className="w-full min-h-12 rounded-none border-input">
                                <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="immediate">Immediate (&lt; 30 days)</SelectItem>
                                <SelectItem value="short">1–3 months</SelectItem>
                                <SelectItem value="medium">3–6 months</SelectItem>
                                <SelectItem value="exploring">Exploring options</SelectItem>
                            </SelectContent>
                        </Select>
                    </Field>
                </div>

                <Field>
                    <FieldLabel htmlFor="message">Message <span className="text-primary">*</span></FieldLabel>
                    <Textarea
                        id="message"
                        placeholder="Describe your project needs, challenges, or training requirements"
                        required
                        className="rounded-none min-h-[150px]"
                    />
                </Field>

                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <input type="checkbox" id="consent" required className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                        <label htmlFor="consent" className="text-sm text-muted-foreground leading-snug">
                            I consent to Africado processing my data for professional engagement purposes
                            in accordance with their GDPR-compliant privacy policy.
                        </label>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-14 rounded-none text-lg font-bold transition-all"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <IconLoader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing Inquiry...
                        </>
                    ) : (
                        <>
                            Submit Inquiry
                            <IconSend className="ml-2 h-5 w-5" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    )
}
