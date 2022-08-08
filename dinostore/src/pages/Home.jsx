import React from "react";
import Navbar from "../components/Navbar";
import Hammond from "../components/Hammond";
import Dinotype from "../components/Dinotype";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hammond />
      <Navbar />
      <Dinotype />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
