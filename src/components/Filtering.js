"use client";

import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // Import icons
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Filtering() {
  return (
    <div className="flex flex-col mt-1 w-[20%]">
      {/* <h2 className="text-2xl font-bold text-gray-900 mb-2 "> Jobs</h2> */}
      <div className="pr-4">
        <div className="space-y-4">
          <CollapsibleSection title="Company Type">
            <CheckboxOption id="startup" label="Startup" />
            <CheckboxOption id="foreign-mnc" label="Foreign MNC" />
            <CheckboxOption id="indian-mnc" label="Indian MNC" />
            <CheckboxOption id="corporate" label="Corporate" />
            <CheckboxOption id="others-company-type" label="Others" />
          </CollapsibleSection>
          <CollapsibleSection title="Location">
            <CheckboxOption id="delhi-ncr" label="Delhi/NCR" />
            <CheckboxOption id="bangalore" label="Bengaluru" />
            <CheckboxOption id="hyderabad" label="Hyderabad" />
            <CheckboxOption id="pune" label="Pune" />
            <CheckboxOption id="mumbai" label="Mumbai" />
            <CheckboxOption id="chennai" label="Chennai" />
            <CheckboxOption id="new-delhi" label="New Delhi" />
          </CollapsibleSection>
          <CollapsibleSection title="Industry">
            <CheckboxOption
              id="financial-services"
              label="Financial Services"
            />
            <CheckboxOption id="insurance" label="Insurance" />
            <CheckboxOption
              id="hardware-networking"
              label="Hardware Networking"
            />
            <CheckboxOption id="marketing" label="Marketing" />
            <CheckboxOption id="information-technology" label="IT" />
            <CheckboxOption id="mechanical" label="Mechanical" />
            <CheckboxOption id="medical" label="Medical" />
          </CollapsibleSection>
          <CollapsibleSection title="Salary (INR)">
            <CheckboxOption id="salary-1" label="Below 50,000" />
            <CheckboxOption id="salary-2" label="50,000 - 60,000" />
            <CheckboxOption id="salary-3" label="60,000 - 90,000" />
            <CheckboxOption id="salary-4" label="90,000 & Above" />
          </CollapsibleSection>
          <CollapsibleSection title="Experience">
            <CheckboxOption id="experience-1" label="0-1 Years" />
            <CheckboxOption id="experience-2" label="1-3 Years" />
            <CheckboxOption id="experience-3" label="3-5 Years" />
            <CheckboxOption id="experience-4" label="5+ Years" />
          </CollapsibleSection>
        </div>
      </div>
      <div className="w-2/3 p-4">{/* Right panel content goes here */}</div>
    </div>
  );
}

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {isOpen ? (
          <FiChevronUp className="text-gray-600 w-6 h-6" />
        ) : (
          <FiChevronDown className="text-gray-600 w-6 h-6" />
        )}
      </div>
      {isOpen && <div className="space-y-2 mt-2">{children}</div>}
    </div>
  );
};

const CheckboxOption = ({ id, label }) => (
  <FormControlLabel
    control={<Checkbox id={id} />}
    label={label}
    className="text-gray-800"
    style={{ display: "block" }}
  />
);
