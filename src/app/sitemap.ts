import { MetadataRoute } from "next";

const LAST_MODIFIED = new Date("2026-06-15");

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://freaks.pro",
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://freaks.pro/about",
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://freaks.pro/help",
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: "https://freaks.pro/help/getting-started",
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: "https://freaks.pro/privacy",
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.3,
        },
        {
            url: "https://freaks.pro/terms",
            lastModified: LAST_MODIFIED,
            changeFrequency: "monthly",
            priority: 0.3,
        },
    ];
}
