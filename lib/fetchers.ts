import { unstable_cache } from "next/cache"
import {
    getAll,
    getBySlug,
    IDEGIN_CLOUD_BASE_URL,
    IDEGIN_CLOUD_SECRET_KEY,
    type OurServices,
    type Insights,
    type OurTestimonials,
    type OurCategories,
    type OurClients,
    type OurPeople,
    type CMSEntryMeta,
    type CMSListResponse,
} from "./cms"

export type ServiceEntry = CMSEntryMeta & { data: OurServices }
export type InsightEntry = CMSEntryMeta & { data: Insights }
export type TestimonialEntry = CMSEntryMeta & { data: OurTestimonials }
export type CategoryEntry = CMSEntryMeta & { data: OurCategories }
export type ClientEntry = CMSEntryMeta & { data: OurClients }
export type PeopleEntry = CMSEntryMeta & { data: OurPeople }

export const getServices = unstable_cache(
    async (): Promise<ServiceEntry[]> => {
        const res = await getAll("our-services")
        return res.data.entries
    },
)

export const getLatestInsights = unstable_cache(
    async (): Promise<InsightEntry[]> => {
        const res = await getAll("insights", { limit: 3, page: 1 })
        return res.data.entries
    },
)

export const getTestimonials = unstable_cache(
    async (): Promise<TestimonialEntry[]> => {
        const res = await getAll("our-testimonials")
        return res.data.entries
    },
    ["testimonials"],
    { revalidate: 3600 }
)

export const getInsights = unstable_cache(
    async (page = 1, limit = 10): Promise<{ entries: InsightEntry[]; pagination: { total: number; page: number; limit: number; totalPages: number } }> => {
        const res = await getAll("insights", { page, limit })
        return { entries: res.data.entries, pagination: res.data.pagination }
    },
)

export const getServiceBySlug = unstable_cache(
    async (slug: string): Promise<ServiceEntry | null> => {
        try {
            const res = await getBySlug("our-services", slug)
            return res.data
        } catch {
            return null
        }
    },
)

export const getInsightBySlug = unstable_cache(
    async (slug: string): Promise<InsightEntry | null> => {
        try {
            const res = await getBySlug("insights", slug)
            return res.data
        } catch {
            return null
        }
    },
)

export const getCategories = unstable_cache(
    async (): Promise<CategoryEntry[]> => {
        const res = await getAll("our-categories")
        return res.data.entries
    },
)

export const getClients = unstable_cache(
    async (): Promise<ClientEntry[]> => {
        const res = await getAll("our-clients")
        return res.data.entries
    },
)

export const getPeople = unstable_cache(
    async (): Promise<PeopleEntry[]> => {
        const res = await getAll("our-people")
        return res.data.entries
    },
)

async function cmsRawRequest<T>(path: string): Promise<T> {
    const res = await fetch(`${IDEGIN_CLOUD_BASE_URL}${path}`, {
        headers: {
            Authorization: `Bearer ${IDEGIN_CLOUD_SECRET_KEY}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
    })
    if (!res.ok) {
        const error = await res.json().catch(() => ({ message: "Request failed" }))
        throw new Error(error.message || `HTTP ${res.status}`)
    }
    return res.json()
}

export async function queryInsights(opts: {
    page?: number
    limit?: number
    search?: string
    categoryId?: string
    sort?: string
}): Promise<{ entries: InsightEntry[]; pagination: { total: number; page: number; limit: number; totalPages: number } }> {
    const params = new URLSearchParams()
    if (opts.page) params.set("page", String(opts.page))
    if (opts.limit) params.set("limit", String(opts.limit))
    if (opts.search) {
        params.set("search", opts.search)
        params.set("searchFields", "name,content,excerpt")
    }
    if (opts.categoryId) params.set("filter[category][eq]", opts.categoryId)
    if (opts.sort) params.set("sort", opts.sort)
    else params.set("sort", "-createdAt")

    const query = params.toString()
    const res = await cmsRawRequest<CMSListResponse<Insights>>(
        `/public/cms/collections/insights${query ? `?${query}` : ""}`
    )
    return { entries: res.data.entries, pagination: res.data.pagination }
}

export async function getCategoryBySlug(slug: string): Promise<CategoryEntry | null> {
    try {
        const res = await getBySlug("our-categories", slug)
        return res.data
    } catch {
        return null
    }
}
