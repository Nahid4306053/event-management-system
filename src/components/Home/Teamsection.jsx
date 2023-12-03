import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TeamCard from "../TeamCard";
import useLoadTeam from "../../Hooks/LoadTeamData";
export default function Team() {
      const {Team} = useLoadTeam()
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in"
        className="section_title  container mx-auto my-10 grid gap-4 text-center mb-20"
      >
        <h1 className="sub_tile text-3xl text-sky-400">Gratitude  of Outstanding Events</h1>
        <h1 className="sub_tile text-5xl font-bold"> Our Exceptional Team</h1>
        <p className="text-lg">Celebrate our exceptional birthday planner team - the architects of unforgettable memories.</p>
      </div>

      <div className="team_member container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 xl:gap-20 grid-cols-1">
         {Team.length > 0 && Team.map((ele,ind)=>{
          return (

          <TeamCard key={ind} team={ele}/> 

          )         
         })}       
      </div>
    </>
  );
}
