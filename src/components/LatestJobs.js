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
];

export default function LatestJobs() {
  return (
    <div className="bg-white p-8">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-4xl font-bold ">
          <span className="text-[#6B39C1]">Latest and Top</span> Job Openings
        </h2>
        <Button
          className="text-indigo-600 border-2 p-1 rounded-sm border-indigo-600 hover:bg-indigo-600 hover:text-white"
          variant="outline"
        >
          View All Jobs
        </Button>
      </div>
      <p className="text-gray-600 mb-8 font-semibold">
        Discover the freshest job openings from the greatest firms <br /> and
        take a chance to get hired by top fortune companies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((d) => (
          <Card className="hover:border-[#6B39C1] transition-colors cursor-pointer border-2 p-5 rounded-md">
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
        ))}
      </div>
    </div>
  );
}
