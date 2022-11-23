import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../utils/constants";
import LegalNotices from "../footer/LegalNotices";
import Logo from "../global/Logo";
// import NavLinks from "../global/NavLinks";
import NetworkLinks from "../footer/NetworkLinks";
import NewsletterInput from "../footer/NewsletterInput";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-navBlue w-full h-354 relative z-40">
      <Link to="/">
        <Logo />
      </Link>
      <NewsletterInput />
      <div className="flex w-full md:w-1/2 justify-between font-anton text-white text-2xl text-stroke mt-8">
        {navLinks.map((link) => (
          <Link to={link.to}>{link.page}</Link>
        ))}
      </div>
      <NetworkLinks />
      <LegalNotices />
    </div>
  );
}

export default Footer;
