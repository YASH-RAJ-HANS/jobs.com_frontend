import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

export default function JobDetail() {
  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                alt="Company Logo"
                className="h-12 w-12 object-contain"
                src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
              />
              <div>
                <h1 className="text-3xl font-bold">Full Stack Developer</h1>
                <p className="text-sm text-gray-500">Google</p>
              </div>
            </div>
            <Button className="bg-blue-500 text-white p-2 rounded-sm">
              Apply Now
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Badge
              variant="secondary"
              className="bg-slate-400 text-white p-1 rounded-sm"
            >
              2 Positions
            </Badge>
            <Badge
              variant="default"
              className="bg-black text-white p-1 rounded-sm"
            >
              Full Time
            </Badge>
            <Badge className="bg-[#00B589] text-white p-1 rounded-sm">
              \$95,000/Year
            </Badge>
            <Badge className="bg-[#FF9900] text-white p-1 rounded-sm">
              WFO
            </Badge>
            <Badge className="bg-[#0077B5] text-white p-1 rounded-sm">
              2 Years
            </Badge>
          </div>

          <p className="text-blue-600 font-semibold  ">Job Description</p>

          <p className="text-gray-700">
            The LinkedIn team has a vision to establish a trusted platform that
            enables productive and healthy enterprises in a world of digital and
            remote everything, constantly changing work patterns and norms, and
            the need for organizational resiliency.
          </p>
          <h2 className="text-xl font-semibold">
            Essential Knowledge, Skills, And Experience
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Strong Organizational And Project Management Skills.</li>
            <li>
              Proficiency With Fundamental Front End Languages Such As HTML, CSS
              And JavaScript.
            </li>
            <li>
              Familiarity With JavaScript Frameworks Such As Angular JS, React
              And Vue JS.
            </li>
            <li>
              Proficiency With Server Side Languages Such As Node.js, PHP And
              Python.
            </li>
            <li>
              Familiarity With Database Technology Such As MySQL, Postgres And
              MongoDB.
            </li>
            <li>Familiarity With Web Servers Such As Apache And NGINX.</li>
            <li>Excellent Verbal Communication Skills.</li>
            <li>Good Problem Solving Skills.</li>
            <li>Ability To Project Manage.</li>
            <li>
              Ability To Communicate In English Fluently And Idiomatically.
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <Card className="w-full border border-gray-300 p-4 rounded-sm">
            <CardHeader>
              <CardTitle className="font-semibold mb-6">Company</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-8">
                The LinkedIn team has a vision to establish a trusted platform
                that enables productive and healthy enterprises.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge
                variant="default"
                className="bg-black text-white p-1 rounded-xl font-light text-sm"
              >
                10,000+ Employees
              </Badge>
              <p className="text-gray-700">Sunnyvale, CA</p>
            </CardFooter>
          </Card>
          <Card className="w-full border border-gray-300 p-4 rounded-sm">
            <CardHeader>
              <CardTitle className="font-semibold mb-6">Review</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-1">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="text-green-500" />
                  <span className="text-gray-700">Friendly environment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="text-green-500" />
                  <span className="text-gray-700">Work from home facility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="text-green-500" />
                  <span className="text-gray-700">
                    Good for freshers to learn
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CircleIcon className="text-red-500" />
                  <span className="text-gray-700">
                    Work-life balance terrible
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CircleIcon className="text-red-500" />
                  <span className="text-gray-700">
                    Promotion and exposure is little slow
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="w-full border border-gray-300 p-4 rounded-sm">
            <CardHeader>
              <CardTitle className="font-semibold mb-6">
                Benefits & Perks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <UtensilsIcon className="text-blue-500" />
                <HomeIcon className="text-blue-500" />
                <BusIcon className="text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function BusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
