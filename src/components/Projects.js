import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiWeb } from "@mdi/js";

export default function Projects() {
  return (
    <div className="flex justify-start  bg-white">
      {/* Team Members */}
      <div className="flex flex-wrap">
        {/* Member #1 */}
        <div className="w-full md:w-6/12 lg:w-3/6 mb-6 px-6 sm:px-6 lg:px-4">
          <div className="flex flex-col">
            {/* Avatar */}
            <a href="#" className="mx-auto">
              <img
                className="rounded-2xl w-48 h-28 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                src="https://media.licdn.com/dms/image/D4D2DAQGJfVAXn-8Q5g/profile-treasury-image-shrink_800_800/0/1694505946714?e=1709038800&v=beta&t=M7j0AGHSKog3i_WgMjSRp4joaGkPK1DipmnCLYoymWI"
              />
            </a>
            {/* Details */}
            <div className="text-center mt-6">
              {/* Name */}
              <h1 className="text-gray-900 text-xl font-bold mb-1">
                Campus Kart
              </h1>
              {/* Title */}
              <div className="text-gray-700 font-light mb-2">
                Mini-OLX for college peeps
              </div>
              {/* Social Icons */}
              <div
                className="flex items-center justify-center opacity-80 hover:opacity-100
                            transition-opacity duration-300"
              >
                {/* Linkedin */}
                <Icon
                  path={mdiGithub}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="black"
                />
                {/* Twitter */}
                <Icon
                  path={mdiWeb}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="black"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Member #2 */}
        <div className="w-full md:w-6/12 lg:w-3/6 mb-6 px-6 sm:px-6 lg:px-4">
          <div className="flex flex-col">
            {/* Avatar */}
            <a href="#" className="mx-auto">
              <img
                className="rounded-2xl w-48 h-28 drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                src="https://media.licdn.com/dms/image/D4D2DAQEylR6FT5CkqQ/profile-treasury-image-shrink_800_800/0/1694506950790?e=1709038800&v=beta&t=TsXA3K6rcWLLYcDjSSv30qWi9G6x2TONLwFI5Hjm4jI"
              />
            </a>
            {/* Details */}
            <div className="text-center mt-6">
              {/* Name */}
              <h1 className="text-gray-900 text-xl font-bold mb-1">
                Dev-Mania
              </h1>
              {/* Title */}
              <div className="text-gray-700 font-light mb-2">
                An Interactive Chat App
              </div>
              {/* Social Icons */}
              <div
                className="flex items-center justify-center opacity-80 hover:opacity-100
                            transition-opacity duration-300"
              >
                {/* Linkedin */}
                <Icon
                  path={mdiGithub}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="black"
                />
                {/* Twitter */}
                <Icon
                  path={mdiWeb}
                  title="User Profile"
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                  color="black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
