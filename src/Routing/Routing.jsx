import React from 'react';
import { HomePage } from '../pages/homepage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FarmerCommunity } from '../pages/FarmerCommunity/FarmerCommunity';
import { LoanFinder } from '../pages/LoanFinder/LoanFinder';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import ChatBot from '../pages/chatbot/ChatBot';

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
  }
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
