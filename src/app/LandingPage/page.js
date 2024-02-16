import Footer from "@/components/Footer";
import LatestJobs from "@/components/LatestJobs";
import Newsletter from "@/components/Newsletter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="w-[85%] m-auto">
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
