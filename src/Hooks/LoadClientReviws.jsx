import React, { useEffect, useState } from "react";

export default function useLoadClientReviews() {
  const [ClientReviews, setClientReviews] = useState([]);
  useEffect(()=>{
   fetch("/data/ClientReviws.json").then((res)=> res.json()).then((data)=>setClientReviews(data)).catch((err)=>console.log(err))
  },[])
  return {ClientReviews}
} 
