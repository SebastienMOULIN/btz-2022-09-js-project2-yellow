import React, { useContext, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Logo from "../global/Logo";
import SearchBar from "../header/SearchBar";
import PictoBeer from "../header/PictoBeer";
import PictoBeerAnimation from "../header/PictoBeerAnimation";
import CartContext from "../../context/Cart/CartContext";
import ShoppingCart from "../shop/ShoppingCart";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import CartItemQuantity from "../shop/CartItemQuantity";

function Header({ isBurgerMenuOpen, handleDisplayBurger }) {
  const ref = useRef();
  const { cartItems, showHideCart } = useContext(CartContext);
  // Display search bar
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  function handleDisplaySearchBar() {
    setIsSearchBarActive(!isSearchBarActive);
  }

  useOnClickOutside(ref, () => setIsSearchBarActive(false));
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    setIsNew(true);
    const timer = setTimeout(() => setIsNew(false), 300);
    return () => clearTimeout(timer);
  }, [cartItems]);

  return (
    <div>
      <div className=" flex flex-col justify-center items-center ">
        <ShoppingCart />
      </div>

      <div className="bg-navBlue h-28 md:h-40 flex justify-around items-center ml-[-30px] ">
        {!isBurgerMenuOpen && <PictoBeer onClick={handleDisplayBurger} />}
        {isBurgerMenuOpen && (
          <PictoBeerAnimation onClick={handleDisplayBurger} />
        )}
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Display search bar */}
        <div ref={ref} className=" flex items-center">
          <HiMagnifyingGlass
            onClick={handleDisplaySearchBar}
            className="h-8 w-8 md:h-14 md:w-14 md:mr-10"
            src="src/assets/loupe.png"
            alt="icone loupe"
          />

          {isSearchBarActive && <SearchBar />}

          {/* Shopping cart icon */}
          {!isSearchBarActive && (
            <motion.div
              className=" flex flex-row justify-center items-center"
              whileHover={{
                rotate: [0, 60, -60, 0],
              }}
              transition={{
                type: "spring",
                bounce: 0.8,
              }}
            >
              <RiShoppingCartLine
                onClick={showHideCart}
                className="h-9 w-9  md:h-14 md:w-14 cursor-pointer"
              />
            </motion.div>
          )}
          {cartItems.length > 0 && !isNew && (
            <CartItemQuantity cartItems={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  isBurgerMenuOpen: PropTypes.bool.isRequired,
  handleDisplayBurger: PropTypes.func.isRequired,
};

export default Header;
