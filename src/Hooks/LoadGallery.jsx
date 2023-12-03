import React, { useEffect, useState } from "react";

export default function useLoadGallery() {
  const [Gallerys, setGallerys] = useState([]);
  useEffect(()=>{
   fetch("/data/gellarys.json").then((res)=> res.json()).then((data)=>setGallerys(data)).catch((err)=>console.log(err))
  },[])
  return {Gallerys} 
}
