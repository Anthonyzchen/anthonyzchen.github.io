import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-screen w-full flex-col bg-beige px-8 font-KoHo text-brown">
      <div className="flex flex-grow items-center justify-center">
        placeholder
      </div>
      <div className="flex place-content-between border-b-2 border-brown py-2">
        <div className="flex space-x-8">
          <div>
            <p>
              Boston, United States
              <br />
              New York, United States
            </p>
          </div>
          <div>
            <p>
              anthonyzchen@yahoo.com
              <br />
              +1 (631) 428-5478
            </p>
          </div>
        </div>
        <div className="place-content-center">
          <ul className="space-x-3">
            {[
              {
                href: "https://www.facebook.com/anthonyzchen.03",
                icon: "fa-facebook",
              },
              { href: "https://github.com/Anzchen", icon: "fa-github" },
              {
                href: "https://www.instagram.com/anthonyzchen/",
                icon: "fa-instagram",
              },
              {
                href: "https://www.linkedin.com/in/anthonyzchen/",
                icon: "fa-linkedin",
              },
              {
                href: "https://open.spotify.com/user/22bsi2i6c5v3vpb2uoxuias2a",
                icon: "fa-spotify",
              },
            ].map(({ href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <i className={`fa-brands ${icon}`}></i>
                </button>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex place-content-between py-2">
        <div id="copyright">
          <span>&#169;</span>2024 anthonyzchen
        </div>
        <p id="ft_career">Software Engineering & Finance</p>
      </div>
    </footer>
  );
};

export default Footer;
