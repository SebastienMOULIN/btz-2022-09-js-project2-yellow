import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Popup from "./Popup";
import CartContext from "../../context/Cart/CartContext";
import { moneyConverterJmdToEur } from "../../utils/constants";

function BeersCards({ beer, i }) {
  const { addToCart } = useContext(CartContext);
  const [isDemo, setIsDemo] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  function HandleOverBeer() {
    setIsDemo((e) => !e);
  }

  function HandleOverOpacity() {
    setIsOpacity((j) => !j);
  }
  function HandleOpacityAndDescription() {
    setOpenDescription(!openDescription);
    setIsOpacity(!isOpacity);
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -500 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1, delay: i * 0.08 }}
      className="flex flex-row border border-black rounded-md p-4 "
    >
      <li
        className="relative flex flex-col justify-end items-center"
        onMouseEnter={HandleOverOpacity}
        onMouseLeave={HandleOverOpacity}
      >
        {isOpacity && (
          <div className="absolute m-36">
            <p className="text-bargreen font-semibold">{beer.tagline}</p>
          </div>
        )}
        <div
          className={
            isOpacity
              ? "w-32 h-100  flex flex-col justify-end items-center text-center relative opacity-10"
              : "w-32 h-100  flex flex-col justify-end items-center text-center relative"
          }
        >
          <img
            onMouseEnter={HandleOverBeer}
            onMouseLeave={HandleOverBeer}
            src={beer.image_url}
            alt={beer.name}
            className={
              isDemo ? "hover:rotate-12 duration-75 h-52 w-16" : "h-52 w-16"
            }
          />
          <h3 className="hover:underline-offset-auto font-fun text-xl ">
            {beer.name}
          </h3>
          <p className=" text-backpink font-semibold "> {beer.abv}%</p>
          <p className="text-bargreen font-semibold">
            {moneyConverterJmdToEur(beer.target_fg).toFixed(2)} €
          </p>
        </div>
        <div className="flex flex-row-reverse justify-center items-center  gap-2">
          <motion.button
            whileHover={{ scale: 1.2 }}
            type="button"
            onClick={() => addToCart(beer)}
            className="text-sm bg-bargreen rounded-md flex justify-center items-center   text-white h-full w-1/3"
          >
            <FaShoppingCart />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.2 }}
            type="button"
            className="text-sm bg-backpink rounded-md flex justify-center items-center w-28  h-6 text-white font-semibold"
            onClick={HandleOpacityAndDescription}
          >
            Description
          </motion.button>
          <Popup
            beer={beer}
            open={openDescription}
            onClose={() => setOpenDescription(false)}
          />
        </div>
      </li>
    </motion.div>
  );
}

BeersCards.propTypes = {
  beer: PropTypes.objectOf().isRequired,
  i: PropTypes.string.isRequired,
};

export default BeersCards;
