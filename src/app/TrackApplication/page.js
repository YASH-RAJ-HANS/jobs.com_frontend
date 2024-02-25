// JobApplications.js

import React from "react";
import Layout from "../appMain/Layout/Layout";
import JobApplications from "@/components/JobApplications";
export default function page() {
  return (
    <Layout>
      <div className=" flex justify-center w-full pl-3 pr-3">
       <JobApplications />
      </div>{" "}
      {/* <Footer /> */}
    </Layout>
  );
}

