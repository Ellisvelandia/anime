import React from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.webp";

const Navlinks = [
  { name: "Home", to: "/" },
  { name: "Manga", to: "/manga" },
  { name: "Movies", to: "/movies" },
];

const Links = () => {
  return (
    <div className="space-y-4 pl-1 absolute top-20 z-10 bg-[#2a2c31] p-4 rounded-b flex flex-col items-center">
      <div className="m-0">
        <img src={eye} alt="eye/logo" className="md:w-64" />
      </div>
      <div className="w-full flex justify-center text-center gap-4 my-4 items-center h-full p-8">
        {Navlinks.map(({ name, to }) => (
          <ul className="flex text-lg justify-center" key={name + to}>
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
    </div>
  );
};

export default Links;
