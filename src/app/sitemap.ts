import type { MetadataRoute } from 'next';

const BASE_URL = 'https://barundental.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
        // Clinic
        { path: '/clinic/story', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/clinic/doctor', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/clinic/facility', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/clinic/visit', priority: 0.9, changeFrequency: 'monthly' as const },
        // Implant
        { path: '/implant/guide', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/implant/digital', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/implant/advanced', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/implant/redo', priority: 0.8, changeFrequency: 'monthly' as const },
        // Aesthetic
        { path: '/aesthetic/whitening', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/aesthetic/laminate', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/aesthetic/ceramic', priority: 0.8, changeFrequency: 'monthly' as const },
        // Surgery
        { path: '/surgery/wisdom', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/surgery/painless', priority: 0.7, changeFrequency: 'monthly' as const },
        // Preservation
        { path: '/preservation/microscope', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/preservation/cavity', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/preservation/gum', priority: 0.8, changeFrequency: 'monthly' as const },
        // Community
        { path: '/community/notice', priority: 0.6, changeFrequency: 'weekly' as const },
        { path: '/community/review', priority: 0.6, changeFrequency: 'weekly' as const },
        { path: '/community/consult', priority: 0.9, changeFrequency: 'monthly' as const },
        // Legal
        { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
