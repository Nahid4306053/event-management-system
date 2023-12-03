import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/ClientTestimonial.scss'

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import useLoadClientReviews from '../../Hooks/LoadClientReviws';
import crown from '/images/crown.png';
import { Link } from 'react-router-dom';
export default function ClientTestimonial() {
        const [thumbsSwiper,setThumbsSwiper] = useState()
        const {ClientReviews} = useLoadClientReviews()  
               
  return (
    <>
 
      {ClientReviews.length > 0 && <div className="container relative mx-auto">
      <div  className="clients_container  my-28 bg-sky-300 rounded-xl p-2  md:p-10">
            <div className=" bg_gradiand  mx-auto ">
               <div className="desc_cons grid  grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="desc lg:p-0  p-5 grid lg:text-start text-center items-center">
                 <div className='grid gap-4 text-white'>
                 <h1 className="sub_tile text-3xl ">What our client say</h1>
                <h1 className="sub_tile text-5xl font-bold">Happy Clients</h1>
                   <p className="text-xl leading-9">Discover the heartwarming testimonials from our delighted clients, sharing their experiences of seamless event planning and unforgettable celebrations. Let their stories inspire your next extraordinary event</p> 
                   <div><Link to="services"><button className='btn mt-5 capitalize text-lg btn-lg'>View our Services</button></Link></div>
 
                   <img className='absolute hidden xl:block bottom-28 opacity-60' src={crown} alt="" />
                  </div>   

                 
                </div>  
                <div className="verticle_slide   h-[700px] flex justify-end">

                <Swiper loop={true} watchOverflow={true} direction='vertical' slidesPerView={'auto'} spaceBetween={10} grabCursor={true} coverflowEffect={{ rotate: 50, stretch: 0, depth: 20, modifier: 1, slideShadows: true, }} centeredSlides={true} autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true, }} pagination={{ clickable: true, }} modules={[Autoplay, EffectCoverflow, Pagination, Navigation]} className="mySwiper   mx-auto flex justify-end  slides_items  w-[100%] overflow-hidden   gap-10  relative">

                  {ClientReviews.slice(0,6).map((ele,ind)=><SwiperSlide className='h-40' style={{height:'320px'}} key={ind}>
                         <div className="cradrs_items  ">
                      <div className="crads h-50 p-10 bg-white rounded-md relative ">
                        <div className="absolute h-16 overflow-hidden w-16 top-[-32px] left-[-32px] border-zinc-100 border-4 rounded-full box-border "> <img  src={ele.imageURL} alt=""/></div>
                        <div className="content"> 
                          <p className=" md:text-lg text-xs leading-7 ">{ele.testimonial.slice(0,150)+"..."}</p>
                          <h1 className="font-bold leading-7 mt-5 text-slate-900 capitalize">{ele.clientName}</h1>
                          <h1 className="font-semibold leading-7 text-gray-500 capitalize">Businessman</h1>      
                        </div>
                      </div> 
                     </div>
                         </SwiperSlide>)}
                 </Swiper>
                </div>
               </div>
            </div>
            <div className='clipshape6 absolute h-full w-full bg-green-200'> 

            </div>
       </div>
       </div>} 
       
    </>
  );
}



// Import Swiper styles

