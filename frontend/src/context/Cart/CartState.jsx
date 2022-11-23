import { useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, REMOVE_ITEM, ADD_TO_CART } from "../Type";

function CartContextProvider({ children }) {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const context = useMemo(
    () => ({
      showCart: state.showCart,
      cartItems: state.cartItems,
      addToCart,
      showHideCart,
      removeItem,
    }),
    [state]
  );

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CartContextProvider;
