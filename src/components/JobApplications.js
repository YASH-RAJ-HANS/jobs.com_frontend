// JobApplications.js

import React from "react";

const JobApplications = () => {
  const jobApplications = [
    { 
      id: 1, 
      companyName: "Google", 
      companyLogo: "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?t=st=1708861591~exp=1708865191~hmac=bf27184e29a5ea33bff3ca6561961ac5f4408402fa6e5d3ed0e3d770f659235d&w=740",
      role: "Software Engineer",
      status: "Pending",
      location: "New York",
      salary: "$80,000 - $100,000 per year",
      appliedDate: "Posted 2 days ago"
    },
    { 
      id: 2, 
      companyName: "Facebook", 
      companyLogo: "https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?t=st=1708861615~exp=1708865215~hmac=bc7172b33363182e878a533b8b7552e675b2da9ad2fce2d91c4f6c39c8f88c89&w=740",
      role: "Data Analyst",
      status: "Rejected",
      location: "San Francisco",
      salary: "$70,000 - $90,000 per year",
      appliedDate: "Posted 5 days ago"
    },
    { 
      id: 3, 
      companyName: "Instagram", 
      companyLogo: "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg",
      role: "Frontend Developer",
      status: "Interview",
      location: "Seattle",
      salary: "$85,000 - $110,000 per year",
      appliedDate: "Posted 1 week ago"
    },
    { 
      id: 4, 
      companyName: "Twitter", 
      companyLogo: "https://cdn.pixabay.com/photo/2017/03/24/07/28/twitter-2170426_1280.png",
      role: "Data Scientist",
      status: "Pending",
      location: "Chicago",
      salary: "$90,000 - $120,000 per year",
      appliedDate: "Posted 10 days ago"
    },
    { 
      id: 5, 
      companyName: "Amazon", 
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png",
      role: "Backend Developer",
      status: "Interview",
      location: "Seattle",
      salary: "$90,000 - $110,000 per year",
      appliedDate: "Posted 4 days ago"
    },
    { 
      id: 6, 
      companyName: "Microsoft", 
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      role: "Machine Learning Engineer",
      status: "Reviewed",
      location: "Redmond",
      salary: "$100,000 - $130,000 per year",
      appliedDate: "Posted 6 days ago"
    },
    { 
      id: 7, 
      companyName: "Apple", 
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
      role: "iOS Developer",
      status: "Pending",
      location: "Cupertino",
      salary: "$95,000 - $120,000 per year",
      appliedDate: "Posted 8 days ago"
    },
    { 
      id: 8, 
      companyName: "Netflix", 
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",
      role: "UI/UX Designer",
      status: "Reviewed",
      location: "Los Gatos",
      salary: "$85,000 - $110,000 per year",
      appliedDate: "Posted 5 days ago"
    },
    { 
      id: 9, 
      companyName: "Uber", 
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Uber_logo_2018.svg/1024px-Uber_logo_2018.svg.png",
      role: "Product Manager",
      status: "Pending",
      location: "San Francisco",
      salary: "$120,000 - $150,000 per year",
      appliedDate: "Posted 7 days ago"
    },
    { 
      id: 10, 
      companyName: "Airbnb", 
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png",
      role: "Full Stack Developer",
      status: "Interview",
      location: "San Francisco",
      salary: "$110,000 - $130,000 per year",
      appliedDate: "Posted 3 days ago"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Applications</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobApplications.map((application) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={application.companyLogo}
                        alt={application.companyName}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{application.companyName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.salary}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.appliedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {application.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplications;
