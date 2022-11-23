import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import MenuLinks from "./MenuLinks";
import image from "../../assets/headliner_hazy_jane_1__2.png";

const MenuDesktop = forwardRef((_, ref) => {
  return (
    <div className="flex justify-between bg-backcolor">
      <motion.nav ref={ref} className="bg-bargreen relative w-1/3 ">
        <motion.div
          animate={{ right: -300, rotate: "-10deg", top: -200 }}
          initial={{ right: 0 }}
          transition={{ type: "spring" }}
          className="absolute  bg-bargreen w-[900px] h-[1270px] border-r-8 border-black"
        />
        <motion.ul className="relative">
          <MenuLinks />
        </motion.ul>
      </motion.nav>
      <img src={image} alt="Hazy Jane Guava" className="w-[50%]" />
    </div>
  );
});

export default MenuDesktop;
