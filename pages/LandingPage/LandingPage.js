import Home from '@/components/LandingPage/Home'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'

const LandingPage = () => {
  return (
    <div style={{width:"98vw"}} className="flex flex-col justify-center align-center">
        <Navbar/>
        <Home/>
    </div>
  )
}

export default LandingPage