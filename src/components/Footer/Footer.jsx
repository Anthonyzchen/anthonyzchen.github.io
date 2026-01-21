const Footer = () => {
  const socialsData = [
    {
      href: "https://www.facebook.com/anthonyzchen.03",
      icon: "fa-facebook",
      label: "Facebook",
    },
    {
      href: "https://github.com/Anzchen",
      icon: "fa-github",
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/anthonyzchen/",
      icon: "fa-instagram",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/anthonyzchen/",
      icon: "fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://open.spotify.com/user/22bsi2i6c5v3vpb2uoxuias2a",
      icon: "fa-spotify",
      label: "Spotify",
    },
  ];
  return (
    <footer className="flex h-screen w-full flex-col bg-beige px-8">
      <div className="flex flex-grow items-center justify-center">
        <p className="w-4/5 sm:w-1/2 text-center text-brown">
          This personal portfolio, now in its third iteration, strives to best
          showcase my identity. Developed with the Vite framework in Visual
          Studio Code, it reflects my deep connection to my Chinese and
          Taiwanese roots, as well as my American culture. Built with React.js,
          Tailwind CSS, and GSAP for smooth animations, the site is designed to
          evolve alongside my growth as a developer. Deployed through GitHub, it
          features a sleek design with all text set in the modern KoHo typeface.
        </p>
      </div>
      <div className="flex flex-col justify-between border-b-2 border-ink/20 py-2 sm:flex-row">
        <div className="flex flex-col space-y-4 text-brown sm:flex-row sm:space-x-8 sm:space-y-0">
          <div>
            <p>
              Boston, United States
              <br />
              New York, United States
            </p>
          </div>
          <div>
            <p>
              <a href="mailto:anthonyzchen@yahoo.com" className="transition-colors hover:text-vermillion">
                anthonyzchen@yahoo.com
              </a>
              <br />
              +1 (631) 428-5478
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-start sm:mt-0 sm:justify-center">
          <ul className="flex space-x-4">
            {socialsData.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Anthony's ${social.label} profile`}
                  className="text-brown transition-colors duration-300 hover:text-vermillion"
                >
                  <i className={`fa-brands ${social.icon} text-xl`} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between py-2 text-brown sm:flex-row">
        <div id="copyright">
          <span>&#169;</span>{new Date().getFullYear()} anthonyzchen
        </div>
        <p id="ft_career" className="text-ink font-medium">Software Engineering & Finance</p>
      </div>
    </footer>
  );
};

export default Footer;
