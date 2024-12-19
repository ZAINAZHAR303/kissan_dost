import React from 'react';
import { HomePage } from '../pages/homepage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FarmerCommunity } from '../pages/FarmerCommunity/FarmerCommunity';
import { LoanFinder } from '../pages/LoanFinder/LoanFinder';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import ChatBot from '../pages/chatbot/ChatBot';
import { Login } from '../pages/login/Login';
import { AddThoughts } from '../pages/addThoughts/AddThoughts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/loanfinder",
    element: <LoanFinder/> ,
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  
  {
    path: "/FarmerCommunity",
    element: <FarmerCommunity />,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/chatbot",
    element: <ChatBot/>,
  },
  
  {
    path: "/addThoughts",
    element: <AddThoughts/>,
  }
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
