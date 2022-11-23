import { SHOW_HIDE_CART, REMOVE_ITEM, ADD_TO_CART } from "../Type";

function CartReducer(state, action) {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}

export default CartReducer;
