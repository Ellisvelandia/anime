import React from "react";
import { Link } from "react-router-dom";
import eye from "../assets/eye.webp";

const Navlinks = [
  { name: "Home", to: "/" },
  { name: "MostPopular", to: "/mostpopular" },
  { name: "Movies", to: "/movies" },
];

const Links = () => {
  return (
    <div className="space-y-4 pl-1  absolute top-20 z-10 bg-[#2a2c31] p-4 rounded-b">
      <img src={eye} alt="eye/logo" />
      {Navlinks.map(({ name, to }) => (
        <ul className="flex text-lg justify-center items-center" key={name + to}>
          <li>
            {" "}
            <Link to={to} className="tracking-wide text-center text-white cursor-pointer">
              {name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Links;
