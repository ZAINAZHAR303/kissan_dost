

import { Navbar } from './components/Navbar/Navbar';
// import { LoanFinder } from './components/LoanFinder/LoanFinder';
// import { FarmerCommunity } from './components/FarmerCommunity/FarmerCommunity';
import { HomePage } from './pages/homepage/HomePage';


const App = () => {
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
      <HomePage />
    </div>
  );
};
export default App;
