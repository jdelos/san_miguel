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

const homepageCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/homepage' }),
  schema: ({ image }) => z.object({
    heroImage: image(),
    heroImageAlt: z.string(),
    title: z.string(),
    subtitle: z.string(),
    welcomeTitle: z.string(),
    welcomeDescription: z.string(),
    teamSectionTitle: z.string(),
    teamSectionDescription: z.string(),
    servicesSectionTitle: z.string(),
    servicesSectionDescription: z.string(),
    privacyNotice: z.string(),
    servicesTitle: z.string(),
    servicesDescription: z.string(),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/about' }),
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    historyTitle: z.string(),
    historyContent: z.string(),
    fundingTitle: z.string(),
    fundingContent: z.string(),
    locationTitle: z.string(),
    locationContent: z.string(),
    researchTitle: z.string(),
    researchContent: z.string(),
  }),
});

const foundationCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/foundation' }),
  schema: z.object({
    pageTitle: z.string(),
    pageDescription: z.string(),
    mainTitle: z.string(),
    mainContent: z.string(),
    internationalTitle: z.string(),
    internationalContent: z.string(),
    teamTitle: z.string(),
    teamContent: z.string(),
    missionTitle: z.string(),
    missionContent: z.string(),
    fundingTitle: z.string(),
    fundingContent: z.string(),
    supportCallToAction: z.string(),
    foundersTitle: z.string(),
    jacobTitle: z.string(),
    jacobDescription: z.string(),
    carolienTitle: z.string(),
    carolienDescription: z.string(),
  }),
});

const siteSettingsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/settings' }),
  schema: z.object({
    siteName: z.string(),
    siteDescription: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
    address: z.string(),
    socialMedia: z.array(z.string()).optional(),
    emergencyHours: z.string(),
    consultationHours: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'services': servicesCollection,
  'homepage': homepageCollection,
  'about': aboutCollection,
  'foundation': foundationCollection,
  'settings': siteSettingsCollection,
};
