import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import appsData from "../data/apps.json";
import { usePageEntrance } from "../components/utils";

const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-vermillion px-5 py-3 text-sm font-medium text-vermillion transition-colors hover:bg-vermillion hover:text-beige"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M2 4L8 9L14 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="1"
          y="3"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      {copied ? "Copied!" : email}
    </button>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-ink transition-colors hover:text-vermillion sm:text-base"
      >
        {question}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-4 text-sm leading-relaxed text-brown/70">{answer}</p>
      )}
    </div>
  );
};

const AppSupport = () => {
  const { slug } = useParams();
  const app = appsData.find((a) => a.slug === slug);
  const entranceRef = usePageEntrance();

  useEffect(() => {
    document.title = app
      ? `Support - ${app.name} | AnthonyZChen`
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
          Support
        </h1>
        <p className="text-sm text-brown/60">{app.name}</p>
      </div>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
          Contact Us
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-brown/80 sm:text-base">
          Having trouble or have a question? Reach out and we'll get back to you
          as soon as possible.
        </p>
        {app.supportEmail ? (
          <CopyEmail email={app.supportEmail} />
        ) : (
          <p className="text-sm text-brown/60">
            Support contact is not yet available for this app.
          </p>
        )}
      </section>

      {/* FAQs */}
      {app.supportFaqs && app.supportFaqs.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wide text-ink">
            Frequently Asked Questions
          </h2>
          <div className="rounded-lg border border-ink/10">
            {app.supportFaqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      )}

      {/* Privacy link */}
      <section className="border-t border-ink/10 pt-8">
        <Link
          to={`/apps/${slug}/privacy`}
          className="text-sm text-brown/70 transition-colors hover:text-vermillion"
        >
          Privacy Policy &rarr;
        </Link>
      </section>
    </div>
  );
};

export default AppSupport;
