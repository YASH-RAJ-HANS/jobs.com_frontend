import Company from '@/components/Company'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className=" m-auto overflow-x-hidden flex
    flex-col justify-center items-center">
        <div className="w-[90%]"><Navbar/></div>
        
        <Company/>
        </div>
  )
}

export default page