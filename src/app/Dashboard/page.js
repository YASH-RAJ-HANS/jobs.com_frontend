import JobDetail from "@/components/JobDetail";
import UserProfile from "@/components/UserProfile";
import React from "react";
import Layout from "../appMain/Layout/Layout";

export default function page() {
  return (
    <div className=" m-auto">
      {/* <JobDetail /> */}
      <Layout>
        <UserProfile />
      </Layout>
    </div>
  );
}
