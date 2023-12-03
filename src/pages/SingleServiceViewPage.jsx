import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner';
import Input from '../components/Input';
import Pagetitle from '../Hooks/Pagetitle';

export default function SingleServiceViewPage() {
    const {id} = useParams()                
    const services = useLoaderData()
    const [SingleService,setSingleService] = useState({});
    const { name, image, price, description, works } = SingleService || {};

    useEffect(()=>{
     if(services.length > 0){
       const mathService = services.
       find((ele)=>{
                    return ele.id === id
       })
       setSingleService(mathService)

     } 
    },[services,id])

  return (
    <>
      {name && <Pagetitle>{name} - Birthday Planner</Pagetitle>}
    <PageBanner Banner={image}>
    <div className="grid gap-4">
          <h2 className="text-4xl font-bold">{name}</h2>
          <p className="text-xl leading-8">
           Get ready to somthing extraordinary party with you and you familly and with your honorable  guest
          </p>
        </div>
    </PageBanner>
    <div style={{borderTopLeftRadius:"100px",borderBottomRightRadius:"100px",}} className="container  flex gap-10 lg:flex-row flex-col p-10 md:p-20 bg-sky-200  -mt-20 mx-auto rounded-lg">
       <div className="flex-1 details grid gap-4">
         <h1 className='title text-4xl font-bold '>{name}</h1>  <p className='text-lg mt-5'>{description}</p>
         <h1 className='title text-2xl font-bold mt-5'>What we do in this service?</h1>
         <p className='text-lg'>{works}</p>
       
     
       </div>
       <div className="flex-1">
        <div className='header'>
          <div className='text-4xl flex gap-5 flex-wrap justify-between font-bold'>
          <p>Book a date</p>          
          <p>{price}/100Guest</p>          
          </div> 
         </div> 
         <div className="card flex-shrink-0 w-full ">
      <form className="grid  md:grid-cols-2  gap-4">
         <Input placeholder="Name"  label="Name" type="text" 
         customcss="border-sky-300 border-2  focus:outline-none"/> 

          <Input placeholder="Phone"  label="Phone" type="tel" customcss="border-sky-300 border-2 focus:outline-none"/>    

           <Input placeholder="Email"  label="Email" type="email" customcss="border-sky-300 border-2  focus:outline-none"/>  

            <Input placeholder="Date"  label="Pic a Date" type="date" customcss="border-sky-300 border-2  focus:outline-none"/>    

            <div className="form-control col-span-full">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="border-sky-300 h-full border-2 textarea textarea-bordered" placeholder="Message"></textarea>
          </div>

        <div className="form-control mt-3 col-span-full">
          <button className="btn btn-neutral">Book Now</button>
        </div>
      </form>
    </div>         
       </div>
    </div>
    </>
  )
}
