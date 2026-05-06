import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Privacy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex justify-center px-6">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                               font-libre-baskerville
                               text-base lg:text-lg
                               leading-relaxed space-y-8 py-16"
                >
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        Privacy Policy
                    </h1>

                    <p className="text-sm text-gray-500">
                        Last updated: May 2026
                    </p>

                    <p>
                        Freaks (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                        &ldquo;the app&rdquo;) is designed with privacy in mind.
                        This Privacy Policy explains how your information is
                        handled when you use the app.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Information We Collect
                        </h2>
                        <p>
                            You may enter and store information within the app,
                            such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Habits, progress, and activity data</li>
                            <li>Preferences and settings</li>
                            <li>
                                Optional profile information (such as your name
                                or profile image)
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. How Your Data Is Stored
                        </h2>
                        <p>
                            All data you enter into Freaks is stored locally on
                            your device.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>No data is transmitted to our servers</li>
                            <li>No external databases are used</li>
                            <li>We do not have access to your data</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Data Collection
                        </h2>

                        <p>
                            Freaks does not collect, store, or process personal
                            data on external servers.
                        </p>

                        <p>
                            We do not track users, use analytics, or share data
                            with third parties.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Notifications
                        </h2>

                        <p>
                            If enabled, the app may send reminders using your
                            device&rsquo;s notification system. These
                            notifications are managed by your device and not
                            stored by us.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Data Deletion
                        </h2>

                        <p>
                            You can permanently delete all your data at any time
                            using the in-app “Delete” option in settings.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                This will remove all habits, progress, and
                                profile data
                            </li>
                            <li>Deletion happens locally on your device</li>
                            <li>It cannot be recovered after confirmation</li>
                        </ul>

                        <p>
                            You can also remove all data by uninstalling the app
                            or clearing app storage on your device.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Children&rsquo;s Privacy
                        </h2>
                        <p>
                            Freaks does not knowingly collect personal data from
                            anyone, including children, as no data is
                            transmitted outside the device.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            7. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            Changes will be posted within the app or this page.
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}
