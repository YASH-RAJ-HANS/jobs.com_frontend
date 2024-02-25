import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <AboutUs />
    </div>
  );
}
