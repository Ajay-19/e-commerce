// ProductCart.js
import React from 'react';
import { useCart } from './CartContext';

const ProductCart = ({ ProductInfo }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();

  // Check if the product is already in the cart
  const isInCart = cartItems.some(item => item.id === ProductInfo.id);

  const handleAddToCart = () => {
    addToCart(ProductInfo);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(ProductInfo);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={ProductInfo.image} alt="Product Img" className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col h-56">
        <h1 className="text-xl font-semibold mb-2">{ProductInfo.title}</h1>
        <h2 className="text-lg text-gray-700 mb-4">${ProductInfo.price}</h2>

        {/* Conditionally render buttons based on cart state */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Add To Cart
          </button>
        {isInCart && (
          <button
            onClick={handleRemoveFromCart}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Remove from Cart
          </button>
        ) } 
      </div>
    </div>
  );
};

export default ProductCart;
