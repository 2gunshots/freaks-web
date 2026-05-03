import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col">
            {/* Header */}
            <header className="border-b px-6 md:px-10 lg:px-24 py-5 flex items-center justify-between">
                <Link href="/">
                    <h3 className="font-gloock text-3xl">Freaks</h3>
                </Link>

                {/* <div className="flex gap-6 text-sm">
                    <Link href="/about">Our Story</Link>
                    <Link href="/membership">Membership</Link>
                </div> */}
            </header>

            {/* Hero Section */}
            <main className="flex-1 relative flex items-center justify-between">
                <div className="max-w-3xl z-10 px-6 md:pl-10 lg:pl-24">
                    <h2 className="font-eb-garamond font-medium text-7xl lg:text-8xl leading-none ">
                        Leave nothing <br />
                        to chance
                    </h2>
                    <h3 className="mt-4 text-xl font-sans font-normal">
                        Track habits. Build streaks. Stay consistent.
                    </h3>

                    <div
                        // href="/membership"
                        className="pointer-events-none w-fit flex flex-row justify-between items-center gap-5 py-1 pr-1 pl-7 rounded-full bg-accent md:bg-black text-background mt-10"
                    >
                        {/* Become a member */}
                        Coming Soon
                        <div className="aspect-square p-1.5 rounded-full bg-background">
                            <svg
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="currentColor"
                                className="size-7 text-black"
                            >
                                <path
                                    d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <Image
                            className="hidden md:block mix-blend-multiply z-10 w-150 h-auto"
                            src="/images/freaks-art.webp"
                            alt="Brand Art"
                            width={858}
                            height={750}
                            sizes="600px"
                            loading="eager"
                        />
                        {/* <StarField /> */}
                    </div>
                </div>
            </main>
            {/* <ShootingStarField
                src="/images/comet.png"
                count={3}
                width={400}
                height={160}
            /> */}
            <footer className="py-4 px-6 md:px-10 border-t flex flex-row items-center md:justify-center gap-3 md:gap-4 text-xs md:text-sm">
                {/* <div>Copyright © 2023 Freaks</div>*/}
                <Link className="hover-click" href="/about">
                    About
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
