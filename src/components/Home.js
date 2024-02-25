"use client";
import { React, useState } from "react";
import Marquee from "react-fast-marquee";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import Link from "next/link";
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
      style={{ height: "80vh", marginTop: "2.5rem" }}
      className="w-full flex flex-col items-center"
    >
      <div
        style={{ height: "60vh" }}
        className="gap-4 w-6/12 mt-4 flex flex-col items-center justify-center"
      >
        <div className="px-10 font-bold text-6xl  text-center">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">dream Job</span>
        </div>
        <div className="px-20 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, .<br />
          sed do eiusmod tempor incididunt ut labore{" "}
        </div>
        <div className="mt-5 flex">
          <Link href="/JobsPage">
            <button
              style={{ border: "1px solid black", marginTop: "-10px" }}
              className="px-3 lg:px-7 py-2 lg:py-3 h-10 lg:h-12 rounded-lg text-white bg-[#6A38C2] hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            >
              Browse Jobs
            </button>
          </Link>
          <div
            style={{ marginTop: "-10px" }}
            className="rounded-full bg-purple-700 h-12 w-12 ml-8 flex juatify-center items-center p-3 text-white"
          >
            <PlayCircleFilledOutlinedIcon />
          </div>
          <button
            style={{ marginTop: "-10px" }}
            className="mr-2 lg:mr-4 px-2 font-bold lg:px-2 ml-2 mr-4 py-2 lg:py-3 h-10 lg:h-12 rounded hover:text-purple-700"
          >
            How it works?
          </button>
        </div>
      </div>
      <Marquee
        className=" h-24 mt-8"
        direction="left"
        behavior="scroll"
        scrollamount="10"
        loop="infinite"
        speed="80"
        pauseOnClick="true"
      >
        {comments.map((comment, index) => (
          <span
            key={index}
            style={{
              border: "1px solid ",
              borderColor: comment.id % 2 == 0 ? "#6A38C2" : "black",
              color: comment.id % 2 == 0 ? "#6A38C2" : "black",
            }}
            className="mb-2 rounded-full mr-10 px-3 lg:px-7 py-3"
          >
            {comment.text}
          </span>
        ))}
      </Marquee>
      <Marquee
        className="mb-8 h-24"
        direction="right"
        behavior="scroll"
        scrollamount="10"
        loop="infinite"
        speed="80"
        pauseOnClick="true"
      >
        {comments.map((comment, index) => (
          <span
            key={index}
            style={{
              border: "1px solid ",
              borderColor: comment.id % 2 == 0 ? "#6A38C2" : "black",
              color: comment.id % 2 == 0 ? "#6A38C2" : "black",
            }}
            className="mb-2 rounded-full mr-10 px-3 lg:px-7 py-3 "
          >
            {comment.text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Home;
