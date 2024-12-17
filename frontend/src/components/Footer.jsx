import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-10  ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-poppinsSemibold">Kissan Dost</h1>
          <p className="text-sm font-poppinsLight">
            Bridging the gap between farmers and resources, fostering growth and collaboration for a sustainable future.
          </p>
        </div>
  
        {/* Navigation Links */}
        <div className="space-y-2">
          <h2 className="font-poppinsSemibold text-lg">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="#loan-finder" className="hover:underline font-poppinsRegular">Loan & Subsidy Finder</a>
            </li>
            <li>
              <a href="#community" className="hover:underline font-poppinsRegular">Farmer Community</a>
            </li>
            <li>
              <a href="#about" className="hover:underline font-poppinsRegular">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline font-poppinsRegular">Contact</a>
            </li>
          </ul>
        </div>
  
        {/* Contact Info */}
        <div className="space-y-2">
          <h2 className="font-poppinsSemibold text-lg">Contact Us</h2>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+92 308 5440364</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>KissanDost@gmail.com</span>
            </li>
          </ul>
        </div>
  
        {/* Social Media */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
              <FaFacebook className="text-2xl text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
              <FaTwitter className="text-2xl text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
              <FaInstagram className="text-2xl text-pink-500" />
            </a>
          </div>
        </div>
      </div>
  
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-green-600 pt-4 text-center text-sm">
        © 2024 Kissan Dost. All Rights Reserved.
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
