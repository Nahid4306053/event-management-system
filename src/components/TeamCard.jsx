import React from "react";
import "../styles/team_card.scss";
import card_bg from '/images/card_bg.jpeg'
export default function TeamCard({team}) {
       const {name,role,phone,email,profileImageURL} = team || {};         
  return (
    <div data-aos="fade-up" className="team_card cursor-pointer bg-sky-300 h-[550px] rounded-lg overflow-hidden relative flex flex-col items-center justify-center"> 
    <div className="overlay absolute"> 
    <img src={profileImageURL} className="h-full -mt-14 object-cover w-full object-top " alt="" /> 
    <div className="absolute ov_item top-0 h-full w-full"></div> 
    </div> 

      <div className="team_card_img absolute">          
        <img className="h-full w-full  object-cover" src={profileImageURL} alt="" />
       
      </div> 
      <div className="description text-center grid gap-3 px-5"> 
         <p className="text-white text-xl  font-bold">{name}</p>
          <p className="text-white text-5xl font-bold">{role}</p>
         <div className="social text-xl flex justify-center gap-4 text-white">
            <a href={`"tel:${phone}`}><i className="fa-sharp fa-solid fa-tty"></i></a> 
            <a href={`mailto:${email}`}><i className="fa-solid fa-envelope"></i></a >       
         </div>
        </div>
    </div>
    
  );
}
