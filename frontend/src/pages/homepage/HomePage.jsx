import React from "react";
import { motion } from "framer-motion";
import Poster from "../../components/poster/Poster";
import LoansIntro from "../../components/loans/LoansIntro";
import CommunityIntro from "../../components/CommunityIntro/CommunityIntro ";
import Footer from "../../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Poster />
      <section
        id="home"
        className="p-8 pt-14 pb-20 bg-gradient-to-r from-green-300 via-green-200 to-green-100 text-center relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-200 via-transparent to-gray-200 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}></motion.div>

        <div className="z-10">
          <LoansIntro />
        </div>

        <div className="z-10 mt-8">
          <CommunityIntro />
        </div>
      </section>

      <Footer />
    </>
  );
};
