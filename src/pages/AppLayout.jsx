import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CopyEmail = ({ email, className = "" }) => {
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
      className={`cursor-pointer transition-colors hover:text-vermillion ${className}`}
    >
      {copied ? "Copied!" : email}
    </button>
  );
};

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-beige font-light text-brown">
      {/* Simple header with back link */}
      <header className="border-b border-ink/10 px-6 py-4 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-brown/70 transition-colors hover:text-vermillion"
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
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            anthonyzchen.com
          </Link>
        </div>
      </header>

      {/* Page content */}
      <main className="relative px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-ink/10 px-6 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 text-xs text-brown/60 sm:flex-row">
          <p>
            <span className="mr-1">&copy;</span>
            {new Date().getFullYear()} Anthonyzchen LLC
          </p>
          <CopyEmail email="support@anthonyzchen.com" />
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
