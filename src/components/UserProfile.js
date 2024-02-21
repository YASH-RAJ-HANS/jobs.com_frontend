import Link from "next/link";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import Projects from "./Projects";

export default function UserProfile() {
  return (
    <div className="bg-gray-100 p-8">
      {/* <Link className="inline-block text-blue-600" href="#">
        ← Back
      </Link> */}
      <div className="mt-4 grid grid-cols-3 gap-8">
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col items-center text-center">
            <Avatar>
              <AvatarImage
                className="w-32 h-32 rounded-3xl"
                alt="Ananya Grover"
                src="https://media.licdn.com/dms/image/D5603AQHIpH-FOFGllQ/profile-displayphoto-shrink_800_800/0/1705742246843?e=2147483647&v=beta&t=j6NFoNLgnADIVLNyj35iYXtVJzu3oFi3Y9P5dQIJtWw"
              />
            </Avatar>
            <h2 className="mt-4 text-xl font-semibold">Bhawna Jain</h2>
            <p className="text-sm text-gray-600">Software Engineer</p>
            <p className="mt-3 text-sm text-gray-600">
              Upcoming SWE Intern'24 @Microsoft👩🏻‍💻 | Former Research
              Intern'23@DRDO 💼 | Former SWE at Techrupt Innovations👩🏻‍💻| Runner
              up🏆 at Hackathon in Chandigarh University
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-600">Skills</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                User Interface Designing
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                UX
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                UI
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                Adobe XD
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                Mobile Apps
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                User Research
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                Wireframing
              </Badge>
              <Badge
                variant="secondary"
                className="p-2 bg-black text-white text-xs rounded-xl"
              >
                Information Architecture
              </Badge>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Accomplishments</h3>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-gray-600">
                ⭐ 2nd Runner up at Hackoverflow4.0 CU Hackathon
              </p>
              <p className="text-sm text-gray-600">
                ⭐ 400+ Leetcode questions solved
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="mt-0">
            <h3 className="text-lg font-semibold">Experience</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <InfoIcon className="mr-3 h-8 w-8 rounded-full bg-blue-600 text-white p-1" />
                <div>
                  <p className="font-medium">Microsoft</p>
                  <p className="text-sm text-gray-600">SWE Intern</p>
                  <p className="text-sm text-gray-600">
                    Apr 2024 - Present | Hydrabad, India
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <PencilIcon className="mr-3 h-8 w-8 rounded-full bg-purple-600 text-white p-1" />
                <div>
                  <p className="font-medium">INMAS, DRDO</p>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                  <p className="text-sm text-gray-600">
                    Dec 2022 - feb 2023 | Delhi, India
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <MoveIcon className="mr-3 h-8 w-8 rounded-full bg-red-600 text-white p-1" />
                <div>
                  <p className="font-medium">Techrupt Innovations</p>
                  <p className="text-sm text-gray-600">React js Developer</p>
                  <p className="text-sm text-gray-600">
                    Aug 2022 - Oct 2022 | Remote (USA)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Education</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <MoveIcon className="mr-3 h-8 w-8 rounded-full bg-blue-600 text-white p-1" />
                <div>
                  <p className="font-medium">
                    Maharaja Agrasen Institute of Technology
                  </p>
                  <p className="text-sm text-gray-600">B.Tech ECE 2025</p>
                  <p className="text-sm text-gray-600">CGPA - 9.0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Projects</h3>
            <div className="mt-4 space-y-4">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoIcon(props) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MoveIcon(props) {
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
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}

function PencilIcon(props) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
