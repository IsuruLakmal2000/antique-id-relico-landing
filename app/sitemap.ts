import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://antiqueidentifier.site';

    // Static pages
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'yearly' as const,
            priority: 0.4,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'yearly' as const,
            priority: 0.4,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/authors/isuru`,
            lastModified: new Date('2026-11-17'),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ];

    // Blog posts
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated ?? post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
