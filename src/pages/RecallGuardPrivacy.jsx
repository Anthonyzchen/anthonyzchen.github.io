import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePageEntrance } from "../components/utils";

const SectionHeading = ({ children }) => (
  <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
    {children}
  </h2>
);

const Paragraph = ({ children, className = "" }) => (
  <p
    className={`text-sm leading-relaxed text-brown/80 sm:text-base ${className}`}
  >
    {children}
  </p>
);

const SupportEmail = () => (
  <a
    href="mailto:support@anthonyzchen.com"
    className="text-vermillion transition-colors hover:text-terracotta"
  >
    support@anthonyzchen.com
  </a>
);

const RecallGuardPrivacy = () => {
  const entranceRef = usePageEntrance();

  useEffect(() => {
    document.title = "Privacy Policy - RecallGuard | AnthonyZChen";
  }, []);

  return (
    <div ref={entranceRef}>
      {/* Header */}
      <div className="mb-10">
        <Link
          to="/apps/recallguard"
          className="mb-4 inline-block text-sm text-brown/60 transition-colors hover:text-vermillion"
        >
          &larr; Back to RecallGuard
        </Link>
        <h1 className="mb-2 text-3xl font-light uppercase tracking-widest text-ink">
          Privacy Policy
        </h1>
        <p className="text-sm text-brown/60">
          RecallGuard &mdash; Last updated April 22, 2026
        </p>
      </div>

      {/* Draft warning */}
      <div
        role="note"
        className="mb-10 rounded-lg border border-vermillion/40 bg-vermillion/5 p-4"
      >
        <p className="mb-1 text-sm font-medium uppercase tracking-wide text-vermillion">
          Draft &mdash; not legally reviewed
        </p>
        <p className="text-sm leading-relaxed text-brown/80">
          This is an MVP draft intended to satisfy the App Store submission
          requirement for a privacy policy URL. Before public launch, the App
          will be reviewed by an attorney &mdash; especially the CCPA/CPRA,
          subscription, and liability sections.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="mb-8">
        <SectionHeading>1. Introduction</SectionHeading>
        <Paragraph className="mb-3">
          RecallGuard (the &quot;App&quot;) is operated by Anthony Chen
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy
          Policy explains what information we collect when you use the App, how
          we use it, who we share it with, and the choices you have.
        </Paragraph>
        <Paragraph className="mb-3">
          By creating an account or using RecallGuard, you agree to the
          practices described here.
        </Paragraph>
        <Paragraph>
          Contact: <SupportEmail />
        </Paragraph>
      </section>

      {/* 2. Information we collect */}
      <section className="mb-8">
        <SectionHeading>2. Information we collect</SectionHeading>
        <Paragraph className="mb-4">
          We collect only what&apos;s needed to filter FDA food recalls for
          you.
        </Paragraph>

        <h3 className="mb-2 mt-6 text-sm font-medium text-ink">
          Information you provide directly
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            <span className="font-medium text-ink">Email address</span>{" "}
            &mdash; used for your account login and optional weekly email
            digests.
          </li>
          <li>
            <span className="font-medium text-ink">Password</span> &mdash;
            stored in hashed form by our identity provider (Supabase Auth). We
            never see or store your plaintext password.
          </li>
          <li>
            <span className="font-medium text-ink">Preferences</span> &mdash;
            the US state you live in, food categories you care about, and
            brands you buy. You choose what to enter; any field may be left
            blank.
          </li>
          <li>
            <span className="font-medium text-ink">
              (Premium only) Pantry contents
            </span>{" "}
            &mdash; products you manually add or import via receipt. Used only
            to match incoming FDA recalls against your specific items.
          </li>
          <li>
            <span className="font-medium text-ink">
              (Premium only) Receipt content
            </span>{" "}
            &mdash; if you enable email-receipt forwarding or photo receipt
            upload, the line-item text of those receipts. Used only to populate
            your pantry. Receipt images are processed once and not retained
            after line-item extraction.
          </li>
        </ul>

        <h3 className="mb-2 mt-6 text-sm font-medium text-ink">
          Information collected automatically
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            <span className="font-medium text-ink">
              Push notification token
            </span>{" "}
            &mdash; a device-specific identifier issued by Apple or Google when
            you enable notifications. Required to deliver recall alerts.
          </li>
          <li>
            <span className="font-medium text-ink">Approximate location</span>{" "}
            &mdash; only if you tap &quot;Use my location&quot; in Preferences.
            We convert latitude/longitude into a US state and immediately
            discard the precise coordinates. We do not track your location in
            the background.
          </li>
        </ul>

        <h3 className="mb-2 mt-6 text-sm font-medium text-ink">
          Information we do NOT collect
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            We do not collect app usage telemetry, crash reports, or
            analytics. If we ever add any of these to improve the App, we will
            update this Privacy Policy before doing so.
          </li>
          <li>
            We do not collect contacts, microphone, or photos (other than
            receipt photos you explicitly upload).
          </li>
          <li>We do not collect your precise location in the background.</li>
          <li>We do not collect data from other apps.</li>
        </ul>
      </section>

      {/* 3. How we use your information */}
      <section className="mb-8">
        <SectionHeading>3. How we use your information</SectionHeading>
        <ul className="mb-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            To match FDA food recalls to your preferences and send you
            relevant push notifications.
          </li>
          <li>
            To store your preferences so the app is personalized across
            devices.
          </li>
          <li>
            To operate premium features (pantry matching, receipt import) if
            you subscribe.
          </li>
          <li>To respond to support requests you send us.</li>
          <li>
            To comply with legal obligations and protect our rights where
            necessary.
          </li>
        </ul>
        <Paragraph>
          We do NOT use your data for advertising, profiling for third parties,
          or any purpose beyond operating RecallGuard.
        </Paragraph>
      </section>

      {/* 4. How we share your information */}
      <section className="mb-8">
        <SectionHeading>4. How we share your information</SectionHeading>
        <Paragraph className="mb-4">
          We do not sell your personal information to anyone.
        </Paragraph>
        <Paragraph className="mb-4">
          We share limited information with service providers strictly to
          operate the App:
        </Paragraph>

        <div className="mb-4 overflow-x-auto rounded-lg border border-ink/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-dark-beige/40 text-ink">
              <tr>
                <th className="px-4 py-2 font-medium">Provider</th>
                <th className="px-4 py-2 font-medium">Purpose</th>
                <th className="px-4 py-2 font-medium">Data shared</th>
              </tr>
            </thead>
            <tbody className="text-brown/80">
              <tr className="border-t border-ink/10">
                <td className="px-4 py-3 font-medium text-ink">
                  Supabase (US)
                </td>
                <td className="px-4 py-3">
                  Authentication, database, storage, edge functions
                </td>
                <td className="px-4 py-3">
                  Email, hashed password, preferences, pantry
                </td>
              </tr>
              <tr className="border-t border-ink/10">
                <td className="px-4 py-3 font-medium text-ink">
                  Expo Push Service
                </td>
                <td className="px-4 py-3">Push notification delivery</td>
                <td className="px-4 py-3">
                  Device push token, notification title/body
                </td>
              </tr>
              <tr className="border-t border-ink/10">
                <td className="px-4 py-3 font-medium text-ink">
                  Apple / Google
                </td>
                <td className="px-4 py-3">
                  App Store billing for subscriptions
                </td>
                <td className="px-4 py-3">
                  Handled entirely by the platforms; we receive only
                  anonymized subscription status
                </td>
              </tr>
              <tr className="border-t border-ink/10">
                <td className="px-4 py-3 font-medium text-ink">
                  Anthropic (US, premium only)
                </td>
                <td className="px-4 py-3">
                  Claude Haiku Vision for receipt line-item extraction
                </td>
                <td className="px-4 py-3">
                  Receipt image content, processed once without retention by
                  Anthropic per their API terms
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paragraph className="mb-4">
          We require each provider to use your data only for the services we
          purchase and not for their own purposes.
        </Paragraph>

        <Paragraph className="mb-2">
          We may also share information:
        </Paragraph>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>If required by law, subpoena, or valid legal request.</li>
          <li>
            To protect the safety of users or the public in an emergency.
          </li>
          <li>
            In connection with a merger, acquisition, or sale of our business
            &mdash; in which case the acquirer must honor this Privacy Policy.
          </li>
        </ul>
      </section>

      {/* 5. Data storage and security */}
      <section className="mb-8">
        <SectionHeading>5. Data storage and security</SectionHeading>
        <Paragraph className="mb-3">
          Your data is stored on Supabase infrastructure in the United States
          (AWS US-East). Data is encrypted in transit (TLS 1.2+) and at rest.
          Database-level access is controlled by row-level security policies
          that restrict each user to their own records.
        </Paragraph>
        <Paragraph className="mb-3">
          Authentication tokens on your device are stored in AsyncStorage (iOS
          Keychain-backed on iOS, encrypted shared preferences on Android).
        </Paragraph>
        <Paragraph>
          No system is perfectly secure. If we ever experience a data breach
          that affects your personal information, we will notify you and any
          regulatory authority required by applicable law.
        </Paragraph>
      </section>

      {/* 6. Data retention */}
      <section className="mb-8">
        <SectionHeading>6. Data retention</SectionHeading>
        <Paragraph className="mb-3">
          We retain your account information as long as your account is active.
          If you delete your account:
        </Paragraph>
        <ul className="mb-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            Your profile, preferences, pantry, and stored receipts are
            permanently deleted within 30 days.
          </li>
          <li>
            Notification delivery logs are retained for up to 90 days for audit
            and debugging, then deleted.
          </li>
        </ul>
        <Paragraph>
          To delete your account, email <SupportEmail /> from the address on
          file. We will complete deletion within 30 days and confirm by email.
        </Paragraph>
      </section>

      {/* 7. Your rights */}
      <section className="mb-8">
        <SectionHeading>7. Your rights</SectionHeading>

        <h3 className="mb-2 mt-2 text-sm font-medium text-ink">
          California residents (CCPA / CPRA)
        </h3>
        <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            You have the right to know what personal information we collect,
            use, and share.
          </li>
          <li>
            You have the right to request deletion of your personal
            information.
          </li>
          <li>
            You have the right to correct inaccurate personal information.
          </li>
          <li>
            You have the right to limit use of sensitive personal information.
            We do not use sensitive personal information for any purpose beyond
            operating the App.
          </li>
          <li>
            <span className="font-medium text-ink">
              We do not sell or &quot;share&quot; your personal information for
              cross-context behavioral advertising, and we never have.
            </span>
          </li>
          <li>
            You will not be discriminated against for exercising these rights.
          </li>
        </ul>
        <Paragraph className="mb-6">
          To exercise any of these rights, email <SupportEmail /> from the
          address on file.
        </Paragraph>

        <h3 className="mb-2 mt-2 text-sm font-medium text-ink">
          European users (GDPR)
        </h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-brown/80 sm:text-base">
          <li>
            The same access, deletion, correction, and portability rights
            apply under GDPR.
          </li>
          <li>
            Our lawful basis for processing is contract performance (operating
            the service you signed up for) and consent (for push notifications
            and location).
          </li>
          <li>
            You may lodge a complaint with your local data protection
            authority.
          </li>
        </ul>
      </section>

      {/* 8. Children's privacy */}
      <section className="mb-8">
        <SectionHeading>8. Children&apos;s privacy</SectionHeading>
        <Paragraph>
          RecallGuard is not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If you believe
          a child under 13 has provided us personal information, email{" "}
          <SupportEmail /> and we will delete it.
        </Paragraph>
      </section>

      {/* 9. Changes to this policy */}
      <section className="mb-8">
        <SectionHeading>9. Changes to this policy</SectionHeading>
        <Paragraph>
          We may update this Privacy Policy from time to time. We will post the
          updated version at this URL and update the &quot;Last updated&quot;
          date. If the change is material, we will notify you in-app or by
          email at the address on file.
        </Paragraph>
      </section>

      {/* 10. Contact */}
      <section className="border-t border-ink/10 pt-8">
        <SectionHeading>10. Contact</SectionHeading>
        <Paragraph>
          For any questions about this Privacy Policy or your personal
          information: <SupportEmail />
        </Paragraph>
        <div className="mt-6">
          <Link
            to="/apps/recallguard/terms"
            className="text-sm text-brown/70 transition-colors hover:text-vermillion"
          >
            Terms of Service &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RecallGuardPrivacy;
