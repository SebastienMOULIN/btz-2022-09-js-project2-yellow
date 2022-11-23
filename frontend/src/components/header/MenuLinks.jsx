import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../../utils/constants";

function MenuLinks({ isBurgerMenuOpen }) {
  return (
    <div className="md:ml-28 w-full h-[92vh] pt-20 flex flex-col justify-around items-center text-white text-3xl">
      {navLinks.map((link, index) => (
        <motion.li
          style={{ fontSize: `${70 + index * 20}px` }}
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, type: "spring" }}
          onClick={!isBurgerMenuOpen}
          className="mt-[-200px]"
        >
          <Link className="font-anton text-stroke" to={link.to}>
            {link.page}
          </Link>
        </motion.li>
      ))}
    </div>
  );
}

MenuLinks.propTypes = {
  isBurgerMenuOpen: PropTypes.bool.isRequired,
};

export default MenuLinks;
