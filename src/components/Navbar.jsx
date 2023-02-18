import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import eye from "../assets/eye.webp";
import Links from "./homesContainer/Links";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative h-20 w-full flex items-center">
      <div className="flex items-center w-full ">
        <Hamburger
          duration={1.2}
          color="#C90000"
          toggled={isOpen}
          toggle={setOpen}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        <div className="w-full justify-center flex">
          <Link
            activeClass="active"
            to="bottom"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img
              src={eye}
              alt="anime/logo"
              className="h-36 w-40 justify-center cursor-pointer"
              id="top"
            />
          </Link>
        </div>
        {isOpen && <Links />}
      </div>
    </nav>
  );
};

export default Navbar;
