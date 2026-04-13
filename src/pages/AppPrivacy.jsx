import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import appsData from "../data/apps.json";
import { usePageEntrance } from "../components/utils";

const AppPrivacy = () => {
  const { slug } = useParams();
  const app = appsData.find((a) => a.slug === slug);
  const entranceRef = usePageEntrance();

  useEffect(() => {
    document.title = app
      ? `Privacy Policy - ${app.name} | AnthonyZChen`
      : "App Not Found | AnthonyZChen";
  }, [app]);

  if (!app) {
    return (
      <div className="py-20 text-center">
        <h1 className="mb-4 text-3xl font-light uppercase tracking-widest text-ink">
          App Not Found
        </h1>
        <Link
          to="/"
          className="text-sm text-vermillion transition-colors hover:text-terracotta"
        >
          Go back home
        </Link>
      </div>
    );
  }

  const { privacyPolicy } = app;

  if (!privacyPolicy) {
    return (
      <div className="py-20 text-center">
        <h1 className="mb-4 text-3xl font-light uppercase tracking-widest text-ink">
          Privacy Policy Unavailable
        </h1>
        <p className="mb-8 text-brown/70">
          The privacy policy for {app.name} is not available yet.
        </p>
        <Link
          to={`/apps/${slug}`}
          className="text-sm text-vermillion transition-colors hover:text-terracotta"
        >
          &larr; Back to {app.name}
        </Link>
      </div>
    );
  }

  const effectiveDate = privacyPolicy.effectiveDate
    ? new Date(privacyPolicy.effectiveDate)
    : null;
  const isValidDate = effectiveDate && !isNaN(effectiveDate.getTime());

  return (
    <div ref={entranceRef}>
      {/* Header */}
      <div className="mb-10">
        <Link
          to={`/apps/${slug}`}
          className="mb-4 inline-block text-sm text-brown/60 transition-colors hover:text-vermillion"
        >
          &larr; Back to {app.name}
        </Link>
        <h1 className="mb-2 text-3xl font-light uppercase tracking-widest text-ink">
          Privacy Policy
        </h1>
        <p className="text-sm text-brown/60">
          {app.name}
          {isValidDate && (
            <>
              {" "}
              &mdash; Effective{" "}
              {effectiveDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </>
          )}
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-sm leading-relaxed text-brown/80 sm:text-base">
          Anthonyzchen LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
          operates {app.name}. This Privacy Policy explains how we collect, use,
          and protect your information when you use our application.
        </p>
      </section>

      {/* Data Collection */}
      {privacyPolicy.dataCollected?.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
            Information We Collect
          </h2>
          <div className="space-y-4">
            {privacyPolicy.dataCollected.map((item, i) => (
              <div key={i} className="rounded-lg border border-ink/10 p-4">
                <h3 className="mb-1 text-sm font-medium text-ink">
                  {item.type}
                </h3>
                <p className="mb-2 text-sm text-brown/70">{item.description}</p>
                <p className="text-xs text-brown/50">
                  <span className="font-medium">Purpose:</span> {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Third-Party Sharing */}
      {privacyPolicy.thirdPartySharing && (
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
            Third-Party Sharing
          </h2>
          <p className="text-sm leading-relaxed text-brown/80 sm:text-base">
            {privacyPolicy.thirdPartySharing}
          </p>
        </section>
      )}

      {/* Data Retention */}
      {privacyPolicy.dataRetention && (
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
            Data Retention & Deletion
          </h2>
          <p className="text-sm leading-relaxed text-brown/80 sm:text-base">
            {privacyPolicy.dataRetention}
          </p>
        </section>
      )}

      {/* User Rights */}
      {privacyPolicy.userRights && (
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
            Your Rights
          </h2>
          <p className="text-sm leading-relaxed text-brown/80 sm:text-base">
            {privacyPolicy.userRights}
          </p>
        </section>
      )}

      {/* Additional Sections */}
      {privacyPolicy.additionalSections?.map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
            {section.title}
          </h2>
          <p className="text-sm leading-relaxed text-brown/80 sm:text-base">
            {section.content}
          </p>
        </section>
      ))}

      {/* Contact */}
      <section className="border-t border-ink/10 pt-8">
        <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
          Contact Us
        </h2>
        <p className="text-sm leading-relaxed text-brown/80 sm:text-base">
          If you have questions about this Privacy Policy or your data, contact
          us at{" "}
          {privacyPolicy.contactEmail ? (
            <a
              href={`mailto:${privacyPolicy.contactEmail}`}
              className="text-vermillion transition-colors hover:text-terracotta"
            >
              {privacyPolicy.contactEmail}
            </a>
          ) : (
            <span className="text-brown/60">the email listed on our support page</span>
          )}
          .
        </p>
      </section>
    </div>
  );
};

export default AppPrivacy;
