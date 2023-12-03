import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import error from "/images/error.png"
import Pagetitle from '../Hooks/Pagetitle'

export default function Notfound() {
  const {status ,data ,statusText } = useRouteError()
  return (
     <>
     <Pagetitle>{statusText} - Birthday Planner</Pagetitle>
    <div className='container mx-auto flex h-[90vh] text-center flex-col justify-center items-center '>
        <img className='max-h-72' src={error} alt="" />
        <h1 className= 'text-5xl md:text-9xl font-bold '>{status} {statusText} </h1>
        <p className='text-xl my-5'>{data}</p>
        <Link to="/">
         <button className='btn btn-primary mt-5'>Go Home</button>  
        </Link>
    </div></>
  )
}
