import React from "react";
import PageBanner from "../components/PageBanner";
import abou_us from '/images/abou_us.jpg'
import servicebanner from "/images/Servicebanner.webp"
import Pagetitle from "../Hooks/Pagetitle";
export default function AboutUs() {
  return (
    <>    
    <Pagetitle>About us - Birthday Planner</Pagetitle>
      <PageBanner Banner={servicebanner}>
        <div className="grid gap-4">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-xl leading-8"> We are a team of passionate people who are passionate about our services. </p>
        </div>
      </PageBanner>
      <div className="container mx-auto mt-20">
    {/* <h1 className="text-5xl  mb-4">About us</h1> */}

    <p className="text-2xl mb-10 leading-10">Welcome to Nahid Birthday party planner , where dreams meet reality and every birthday celebration becomes a memorable masterpiece! We are a dedicated team of passionate individuals who believe in the magic of birthdays. Our mission is to turn your special day into an extraordinary event filled with joy, laughter, and cherished memories.</p>

    <h3 className="OurMission text-2xl mb-3">Our Mission</h3>

    <p className="text-lg mb-10 leading-8">At Nahid Birthday party planner , we understand the importance of birthdays. It's not just a date on the calendar; it's a momentous occasion that deserves to be celebrated in style. Our mission is to relieve you of all the planning stress and make your birthday party a reflection of your personality and dreams. Whether you're planning a whimsical children's party or an elegant soirée for adults, we are here to transform your vision into reality.</p>    
    
    
    <h3 className="OurMission text-2xl mb-3">Our Expertise</h3>

    <p className="text-lg mb-10 leading-8">What sets us apart is our unwavering commitment to perfection and creativity. Our talented team comprises seasoned event planners, innovative designers, culinary artists, and skilled entertainers. With years of experience in the event planning industry, we have mastered the art of creating unique and personalized birthday experiences tailored to your desires.</p>   
    
     <h3 className="OurMission text-2xl mb-3">Our Approach</h3>

    <p className="text-lg mb-10 leading-8">We believe that every birthday is unique, and thus, every celebration should be one-of-a-kind. Our approach is highly personalized; we take the time to understand your preferences, themes, and ideas. We meticulously plan every detail, from the invitations to the decorations, entertainment, and catering, ensuring that your birthday celebration surpasses all expectations.</p>

    <h3 className="OurMission text-2xl mb-3">What We Offer</h3>


   <ul className="text-lg list-disc ml-4 grid gap-4">
    <li>
      <strong>Creative Themes: </strong>
       From enchanting fairy tales to glamorous Hollywood nights, we bring your favorite themes to life with creative and immersive decorations.
    </li>
    <li>
      <strong>Experienced Entertainers: </strong>
      We have a wide range of entertainers who are passionate about their work, and we are always looking for new ones to join our team.
    </li>
    <li>
      <strong>Experienced Designers: </strong>
      We have a wide range of designers who are passionate about their work, and we are always looking for new ones to join our team.
    </li>
    <li>
      <strong>Experienced Event Planners: </strong>
      We have a wide range of event planners who are passionate about their work, and we are always looking for new ones to join our team.
    </li>
    <li>
      <strong>Experienced Culinary Artists: </strong>
      We have a wide range of culinary artists who are passionate about their work, and we are always looking for new ones to join our team.
    </li>
    <li>
      <strong>Experienced Photographers: </strong>
      We have a wide range of photographers who are passionate about their work, and we are always looking for new ones to join our team.
    </li>
    <li>
      <strong>Experienced Musicians: </strong>
      We have a wide range of musicians who are passionate about their work, and we are always looking for new ones to join our team.
    </li>    
    
    <li>
      <strong>Gourmet Delights: </strong>
      From enchanting fairy tales to glamorous Hollywood nights, we bring your favorite themes to life with creative and immersive decorations.
    </li>   
     <li>
      <strong>tress-Free Planning: </strong>
      Sit back, relax, and enjoy the festivities while we handle all the logistics, ensuring a seamless and stress-free experience for you and your guests.
    </li>
   </ul>


   <h3 className="OurMission text-2xl mt-10 mb-3">Let's Create Magic Together! </h3>

<p className="text-lg mb-10 leading-8">Planning a birthday party should be a joyous and exciting experience. With Nahid Birthday party planner , you can expect a celebration that reflects your personality, style, and dreams. Contact us today, and let's embark on a journey to create an unforgettable birthday party that will be remembered for a lifetime.</p>



     </div>
    </>
  );
}
