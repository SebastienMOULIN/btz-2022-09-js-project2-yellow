// import { createContext, useState } from "react";

// export const CartContext = createContext({});

// function CartContextProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     const itemIndex = cart.findIndex((cartItem) => item.id === cartItem.id);
//     const newCart = cart.slice(itemIndex, 1);
//     setCart(newCart);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export default CartContextProvider;
