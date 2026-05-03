import Footer from "@/components/Footer";
import Link from "next/link";

export default function Terms() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="px-6 lg:px-24 py-5 flex items-center justify-between bg-black text-background">
                <Link href="/">
                    <h3 className="font-gloock text-3xl">Freaks</h3>
                </Link>
            </header>

            <main className="flex-1 flex justify-center px-6">
                <article
                    className="w-full max-w-2xl lg:max-w-3xl
                               font-libre-baskerville
                               text-base lg:text-lg
                               leading-relaxed space-y-8 py-16"
                >
                    <h1 className="text-3xl lg:text-5xl font-semibold">
                        Terms &amp; Conditions
                    </h1>

                    <p className="text-sm text-gray-500">
                        Last updated: April 2026
                    </p>

                    <p>
                        These Terms &amp; Conditions (&ldquo;Terms&rdquo;)
                        govern your use of Freaks (&ldquo;we&rdquo;,
                        &ldquo;our&rdquo;, or &ldquo;the app&rdquo;). By using
                        the app, you agree to these Terms.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Use of the App
                        </h2>

                        <p>
                            Freaks is a personal productivity and habit tracking
                            app designed to help you build and manage habits.
                        </p>

                        <p>You agree to use the app only for:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal use</li>
                            <li>Lawful purposes</li>
                            <li>Intended functionality only</li>
                        </ul>

                        <p>You may not:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Misuse, disrupt, or interfere with the app</li>
                            <li>
                                Attempt to access data that does not belong to
                                you
                            </li>
                            <li>Reverse engineer or exploit the system</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. Accounts
                        </h2>

                        <p>
                            To use Freaks, you may be required to sign in using
                            a third-party authentication provider.
                        </p>

                        <p>You are responsible for:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maintaining the security of your account</li>
                            <li>All activity under your account</li>
                        </ul>

                        <p>
                            We are not responsible for unauthorized access
                            caused by compromised credentials.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. User Data
                        </h2>

                        <p>
                            You may create and store personal data such as
                            habits, progress, and preferences.
                        </p>

                        <p>This data:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Belongs to you</li>
                            <li>
                                Is stored using third-party infrastructure
                                providers
                            </li>
                        </ul>

                        <p>
                            We do not claim ownership of your personal content.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Third-Party Services
                        </h2>

                        <p>Freaks uses third-party services including:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Authentication and user management services</li>
                            <li>Notification delivery services</li>
                        </ul>

                        <p>
                            These services may process your data under their own
                            policies. We are not responsible for their
                            practices.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Notifications
                        </h2>

                        <p>
                            The app may send reminders and notifications if you
                            enable them. You can disable them anytime through
                            your device or app settings.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Service Availability
                        </h2>

                        <p>
                            We aim to keep the app running smoothly, but we do
                            not guarantee uninterrupted service.
                        </p>

                        <p>
                            The app may be updated, modified, or discontinued at
                            any time.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            7. Termination
                        </h2>

                        <p>
                            We reserve the right to suspend or terminate access
                            if:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>The app is misused</li>
                            <li>There is harmful or suspicious activity</li>
                            <li>Required for legal or security reasons</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            8. Disclaimer
                        </h2>

                        <p>
                            Freaks is provided &ldquo;as is&rdquo; without
                            warranties.
                        </p>

                        <p>We are not responsible for:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Data loss</li>
                            <li>Missed reminders</li>
                            <li>Service interruptions</li>
                            <li>Outcomes from using the app</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            9. Changes to These Terms
                        </h2>

                        <p>
                            We may update these Terms from time to time.
                            Continued use of the app means you accept any
                            updates.
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}
