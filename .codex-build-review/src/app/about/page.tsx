import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="px-6 lg:px-24 py-5 flex items-center justify-between bg-black text-background">
                <Link href="/">
                    <h3 className="font-gloock text-3xl">Freaks</h3>
                </Link>
                {/* <div className="flex gap-6 text-sm">
                    <Link href="/membership">Membership</Link>
                </div> */}
            </header>

            {/* Centered Blog Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                                   font-eb-garamond text-lg lg:text-xl
                                   leading-relaxed space-y-6 py-16 font-libre-baskerville"
                >
                    <h2 className="text-3xl lg:text-5xl font-semibold">
                        Our Story
                    </h2>
                    <section className="space-y-3">
                        <p>
                            Say the word ‘consistency’ and it sounds like
                            routine, repetition, and nothing worth talking
                            about.
                        </p>

                        <p>
                            But when you look at anyone who is actually great at
                            what they do, the guitarists with calloused fingers,
                            the coders who see logic in their sleep, the runners
                            who hit the pavement in the pouring rain, you
                            realize they aren't just "consistent." They’re
                            obsessed. They’re all in.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h3 className=" ">Potential Demands Action</h3>

                        <p>
                            We’re all told we have "unlimited potential." It’s a
                            nice sentiment, but potential doesn't actually mean
                            anything if it’s just sitting there.
                        </p>
                        <p>
                            The only way to actually cash in on that potential
                            is through the quiet, often invisible work of
                            practice. Not the glamorous, montage-worthy
                            practice, but the "I really don't want to do this
                            today" kind of practice.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h3 className="">Where Consistency Wins</h3>
                        <p>
                            We believe that greatness isn't a lightning bolt.
                            It’s a scoreboard.
                        </p>
                        <p>
                            That’s why we focus on the consistency score. It’s
                            not about being a perfect human being 100% of the
                            time (good luck with that). It’s about owning your
                            data. It’s about seeing the "freak" in yourself.
                        </p>
                        <p>
                            We wanted to create a space for the people who care
                            about the rhythm of their week. For the people who
                            know that doing something small every single day is
                            infinitely more powerful than doing something huge
                            once a month.
                        </p>
                    </section>
                    <section className="space-y-3">
                        <h3 className=""> The Freaks</h3>
                        <p>
                            We’re here for the people who are a little too
                            intense about their morning routine. For the ones
                            who track their habits not because they have to, but
                            because they love to show up, every single time. We
                            want to know that when the world got messy, we
                            stayed consistent.{" "}
                        </p>
                        <p>
                            {" "}
                            If you’re the type of person who actually enjoys
                            seeing your consistency climb from 70% to 80%,
                            you’re in the right place. You aren't "optimizing
                            your life." You’re shaping the pattern.
                        </p>
                        <p className="">
                            And it adds up. Until one day, it’s not effort
                            anymore. It’s just you.
                        </p>
                    </section>
                </article>
            </main>

            {/* <Link
                href="/membership"
                className="relative flex flex-row items-center justify-between px-6 lg:px-24 py-10 border-t font-medium text-3xl lg:text-4xl font-libre-baskerville  hover:bg-[#eeeeee] duration-300"
            >
                <span>Become a member</span>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
            </Link> */}
            <Footer />
        </div>
    );
}
