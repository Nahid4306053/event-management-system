
import React, { useEffect } from "react";
import PageBanner from '../components/PageBanner'
import team from "/images/team.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import TeamCard from "../components/TeamCard";
import useLoadTeam from "../Hooks/LoadTeamData";
import Pagetitle from "../Hooks/Pagetitle";
export default function Team() {
      const {Team} = useLoadTeam()
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <Pagetitle>Team - Birthday Planner</Pagetitle>
       <PageBanner Banner={team}>
   <div className="grid gap-4" >
          <h2 className="text-4xl">Our Exceptional Team</h2>
          <p className="text-xl leading-8">
          Celebrate our exceptional birthday planner team - the architects of unforgettable memories.
          </p>
        </div>
   </PageBanner>


      <div className="team_member container mx-auto my-20 grid lg:grid-cols-3 md:grid-cols-2 gap-5 xl:gap-20 grid-cols-1">
         {Team.length > 0 && Team.map((ele,ind)=>{
          return (
          <TeamCard key={ind} team={ele}/> 
          )         
         })}       
      </div>
    </>
  );
}

