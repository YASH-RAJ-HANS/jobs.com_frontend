import Image from 'next/image'
import React from 'react'

export default function CareerCard(props) {
  const data= props.data
  return (
    <div class ="flex flex-wrap m-20">
    {data.map((data)=>(
          <div className='rounded h-48 w-72 m-3.5 pl-6 pt-10 shadow-xl hover:bg-violet-600'>
          <Image
          src= {data.img}
          width={100}
          height={100}
          alt="Picture of the author"/>
          <p className='font-bold text-xl mt-3'>{data.heading}</p>
          <p>{data.jobs}</p>
        </div>
    ))}
    </div>
  )
}
