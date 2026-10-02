import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.book.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.id === action.book.id ? { ...i, quantity: i.quantity + 1 } : i)
        };
      }
      return { ...state, items: [...state.items, { ...action.book, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map(i => i.id === action.id ? { ...i, quantity: action.quantity } : i)
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
