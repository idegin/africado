"use client"

import { IconCertificate, IconShieldCheck, IconFileSettings, IconBuildingBank, IconTargetArrow, IconUserCheck, IconBriefcase } from "@tabler/icons-react"

const credentials = [
    {
        name: "CAC Certificate",
        id: "RC 1802273",
        authority: "Corporate Affairs Commission",
        icon: IconCertificate
    },
    {
        name: "CMD Accreditation",
        id: "No. CMD/ACD/TWC/ABJ/852/2025",
        authority: "Nigerian Council for Management Development",
        icon: IconShieldCheck
    },
    {
        name: "NITDA Registration",
        id: "NITDA/71470893",
        authority: "National IT Development Agency",
        icon: IconFileSettings
    },
    {
        name: "COREN Category A License",
        id: "No. 011590/2025",
        authority: "Eligible for IT contracts >₦250M",
        icon: IconBuildingBank
    },
    {
        name: "Tax Clearance Certificate",
        id: "TCC No: 225452255704",
        authority: "Valid through Dec 31, 2025",
        icon: IconTargetArrow
    },
    {
        name: "PENCOM Compliance",
        id: "PCC000490366",
        authority: "Pension Reform Act 2014 adherence",
        icon: IconUserCheck
    },
    {
        name: "NSITF ECS Clearance",
        id: "No. 00000415136",
        authority: "Employees' Compensation Act compliance",
        icon: IconBriefcase
    }
]

export function Credentials() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Credentials</h2>
                        <p className="text-xl text-gray-400">
                            Verified certifications from national regulatory bodies ensuring full compliance for
                            major scale contracts and specialized engagements.
                        </p>
                    </div>
                    <div className="bg-primary px-6 py-4 font-bold rounded-none uppercase tracking-widest text-sm">
                        Total Compliance Verified
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {credentials.map((cred, index) => (
                        <div key={index} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all rounded-none group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                            <cred.icon className="text-primary mb-6" size={40} strokeWidth={1.5} />
                            <h4 className="text-xl font-bold mb-2">{cred.name}</h4>
                            <p className="text-primary font-mono text-sm mb-4">{cred.id}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold border-t border-white/10 pt-4">
                                {cred.authority}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
