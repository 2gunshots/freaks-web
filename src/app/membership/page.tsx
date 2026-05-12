import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function Membership() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Header */}
            <Header />

            <main className="flex-1 flex flex-col justify-center px-6 lg:px-24 py-5">
                {/* <div className="grid-container"> */}
                <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-15">
                    <h1 className="font-eb-garamond text-3xl sm:text-4xl lg:text-5xl text-center w-full">
                        Freaks Pro Membership
                    </h1>
                    <div className="flex flex-row items-center justify-center font-inter">
                        {/* Monthly */}
                        <div
                            className="rounded-xl -mr-1 -rotate-5 shadow-[0_0_20px_rgba(0,0,0,0.1)] aspect-square
      w-30 h-30 sm:w-36 sm:h-36 md:w-48 md:h-48
      p-2.5 sm:p-4 md:p-5
      flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-medium font-inter text-[10px] sm:text-xs md:text-sm">
                                    Monthly
                                </h3>
                                <div className="flex flex-row items-baseline">
                                    <span className="font-bold text-[10px] sm:text-xs md:text-sm">
                                        $
                                    </span>
                                    <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl leading-none">
                                        4.99
                                    </h4>
                                    <div className="self-end font-medium text-[8px] sm:text-[9px] md:text-[10px] text-black/50 ml-0.5">
                                        /mo
                                    </div>
                                </div>
                            </div>
                            <p className="text-[7px] sm:text-[9px] md:text-xs text-black/50">
                                $4.99 paid every month.
                            </p>
                        </div>

                        {/* Lifetime */}
                        <div
                            className="relative rounded-xl mb-6 sm:mb-7 md:mb-8 bg-black aspect-square
      w-30 h-30 sm:w-36 sm:h-36 md:w-48 md:h-48
      p-2.5 sm:p-4 md:p-5
      text-background flex flex-col justify-between z-10"
                        >
                            <div>
                                <h3 className="font-medium font-inter text-[10px] sm:text-xs md:text-sm text-white">
                                    Lifetime
                                </h3>
                                <div className="flex flex-row items-baseline">
                                    <span className="font-bold text-[10px] sm:text-xs md:text-sm text-white">
                                        $
                                    </span>
                                    <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl leading-none text-white">
                                        69.99
                                    </h4>
                                </div>
                            </div>
                            <p className="text-[7px] sm:text-[9px] md:text-xs text-white/50">
                                $69.99 paid once.
                            </p>
                            <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-3 md:right-3">
                                <div
                                    className="rounded-full py-0.5 px-1.5 sm:px-2 md:px-3 bg-[#27451B] text-[#74B85C]
          text-[5px] sm:text-[8px] md:text-[9px] font-semibold whitespace-nowrap"
                                >
                                    Best Value
                                </div>
                            </div>
                        </div>

                        {/* Yearly */}
                        <div
                            className="relative rounded-xl rotate-5 -ml-1 shadow-[0_0_20px_rgba(0,0,0,0.1)] aspect-square
      w-30 h-30 sm:w-36 sm:h-36 md:w-48 md:h-48
      p-2.5 sm:p-4 md:p-5
      flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="font-medium font-inter text-[10px] sm:text-xs md:text-sm">
                                    Yearly
                                </h3>
                                <div className="flex flex-row items-baseline">
                                    <span className="font-bold text-[10px] sm:text-xs md:text-sm">
                                        $
                                    </span>
                                    <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl leading-none">
                                        2.49
                                    </h4>
                                    <div className="self-end font-medium text-[8px] sm:text-[9px] md:text-[10px] text-black/50 ml-0.5">
                                        /mo
                                    </div>
                                </div>
                            </div>
                            <p className="text-[7px] sm:text-[9px] md:text-xs text-black/50">
                                $29.99 paid every year.
                            </p>
                            <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 md:top-3 md:right-3">
                                <div
                                    className="rounded-full py-0.5 px-1.5 sm:px-2 md:px-3 bg-[#2B3D5C] text-[#97AFDA]
          text-[5px] sm:text-[8px] md:text-[9px] font-semibold whitespace-nowrap"
                                >
                                    Most Popular
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-3">
                    <p className="text-center font-inter font-medium">
                        It grows with you.
                    </p>

                    <p className="font-inter text-[10px] sm:text-xs text-center max-w-150 text-black/50">
                        You can track as many habits as you need across all your
                        disciplines, while seeing your consistency score through
                        simple progress charts. <br />A minimal calendar helps
                        you log your daily mood and journal notes, and you’ll
                        also get future access to exclusive artwork that reacts
                        to your consistency score.
                    </p>
                    <a
                        href="https://apps.apple.com/app/id6766063893"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download Freaks on the App Store"
                        className="inline-flex rounded-full mt-6 hover:opacity-80 transition duration-300 "
                    >
                        <Button
                            text="Download the app"
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
            </main>
            <Footer />
        </div>
    );
}
