import React from "react";
import { Link} from "react-router-dom";
// import { Navbar } from "../Navbar/Navbar";

const Poster = () => {
  return (
    <div className="relative w-screen h-screen bg-slate-300 overflow-hidden">
       
     

  <video
    src="posterfin2.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  ></video>

  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
  <nav className="bg-green-600 inset-0 absolute z-20 h-[50px] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AgriConnect</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/loanfinder"className="hover:underline">Loans</Link></li>
            <li><Link to="/FarmerCommunity" className="hover:underline">Community</Link></li>
            <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
          

          </ul>
        </div>
      </nav>
  
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center  text-white px-4">
  {/* <Navbar /> */}
  <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
    Welcome to Kissan Dost
  </h1>
  <p className="text-lg md:text-2xl mt-4 animate-slide-up">
  Your Guide to Growth and Community.
  </p>
</div>

</div>

  );
};

export default Poster;
