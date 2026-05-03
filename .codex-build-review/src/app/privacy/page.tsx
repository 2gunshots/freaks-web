import Footer from "@/components/Footer";
import Link from "next/link";

export default function Privacy() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="px-6 lg:px-24 py-5 flex items-center justify-between bg-black text-background">
                <Link href="/">
                    <h3 className="font-gloock text-3xl">Freaks</h3>
                </Link>
            </header>

            {/* Content */}
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
                        Last updated: April 2026
                    </p>

                    <p>
                        Freaks (“we”, “our”, or “the app”) is committed to
                        protecting your privacy. This Privacy Policy explains
                        how we collect, use, and protect your information when
                        you use our app.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Information We Collect
                        </h2>
                        <p>We may collect the following information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Account information (such as email address and
                                name) through our authentication provider
                            </li>
                            <li>
                                User-generated data such as habits, entries, and
                                progress
                            </li>
                            <li>
                                Device information for app functionality and
                                notifications
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. How We Use Your Information
                        </h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and maintain the app</li>
                            <li>Store and sync your habits and progress</li>
                            <li>Send reminders and notifications you enable</li>
                            <li>Improve app performance and user experience</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Data Storage
                        </h2>
                        <p>
                            Your data is securely stored using third-party
                            services, including our authentication provider and
                            database services used by the app.
                        </p>
                        <p>We do not sell your personal data.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Third-Party Services
                        </h2>
                        <p>We use third-party services such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Clerk (authentication and user management)</li>
                            <li>Expo / notification services</li>
                        </ul>
                        <p>
                            These services may process data according to their
                            own privacy policies.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Data Deletion
                        </h2>
                        <p>
                            You may request deletion of your account and data at
                            any time by contacting us.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Children’s Privacy
                        </h2>
                        <p>
                            This app is not intended for children under 13. We
                            do not knowingly collect data from children.
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

            {/* CTA */}
            {/* <Link
                href="/membership"
                className="flex items-center justify-between px-6 lg:px-24 py-10 border-t font-medium text-2xl lg:text-3xl font-libre-baskerville hover:bg-[#eeeeee] duration-300"
            >
                <span>Become a member</span>
                <span>→</span>
            </Link> */}

            {/* Footer */}
            <Footer />
        </div>
    );
}
