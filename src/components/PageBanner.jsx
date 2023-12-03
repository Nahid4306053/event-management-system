import React from "react";

export default function PageBanner({Banner,children}) {
  return (    <>
    <div className="hero min-h-[500px] md:min-h-[700px]" style={{ backgroundImage: `url(${Banner})`,backgroundPositionY:"top"}} >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content mt-20 text-center text-neutral-content">
        <div className="max-w-2xl px-10">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}
