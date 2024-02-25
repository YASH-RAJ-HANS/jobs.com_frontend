// import Image from "next/image";

import CareerOptions from "@/components/CareerOptions";
import Footer from "@/components/Footer";
import LatestJobs from "@/components/LatestJobs";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Offer from "@/components/Offer";
import Flow from "@/components/flow";
import Home from "@/components/Home";
import UpComing from "@/components/UpComing";

// import Flow from "../components/flow";
export default function App() {
  return (
    <>
      <div className="w-[90%] m-auto overflow-x-hidden">
        <Navbar />
        <Home />
        <Flow />
        <CareerOptions />
        <br />
        <br />
        <LatestJobs />
        <Offer />
        <UpComing />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Newsletter />
      </div>{" "}
      <Footer />
    </>
  );
}
