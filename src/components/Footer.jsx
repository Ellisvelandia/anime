import React from "react";
import eye from "../assets/eye.webp";
import { Link, animateScroll as scroll } from "react-scroll";
import { socials } from "../data/socialData";
import { SocialIcon } from "react-social-icons";

const Navlinks = [
  { name: "Home", to: "/" },
  { name: "MostPopular", to: "/mostpopular" },
  { name: "Movies", to: "/movies" },
];

const Footer = () => {
  return (
    <footer className="w-full object-fill" id="bottom">
      <div
        className="py-8 px-0 text-lg"
        style={{
          background: "rgba(0,0,0,0.85)",
        }}
      >
        <div className="relative z-10">
          <div className="mb-8 pb-8 border-b border-[rgba(255,255,255,.15)] border-solid flex items-center">
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img
                src={eye}
                alt="eye/logo"
                className="float-left h-36 w-40 cursor-pointer inline-block"
              />
            </Link>
            <div className="float-left">
              <div className="inline-block md:pl-4 pl-2 border-l-2 border-solid border-[rgba(255,255,255,.15)] text-base">
                <div className="float-left h-11 flex justify-items-start items-center">
                  <div className="mr-2 flex-shrink-0">
                    {socials.map((social) => (
                      <SocialIcon
                        key={social.id}
                        url={social.url}
                        fgColor="#fff"
                        rel="noreferrer"
                        target="_blank"
                        style={{ height: 35, width: 35 }}
                        className="mx-2 hover:scale-150"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex gap-8 pl-10">
            {Navlinks.map(({ name, to }) => (
              <ul
                className="flex text-lg justify-center items-center"
                key={name + to}
              >
                <li>
                  <Link
                    to={to}
                    className="tracking-wide text-center text-white cursor-pointer hover:text-[#e21f1f] delay-100"
                  >
                    {name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="my-0 mx-auto pl-4 text-white leading-relaxed opacity-60 md:text-justify text-base text-center">
            <p>
              this web does not store any files on our server, we only linked to
              the media which is hosted on 3rd party service
            </p>
          </div>
          <p className="mb-0 opacity-60 text-white my-3 md:pl-4 md:text-justify text-center text-base">
            © EllisVelandia2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
