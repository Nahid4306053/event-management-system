import React, { useEffect, useState } from "react";

export default function useLoadServics() {
  const [services, setServices] = useState([]);
  useEffect(()=>{
   fetch("/data/services.json").then((res)=> res.json()).then((data)=>setServices(data)).catch((err)=>console.log(err))
  },[])
  return {services}
}
