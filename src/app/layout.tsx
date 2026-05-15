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
    openGraph: {
        title: "Freaks | Habit Tracking & Consistency",
        description:
            "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
        url: "https://freaks.pro",
        siteName: "Freaks",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Freaks | Habit Tracking & Consistency",
        description:
            "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
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
