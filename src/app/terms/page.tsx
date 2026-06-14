import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    alternates: {
        canonical: "/terms",
    },
    description:
        "Read the terms for using the Freaks habit, calendar, journaling, backup, and subscription features.",
    keywords: [
        "Freaks terms and conditions",
        "Freaks subscription terms",
        "habit tracker terms",
        "Freaks Pro",
    ],
    openGraph: {
        title: "Terms & Conditions | Freaks",
        description:
            "The terms governing use of the Freaks mobile app, website, and Freaks Pro.",
        type: "website",
    },
};

const externalLinks = {
    appleEula:
        "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
    appleSubscriptions: "https://support.apple.com/en-us/118428",
    googleSubscriptions:
        "https://support.google.com/googleplay/answer/7018481",
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

export default function Terms() {
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
                        Terms &amp; Conditions
                    </h1>

                    <p className="text-sm text-gray-500 font-inter">
                        Last updated: June 13, 2026
                    </p>

                    <p>
                        These Terms &amp; Conditions (&ldquo;Terms&rdquo;)
                        govern your use of the Freaks mobile app, freaks.pro,
                        and related services (collectively,
                        &ldquo;Freaks&rdquo;, the &ldquo;Service&rdquo;,
                        &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
                    </p>

                    <p>
                        By downloading, accessing, purchasing, or using Freaks,
                        you agree to these Terms and our{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        . If you do not agree, do not use the Service.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            1. Eligibility
                        </h2>

                        <p>
                            You must be legally able to agree to these Terms.
                            Freaks is not directed to children under 13, or a
                            higher minimum age where required by local law. If
                            you are not old enough to enter into these Terms on
                            your own, a parent or legal guardian must review and
                            agree to them for you.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            2. License and Permitted Use
                        </h2>

                        <p>
                            Subject to these Terms and applicable store rules,
                            we grant you a limited, personal, non-exclusive,
                            non-transferable, revocable license to install and
                            use Freaks on devices that you own or control.
                            Freaks is licensed, not sold.
                        </p>

                        <p>
                            On Apple devices, your use is also subject to
                            Apple&rsquo;s{" "}
                            <ExternalLink href={externalLinks.appleEula}>
                                Licensed Application End User License Agreement
                            </ExternalLink>{" "}
                            and applicable App Store usage rules. Google Play
                            terms and usage rules apply to Android downloads and
                            purchases.
                        </p>

                        <p>
                            You may use Freaks for lawful personal productivity,
                            habit tracking, journaling, and related purposes.
                            You may not:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Copy, sell, sublicense, rent, distribute, or
                                commercially exploit Freaks except as allowed by
                                law
                            </li>
                            <li>
                                Reverse engineer, disassemble, modify, or attempt
                                to derive source code except where applicable
                                law expressly permits it
                            </li>
                            <li>
                                Bypass paywalls, access controls, usage limits,
                                or security measures
                            </li>
                            <li>
                                Interfere with the Service, introduce malicious
                                code, automate abusive requests, or attempt
                                unauthorized access
                            </li>
                            <li>
                                Use Freaks to violate law or another
                                person&rsquo;s privacy, intellectual property, or
                                other rights
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            3. Accounts
                        </h2>

                        <p>
                            An account is optional for basic local use but may
                            be required for certain features, purchases, media
                            access, or account-based services. You agree to
                            provide accurate information and keep access to your
                            device and email account secure.
                        </p>

                        <p>
                            You are responsible for activity performed through
                            your account. Notify us promptly at{" "}
                            <a
                                href="mailto:contact@freaks.pro"
                                className="underline underline-offset-4"
                            >
                                contact@freaks.pro
                            </a>{" "}
                            if you believe your account has been accessed
                            without permission.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            4. Your Content
                        </h2>

                        <p>
                            You retain ownership of the habits, entries, notes,
                            drawings, images, profile information, and other
                            content you create or choose to add to Freaks
                            (&ldquo;Your Content&rdquo;).
                        </p>

                        <p>
                            You give us and our service providers a limited
                            permission to host, process, copy, transmit, resize,
                            and display Your Content only as reasonably needed
                            to operate features you request, such as saving an
                            image, displaying your profile, restoring media, or
                            providing support. This permission ends when the
                            content is deleted from our systems, subject to
                            reasonable technical, security, and legal retention.
                        </p>

                        <p>
                            You are responsible for Your Content and confirm
                            that you have the right to use it. Do not upload
                            unlawful content or content that infringes another
                            person&rsquo;s rights.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            5. Local Data, Media, and Backups
                        </h2>

                        <p>
                            Core Freaks data is stored locally on your device.
                            If you use images while signed in, profile,
                            calendar, or note media may also be stored through
                            our service providers as described in the Privacy
                            Policy.
                        </p>

                        <p>
                            Freaks may let you export and restore a local backup
                            containing habits, entries, calendar content, notes,
                            and images. You control where an exported backup is
                            saved or shared and are responsible for protecting
                            it. Anyone with access to the backup file may be
                            able to read its contents.
                        </p>

                        <p>
                            Backups and restore tools are provided as a
                            convenience, not as a guarantee against data loss.
                            Keep appropriate copies of important information and
                            verify a restore before relying on it as your only
                            copy.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            6. Freaks Pro, Purchases, and Trials
                        </h2>

                        <p>
                            Some features require Freaks Pro. Available plans,
                            prices, billing periods, trial terms, included
                            features, and taxes are shown in the app or
                            applicable store before purchase. Offerings and
                            prices may vary by platform, country, eligibility,
                            or campaign.
                        </p>

                        <p>
                            Purchases are processed by the Apple App Store or
                            Google Play and are subject to that store&rsquo;s
                            payment, refund, and subscription terms. We do not
                            directly process your payment card.
                        </p>

                        <h3 className="text-lg lg:text-xl font-semibold">
                            Auto-renewing subscriptions
                        </h3>

                        <p>
                            Monthly and yearly plans automatically renew for the
                            same billing period unless canceled before renewal.
                            The store account used for purchase is charged at
                            the price displayed by the store, subject to any
                            notice or consent required for price changes.
                        </p>

                        <h3 className="text-lg lg:text-xl font-semibold">
                            Free trials and introductory offers
                        </h3>

                        <p>
                            Trials and introductory offers are available only
                            to users the applicable store determines are
                            eligible. Unless canceled before the trial ends, a
                            trial converts to the paid subscription shown at
                            purchase. The applicable store controls eligibility,
                            billing, cancellation deadlines, and offer
                            redemption.
                        </p>

                        <h3 className="text-lg lg:text-xl font-semibold">
                            Lifetime access
                        </h3>

                        <p>
                            If offered, a lifetime purchase is a one-time,
                            non-consumable purchase that provides access to the
                            Freaks Pro features included with that product for
                            as long as Freaks continues to offer and support
                            those features. &ldquo;Lifetime&rdquo; refers to the
                            supported lifetime of the Freaks product, not the
                            lifetime of any individual person, device, or
                            account. It does not guarantee that Freaks or every
                            current feature will remain available forever.
                        </p>

                        <h3 className="text-lg lg:text-xl font-semibold">
                            Managing purchases
                        </h3>

                        <p>
                            You can restore eligible purchases in Freaks and
                            manage or cancel a subscription through the store
                            account used to purchase it. See Apple&rsquo;s{" "}
                            <ExternalLink
                                href={externalLinks.appleSubscriptions}
                            >
                                subscription instructions
                            </ExternalLink>{" "}
                            or Google Play&rsquo;s{" "}
                            <ExternalLink
                                href={externalLinks.googleSubscriptions}
                            >
                                subscription instructions
                            </ExternalLink>
                            .
                        </p>

                        <p>
                            Uninstalling Freaks, signing out, or deleting your
                            Freaks account does not automatically cancel an
                            App Store or Google Play subscription. You must
                            cancel it through the applicable store. Refund
                            requests are handled under that store&rsquo;s rules
                            and applicable law.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            7. Reminders and Progress Information
                        </h2>

                        <p>
                            Reminders depend on device permissions, operating
                            system scheduling, battery settings, time-zone and
                            clock settings, and other conditions outside our
                            control. Freaks does not guarantee that a reminder
                            will arrive at a particular time or at all.
                        </p>

                        <p>
                            Scores, streaks, statistics, and progress views are
                            generated from app data for personal informational
                            purposes. They are not professional, medical,
                            psychological, financial, or health advice and do
                            not guarantee any result.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            8. Intellectual Property
                        </h2>

                        <p>
                            Freaks, including its software, design, artwork,
                            branding, text, icons, animations, and other
                            materials supplied by us, is owned by or licensed to
                            us and is protected by intellectual property laws.
                            These Terms do not transfer ownership of Freaks or
                            our materials to you.
                        </p>

                        <p>
                            If you voluntarily send suggestions or feedback,
                            you allow us to use them without restriction or
                            payment to improve, develop, or promote Freaks. This
                            does not give us ownership of Your Content.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            9. Third-Party Services
                        </h2>

                        <p>
                            Freaks relies on third parties for functions such as
                            authentication, media storage, email delivery,
                            purchases, subscription management, diagnostics,
                            hosting, and support messages. Third-party services
                            have their own terms and policies, and their
                            availability may affect Freaks.
                        </p>

                        <p>
                            We are not responsible for third-party services,
                            store accounts, device operating systems, or content
                            they control, except where applicable law provides
                            otherwise.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            10. Changes to Features and Availability
                        </h2>

                        <p>
                            We may add, change, limit, suspend, or remove
                            features; change which features require Freaks Pro;
                            release updates; or discontinue all or part of the
                            Service. We do not guarantee that Freaks will always
                            be available, compatible with every device, or free
                            from interruptions or errors.
                        </p>

                        <p>
                            We will respect active paid access and applicable
                            consumer rights as required by store rules and law.
                            Some updates may be required to continue using
                            Freaks safely or correctly.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            11. Suspension, Termination, and Account Deletion
                        </h2>

                        <p>
                            You may stop using Freaks at any time. Signed-in
                            users can request account deletion in Settings, and
                            guest users can delete local data there.
                        </p>

                        <p>
                            We may restrict or terminate access if you
                            materially violate these Terms, misuse the Service,
                            threaten its security or other users, fail to pay
                            applicable charges, or if restriction is reasonably
                            necessary for legal or security reasons.
                        </p>

                        <p>
                            Termination ends your license to use the affected
                            Service but does not automatically cancel
                            store-managed subscriptions or erase obligations
                            that arose before termination. Provisions that by
                            their nature should survive, including ownership,
                            disclaimers, and liability limitations, remain in
                            effect.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            12. Disclaimer of Warranties
                        </h2>

                        <p>
                            To the maximum extent permitted by law, Freaks is
                            provided &ldquo;as is&rdquo; and &ldquo;as
                            available&rdquo;. We disclaim warranties of
                            merchantability, fitness for a particular purpose,
                            accuracy, non-infringement, and uninterrupted or
                            error-free operation.
                        </p>

                        <p>
                            We do not guarantee that data, media, backups,
                            reminders, statistics, purchases, or account
                            services will never be lost, delayed, corrupted, or
                            unavailable. Nothing in these Terms excludes a
                            warranty or consumer right that cannot legally be
                            excluded.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            13. Limitation of Liability
                        </h2>

                        <p>
                            To the maximum extent permitted by law, we will not
                            be liable for indirect, incidental, special,
                            consequential, or punitive damages, or for lost
                            data, profits, opportunities, goodwill, or business
                            interruption arising from or related to Freaks.
                        </p>

                        <p>
                            To the maximum extent permitted by law, our total
                            liability for claims relating to the Service will
                            not exceed the greater of the amount you paid for
                            Freaks during the 12 months before the event giving
                            rise to the claim or USD $50. These limitations do
                            not apply where prohibited by law, including to
                            liability that cannot lawfully be limited.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            14. Applicable Law and Consumer Rights
                        </h2>

                        <p>
                            These Terms are subject to applicable law and do not
                            limit mandatory rights available to you as a
                            consumer. Store terms may also apply to your
                            download, purchase, billing, cancellation, and use
                            of Freaks. If these Terms conflict with mandatory
                            law or applicable store terms, those requirements
                            control to the extent of the conflict.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            15. Changes to These Terms
                        </h2>

                        <p>
                            We may update these Terms to reflect changes to
                            Freaks, law, or our business practices. The revised
                            Terms will be posted on this page with a new
                            &ldquo;Last updated&rdquo; date. If a change is
                            material, we may also provide notice in the app or
                            by another appropriate method.
                        </p>

                        <p>
                            Your continued use of Freaks after updated Terms
                            take effect means you accept them. If you do not
                            agree to an update, you should stop using the
                            Service and cancel any active subscription through
                            the applicable store.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl lg:text-2xl font-semibold">
                            16. Contact
                        </h2>

                        <p>
                            Questions about these Terms can be sent to:
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
