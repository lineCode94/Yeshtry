import { createContext, useState, useContext } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  //toggle cart
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  //open cart
  const OpenCart = () => {
    setIsOpen(true);
  };
  //close cart
  const CloseCart = () => {
    setIsOpen(false);
  };
  //get current item
  const getItemsQunatity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  //increase
  const increaseCartQuantity = (id) => {
    if (cartItems.find((item) => item.id === id) == null) {
      return [...cartItems, { id, quantity: 1 }];
    } else {
      return cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  };
  //decresing
  const decreaseCartQuantity = (id) => {
    if (cartItems.find((item) => item.id === id) == null) {
      return cartItems.filiter((item) => item.id !== id);
    } else {
      return cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  };
  //remove
  const removeItemFromCart = (id) => {
    setCartItems.filter((item) => item.id !== id);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQunatity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        toggleCart,
        OpenCart,
        CloseCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
