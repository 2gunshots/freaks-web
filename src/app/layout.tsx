import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const zodiak = localFont({
    src: [
        {
            path: "../../public/fonts/Zodiak-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/fonts/Zodiak-Thin.woff",
            weight: "100",
            style: "normal",
        },
    ],
    variable: "--font-zodiak",
    display: "swap",
    fallback: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Palatino", "Georgia", "serif"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://freaks.pro"),
    title: {
        default: "Freaks | Habit Tracking & Consistency",
        template: "%s | Freaks",
    },
    alternates: {
        canonical: "/",
    },
    description:
        "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
    applicationName: "Freaks",
    keywords: [
        "habit tracker",
        "consistency score",
        "streak builder",
        "productivity app",
        "iOS habit app",
        "self improvement",
        "routine tracker",
        "minimalist habit tracker",
        "private habit app",
        "data ownership",
        "habit consistency",
    ],
    authors: [{ name: "Freaks Team" }],
    creator: "Freaks",
    publisher: "Freaks",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: "/favicon.svg", type: "image/svg+xml" }, 
            { url: "/favicon.ico" },
            { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon.svg",
                color: "#000000",
            },
        ],
    },
    openGraph: {
        title: "Freaks | Habit Tracking & Consistency",
        description:
            "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
        url: "https://freaks.pro",
        siteName: "Freaks",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Freaks - Leave Nothing to Chance",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freaks | Habit Tracking & Consistency",
        description:
            "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
        images: ["/images/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${zodiak.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
