/**
 * BrushStroke - Decorative ink brush stroke SVG
 */
const BrushStroke = ({ className = "" }) => (
  <svg
    width="60"
    height="8"
    viewBox="0 0 60 8"
    className={className}
  >
    <path
      d="M0 4 Q10 0 20 4 Q30 8 40 4 Q50 0 60 4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const Footer = () => {
  const socialsData = [
    {
      href: "https://github.com/Anzchen",
      icon: "fa-github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/anthonyzchen/",
      icon: "fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/anthonyzchen/",
      icon: "fa-instagram",
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/anthonyzchen.03",
      icon: "fa-facebook",
      label: "Facebook",
    },
    {
      href: "https://open.spotify.com/user/22bsi2i6c5v3vpb2uoxuias2a",
      icon: "fa-spotify",
      label: "Spotify",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-beige">
      {/* Faded painting background overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-painting bg-cover bg-center opacity-[0.04]"
        style={{ backgroundPosition: "center 30%" }}
      />

      {/* Main content section */}
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 sm:px-8">
        {/* Decorative brush stroke */}
        <BrushStroke className="mb-6 text-vermillion/40" />

        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl">
          Let's Connect
        </h2>

        {/* Decorative line */}
        <div className="mb-8 h-px w-16 bg-vermillion/50" />

        {/* About text */}
        <p className="max-w-xl text-center text-sm leading-relaxed text-brown/80 sm:text-base">
          This portfolio reflects my journey as a developer and my connection to
          my Chinese and Taiwanese roots. Built with React, Tailwind CSS, and
          GSAP, it evolves alongside my growth.
        </p>

        {/* Social links - larger and more prominent */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socialsData.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Anthony's ${social.label} profile`}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-brown/20 text-brown transition-all duration-300 hover:border-vermillion hover:bg-vermillion hover:text-beige"
            >
              <i
                className={`fa-brands ${social.icon} text-lg transition-transform duration-300 group-hover:scale-110`}
                aria-hidden="true"
              ></i>
            </a>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center text-sm text-brown/70 sm:flex-row sm:gap-8">
          <a
            href="mailto:anthonyzchen@yahoo.com"
            className="transition-colors hover:text-vermillion"
          >
            anthonyzchen@yahoo.com
          </a>
          <span className="hidden text-brown/30 sm:inline">|</span>
          <span>Boston & New York</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink/10">
        <div className="px-6 py-4 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-brown/60 sm:flex-row">
            <p>
              <span className="mr-1">&copy;</span>
              {new Date().getFullYear()} Anthony Chen
            </p>
            <p className="font-medium text-ink/70">
              Software Engineering & Finance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
