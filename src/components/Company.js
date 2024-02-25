"use client";
import Marquee from "react-fast-marquee";
import {React,useState} from "react";

const Company = () => {
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
      
      ]);
  return (
    <div
      style={{ marginTop: "5rem", width: "90vw" }}
      className="flex flex-col items-center"
    >
      <div
        style={{ height: "65vh" }}
        className="gap-4 w-11/12 mt-4 flex flex-col items-center justify-around"
      >
        <div className="px-10 font-bold text-7xl  text-center gap-4">
          You have a job. <br />
          We have 10m+ <span className="text-[#6A38C2]">job seekers.</span>
        </div>
        <div className="px-20 text-xl text-center">
          Millions of startup-ready candidates, uniquely specific filters for
          finding niche talent, and all the tools you need to hire.
          <br />
          Sign up now & have everything set up in 10 minutes, for free.{" "}
        </div>
        <div className="mt-5 flex">
          <button
            style={{ border: "1px solid black", marginTop: "-10px" }}
            className="px-3 lg:px-7 py-2 lg:py-3 h-10 lg:h-12 rounded-lg text-white bg-[#6A38C2] hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Sign up now
          </button>

          {/* 
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
        </button> */}
        </div>
      </div>
      {/* <Marquee
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
            borderColor: "linear-gradient(to right, #0074e4, #00a8e8)",
          }}
          className="mb-2 rounded-full mr-10 px-3 lg:px-7 py-3 "
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
            borderColor: "linear-gradient(to right, #0074e4, #00a8e8)",
          }}
          className="mb-2 rounded-full mr-10 px-3 lg:px-7 py-3 "
        >
          {comment.text}
        </span>
      ))}
    </Marquee> */}
      {/* <div className="flex mt-20 ">
        <div
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 59% 41% 70% ",
            backgroundColor: "rgb(106,56,194)",
            width: "40vw",
            height: "80vh",
          }}
        >
          yash
        </div>
        {/* <div style={{borderRadius:"82% 18% 70% 30% / 30% 80% 20% 70%  ",backgroundColor:"rgb(106,56,194)",width:"40vw",height:"80vh"}}>yash</div> 
      </div> */}
      <div
        style={{
          width: "100vw",
          height: "90vh",
          backgroundColor: "rgb(106,56,194)",
         
        }}
        className="flex mt-20 flex flex-col justify-center items-center "
      >
        <div className="flex w-10/12 font-bold ">
          {/* Flex item 1 */}
          <div className="flex-1 p-4  rounded flex flex-col justify-around items-center text-white gap-7">
            <h2 className="text-7xl ">10K+</h2>
            <hr />
            <p className="text-4xl ">Matches Made</p>
          </div>

          {/* Flex item 2 */}
          <div className="flex-1 p-4 flex flex-col justify-around items-center text-white gap-7">
            <h2 className="text-7xl ">150K+</h2>
            <hr />
            <p className="text-4xl ">Tech Jobs</p>
          </div>

          {/* Flex item 3 */}
          <div className="flex-1 p-4  flex flex-col justify-around items-center text-white gap-7">
            <h2 className="text-7xl ">70K+</h2>
            
            <p className="text-4xl text-center ">Startup Ready Candidates</p>
          </div>
        </div>
        <hr style={{color:"white"}} className="my-2 w-11/12 border-t-4 border-yellow-400 mt-10" />
        <Marquee
      className=" h-24 mt-10 text-white"
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
            borderColor: "linear-gradient(to right, #0074e4, #00a8e8)",
          }}
          className="mb-2 rounded-full mr-10 px-3 lg:px-7 py-3 "
        >
          {comment.text}
        </span>
      ))}
    </Marquee>
    <div className="font-bold text-lg text-white mt-8">Startups who used our platform</div>
      </div>
      
    </div>
  );
};

export default Company;
