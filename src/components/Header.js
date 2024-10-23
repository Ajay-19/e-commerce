import React from "react";
import { Link } from "react-router-dom";
import { useCart } from './CartContext';

const Header = () => {
  const { cartItems } = useCart(); // Get cartItems from the context
  const cartCount = cartItems.length; // Calculate cart count based on items
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFFofPxsjIBj2-mv7lDWSOIoK6As6bgBG7g&s"
          alt="Logo" 
          className="h-20" 
        />
      </div>
      <div>
        <ul className="flex space-x-6 mx-5">
          <Link to="/"><li className="px-4 hover:text-gray-300 cursor-pointer">Home</li></Link>
          <Link to="/cart"><li className="px-4 hover:text-gray-300 cursor-pointer">Cart - {cartCount}</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header