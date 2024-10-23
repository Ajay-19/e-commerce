import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from './CartContext'; // Import useCart to clear cart

const OrderSummary = () => {
  const { state } = useLocation();
  const { cartItems, name, address, paymentMode } = state || {};
  const { clearCart } = useCart(); // Get clearCart from context

  useEffect(() => {
    // Clear the cart once the order summary is displayed
    clearCart();
  }, [clearCart]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <h2 className="text-lg font-semibold mb-2">Customer Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Payment Mode:</strong> {paymentMode}</p>

      <h2 className="text-lg font-semibold mt-4">Items Ordered</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <h3 className="text-md text-gray-700">${item.price}</h3>
              </div>
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default OrderSummary;
