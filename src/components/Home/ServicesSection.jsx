import React, { useEffect } from "react";
import '../../styles/services.scss'
import useLoadServics from "../../Hooks/LoadServics";
import ServiceCard from "../ServiceCard";
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Services() {
  const {services} = useLoadServics()
  useEffect(()=>{
    Aos.init()
    },[])
  return (
    <>
      <div data-aos="fade-down" className="section_title  container mx-auto my-10 grid gap-4 text-center mb-20">
       <h1 className="sub_tile text-3xl text-sky-400">What we offer</h1>
       <h1 className="sub_tile text-5xl font-bold">Awesome Services</h1>
       <p className="text-lg">Checkout what we can do for you party</p>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        
     
           {services.length > 0 && services.slice(0,6).map((ele,ind)=>{
            return <ServiceCard datas={ele} key={ind}/>
           })} 
        </div>
      </div>
    </>
  );
}
