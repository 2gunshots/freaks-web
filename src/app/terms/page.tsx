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
                        Last updated: May 2026
                    </p>

                    <p>
                        These Terms &amp; Conditions (“Terms”) govern your use
                        of Freaks (“we”, “our”, or “the app”). By using the app,
                        you agree to these Terms.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Use of the App
                        </h2>

                        <p>
                            Freaks is a personal productivity and habit tracking
                            app designed for individual use.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Personal use only</li>
                            <li>Lawful purposes only</li>
                            <li>Use within intended functionality</li>
                        </ul>

                        <p>You may not:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Misuse or disrupt the app</li>
                            <li>Attempt unauthorized access to systems or data</li>
                            <li>Reverse engineer or exploit the app</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. User Data
                        </h2>

                        <p>
                            You may create and store data such as habits,
                            progress, journal entries, and preferences.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Most data is stored locally on your device</li>
                            <li>Some account-related data is stored securely via authentication services</li>
                            <li>We do not sell your personal data</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Accounts and Authentication
                        </h2>

                        <p>
                            Account authentication is provided through Supabase.
                            Your email and authentication data are processed by
                            this service to enable login and account features.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Subscriptions
                        </h2>

                        <p>
                            Premium features may require a subscription managed
                            through RevenueCat and platform stores (Apple App
                            Store / Google Play).
                        </p>

                        <p>
                            We do not store payment card details. Payments are
                            handled by third-party app stores.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Notifications
                        </h2>

                        <p>
                            The app may send reminders if enabled by the user.
                            You can disable notifications at any time via your
                            device or app settings.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Service Availability
                        </h2>

                        <p>
                            We aim to keep the app available and stable, but we
                            do not guarantee uninterrupted service.
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

                        <p>We may suspend or terminate access if:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>The app is misused</li>
                            <li>There is harmful or abusive activity</li>
                            <li>Required for legal or security reasons</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            8. Disclaimer
                        </h2>

                        <p>
                            Freaks is provided “as is” without warranties.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>We are not responsible for data loss</li>
                            <li>We are not responsible for missed reminders</li>
                            <li>We do not guarantee uninterrupted service</li>
                            <li>We are not responsible for outcomes from app usage</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            9. Third-Party Services
                        </h2>

                        <p>The app relies on third-party services including:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Supabase — authentication services</li>
                            <li>Resend — email delivery</li>
                            <li>RevenueCat — subscription management</li>
                            <li>Sentry — crash reporting and diagnostics</li>
                        </ul>

                        <p>
                            These services may process limited technical or
                            account-related data required for functionality.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            10. Changes to These Terms
                        </h2>

                        <p>
                            We may update these Terms from time to time.
                            Continued use of the app means you accept any
                            updated Terms.
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}