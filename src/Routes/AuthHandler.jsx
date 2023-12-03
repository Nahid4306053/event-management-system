import React from 'react'
import { useAuth } from '../Context/AuthnicationContext'
import { Navigate } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'

export default function AuthHandler({children}) {
  const {Cureentuser , loading} = useAuth()
  if(loading){
   return ( 
   <div className=" flex justify-center min-h-screen items-center w-full">
    <ThreeCircles       
      height="200"
      width="200"
      color="#4fa94d"
      wrapperStyle={{}}  
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#3498db"
      innerCircleColor="#e67e22"
      middleCircleColor="#e74c3c"
    /> 
  </div>
  )
  }
  else{
    if(!Cureentuser){
      return <>{children}</>
    }else{
      return <Navigate to="/" />
    }
  }
}
