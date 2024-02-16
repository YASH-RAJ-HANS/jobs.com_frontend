import React from "react";
import Image from "next/image";

const Flow = () => {
  return (
    <div
      className="bg-cover bg-center py-12 bg-white"
      style={{ backgroundImage: "url('/background-design.png')" }}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Hired in
            <span className="text-purple-700"> 4 Quick Easy Steps</span>
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            The quickest and most effective way to get hired by the top firms
            working in global software development.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-4">
          <StepCard
            index={0}
            icon={<UserIcon />}
            title="Create an Account"
            description="Sign up for free, set up your profile, create your portfolio, and pass assessments. We'll match you with companies that are looking for your skill set to help you find your dream job."
          />
          <StepCard
            index={1}
            icon={<SearchIcon />}
            title="Search Job"
            description="Check out jobs after publishing your resume. Use filters and smart sorting to your interest on the top companies and roles. We're sure you'll find just what you're looking for."
          />
          <StepCard
            index={2}
            icon={<UploadIcon />}
            title="Upload CV/Resume"
            description="Have your resume ready, upload it to our system, and start applying to your preferred companies with ease. We make the process simple and hassle-free."
          />
          <StepCard
            index={3}
            icon={<CheckCircleIcon />}
            title="Get Job"
            description="After applying, wait for some time, schedule interviews, and if everything goes well, get hired easily from top firms looking to recruit."
          />
        </div>
      </div>
    </div>
  );
};

function StepCard({ index, icon, title, description }) {
  const marginTop = index % 2 === 0 ? "-mt-10" : "";

  return (
    <div className={`flex flex-col border shadow-lg p-6 ${marginTop}`}>
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-50 text-orange-500 mx-auto">
        {icon}
      </div>
      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
        {title}
      </p>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check-circle"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-upload"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-user"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

export default Flow;
