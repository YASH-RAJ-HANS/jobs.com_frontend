import Footer from "@/components/Footer";
import Home from "@/components/Home";
import LatestJobs from "@/components/LatestJobs";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Navbar />
        <Home />
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
