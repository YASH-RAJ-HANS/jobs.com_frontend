import React from "react";

import { Button } from "./ui/Button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
  {
    company: "Google",
    img: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    role: "Software Engineer",
    desc: " The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...",
    jobtype: "Full Time",
    location: "Banglore",
    salary: "20LPA - 30LPA",
  },
];

export default function JobsListing() {
  return (
    <div className="w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((d) => (
          <Link href="/JobDetail">
            <Card className="hover:border-[#6B39C1] transition-colors cursor-pointer border-2 p-5 w-[24rem] rounded-md bg-white ">
              <div className="flex mb-4">
                <Image
                  src={d.img}
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <p className="ml-10 mt-2 text-xl font-semibold">{d.company}</p>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900 font-semibold mb-1">
                  {d.role}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-3">
                  {d.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Badge
                  className="text-emerald-500 font-semibold border-green-300 border-2 p-1 rounded-sm mr-5"
                  variant="secondary"
                >
                  {d.jobtype}
                </Badge>
                <Badge
                  className="text-blue-600 font-semibold border-2 border-blue-300 p-1 rounded-sm mr-5"
                  variant="secondary"
                >
                  {d.location}
                </Badge>
                <Badge
                  className=" text-fuchsia-700 font-semibold border-pink-300 border-2 p-1 rounded-sm"
                  variant="secondary"
                >
                  {d.salary}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
