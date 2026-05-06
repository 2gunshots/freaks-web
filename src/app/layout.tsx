import type { Metadata } from "next";
import { EB_Garamond, Gloock, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
    // weight: ["400", "700"],
    variable: "--font-libre-baskerville",
    subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
    variable: "--font-eb-garamond",
    subsets: ["latin"],
});

const gloock = Gloock({
    weight: ["400"],
    variable: "--font-gloock",
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
            className={` ${ebGaramond.variable} ${gloock.variable} ${libreBaskerville.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
