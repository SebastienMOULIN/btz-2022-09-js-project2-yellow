import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { moneyConverterJmdToEur } from "../../utils/constants";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CartContext from "../../context/Cart/CartContext";

const dropIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
  exit: { opacity: 0 },
};

function Popup({ beer, open, onClose }) {
  const ref = useRef();
  const { addToCart } = useContext(CartContext);

  useOnClickOutside(ref, () => onClose());

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      {open && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 "
        >
          <div
            className="w-3/4 h-5/6 flex flex-col bg-white bg-opacity-90 overflow-y-auto p-2
            rounded-lg md:w-1/2 md:items-center"
            ref={ref}
          >
            <button
              className="text-xl font-extrabold flex justify-end mr-4 mt-2 "
              type="button"
              onClick={onClose}
            >
              X
            </button>
            <div className="p-2 flex flex-col items-center">
              <img
                className="h-52 w-16 "
                src={beer.image_url}
                alt="Une biere"
              />
              <h2 className="font-fun mb-1 md:text-xl">{beer.name}</h2>
              <h1 className="bg-bargreen rounded-md w-full p-2 bg-opacity-90 mb-1 md:w-3/4 md:text-lg">
                {beer.description}
              </h1>

              <div className="bg-backpink rounded-md w-full bg-opacity-90 p-2 md:w-3/4 md:text-lg">
                <h3 className="font-bold">Good combinaison with : </h3>
                <li>
                  {beer.food_pairing.map((food) => (
                    <ul key={food.name}>{food}.</ul>
                  ))}
                </li>
              </div>
            </div>
            <div className="flex flex-row justify-around w-full md:w-3/4 ">
              <p className="text-bargreen font-semibold md:text-lg ">
                {" "}
                {beer.abv} %
              </p>
              <p className="text-backpink font-semibold md:text-lg ">
                {moneyConverterJmdToEur(beer.target_fg).toFixed(2)} €
              </p>
              <motion.button
                whileHover={{ scale: 1.2 }}
                type="button"
                onClick={() => addToCart(beer)}
                className="text-sm bg-bargreen rounded-md flex justify-center items-center md:text-lg   text-white h-full w-1/4"
              >
                Add to <FaShoppingCart />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
Popup.propTypes = {
  beer: PropTypes.objectOf().isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Popup;
