import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-beige text-brown w-full px-8 font-KoHo">
      <div id="ft_top" className="flex place-content-between border-b-4 py-3">
        <div id="ft-info" className="flex space-x-8">
          <div id="ft_region">
            <p>
              Boston, United States
              <br />
              New York, United States
            </p>
          </div>
          <div id="ft_contact">
            <p>
              anthonyzchen@yahoo.com
              <br />
              +1 (631) 428-5478
            </p>
          </div>
        </div>
        <div id="ft_socials" className="place-content-center">
          <ul className="space-x-3">
            <a href="https://www.facebook.com/anthonyzchen.03" target="_blank">
              <button>
                <i className="fa-brands fa-facebook"></i>
              </button>
            </a>
            <a href="https://github.com/Anzchen" target="_blank">
              <button>
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
            <a href="https://www.instagram.com/anthonyzchen/" target="_blank">
              <button>
                <i className="fa-brands fa-instagram"></i>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/anthonyzchen/" target="_blank">
              <button>
                <i className="fa-brands fa-linkedin"></i>
              </button>
            </a>
            <a
              href="https://open.spotify.com/user/22bsi2i6c5v3vpb2uoxuias2a"
              target="_blank"
            >
              <button>
                <i className="fa-brands fa-spotify"></i>
              </button>
            </a>
          </ul>
        </div>
      </div>
      <div id="ft_bottom" className="flex place-content-between pt-4">
        <div id="copyright">
          <span>&#169;</span>2024 anthonyzchen
        </div>
        <p id="ft_career">Software Engineering & Finance</p>
      </div>
    </footer>
  );
};

export default Footer;
