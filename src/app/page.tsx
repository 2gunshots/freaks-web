import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Freaks",
        operatingSystem: "iOS",
        applicationCategory: "ProductivityApplication",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description:
            "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "1",
        },
    };

    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header */}
            <header className="border-b px-6 md:px-10 lg:px-24 py-4 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/freaks-black.svg"
                        alt="Freaks Logo"
                        width={80}
                        height={31}
                        style={{ height: "auto" }}
                    />
                </Link>
            </header>

            {/* Hero Section */}
            <main className="flex-1 relative flex items-center justify-between">
                <div className="max-w-3xl z-10 px-6 md:pl-10 lg:pl-24">
                    <div className=" pointer-events-none uppercase rounded-lg py-1 px-3 border w-fit mb-2.5">
                        <p className="text-xs font-medium font-inter select-none">
                            Join Early
                        </p>
                    </div>

                    <h1 className="font-eb-garamond font-semibold text-5xl lg:text-6xl  leading-none ">
                        Leave <span>Nothing</span> <br />
                        to Chance
                    </h1>
                    <h2 className="mt-4 md:mr-10 text-xl font-inter font-normal text-black/75 leading-relaxed">
                        Consistency changes everything.
                        <br />
                        Track your habits, see your progress and
                        become the person you want to be.
                    </h2>
                    <a
                        href="https://apps.apple.com/app/id6766063893"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Freaks on the App Store"
                        className="inline-flex rounded-full mt-6 hover:opacity-80 transition duration-300 "
                    >
                        <Button
                            text="Download for iOS"
                            className="pointer-events-none font-medium bg-accent md:bg-black text-background "
                            secondaryBackground="bg-accent"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                style={{ marginBottom: 3 }}
                                className="size-6 text-black "
                            >
                                <path
                                    fill="evenodd"
                                    clipRule="evenodd"
                                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"
                                />
                            </svg>
                        </Button>
                    </a>
                </div>
                <div>
                    <div className="relative">
                        <Image
                            className="hidden md:block mix-blend-multiply z-10 h-auto"
                            style={{ width: "clamp(320px, 45vw, 600px)" }}
                            src="/images/freaks-art.webp"
                            alt="Brand Art"
                            width={858}
                            height={750}
                            sizes="(max-width: 1024px) 45vw, 600px"
                            loading="eager"
                            priority
                        />
                    </div>
                </div>
            </main>

            <footer className="py-3 px-6 md:px-10 border-t flex flex-row items-center md:justify-center gap-3 md:gap-4 text-xs md:text-sm font-inter">
                <Link className="hover-click" href="/about">
                    About
                </Link>
                <Link className="hover-click" href="/help">
                    Help
                </Link>
                <Link className="hover-click" href="/privacy">
                    Privacy Policy
                </Link>
                <Link className="hover-click" href="/terms">
                    Terms & Conditions
                </Link>

                {/* <div>Contact</div> */}
            </footer>
        </div>
    );
}
