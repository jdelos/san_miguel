// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Define your collection(s) with clear loaders
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    draft: z.boolean().default(false),
    title: z.string(),
    snippet: z.string(),
    image: image(),
    imageAlt: z.string(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: ({ image }) => z.object({
    draft: z.boolean().optional().default(false),
    name: z.string(),
    displayName: z.string().optional(),
    role: z.string(),
    department: z.string(),
    image: image(),
    imagePosition: z.string().default('center top').optional(),
    order: z.number().optional(),
    startDate: z.union([z.string(), z.date()]).optional().transform(val => {
      if (val instanceof Date) {
        return val.toISOString().split('T')[0]; // Convert date to YYYY-MM-DD string
      }
      return val;
    }),
    isActive: z.boolean().optional().default(true),
  }),
});

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    displayTitle: z.string(),
    icon: z.string().default('bx:bxs-star'),
    price: z.string().optional(),
    order: z.number().default(1),
    isActive: z.boolean().default(true),
  }),
});

// Settings collection for global site settings
const settingsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/settings' }),
  schema: z.object({
    siteName: z.string(),
    siteDescription: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    address: z.string(),
  }),
});

// Pricing collection for pricing information
const pricingCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/pricing' }),
  schema: z.object({
    heroTitle: z.string(),
    heroDescription: z.string(),
    additionalServicesTitle: z.string(),
    laboratoryTitle: z.string(),
    laboratoryDescription: z.string(),
    radiologyTitle: z.string(),
    radiologyDescription: z.string(),
    pharmacyTitle: z.string(),
    pharmacyDescription: z.string(),
    surgeryTitle: z.string(),
    surgeryDescription: z.string(),
    priceDisclaimer: z.string(),
    showPricingTable: z.boolean().default(true),
    pricingTableTitle: z.string(),
    pricingCards: z.array(z.object({
      name: z.string(),
      price: z.string(),
      priceUSD: z.string().optional(),
      priceCOP: z.string().optional(),
      availability: z.string().optional(),
      isEmergency: z.boolean().default(false),
      features: z.array(z.string()),
      buttonText: z.string(),
      buttonLink: z.string(),
    })),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{mdx,md}', base: './src/content/pages' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    heroBackgroundType: z.enum(['gradient', 'image']),
    heroBackgroundImage: z.string().nullable().optional(),
    heroBackgroundImageAlt: z.string().nullable().optional(),
    blocks: z.array(z.any()),
    isPublished: z.boolean().default(true),
    order: z.number().default(1),
    showInNavigation: z.boolean().default(true),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'services': servicesCollection,
  'pages': pagesCollection,
  'settings': settingsCollection,
  'pricing': pricingCollection,
};
