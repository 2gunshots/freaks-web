import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    alternates: {
        canonical: "/privacy",
    },
    description:
        "Learn how Freaks handles account information, habits, notes, calendar content, images, backups, subscriptions, and diagnostics.",
    keywords: [
        "Freaks privacy policy",
        "habit tracker privacy",
        "data ownership",
        "local data storage",
    ],
    openGraph: {
        title: "Privacy Policy | Freaks",
        description:
            "Learn what Freaks stores locally, what may be stored in the cloud, and the choices available to you.",
        type: "website",
    },
};

const policyLinks = {
    supabase: "https://supabase.com/privacy",
    resend: "https://resend.com/legal/privacy-policy",
    revenueCat: "https://www.revenuecat.com/privacy/",
    sentry: "https://sentry.io/privacy/",
    emailJs: "https://www.emailjs.com/legal/privacy-policy/",
    apple: "https://www.apple.com/legal/privacy/",
    google: "https://policies.google.com/privacy",
};

function ExternalLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
        >
            {children}
        </a>
    );
}

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
                        Last updated: June 13, 2026
                    </p>

                    <p>
                        Freaks (&ldquo;Freaks&rdquo;, &ldquo;we&rdquo;,
                        &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is a
                        personal habit, calendar, and note-taking app. This
                        Privacy Policy explains how information is handled when
                        you use the Freaks mobile app, the Freaks website, and
                        related support services.
                    </p>

                    <p>
                        The short version is that core app data is stored on
                        your device. Some information is sent to service
                        providers when you create an account, add images while
                        signed in, purchase Freaks Pro, submit a support
                        request, or when the app reports a technical failure.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Information You Provide
                        </h2>

                        <p>Depending on how you use Freaks, this may include:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Account information, such as your email address,
                                first name, last name, account identifier, and
                                authentication information
                            </li>
                            <li>
                                Profile information, including a profile image
                                if you choose to add one
                            </li>
                            <li>
                                Habits, goals, reminders, progress logs,
                                streaks, and related activity
                            </li>
                            <li>
                                Calendar entries, written content, drawings, and
                                images
                            </li>
                            <li>
                                Notes and images that you choose to place in
                                notes
                            </li>
                            <li>
                                App preferences, settings, and onboarding state
                            </li>
                            <li>
                                Your name, email address, subject, message, and
                                any other information you include when
                                contacting support
                            </li>
                        </ul>

                        <p>
                            Please do not place information in notes, calendar
                            entries, images, or support messages that you do not
                            want processed as described in this policy.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. Information Stored on Your Device
                        </h2>

                        <p>
                            Freaks stores core app data locally on your device
                            so that the app can work offline. This includes
                            habits, progress logs, calendar content, drawings,
                            notes, locally cached images, settings, and other
                            app state.
                        </p>

                        <p>
                            Authentication credentials and session information
                            are stored using secure device storage where
                            supported. Other app data may be stored in the
                            app&rsquo;s local database, app storage, or private
                            file directories.
                        </p>

                        <p>
                            Local data remains on the device until you delete it
                            in Freaks, clear the app&rsquo;s data, or uninstall
                            the app. Device backups managed by Apple, Google, or
                            your device manufacturer may be governed by their
                            own settings and policies.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Accounts and Authentication
                        </h2>

                        <p>
                            Creating an account is optional for basic local use.
                            If you create an account or sign in, Freaks uses{" "}
                            <ExternalLink href={policyLinks.supabase}>
                                Supabase
                            </ExternalLink>{" "}
                            to process your email address, user identifier,
                            account metadata, authentication session, and
                            related security information.
                        </p>

                        <p>
                            Authentication and account-related emails, such as
                            verification, sign-in, recovery, or account deletion
                            codes, may be delivered using{" "}
                            <ExternalLink href={policyLinks.resend}>
                                Resend
                            </ExternalLink>
                            .
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Images and Cloud Media
                        </h2>

                        <p>
                            When you are signed in and use images in Freaks,
                            selected media may be uploaded to Supabase Storage
                            so that it can be restored or made available across
                            your signed-in use of the app. This includes:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Images attached to calendar entries</li>
                            <li>Images saved inside notes</li>
                            <li>A profile image that you choose to upload</li>
                        </ul>

                        <p>
                            Calendar and note images are stored in
                            user-specific private storage and are accessed using
                            temporary authorized links. Profile images are
                            served through a public URL so that the app can
                            display them; anyone who obtains that exact URL may
                            be able to view the image.
                        </p>

                        <p>
                            Freaks may keep a local copy of cloud media for
                            offline access and performance. Uploads and
                            deletions may be retried after an interrupted or
                            unavailable internet connection.
                        </p>
                    </section>



                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Local Backup and Restore
                        </h2>

                        <p>
                            Freaks can create a compressed local backup file at
                            your request. A local backup may include habits,
                            progress logs, calendar content, notes, and the
                            calendar or note images referenced by that data.
                        </p>

                        <p>
                            You choose where to share or store an exported
                            backup. Once exported, the file is controlled by
                            you and by the storage provider, device, or app you
                            selected. Keep backup files private because they may
                            contain personal content.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Subscriptions and Payments
                        </h2>

                        <p>
                            Freaks uses{" "}
                            <ExternalLink href={policyLinks.revenueCat}>
                                RevenueCat
                            </ExternalLink>{" "}
                            to manage subscription access, trials, purchase
                            status, and entitlement restoration. RevenueCat may
                            receive an app user identifier, device and app
                            information, purchase receipts or tokens,
                            transaction status, and, for signed-in users, the
                            email address, display name, and account creation
                            date associated with the Freaks account.
                        </p>

                        <p>
                            Payments are processed by the Apple App Store or
                            Google Play. Freaks does not receive or store your
                            full payment card information. Store purchase
                            history and billing information are governed by the{" "}
                            <ExternalLink href={policyLinks.apple}>
                                Apple Privacy Policy
                            </ExternalLink>{" "}
                            or{" "}
                            <ExternalLink href={policyLinks.google}>
                                Google Privacy Policy
                            </ExternalLink>
                            , as applicable.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            7. Notifications and Device Permissions
                        </h2>

                        <p>
                            Freaks requests access only when needed for a
                            feature you choose to use:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Notifications:</strong> used to schedule
                                habit reminders on your device. Freaks does not
                                currently register your device for marketing
                                push notifications.
                            </li>
                            <li>
                                <strong>Photo library:</strong> used when you
                                choose an image for your profile, calendar, or
                                notes.
                            </li>
                            <li>
                                <strong>Files and sharing:</strong> used when
                                you choose to export, import, save, or share a
                                backup file.
                            </li>
                        </ul>

                        <p>
                            You can change permissions through your device
                            settings. Disabling a permission may prevent the
                            related feature from working.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            8. Crash Reporting and Diagnostics
                        </h2>

                        <p>
                            Freaks uses{" "}
                            <ExternalLink href={policyLinks.sentry}>
                                Sentry
                            </ExternalLink>{" "}
                            to detect crashes and technical failures. Diagnostic
                            information may include app version, device type,
                            operating system, error details, stack traces,
                            timing information, and app navigation or state
                            associated with a failure.
                        </p>

                        <p>
                            In production, a limited sample of errors may
                            include a session replay around the failure to help
                            reproduce the problem. Freaks configures Sentry not
                            to send default personally identifiable information,
                            and Sentry&rsquo;s replay privacy settings mask text
                            and images by default.
                        </p>

                        <p>
                            Diagnostic data is used to secure, maintain, debug,
                            and improve Freaks. It is not used for advertising.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            9. Website and Support Messages
                        </h2>

                        <p>
                            When you submit the support form on freaks.pro, the
                            name, email address, subject, and message you enter
                            are sent using{" "}
                            <ExternalLink href={policyLinks.emailJs}>
                                EmailJS
                            </ExternalLink>{" "}
                            and delivered to Freaks support. We use this
                            information to respond to your request, investigate
                            problems, and improve support.
                        </p>

                        <p>
                            The Freaks website does not currently use
                            advertising trackers or behavioral analytics. Basic
                            technical logs may still be processed by the
                            website&rsquo;s hosting and network providers for
                            delivery, reliability, and security.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            10. How We Use Information
                        </h2>

                        <p>We process information as needed to:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and operate Freaks</li>
                            <li>Authenticate accounts and protect access</li>
                            <li>Store, synchronize, restore, and delete data</li>
                            <li>Manage subscriptions and paid access</li>
                            <li>Send requested reminders and service emails</li>
                            <li>Respond to support requests</li>
                            <li>Prevent abuse and maintain security</li>
                            <li>Diagnose failures and improve reliability</li>
                            <li>Comply with applicable legal obligations</li>
                        </ul>

                        <p>
                            Where applicable, the legal bases for this
                            processing may include performing our agreement with
                            you, your consent, our legitimate interests in
                            operating and securing Freaks, and compliance with
                            legal obligations.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            11. How Information Is Shared
                        </h2>

                        <p>
                            We do not sell your personal information and do not
                            use your habit, calendar, or note content for
                            targeted advertising.
                        </p>

                        <p>Information may be shared:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                With service providers described in this policy,
                                only as needed to provide their services
                            </li>
                            <li>
                                With Apple or Google for purchases and
                                subscription management
                            </li>
                            <li>
                                When you direct us to export or share information
                            </li>
                            <li>
                                When required by law or reasonably necessary to
                                protect users, rights, security, or the service
                            </li>
                            <li>
                                In connection with a merger, acquisition,
                                financing, or transfer of the service, subject
                                to appropriate safeguards
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            12. Retention and Deletion
                        </h2>

                        <p>
                            Local app data is retained until you delete it,
                            clear app data, or uninstall Freaks. Cloud content
                            is generally retained while your account remains
                            active or until the related content or account is
                            deleted.
                        </p>

                        <p>
                            Signed-in users can request permanent account
                            deletion from the app&rsquo;s Settings screen.
                            Freaks verifies the request by email and is designed
                            to delete the Supabase authentication account,
                            profile image, calendar and note media, and the
                            associated RevenueCat subscriber record. Local
                            account data on the device is also cleared after
                            deletion completes.
                        </p>

                        <p>
                            Guest users can delete local data from Settings.
                            Uninstalling the app also removes normal local app
                            data, subject to device-level backups.
                        </p>

                        <p>
                            Some service providers or app stores may retain
                            transaction records, security logs, legal records,
                            or backup copies for periods required by law or
                            their own retention policies. Deleting a Freaks
                            account does not cancel an active App Store or
                            Google Play subscription; subscriptions must be
                            managed through the applicable store.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            13. Security
                        </h2>

                        <p>
                            We use reasonable technical and organizational
                            measures designed to protect information. These
                            include authenticated access, private
                            user-specific storage for personal media, row-level
                            access controls, secure device storage for sessions
                            where supported, and encrypted network connections
                            provided by our service providers.
                        </p>

                        <p>
                            No method of storage or transmission is completely
                            secure. You are responsible for protecting access
                            to your device, email account, exported backup
                            files, and app-store account.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            14. Your Choices and Rights
                        </h2>

                        <p>
                            Depending on where you live, you may have rights to
                            request access to, correction of, deletion of, or a
                            copy of personal information, or to object to or
                            restrict certain processing.
                        </p>

                        <p>
                            Many choices are available directly in Freaks: you
                            can edit or delete content, export a local backup,
                            remove a profile image, change permissions, manage
                            subscriptions through the applicable store, and
                            delete your account from Settings.
                        </p>

                        <p>
                            For a privacy request that cannot be completed in
                            the app, contact{" "}
                            <a
                                href="mailto:contact@freaks.pro"
                                className="underline underline-offset-4"
                            >
                                contact@freaks.pro
                            </a>
                            . We may need to verify your identity before
                            completing a request.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            15. International Processing
                        </h2>

                        <p>
                            Freaks and its service providers may process
                            information in countries other than the country
                            where you live, including the United States. Those
                            countries may have different data-protection laws.
                            Where required, service providers use appropriate
                            safeguards for international transfers.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            16. Children&rsquo;s Privacy
                        </h2>

                        <p>
                            Freaks is not directed to children under 13, or a
                            higher minimum age where required by local law. We
                            do not knowingly collect personal information from
                            a child who cannot legally consent to its
                            processing. If you believe a child has provided
                            personal information, contact us so that we can
                            review and delete it.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            17. Changes to This Policy
                        </h2>

                        <p>
                            We may update this Privacy Policy as Freaks changes.
                            The updated version will be posted on this page with
                            a revised &ldquo;Last updated&rdquo; date. If a
                            change materially affects how personal information
                            is handled, we may also provide notice in the app or
                            by another appropriate method.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            18. Contact
                        </h2>

                        <p>
                            For questions, requests, or concerns about this
                            Privacy Policy, contact:
                        </p>

                        <p>
                            <a
                                href="mailto:contact@freaks.pro"
                                className="underline underline-offset-4"
                            >
                                contact@freaks.pro
                            </a>
                        </p>
                    </section>
                </article>
            </main>

            <Footer />
        </div>
    );
}
