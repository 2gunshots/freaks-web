import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read our privacy policy to understand how Freaks handles your data. We prioritize your privacy and store most data locally on your device.",
};

export default function Privacy() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
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

                    <p className="text-sm text-gray-500 font-inter">
                        Last updated: May 2026
                    </p>

                    <p>
                        Freaks (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                        &ldquo;the app&rdquo;) is designed with privacy in mind.
                        This Privacy Policy explains how information is handled
                        when you use the app.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Information Stored in the App
                        </h2>

                        <p>
                            Freaks allows you to store information locally on
                            your device, including:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Habits, progress, and activity data</li>
                            <li>Journal or activity entries</li>
                            <li>Preferences and settings</li>
                            <li>Calendar-related entries and activity data</li>
                        </ul>

                        <p>
                            This data is stored locally on your device and is
                            not uploaded to our servers.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. Authentication
                        </h2>

                        <p>Freaks uses Supabase for account authentication.</p>

                        <p>
                            When you create an account or sign in, your email
                            address and authentication-related information are
                            securely processed through Supabase.
                        </p>

                        <p>
                            Authentication emails (such as verification or login
                            emails) are sent using Resend.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Subscriptions and Payments
                        </h2>

                        <p>
                            Premium subscriptions are managed through
                            RevenueCat.
                        </p>

                        <p>
                            RevenueCat may process limited information related
                            to subscription status, purchase receipts, and
                            anonymous device or app-user identifiers.
                        </p>

                        <p>
                            Payments are processed by the Apple App Store or
                            Google Play Store. Freaks does not collect or store
                            payment card information.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Backup and Restore
                        </h2>

                        <p>
                            Freaks includes optional backup and restore
                            functionality.
                        </p>

                        <p>
                            Backups are created manually by the user and stored
                            on the user&rsquo;s device or storage location
                            selected by the user.
                        </p>

                        <p>We do not store backup files on our servers.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Notifications
                        </h2>

                        <p>
                            If enabled, the app may send reminders using your
                            device&rsquo;s notification system.
                        </p>

                        <p>
                            Notification preferences are controlled through your
                            device and app settings.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Crash Reporting and Diagnostics
                        </h2>

                        <p>
                            Freaks may use limited crash reporting and
                            diagnostic tools, including Sentry, to help identify
                            and fix app stability issues.
                        </p>

                        <p>
                            These tools may collect technical information such
                            as device type, operating system version, crash
                            logs, and anonymous diagnostic data.
                        </p>

                        <p>
                            This information is used solely for improving app
                            reliability and performance.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            7. Data Deletion
                        </h2>

                        <p>
                            You can permanently delete your local app data at
                            any time using the in-app delete functionality or by
                            uninstalling the app.
                        </p>

                        <p>
                            Because Freaks uses account authentication, complete
                            account deletion currently requires contacting
                            support.
                        </p>

                        <p>
                            To request account deletion, contact:{" "}
                            <a
                                href="mailto:contact@freaks.pro"
                                className="underline"
                            >
                                contact@freaks.pro
                            </a>
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            8. Third-Party Services
                        </h2>

                        <p>
                            Freaks relies on trusted third-party providers for
                            specific functionality:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Supabase: authentication</li>
                            <li>Resend: authentication emails</li>
                            <li>RevenueCat: subscription management</li>
                            <li>Sentry: crash reporting and diagnostics</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            9. Children&rsquo;s Privacy
                        </h2>

                        <p>
                            Freaks is not intended for children under the age
                            required by local law to consent to data processing.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            10. Changes to This Policy
                        </h2>

                        <p>
                            We may update this Privacy Policy from time to time.
                            Any updates will be posted within the app or on this
                            page.
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}
