import React from 'react'
import CountUp from 'react-countup'


export default function OurCountDown() {
  return (
    <div data-aos="zoom-in" className='text-sky-400 my-20 bg-sky-200    p-10 rounded-lg container mx-auto'>
      <div  className='w-full grid-cols-1
       grid md:grid-cols-2 gap-8 lg:grid-cols-4'>
       <div className="coundonw_item font-bold text-center">
      <CountUp className='text-8xl' start={0} suffix='k+' duration={10} end={15}  enableScrollSpy={true}  triggerOnce={true}/> 
      <p className='font-bold'>Event completed</p>
       </div>    
          <div className="coundonw_item font-bold text-center">
      <CountUp className='text-8xl' start={0} suffix='k+' duration={10} end={5} enableScrollSpy={true}  triggerOnce={true}/>  
      <p className='font-bold'>Happy CLients</p>
       </div>     
         <div className="coundonw_item font-bold text-center">
      <CountUp className='text-8xl' start={0} suffix='+' duration={10} end={45} enableScrollSpy={true}  triggerOnce={true}/> 
      <p className='font-bold'>Team Members</p>
       </div>     
         <div className="coundonw_item font-bold text-center">
      <CountUp className='text-8xl' start={0} suffix='+' duration={10} end={15} enableScrollSpy={true}  triggerOnce={true}/> 
      <p className='font-bold'>Years Expreiance</p>
       </div>
      </div>
 
    </div>
  )
} 
