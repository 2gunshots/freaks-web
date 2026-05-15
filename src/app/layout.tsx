import type { Metadata } from "next";
import { EB_Garamond, Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
    weight: ["400", "500", "600"],
    variable: "--font-libre-baskerville",
    subsets: ["latin"],
});

const inter = Inter({
    weight: ["400", "500", "600", "700", "800"],

    variable: "--font-inter",
    subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
    weight: ["400", "500", "600"],
    variable: "--font-eb-garamond",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://freaks.pro"),
    title: {
        default: "Freaks | Habit Tracking & Consistency",
        template: "%s | Freaks",
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
        <html
            lang="en"
            className={`${inter.variable} ${ebGaramond.variable} ${libreBaskerville.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
