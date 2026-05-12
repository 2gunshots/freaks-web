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
    title: {
        default: "Freaks",
        template: "%s | Freaks",
    },
    description:
        "Freaks helps you track habits, build streaks, and stay consistent.",
    applicationName: "Freaks",
    openGraph: {
        title: "Freaks",
        description:
            "Track habits, build streaks, and stay consistent with Freaks.",
        siteName: "Freaks",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Freaks",
        description:
            "Track habits, build streaks, and stay consistent with Freaks.",
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
