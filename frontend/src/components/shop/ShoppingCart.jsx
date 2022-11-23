import React, { useContext } from "react";
import { motion } from "framer-motion";
import CartContext from "../../context/Cart/CartContext";
import CartItem from "./CartItem";
import { moneyConverterJmdToEur } from "../../utils/constants";

function ShoppingCart() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  const categories = ["produits", "descriptif", "prix", "delete"];

  return (
    <div>
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex w-5/6 md:w-3/6 overflow-y-auto h-5/6 flex-col bg-white 
            rounded-lg"
          >
            <div className="fixed flex flex-row justify-around items-center z-10  bg-bargreen h-12 w-5/6 md:w-3/6 md:h-20 rounded-t-lg">
              <h3 className="text-white font-semibold">Shopping Cart</h3>
              <motion.h5
                whileHover={{ scale: 1.3 }}
                onClick={showHideCart}
                className="cursor-pointer text-white font-semibold"
              >
                Close Shop
              </motion.h5>
            </div>
            <div>
              {cartItems.length === 0 ? (
                <div className="flex justify-center ">
                  <h3 className="font-bold pt-20 ">
                    <p>Thirsty mate ?</p>

                    <p>Let's order some beers then !</p>
                  </h3>
                </div>
              ) : (
                <div className="p-6 md:pt-20">
                  <table className="w-full overflow-y-auto mt-4  ">
                    <tr className="hidden">
                      {categories.map((cat) => (
                        <th className="md:pt-4">{cat}</th>
                      ))}
                    </tr>

                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </table>

                  <div className="flex justify-between mt-10 ">
                    <div className="bg-backpink rounded-lg h-10 w-40 flex justify-center items-center font-semibold">
                      Cart Total :{" "}
                      {cartItems
                        .reduce(
                          (amount, item) =>
                            moneyConverterJmdToEur(
                              item.target_fg * item.quantity
                            ) + amount,
                          0
                        )
                        .toFixed(2)}{" "}
                      €
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="bg-bargreen rounded-lg h-10 w-20 flex justify-center items-center text-white font-semibold text-lg"
                    >
                      Pay
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
