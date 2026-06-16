import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Preview from "@/components/Preview";
import HabitCard from "@/components/HabitCard";
import HeroImage from "@/components/HeroImage";
export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Freaks",
        url: "https://freaks.pro",
        operatingSystem: "iOS",
        applicationCategory: "ProductivityApplication",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description:
            "Track habits, build streaks, and stay consistent. Own your data and see the 'freak' in yourself with our organic consistency score.",
    };

    return (
        <div className=" w-screen overflow-hidden flex flex-col bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header */}
            <header className="border-b px-6 md:px-10 lg:px-24 py-4 flex items-center justify-between bg-black">
                <Link href="/">
                    <Image
                        src="/images/freaks-white.svg"
                        alt="Freaks Logo"
                        width={80}
                        height={31}
                        style={{ height: "auto" }}
                    />
                </Link>
            </header>

            {/* Hero Section */}
            <main className="relative w-full h-[calc(100svh-74px)] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black overflow-hidden">
                    <HeroImage />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full">
                    <h1 className="font-inter font-thin text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[1] tracking-tight text-white drop-shadow-sm mix-blend-difference">
                        Build better
                        <br />
                        <span className="font-zodiak italic font-light lowercase">habits.</span>
                    </h1>

                    <p className="mt-8 text-sm md:text-base lg:text-lg font-inter font-light text-white/90 max-w-md tracking-wider leading-relaxed mix-blend-difference">
                       A simple place to track habits, jot down notes and just see how you're doing over time.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
                        <a
                            href="https://apps.apple.com/app/id6766063893"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Freaks on the App Store"
                            className="inline-flex rounded-2xl bg-black px-3 py-2.5 pr-6 text-white transition duration-300 hover:opacity-85 sm:px-4 sm:py-3 sm:pr-12"
                        >
                            <span className="flex items-center gap-2.5 sm:gap-3">
                                <span className="flex h-11 w-11 items-center justify-center sm:h-14 sm:w-14">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-8 text-white sm:size-10"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"
                                        />
                                    </svg>
                                </span>
                                <span className="flex flex-col items-start justify-center whitespace-nowrap leading-none">
                                    <span className="font-inter text-[8px] font-medium -mb-0.5 sm:text-[9px] sm:-mb-1">
                                        Download on the
                                    </span>
                                    <span className="mt-1 font-inter text-lg font-medium tracking-tight sm:text-xl">
                                        App Store
                                    </span>
                                </span>
                            </span>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.aarya.freaks"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Download Freaks on the Play Store"
                            className="inline-flex rounded-2xl bg-black px-3 py-2.5 pr-6 text-white transition duration-300 hover:opacity-85 sm:px-4 sm:py-3 sm:pr-12"
                        >
                            <span className="flex items-center gap-2.5 sm:gap-3">
                                <span className="flex h-11 w-11 items-center justify-center sm:h-14 sm:w-14">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-9 text-white sm:size-11"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m12.954 11.616l2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016zm3.461 3.462l3.074-1.729c.6-.336.929-.812.929-1.34c0-.527-.329-1.004-.928-1.34l-2.783-1.563l-3.133 3.132zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098zm8.854 8.855L4.902 20.91q.232.09.495.09q.47 0 .968-.276l9.255-5.197z"
                                            strokeWidth={0}
                                            stroke="currentColor"
                                        />
                                    </svg>
                                </span>
                                <span className="flex flex-col items-start justify-center whitespace-nowrap leading-none">
                                    <span className="font-inter text-[8px] font-medium -mb-0.5 sm:text-[9px] sm:-mb-1">
                                        Download on the
                                    </span>
                                    <span className="mt-1 font-inter text-lg font-medium tracking-tight sm:text-xl">
                                        Play Store
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </main>

            <section className="mt-24 md:mt-48 mb-24 flex flex-col w-full">
                <div className="px-6 md:px-10 lg:px-24 mb-12 md:mb-20 flex flex-col items-center text-center">
                    <h2 className="font-inter font-light text-4xl md:text-5xl lg:text-6xl tracking-tight text-black">
                        Clarity in <span className="font-zodiak italic font-extralight text-gray-500 lowercase">motion.</span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg font-inter font-light text-gray-600 max-w-2xl leading-relaxed tracking-wide">
                        Everything you need to track, reflect, and grow, beautifully organized in one minimal interface.
                    </p>
                </div>
                <Preview />
            </section>

            <HabitCard />

            <footer className="py-5 px-6 md:px-10 border-t border-white/25 flex flex-row items-center md:justify-center gap-3 md:gap-4 text-xs md:text-sm font-inter bg-black text-white">
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
