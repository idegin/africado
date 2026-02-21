/**
 * Auto-generated Documentation for Africado Website CMS
 * Generated at: 2026-02-21T21:10:58.967Z
 */

export const IDEGIN_CLOUD_SECRET_KEY = process.env.IDEGIN_CLOUD_SECRET_KEY;
export const IDEGIN_CLOUD_BASE_URL = "https://idegin-cloud-backend.fly.dev/api/v1";

export type CMSFile = {
    id: string;
    filename: string;
    url: string;
    size: number;
    mimeType: string;
    uploadedAt: string;
}

export type PopulatedRelatedEntry<T = Record<string, unknown>> = {
    id: string;
    data: T;
}

export type CMSEntryMeta = {
    id: string;
    createdAt: string;
    updatedAt: string;
}

export type CMSPagination = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export type CMSListResponse<T> = {
    success: boolean;
    message: string;
    data: {
        entries: (CMSEntryMeta & { data: T })[];
        pagination: CMSPagination;
    };
}

export type CMSSingleResponse<T> = {
    success: boolean;
    message: string;
    data: CMSEntryMeta & { data: T };
}

export type CMSCountResponse = {
    success: boolean;
    message: string;
    data: { count: number };
}

export type CMSUpdateResponse<T> = CMSSingleResponse<T>;

export type CollectionSlug = "insights" | "our-services" | "our-testimonials" | "our-people" | "our-categories" | "our-clients";

export type Insights = {
    name: string;
    slug: string;
    thumbnail: CMSFile;
    excerpt: string;
    category: PopulatedRelatedEntry<OurCategories>;
    content: string;
}

export type OurServices = {
    name: string;
    slug: string;
    thumbnail: CMSFile;
    short_description: string;
    long_description: string;
    features: ({ feature: string })[];
    content: string;
}

export type OurTestimonials = {
    name: string;
    slug: string;
    quote: string;
    organization: string;
    rating: number;
}

export type OurPeople = {
    name: string;
    slug: string;
    thumbnail: CMSFile;
    role: string;
    linkedin_url: string;
}

export type OurCategories = {
    name: string;
    slug: string;
}

export type OurClients = {
    name: string;
    slug: string;
    logo: CMSFile;
}

export type CollectionTypeMap = {
    "insights": Insights;
    "our-services": OurServices;
    "our-testimonials": OurTestimonials;
    "our-people": OurPeople;
    "our-categories": OurCategories;
    "our-clients": OurClients;
};

async function cmsRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${IDEGIN_CLOUD_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${IDEGIN_CLOUD_SECRET_KEY}`,
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });
    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Request failed' }));
        throw new Error(error.message || `HTTP ${response.status}`);
    }
    return response.json();
}

export async function getAll<S extends CollectionSlug>(
    slug: S,
    options?: { page?: number; limit?: number; search?: string }
): Promise<CMSListResponse<CollectionTypeMap[S]>> {
    const params = new URLSearchParams();
    if (options?.page) params.set('page', options.page.toString());
    if (options?.limit) params.set('limit', options.limit.toString());
    if (options?.search) params.set('search', options.search);
    const query = params.toString();
    return cmsRequest(`/public/cms/collections/${slug}${query ? `?${query}` : ''}`);
}

export async function getById<S extends CollectionSlug>(
    slug: S,
    id: string
): Promise<CMSSingleResponse<CollectionTypeMap[S]>> {
    return cmsRequest(`/public/cms/collections/${slug}/${id}`);
}

export async function getBySlug<S extends CollectionSlug>(
    slug: S,
    entrySlug: string
): Promise<CMSSingleResponse<CollectionTypeMap[S]>> {
    return cmsRequest(`/public/cms/collections/${slug}/slug/${entrySlug}`);
}

export async function getCount<S extends CollectionSlug>(slug: S): Promise<CMSCountResponse> {
    return cmsRequest(`/public/cms/collections/${slug}/count`);
}

export async function update<S extends CollectionSlug>(
    slug: S,
    id: string,
    data: Partial<CollectionTypeMap[S]>
): Promise<CMSUpdateResponse<CollectionTypeMap[S]>> {
    return cmsRequest(`/public/cms/collections/${slug}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
}

/*
================================================================================
                           API QUERY EXAMPLES
================================================================================

Base URL: https://idegin-cloud-backend.fly.dev/api/v1/public/cms
All requests require the Authorization header: Bearer <SECRET_KEY>

--------------------------------------------------------------------------------
                              BASIC QUERIES
--------------------------------------------------------------------------------

# Get all entries with pagination
GET /collections/insights?page=1&limit=10

# Search entries
GET /collections/insights?search=hello&searchFields=name

# Get entry by ID
GET /collections/insights/entry-id-here

# Get entry by slug
GET /collections/insights/slug/my-entry-slug

# Get entry count
GET /collections/insights/count

--------------------------------------------------------------------------------
                              FILTERING
--------------------------------------------------------------------------------

# Filter operators: eq, ne, gt, gte, lt, lte, in, nin, contains, startsWith, endsWith

# Exact match
GET /collections/insights?filter[name][eq]=Hello World

# Not equal
GET /collections/insights?filter[status][ne]=draft

# Greater than / Less than (for numbers and dates)
GET /collections/insights?filter[price][gte]=100&filter[price][lte]=500

# Contains (partial match)
GET /collections/insights?filter[name][contains]=keyword

# Starts with / Ends with
GET /collections/insights?filter[name][startsWith]=Hello
GET /collections/insights?filter[name][endsWith]=World

# In list (comma-separated values)
GET /collections/insights?filter[status][in]=published,featured

# Not in list
GET /collections/insights?filter[status][nin]=draft,archived

# Multiple filters (AND logic)
GET /collections/insights?filter[status][eq]=published&filter[price][gte]=50

# Count with filters
GET /collections/insights/count?filter[status][eq]=published

--------------------------------------------------------------------------------
                              SORTING
--------------------------------------------------------------------------------

# Sort ascending
GET /collections/insights?sort=name

# Sort descending (prefix with -)
GET /collections/insights?sort=-createdAt

# Multiple sort fields (comma-separated)
GET /collections/insights?sort=-featured,name

--------------------------------------------------------------------------------
                           FIELD SELECTION
--------------------------------------------------------------------------------

# Select specific fields only (comma-separated)
GET /collections/insights?fields=name,slug,createdAt

# Combine with filtering and sorting
GET /collections/insights?filter[status][eq]=published&sort=-createdAt&fields=name,slug

--------------------------------------------------------------------------------
                          POPULATE CONTROL
--------------------------------------------------------------------------------

# By default, all relationship fields are populated

# Populate specific relationships only (comma-separated)
GET /collections/insights?populate=category

# Populate with field selection for related data
GET /collections/insights?populate[category]=name,slug

# Multiple relationships with field selection
GET /collections/insights?populate[category]=name&populate[author]=name,avatar

# Control populate depth
GET /collections/insights?populateDepth=2

--------------------------------------------------------------------------------
                            AGGREGATION
--------------------------------------------------------------------------------

# Count related entries (e.g., count posts per category)
GET /collections/categories?countRelation=insights&relationField=category

# Group by field with count
GET /collections/insights?groupBy=status

# Group by with aggregations
GET /collections/insights?groupBy=category&aggregate[views]=sum&aggregate[price]=avg

# Available aggregations: count, sum, avg, min, max

--------------------------------------------------------------------------------
                          DISTINCT VALUES
--------------------------------------------------------------------------------

# Get distinct values for a field
GET /collections/insights/distinct/status

GET /collections/insights/distinct/name

--------------------------------------------------------------------------------
                         COMPLETE EXAMPLES
--------------------------------------------------------------------------------

# Example 1: Blog listing with filters, sort, and field selection
GET /collections/insights?filter[status][eq]=published&sort=-createdAt&fields=name,slug,excerpt&page=1&limit=10

# Example 2: Search with pagination
GET /collections/insights?search=typescript&searchFields=name,content&page=1&limit=20

# Example 3: Related entries with selective population
GET /collections/insights?populate[category]=name,slug&populate[author]=name,avatar&fields=name,slug,category,author

# Example 4: Categories with post counts
GET /collections/categories?countRelation=insights&relationField=category

# Example 5: Entries in date range
GET /collections/insights?filter[createdAt][gte]=2024-01-01&filter[createdAt][lte]=2024-12-31&sort=-createdAt

================================================================================
*/