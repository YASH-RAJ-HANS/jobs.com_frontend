"use client";
import React from "react";
import CustomTable from "./ui/CustomTable";
import { Button } from "@/components/ui/Button";
import { CardHeader } from "@/components/ui/card";

import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Job Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Eligible Batch",
    dataIndex: "batch",
    key: "batch",
  },
  {
    title: "Location",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "green";
          if (tag === "Expired") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Posted on",
    dataIndex: "posted",
    key: "posted",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    title: "Software Developer",
    batch: "2023, 2024",
    address: "Bangalore",
    tags: ["Active"],
    posted: "1 day ago",
  },
  {
    key: "2",
    title: "DevOps Engineer",
    batch: 2023,
    address: "Gurugram",
    tags: ["Expired"],
    posted: "2 months ago",
  },

  {
    key: "3",
    title: "Software Developer",
    batch: "2023, 2024",
    address: "Bangalore",
    tags: ["Active"],
    posted: "1 day ago",
  },
  {
    key: "4",
    title: "DevOps Engineer",
    batch: 2023,
    address: "Gurugram",
    tags: ["Expired"],
    posted: "2 months ago",
  },

  {
    key: "5",
    title: "Software Developer",
    batch: "2023, 2024",
    address: "Bangalore",
    tags: ["Active"],
    posted: "1 day ago",
  },
  {
    key: "6",
    title: "DevOps Engineer",
    batch: 2023,
    address: "Gurugram",
    tags: ["Expired"],
    posted: "2 months ago",
  },
];

export default function JobListByCompany() {
  return (
    <div>
      <CardHeader className=" p-5  flex mt-10 mb-10">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-2xl font-bold">All Posted Jobs</h2>
          <p>Manage the list of jobs posted by your company</p>
        </div>
        <Button className="ml-auto  bg-black text-white p-1 rounded-sm">
          Post a Job
        </Button>
      </CardHeader>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}
