import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function CartItemQuantity({ cartItems }) {
  const totalItem = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.01, type: "spring", bounce: 0.8 }}
      className=" ml-16 absolute md:ml-40 bg-backcolor rounded-full h-4 w-4 md:h-6 md:w-6 flex justify-center items-center md:items-center font-fun"
    >
      <motion.span>{totalItem}</motion.span>
    </motion.div>
  );
}

CartItemQuantity.propTypes = {
  cartItems: PropTypes.objectOf().isRequired,
};
export default CartItemQuantity;
