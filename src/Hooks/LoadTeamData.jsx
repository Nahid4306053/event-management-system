import React, { useEffect, useState } from "react";

export default function useLoadTeam() {
  const [Team, setTeam] = useState([]);
  useEffect(()=>{
   fetch("/data/TeamMember.json").then((res)=> res.json()).then((data)=>setTeam(data)).catch((err)=>console.log(err))
  },[])
  return {Team} 
}
