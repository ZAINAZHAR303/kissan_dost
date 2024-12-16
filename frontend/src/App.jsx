import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { LoanFinder } from './components/LoanFinder/LoanFinder';
import { FarmerCommunity } from './components/FarmerCommunity/FarmerCommunity';

export const App = () => {
  const sampleLoans = [
    {
      name: "Crop Loan",
      description: "A loan to help farmers with crop cultivation costs.",
      interestRate: "5%",
      eligibility: "Farmers with less than 5 acres of land."
    },
    {
      name: "Livestock Loan",
      description: "Support for purchasing livestock.",
      interestRate: "4%",
      eligibility: "Registered livestock farmers."
    }
  ];

  return (
    <div>
      <Navbar />
      <LoanFinder loans={sampleLoans} />
      <FarmerCommunity />
    </div>
  );
};

export default App;
