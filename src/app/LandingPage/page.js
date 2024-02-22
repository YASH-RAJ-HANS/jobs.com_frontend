import CareerOptions from "@/components/CareerOptions";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import LatestJobs from "@/components/LatestJobs";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Offer from "@/components/Offer";
import Flow from "@/components/flow";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[90%] m-auto overflow-x-hidden">
        <Navbar />
        <Home />
        <Flow />
        <CareerOptions />
        <br />
        <br />
        <LatestJobs />
        <Offer />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Newsletter />
      </div>{" "}
      <Footer />
    </>
  );
}
