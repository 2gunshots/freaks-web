import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center px-6">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                                   font-eb-garamond text-lg lg:text-xl
                                   leading-relaxed space-y-6 py-16 font-libre-baskerville"
                >
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        Our Story
                    </h1>

                    <section className="space-y-3">
                        <p>
                            Say the word consistency and it sounds like routine,
                            repetition, and nothing worth talking about.
                        </p>

                        <p>
                            But when you look at anyone who is actually great at
                            what they do, the guitarists with calloused fingers,
                            the coders who see logic in their sleep, the runners
                            who hit the pavement in the pouring rain, you
                            realize they aren&apos;t just
                            &ldquo;consistent.&rdquo; They&apos;re obsessed.
                            They&apos;re all in.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3>Potential Demands Action</h3>

                        <p>
                            We&apos;re all told we have &ldquo;unlimited
                            potential.&rdquo; It&apos;s a nice sentiment, but
                            potential doesn&apos;t actually mean anything if
                            it&apos;s just sitting there.
                        </p>

                        <p>
                            The only way to actually cash in on that potential
                            is through the quiet, often invisible work of
                            practice. Not the glamorous, montage-worthy
                            practice, but the &ldquo;I really don&apos;t want to
                            do this today&rdquo; kind of practice.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h3>Where Consistency Wins</h3>

                        <p>
                            We believe that greatness isn&apos;t a lightning
                            bolt. It&apos;s a scoreboard.
                        </p>

                        <p>
                            That&apos;s why we focus on the consistency score.
                            It&apos;s not about being a perfect human being 100%
                            of the time (good luck with that). It&apos;s about
                            owning your data. It&apos;s about seeing the
                            &ldquo;freak&rdquo; in yourself.
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
                        <h3>The Freaks</h3>

                        <p>
                            We&apos;re here for the people who are a little too
                            intense about their morning routine. For the ones
                            who track their habits not because they have to, but
                            because they love to show up, every single time. We
                            want to know that when the world got messy, we
                            stayed consistent.
                        </p>

                        <p>
                            If you&apos;re the type of person who actually
                            enjoys seeing your consistency climb from 70% to
                            80%, you&apos;re in the right place. You aren&apos;t
                            &ldquo;optimizing your life.&rdquo; You&apos;re
                            shaping the pattern.
                        </p>

                        <p>
                            And it adds up. Until one day, it&apos;s not effort
                            anymore. It&apos;s just you.
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}
