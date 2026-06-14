import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://freaks.pro/sitemap.xml",
        host: "https://freaks.pro",
    };
}
