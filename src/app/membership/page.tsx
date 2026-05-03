import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Membership() {
    return null;
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="px-6 lg:px-24 py-5 flex items-center justify-between bg-black text-background">
                <Link href="/">
                    <h3 className="font-gloock text-3xl">Freaks</h3>
                </Link>
            </header>
            <section className="relative bg-amber-300 p-10 flex justify-center items-center">
                <h3 className="font-homemade-apple">Own your consistency</h3>
                {/* <Image src="/images/texture.png" fill alt="" className="h-auto w-full object-cover mix-blend-multiply "></Image> */}
            </section>
            <main className="flex-1 flex justify-center px-6 lg:px-24 py-5">
                <div className="grid-container">
                    <h2 className="font-eb-garamond text-4xl lg:text-5xl col-span-3 sticky">
                        Membership plans
                    </h2>
                    <div className="col-span-9 flex flex-row justify-center gap-5">
                        <div className="border border-gray-200 rounded-3xl flex flex-col items-center overflow-hidden  min-w-100">
                            <div className="border-b border-gray-200 aspect-video w-full"></div>

                            <div className="p-5 w-full">
                                <Link
                                    href="/membership"
                                    className="w-full flex flex-row justify-between items-center gap-5 py-1 pr-1 pl-7 rounded-full border"
                                >
                                    Become a member
                                    <div className="aspect-square p-1.5 rounded-full bg-background border">
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
                                </Link>

                                <p></p>
                                <ul>
                                    <li>Unlimited Habits</li>
                                    <li>Historical Data</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-3xl flex flex-col items-center overflow-hidden min-w-100">
                            <div className="border-b border-gray-200 aspect-video w-full"></div>
                            <div className="p-5 w-full">
                                <Link
                                    href="/membership"
                                    className="w-full flex flex-row justify-between items-center gap-5 py-1 pr-1 pl-7 rounded-full bg-black text-white"
                                >
                                    Coming soon Become a pro member
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
                                </Link>
                                <p>$1/month or $10/year</p>
                                <ul>
                                    <li>All free benefits</li>
                                    <span>plus</span>
                                    <li>All Artworks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
