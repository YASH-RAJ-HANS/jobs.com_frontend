import JobListByCompany from "@/components/JobListByCompany";
import PostJob from "@/components/PostJob";
import React from "react";
import DashNavbar from "../appMain/DashNavbar/DashNavbar";

export default function page() {
  return (
    <div className="w-[90%] m-auto">
      {/* <DashNavbar /> */}
      {/* <JobListByCompany /> */}
      <PostJob />
    </div>
  );
}
