"use client";
import { React, useState } from "react";

const Home = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Software Engineer",
    },
    {
      id: 2,
      text: "Frontend Developer",
    },
    {
      id: 3,
      text: "Backend Developer",
    },
    {
      id: 4,
      text: "Full Stack Developer",
    },
    {
      id: 5,
      text: "DevOps Engineer",
    },
    {
      id: 6,
      text: "UI/UX Designer",
    },
    {
      id: 7,
      text: "Data Scientist",
    },
    {
      id: 8,
      text: "Product Manager",
    },
    {
      id: 9,
      text: "QA Engineer",
    },
    {
      id: 10,
      text: "Software Architect",
    },
    // Add more roles as needed
    {
      id: 11,
      text: "Mobile App Developer",
    },
    {
      id: 12,
      text: "Cloud Solutions Architect",
    },
  ]);
  return (
    <div
      style={{ height: "80vh", marginTop: "1rem" }}
      className="w-full flex flex-col items-center"
    >
      <div
        style={{ height: "60vh" }}
        className="gap-4 w-6/12 mt-4 flex flex-col items-center justify-center"
      >
        <div className="px-10 font-bold text-6xl  text-center">
          Search, Apply & <br />
          Get Your <span className="text-[rgb(108,59,194)]">dream Job</span>
        </div>
        <div className="px-20 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, .<br />
          sed do eiusmod tempor incididunt ut labore{" "}
        </div>
        <div className="mt-5">
          <button
            style={{ border: "1px solid black", marginTop: "-10px" }}
            className="mr-2 lg:mr-4 px-4 lg:px-7 ml-4 mr-4 py-2 lg:py-3 h-10 lg:h-12 rounded hover:text-purple-700"
          >
            Login
          </button>
          <button
            style={{ border: "1px solid black", marginTop: "-10px" }}
            className="px-3 lg:px-7 py-2 lg:py-3 h-10 lg:h-12 rounded text-white bg-violet-700 hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Register
          </button>
        </div>
      </div>
      <marquee
        className="mb-8"
        direction="left"
        behavior="scroll"
        scrollamount="10"
        loop="infinite"
      >
        {comments.map((comment, index) => (
          <span
            key={index}
            style={{ border: "1px solid black" }}
            className="mb-2 mr-10 px-3 lg:px-7 py-3 rounded "
          >
            {comment.text}
          </span>
        ))}
      </marquee>
      <div
        style={{ height: "60px", border: "1px solid black" }}
        className="flex items-center p-5"
      >
        <marquee
          direction="right"
          style={{ height: "60px" }}
          behavior="scroll"
          scrollamount="10"
          loop="infinite"
        >
          {comments.map((comment, index) => (
            <span
              style={{ border: "1px solid black" }}
              key={index}
              className="mb-2 mr-10 px-6 py-2 rounded-full h-24"
            >
              {comment.text}
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default Home;
