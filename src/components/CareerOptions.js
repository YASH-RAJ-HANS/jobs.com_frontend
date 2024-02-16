import React from 'react'
import CareerCard from './CareerCard'

const data =[
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Design",
    jobs:"200+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Sales",
    jobs:"5+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Marketing",
    jobs:"80+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Finance",
    jobs:"10+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Automobile",
    jobs:"250+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Delivery",
    jobs:"70+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Admin",
    jobs:"100+ job openings"
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp07HKbydUQpVXmiBKdewoC8aeTIwJZZmHky-Cbv1Jw&s",
    heading:"Construction",
    jobs:"20+ job openings"
  }
]
export default function CareerOptions() {

  return (
    <div>
        <div className='flex justify-center'>
        <h1 className="text-5xl font-bold text-center "><span className="text-[#6A38C2]">Countless Career Options</span> Are Waiting <br/>For You To Explore</h1>
        </div>
        <CareerCard data= {data}/>
    </div>
  )
}
