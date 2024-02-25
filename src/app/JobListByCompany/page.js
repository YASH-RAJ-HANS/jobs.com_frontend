import JobListByCompany from "@/components/JobListByCompany";
import PostJob from "@/components/PostJob";
import React from "react";

export default function page() {
  return (
    <div className="w-[90%] m-auto">
      {/* <JobListByCompany /> */}
      <PostJob />
    </div>
  );
}
