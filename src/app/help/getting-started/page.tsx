import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function GettingStarted() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col justify-center items-center px-6">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                               font-libre-baskerville
                               text-base lg:text-lg
                               leading-relaxed space-y-8 py-16 pb-12"
                >
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        How to Use Freaks
                    </h1>

                    <p>
                        Track what matters. Stay consistent. Here&rsquo;s how to
                        use Freaks.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Creating Your Habits
                        </h2>

                        <p>
                            Everything starts with what you decide to track.
                            Start with what feels natural to you. Think about
                            what you already do or what you actually want to
                            keep showing up for. Your habits should reflect your
                            life, not some ideal version of it.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Make it yours:</strong> If you like
                                running, call it "Running." If you prefer
                                general movement, call it "Exercise."
                                There&rsquo;s no “correct” way to name it.
                            </li>
                            <li>
                                <strong>Start simple:</strong> Pick a few habits
                                that matter to you right now. You can always
                                adjust or add more later.
                            </li>

                            <li>
                                <strong>Mix your pace:</strong> Combine
                                non-negotiable daily habits with weekly ones to
                                create a rhythm that works for you.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. Your Consistency Score & The Blob
                        </h2>

                        <p>
                            This is the heart of the app. Instead of punishing
                            you for a single missed day, we look at your Overall
                            Consistency Score.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>The Score: </strong> It is a weighted
                                average of every habit you&rsquo;ve committed
                                to.
                            </li>
                            <li>
                                <strong>The Blob: </strong> On your dashboard,
                                you&rsquo;ll see a shifting, organic shape. This
                                is your Consistency Blob. As your overall score
                                improves and you show up more often, the blob
                                grows and evolves. It&rsquo;s a visual
                                representation of your momentum.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Statistics: Weekly, Monthly, and Yearly charts
                        </h2>

                        <p>
                            Some days go well, others don&rsquo;t, that&rsquo;s
                            normal. Freaks helps you look beyond the day-to-day
                            patterns.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Weekly chart:</strong> See how your last
                                7 days went.
                            </li>
                            <li>
                                <strong>Monthly & Yearly charts:</strong>{" "}
                                Understand your long-term progress and patterns.
                            </li>
                        </ul>
                    </section>
                </article>
            </main>
            <div className="flex-1 flex flex-col justify-center items-center px-6 bg-[#f1f2f0]">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                               font-libre-baskerville
                               text-base lg:text-lg
                               leading-relaxed space-y-8 py-16 "
                >
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        How NOT to Use Freaks
                    </h1>

                    <p>
                        This app is for consistency, but there&rsquo;s a
                        difference between building a rhythm and overthinking
                        it. Here are a few ways to keep it useful, not
                        stressful.
                    </p>

                    <ul className="list-disc pl-6 space-y-3">
                        <li>
                            <strong>Don&rsquo;t obsess over streaks: </strong>{" "}
                            If you miss a day, nothing breaks. A "streak" is a
                            fragile vanity metric; a Consistency Score is
                            resilient. If you&rsquo;re at 90% and you miss a
                            day, you&rsquo;re still a 89% freak. That&rsquo;s
                            still an A.
                        </li>

                        <li>
                            <strong>Avoid the "Day One Overhaul": </strong>
                            Don&rsquo;t try to track 10 new things at once.
                            You&rsquo;ll burn out. Start with 2 or 3 habits that
                            actually matter.
                        </li>

                        <li>
                            <strong>Don&rsquo;t turn it into guilt: </strong>
                            The data is a mirror, not a judge. If your score is
                            low, don't beat yourself up, just look at the data
                            and ask <em>why</em>. Maybe the habit is too big, or
                            maybe you're tracking something you don't actually
                            care about.
                        </li>

                        <li>
                            <strong>Don't Perform for the App: </strong> If you
                            did the work but forgot to log it, you still did the
                            work. This app is just an assistant. Don't let the
                            "score" become more important than the practice
                            itself.
                        </li>
                    </ul>
                    <section className="space-y-3">
                        <p>
                            Keep it simple. Don't let the tracking get in the
                            way of the doing. The goal is consistency in real
                            life, not perfection inside the app.
                        </p>
                    </section>
                </article>
            </div>

            <Footer
                backgroundColor="bg-[#8a9b6e]"
                border={false}
                // color="text-white"
            />
        </div>
    );
}
