import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Filtering from "@/components/Filtering";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Navbar />
        <Filtering />
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
