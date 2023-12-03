import React, { useEffect } from "react";
import '../styles/services.scss'
import card_overlay  from '/images/wave_card.png'
import bellown  from '/images/bellown.png'
import pricetag  from '/images/pricetag.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
export default function ServiceCard({datas}) {
    const {name,image,price,id,description} = datas || {}   
    useEffect(()=>{
      Aos.init()
      },[])             
  return (
    <div data-aos="fade-up" className="card service_card bg-base-100 shadow-xl">
      <figure className="relative  max-h-72">
        <img
          className="card_bannner w-full h-full"
          src={image}
          alt="Shoes"
        />
        <div className="absolute h-full w-full flex items-end">
          <img className="w-full " src={card_overlay} alt="" />
        </div>
      </figure>
      <div className="card-body relative  bg-sky-100 gap-4 py-10">
        <img
          src={bellown}
          className="absolute bellown h-1/2 right-10 opacity-60 bottom-4"
          alt=""
        />
        <div className="absolute price px-7 w-full flex justify-end -top-0">
        <img className="h-20" src={pricetag} alt="" />
        <h3 className="absolute h-full text-sm top-6 pr-2  -rotate-45 ">{price}</h3>
        </div>
        <h2 className="card-title ">{name}</h2>
        <p className="leading-7">
         {description.slice(0,130)}</p>
        <div className="card-actions justify-start">
          <Link to={`/singleService/${id}`}><button className="btn btn-info text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
}
