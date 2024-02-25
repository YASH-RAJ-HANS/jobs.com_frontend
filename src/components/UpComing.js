import { Button } from "@/components/ui/Button";

export default function UpComing() {
  return (
    <div className="bg-white py-16 px-8 ">
      <p className="font-bold text-3xl text-center">
        Up Coming <span className="text-[#6B39C1]">Features</span>{" "}
      </p>
      <br />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              AI-Based CV Tailoring
            </h2>
            <p className="text-gray-600">
              Our AI-based Chrome extension helps you tailor your CV to match
              job descriptions perfectly. Ensure your CV stands out and catches
              the recruiter's eye with tailored content.
            </p>
            {/* <Button
              className="mt-4 bg-black text-white p-2 rounded-md"
              variant="default"
            >
              Learn More
            </Button> */}
          </div>
          <div className="flex justify-center">
            <img
              alt="AI-Based CV Tailoring"
              className="h-[300px] w-[400px]"
              height="250"
              src="https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/61961c2f75c1b551f8438666_614349affbe526e0ae5063c4_Hero-banner-Scheduler-Chrome-Extension-illustration.png"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="flex justify-center order-first md:order-none">
            <img
              alt="Hackathons, Events & Meetups"
              className="h-[250px] w-[550px]"
              height="300"
              src="https://miro.medium.com/v2/resize:fit:1400/1*PiJiIxMhkMfKnIOJlwIEHw.jpeg"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
          <div className="flex flex-col items-start justify-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              One-Stop Hackathons & Events
            </h2>
            <p className="text-gray-600">
              Get a curated list of hackathons, events, and meetups. Never miss
              an opportunity to network, learn, and showcase your skills with
              our comprehensive event guide.
            </p>
            {/* <Button
              className="mt-4 bg-black text-white p-2 rounded-md"
              variant="default"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
