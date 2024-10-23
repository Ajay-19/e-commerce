import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import useCart to access cart items
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useCart(); // Get cart items from context
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const orderDetails = {
    name,
    address,
    paymentMode,
    cartItems // Include cart items in the order details
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent form submission; actual navigation will happen via the Link
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Payment Mode</label>
          <select
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Payment Mode</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        {/* Link to order-summary page and pass orderDetails as state */}
        <Link
          to="/ordersummary"
          state={orderDetails} // Pass order details and cart items as state
        >
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
