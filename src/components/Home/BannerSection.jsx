import React, { useEffect, useRef } from 'react'
import banner_overlay from '/images/Banner_overlay.png'  
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
export default function Banner({datas,refresh}) {
  const { works, image, id, name } = datas;
  const swiperSlideRef = useRef(null);
  useEffect(()=>{
    Aos.init()
    },[])

  return (
   <div  className='flex  lg:flex-row mt-20 lg:mt-0  flex-col lg:gap-10 justify-center  items-center'>
      <div className="flex-1  flex lg:justify-start justify-center  order-1 lg:order-0 ">
       <div className="gap-4 bg-white lg:text-start  text-center  w-full grid">
       <h1 className='text-5xl md:text-7xl font-bold text-[#30338d]'>{name}</h1>
              <h3 className='text-3xl leading-[50px]'>{works}</h3>
         <div> 
           <Link to={`/singleService/${id}`}><button className=' btn md:btn-lg btn-info text-white pt-2'>Book now</button></Link>
           
          </div>
       </div>
      </div>
      <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1  max-w-full max-h-[700px] relative"> 
      <img src={banner_overlay} className='h-full w-full relative z-10' />
        <img src={image}  className='rounded-3xl top-0 absolute w-[98%]  h-[98%] object-cover' />        
      </div>    
    </div>  
  )
}
