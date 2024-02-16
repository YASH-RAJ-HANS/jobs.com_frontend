import Footer from "@/components/Footer";
import Home from "@/components/Home";
import LatestJobs from "@/components/LatestJobs";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Flow from "@/components/flow";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Navbar />
        <Home />
        <Flow />
        <LatestJobs />
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
