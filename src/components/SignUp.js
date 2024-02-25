// Login.js
"use client";
import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import "./SignUp.css";
import Link from "next/link";
const SignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FaUser className=" w-6 h-6 mt-3 ml-3" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FaLock className=" w-6 h-6 mt-3 ml-3" />
              <input type="password" placeholder="Password" />
            </div>
            <Link href="/" >
            <input type="submit" value="Login" className="btn bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105 flex items-center justify-center max-w-xs px-4 py-3 text-white rounded-full shadow-md" />
            </Link>
            <button className="btn bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105 flex items-center justify-center max-w-xs px-4 py-3 text-white rounded-full shadow-md">
              <FaGoogle className="w-6 h-6 mr-2" />
              Sign In with Google
            </button>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FaUser className=" w-6 h-6 mt-3 ml-3" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FaEnvelope className=" w-6 h-6 mt-3 ml-3" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FaLock className=" w-6 h-6 mt-3 ml-3" />
              <input type="password" placeholder="Password" />
            </div>
            <Link href="/" >
            <input
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105 flex items-center justify-center max-w-xs px-4 py-3 text-white rounded-full shadow-md"
              value="Sign up"
            />
          </Link>
            <button className="btn bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-500 ease-in-out transform hover:scale-105 flex items-center justify-center max-w-xs px-4 py-3 text-white rounded-full shadow-md">
              <FaGoogle className="w-6 h-6 mr-2" />
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Discover your next career opportunity with us. Sign up now!
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          <img src="log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content ">
            <h3>One of us ?</h3>
            <p>
           <span className=" font-bold" >Welcome Back!</span> Explore new opportunities and connect with your next career move.
            </p>
            <button className="btn transparent hover:bg-white  hover:text-blue-500" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <img src="img2.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
