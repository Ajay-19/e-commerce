import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        // Remove the specific item instance without affecting others
        updatedItems.splice(itemIndex, 1); // Remove one instance
        return updatedItems;
      }
      return prevItems; // Return unchanged if the item is not found
    });
  };

  const clearCart = () => {
    setCartItems([]); // Clears the cart
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
