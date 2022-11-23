import React, { useContext } from "react";
import PropTypes from "prop-types";
import CartContext from "../../context/Cart/CartContext";
import { moneyConverterJmdToEur } from "../../utils/constants";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <tr className=" border-b-2 border-bargreen ">
      <th className="">
        <img
          src={item.image_url}
          alt="une biere"
          className="w-8 h-28 mx-4 my-4 "
        />
      </th>
      <th>x{item.quantity}</th>
      <th className="font-fun">{item.name}</th>
      <th>
        {" "}
        {moneyConverterJmdToEur(item.target_fg).toFixed(2) * item.quantity}€
      </th>
      <th>
        <button
          onClick={() => removeItem(item.id)}
          type="button"
          className="bg-red-600 rounded-full w-6"
        >
          X
        </button>
      </th>
    </tr>
  );
}
CartItem.propTypes = {
  item: PropTypes.objectOf().isRequired,
};

export default CartItem;
