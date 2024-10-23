// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total value when rendering
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <h3 className="text-md text-gray-700">${item.price}</h3>
              </div>
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <button onClick={() => handleRemove(item)} className="text-red-500 ml-4">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;