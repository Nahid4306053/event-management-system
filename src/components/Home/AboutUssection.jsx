import React, { useEffect } from 'react'
import about_us from '/images/abou_us.jpg'
import overlay from '/images/overlay-img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
export default function AboutUs() {
useEffect(()=>{
Aos.init()
},[])
  return (
    <div className='container gap-10 mx-auto items-center flex lg:flex-row flex-col my-20'>
      <div data-aos-offset="300" data-aos="fade-right" data-aos-duration="800"  className="flex-1 order-1 lg:order-0 dscription ">
        <div className='grid gap-4  lg:text-start text-center'>
        <h1 className='title text-2xl text-sky-400'>Who we are</h1> 
             <h1 className='main_title text-5xl font-bold'>
             There’s nothing more magical than a child’s imagination
             </h1>
             <p className='text-gray-600 text-lg leading-8'>Welcome to Nahid Birthday party planner, where dreams meet reality and every birthday celebration becomes a memorable masterpiece! We are a dedicated team of passionate individuals who believe in the magic of birthdays. Our mission is to turn your special day into an extraordinary event filled with joy, laughter, and cherished memories.</p>
             <div><Link to="/aboutus"><button className='btn-info btn capitalize text-white'>Discover more</button></Link></div>
        </div> 
       </div>
      
      <div data-aos="fade-left"  data-aos-offset="300"
    data-aos-duration="800" className="flex-1 order-0 lg:order-1 banner relative">
       <img src={about_us} className='absolute h-full w-full' alt="about us" />
       <img src={overlay} className='relative h-full w-full' alt="about us" />
      </div>
      </div>
  )
}

