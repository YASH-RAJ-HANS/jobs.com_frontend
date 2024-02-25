import Image from "next/image";
import React from "react";

export default function CareerCard(props) {
  const data = props.data;
  return (
    <div class="flex flex-wrap mt-10 justify-center gap-4 w-full">
      {data.map((data) => (
        <div className="rounded h-48 w-72 m-3.5 pl-6 pt-10 shadow-md border border-gray-50 hover:border-violet-600">
          <Image
            src={data.img}
            width={70}
            height={70}
            alt="Picture of the author"
          />
          <p className="font-bold text-xl mt-7">{data.heading}</p>
          <p>{data.jobs}</p>
        </div>
      ))}
    </div>
  );
}
