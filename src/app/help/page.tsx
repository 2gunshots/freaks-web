import Footer from "@/components/Footer";
import ContactUsForm from "@/components/ContactUsForm";
import Link from "next/link";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Help Center",
    alternates: {
        canonical: "/help",
    },
    description:
        "Find guides on how to use Freaks, understand your consistency score, and get the most out of your habit tracking journey.",
    keywords: [
        "Freaks help center",
        "how to track habits",
        "consistency score explained",
        "habit tracker guide",
        "Freaks app support",
    ],
    openGraph: {
        title: "Help Center | Freaks",
        description:
            "Everything you need to know about tracking habits and staying consistent with Freaks.",
        type: "website",
    },
};

export default function Help() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center px-6 mt-30">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                                   font-eb-garamond text-lg lg:text-xl
                                   leading-relaxed space-y-6 py-16 font-libre-baskerville"
                >
                    <h1 className="text-3xl lg:text-5xl font-semibold text-center">
                        How can we help?
                    </h1>
                    <Link
                        href="/help/getting-started"
                        className="flex flex-row items-center justify-between gap-3"
                    >
                        <section className="flex-1 flex flex-col gap-1 border border-gray-300 rounded-xl p-4 hover:bg-gray-300 transition cursor-pointer duration-300">
                            <div className="flex flex-row items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1}
                                    stroke="currentColor"
                                    className="size-9"
                                >
                                    <path
                                        d="M10.5857 10.5857L16.9496 7.0502L13.4141 13.4142L7.05012 16.9497L10.5857 10.5857Z"
                                        // strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        // strokeWidth={1.5}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                <h3>Getting Started</h3>
                            </div>
                            <div>
                                <p className="font-sans text-xs sm:text-sm text-gray-600 font-inter">
                                    Discover how to get started with Freaks,
                                    understand its core features, and make the
                                    most of your experience.
                                </p>
                            </div>
                        </section>
                    </Link>
                </article>
            </main>
            <ContactUsForm />
            <Footer backgroundColor="bg-accent" border={false} />
        </div>
    );
}
