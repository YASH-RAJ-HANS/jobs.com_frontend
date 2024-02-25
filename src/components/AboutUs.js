import Image from "next/image";
import sahil from "../../public/Sahil.png";
import arora from "../../public/arora.png";
import bhawna from "../../public/bhawna.jpeg";
import yrh from "../../public/yrh.png";
import singhal from "../../public/singhal.png";

export default function AboutUs() {
  const people = [
    {
      id: 1,
      img: sahil,
      name: "Sahil Rohera",
      role: "Lead Engineer",
    },
    {
      id: 2,
      img: arora,
      name: "Sahil Arora",
      role: "Lead Engineer",
    },
    {
      id: 3,
      img: bhawna,
      name: "Bhawna Jain",
      role: "Backend Lead",
    },
    {
      id: 4,
      img: yrh,
      name: "Yash Raj Hans",
      role: "Frontend Lead",
    },
    {
      id: 5,
      img: singhal,
      name: "Yash Singhal",
      role: "Frontend Lead",
    },
  ];

  return (
    <div className="bg-white  text-gray-900 teamimg">
      {/* <nav className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold">Untitled UI</h1>
          <div className="flex space-x-4">
            <a className="hover:text-gray-700" href="#">
              Home
            </a>
            <a className="hover:text-gray-700" href="#">
              Products
            </a>
            <div className="relative group">
              <a className="hover:text-gray-700" href="#">
                Solutions
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1" />
            </div>
            <a className="hover:text-gray-700" href="#">
              Pricing
            </a>
            <a className="hover:text-gray-700" href="#">
              Resources
            </a>
            <div className="relative group">
              <a className="hover:text-gray-700" href="#">
                Company
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1" />
            </div>
            <a className="hover:text-gray-700" href="#">
              Careers
            </a>
          </div>
          <div className="flex space-x-4">
            <a className="hover:text-gray-700" href="#">
              Log in
            </a>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get started</Button>
          </div>
        </div>
      </nav> */}
      <header className="text-center py-20">
        <h2 className="text-3xl font-bold">
          Crafting Careers, Building Futures: <br /> Where Our Developers Code
          Success for Your Job Journey
        </h2>
        <p className="mt-4 text-lg font-bold text-[#6A38C2]">
          Setting Sail to Success: Anchored in Opportunity with Jobs Harbour!
        </p>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-16">
        {people.map((p) => (
          <div className="text-center">
            <Image
              alt="Jessica Dobrev"
              className="mx-auto rounded-full"
              height="200"
              src={p.img}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="mt-4 font-semibold"> {p.name} </h3>
            <p className="text-sm"> {p.role} </p>
          </div>
        ))}
      </section>
    </div>
  );
}
