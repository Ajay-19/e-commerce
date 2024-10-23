import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './components/Body';
import Cart from './components/Cart';
import ErrorElement from './components/ErrorElement';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout';
import OrderSummary from './components/OrderSummary';
import "./index.css"



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:(<CartProvider><App/></CartProvider>),
    children:[{
      path:'/',
      element:<Body/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/checkout",
      element:<Checkout/>
    },
    {
      path:"/ordersummary",
      element:<OrderSummary/>
    },
  ],
    errorElement:<ErrorElement/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);