import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Filtering from "@/components/Filtering";
import React from "react";
import Layout from "../appMain/Layout/Layout";
import JobsListing from "@/components/JobsListing";

export default function page() {
  return (
    <Layout>
      <div className=" flex justify-center w-full pl-3 pr-3">
        <Filtering />
        <JobsListing />
      </div>{" "}
      {/* <Footer /> */}
    </Layout>
  );
}
