import {
    IconSchool,
    IconChess,
    IconMicroscope,
    IconDevices,
    IconTruckDelivery,
    TablerIcon
} from "@tabler/icons-react"

export interface Service {
    id: string
    title: string
    description: string
    longDescription: string
    features: string[]
    image: string
    icon: TablerIcon
}

export const services: Service[] = [
    {
        id: "training-capacity-building",
        title: "Training & Capacity Building",
        description: "We empower your workforce through bespoke learning experiences designed to drive excellence and innovative thinking.",
        longDescription: "Our comprehensive training programs are tailored to address the unique challenges of African organizations. We combine international best practices with local market insights to deliver impactful human capital development. From entry-level workshops to executive leadership coaching, we provide the tools your team needs to thrive in a competitive landscape.",
        features: [
            "Executive Leadership Coaching",
            "Technical & Vocational Workshops",
            "Soft Skills & Productivity Training",
            "Organizational Culture Alignment",
            "Customized E-learning Solutions",
            "Performance Management Systems"
        ],
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
        icon: IconSchool,
    },
    {
        id: "strategy-development",
        title: "Strategy Development",
        description: "Transform your vision into actionable reality with data-driven strategic planning and implementation support.",
        longDescription: "We help organizations navigate complex market dynamics by developing robust strategies that ensure long-term sustainability and competitive advantage in the West African landscape. Our approach involves deep market analysis, stakeholder mapping, and the creation of lean, efficient operational frameworks.",
        features: [
            "Corporate Strategic Planning",
            "Market Entry & Expansion Support",
            "Operational Excellence Audits",
            "Change Management Frameworks",
            "Business Process Re-engineering",
            "Sustainability & ESG Advisory"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        icon: IconChess,
    },
    {
        id: "research-development",
        title: "Research & Development",
        description: "Informed decision-making starts with rigorous analysis. We provide the insights you need to lead with confidence.",
        longDescription: "Our R&D team specializes in evidence-based research, conducting deep dives into market trends, social impact, and feasibility to de-risk your most ambitious projects. We utilize both qualitative and quantitative methodologies to provide a holistic view of the African market potential.",
        features: [
            "Market Research & Consumer Insights",
            "Feasibility & Diagnostic Studies",
            "Socio-Economic Impact Assessments",
            "Innovation Strategy Lab",
            "Policy Analysis & Advocacy",
            "Data Analytics & Visualization"
        ],
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
        icon: IconMicroscope,
    },
    {
        id: "it-integration",
        title: "IT Integration",
        description: "Accelerate your digital transformation journey with seamless technology integration and modern infrastructure.",
        longDescription: "From software implementation to robust IT security, we provide end-to-end digital solutions that optimize workflows and enhance organizational resilience. We bridge the gap between business objectives and technological possibilities, ensuring your digital assets are scalable and secure.",
        features: [
            "Enterprise Software Deployment",
            "Digital Transformation Roadmaps",
            "Cloud Infrastructure Management",
            "Cybersecurity & Data Protection",
            "Custom API & Systems Integration",
            "IT Governance & Audit"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        icon: IconDevices,
    },
    {
        id: "general-contracts-supplies",
        title: "General Contracts & Supplies",
        description: "Reliable procurement and logistics management to keep your operations running smoothly, every day.",
        longDescription: "Leverage our extensive supply chain network and project management expertise to ensure timely delivery of high-quality goods and services for your organization. We manage the entire lifecycle of procurement, from vendor selection to final delivery and maintenance.",
        features: [
            "Strategic Procurement Services",
            "End-to-End Logistics Management",
            "Facility Maintenance & Supplies",
            "Robust Vendor Management",
            "Quality Assurance Controls",
            "Global Sourcing Solutions"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        icon: IconTruckDelivery,
    }
]

export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    author: string
    category: string
    image: string
}

export const blogPosts: BlogPost[] = [
    {
        id: "digital-transformation-public-sector",
        title: "Digital Transformation in Nigerian Public Sector",
        excerpt: "How government agencies are leveraging modern IT infrastructure to improve service delivery through transparent digital workflows.",
        content: `
            The Nigerian public sector is undergoing a massive shift towards digitalization. In this article, we explore how agencies like NIMC and FIRS are leading the way...
            
            As African nations strive for greater transparency and efficiency in governance, the role of IT integration becomes paramount. Digital transformation is not just about moving from paper to screen; it's about re-engineering the very core of public service delivery.
            
            Key areas of impact include:
            1. **Electronic Documentation Management**: Reducing the reliance on physical files and ensuring data integrity.
            2. **Automated Tax Systems**: Streamlining revenue collection and reducing leakages.
            3. **Digital Identity**: Creating a unified citizen database for better service allocation.
            
            Africado Integrated Services has been at the forefront of this revolution, providing the strategic roadmap and technical training necessary to sustain these digital advancements.
        `,
        date: "May 12, 2024",
        author: "Godwin Onime",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "future-human-capital",
        title: "The Future of Human Capital Development",
        excerpt: "Strategies for organizations to build resilient and highly skilled workforces in the AI era. Focus on lifelong learning.",
        content: `
            The rapid advancement of artificial intelligence is fundamentally changing the nature of work. To remain competitive, African organizations must prioritize human capital development like never before.
            
            Reskilling and upskilling are no longer optional—they are survival imperatives...
        `,
        date: "April 28, 2024",
        author: "Chinwe Okoro",
        category: "Human Capital",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "sme-expansion-strategy",
        title: "Strategic Planning for SME Expansion",
        excerpt: "Key considerations for small and medium enterprises looking to scale across West African hubs like Accra and Dakar.",
        content: `
            Expanding into new markets requires more than just capital; it requires a deep understanding of local regulatory landscapes and cultural nuances. 
            
            West Africa offers unique opportunities for growth...
        `,
        date: "March 15, 2024",
        author: "Sarah Adebayo",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: "research-methodologies-africa",
        title: "Research Methodologies in Emerging Markets",
        excerpt: "Navigating the complexities of data collection and consumer behavior analysis within the diverse socio-economic landscapes of West Africa.",
        content: `
            Data is the new oil, but in emerging markets, refining it requires specialized tools. Traditional research methodologies often fall short in the face of infrastructure challenges and fragmented markets.
            
            We discuss the transition from traditional surveys to real-time digital monitoring...
        `,
        date: "February 20, 2024",
        author: "Musa Ibrahim",
        category: "Market Research",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
    }
]
