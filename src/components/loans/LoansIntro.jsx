import React from "react";
import "./loans.css";
import { FaHandshake, FaClipboardList, FaSeedling } from "react-icons/fa";
import { Link } from "react-router-dom";
function LoansIntro() {
  return (
    <div className="relative   mt-10 animate-fadeIn flex flex-col lg:flex-row lg:gap-4">
      <div className="relative overflow-hidden rounded-lg ">
        <img
          src="kissan1.jpg"
          alt="kissan"
          className="rounded-lg w-[400px] h-[477px] lg:w-[600px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="text-center mt-6">
        <h2 className="text-4xl font-poppinsSemibold text-green-700 mb-4 lg:mb-8">
          Access To Loans & Subsidies
        </h2>

        <ul className="space-y-4 lg:space-y-8 text-gray-700 text-lg animate-fadeIn">
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaHandshake className="text-green-600 text-2xl max-sm:text-[2.5rem] group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300 font-poppinsMedium">
              At{" "}
              <span className="text-green-600 font-poppinsSemibold">
                Kissan Dost
              </span>
              , we aim to bridge the gap between farmers and financial
              opportunities.
            </span>
          </li>
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaClipboardList className="text-green-600  text-xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300 font-poppinsMedium">
              Explore government schemes and stay updated on subsidies.
            </span>
          </li>
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaSeedling className="text-green-600 text-xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300 font-poppinsMedium">
              Take a step toward sustainable agricultural growth.
            </span>
          </li>
        </ul>
        <div className="mt-6 lg:mt-15 flex w-full  justify-center space-x-4">
        <Link to="LoanFinder" className="bg-green-600 font-poppinsMedium text-white py-2 px-4 rounded-lg w-full lg:w-[400px]  shadow-md hover:bg-green-700 transition-colors duration-300">
          Explore Loans
        </Link>
        
        
      </div>
      </div>
     
    </div>
  );
}

export default LoansIntro;
