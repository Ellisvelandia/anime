import React from "react";
import { Link } from "react-router-dom";
import eye from "../assets/eye.webp";

const Footer = () => {
  return (
    <footer className="w-full">
      <div
        className="py-8 px-0 text-lg"
        style={{
          background: "rgba(0,0,0,0.65)",
        }}
      >
        <div className="relative z-10">
          <div className="mb-8 pb-8 border-b border-[rgba(255,255,255,.15)] border-solid inline-block">
            <Link to="/" className="block mt-10 float-left decoration-none outline-0">
              <img src={eye} alt="eye/logo" className="float-left w-56 h-56"/>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
