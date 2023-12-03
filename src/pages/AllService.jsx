import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import useLoadServics from "../Hooks/LoadServics";
import ServiceCard from "../components/ServiceCard";
import servicebanner from "/images/Servicebanner.webp"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Pagetitle from "../Hooks/Pagetitle";
export default function AllService() {
    const {services} = useLoadServics() ;  
      useEffect(()=>{
        Aos.init()
      },[])
  return (  
    <> <Pagetitle>Services - Birthday Planner</Pagetitle>
      <PageBanner Banner={servicebanner}>
        <div className="grid gap-4" >
          <h2 className="text-4xl">Our Awesome Services</h2>
          <p className="text-xl leading-8">
           Get ready to somthing extraordinary party with you and you familly and with your honorable  guest
          </p>
        </div>
      </PageBanner>
      <div className="container grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 mx-auto">
      {services.length > 0 && services.map((ele,ind)=>{
            return <ServiceCard datas={ele} key={ind}/>
           })}           
      </div>
    </>
  );
}
