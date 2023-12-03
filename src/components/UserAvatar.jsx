import React from "react";
import { useAuth } from "../Context/AuthnicationContext";
import { useNavigate } from "react-router-dom";
import user from "/images/user.png"
import { toast } from "react-toastify";
export default function UserAvatar() {
  const {signout , Cureentuser} = useAuth()
  const navigate = useNavigate()
  const userName = Cureentuser.displayName || ""
  const handlsignout = async () =>{
   try{
    await signout()
    toast.success(`${userName} Log Out SuccessFully`);
    navigate("/login")
   }
   catch(err){
     console.log(err)
   }
  }

  return (
    <div className="avatar  dropdown cursor-pointer  dropdown-hover ">
      <div className="w-12 rounded-full ring ring-orange-700 ring-offset-base-100 ring-offset-2">
        <img
          tabIndex={0}
          src={Cureentuser.photoURL ? Cureentuser.photoURL : user}
        />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content border-2 rounded-lg z-[1] -translate-x-44  text-center  left-0 p-4 shadow-2xl bg-base-100 h-56 w-56"
      >
        <div className="avatar w-full  flex justify-center">
          <div className="w-20 mt-2 rounded-full ring ring-orange-600 ring-offset-base-100 ring-offset-2">
            <img src={Cureentuser.photoURL ? Cureentuser.photoURL : user} />
          </div>
        </div>
        <h1 className="text-xl font-bold mt-2">{Cureentuser ? Cureentuser.displayName.slice(0,15) : "Not Found"}</h1>
        <div className="flex justify-center mt-2 gap-4">

          <button onClick={handlsignout} className="btn btn-neutral rounded-none btn-sm">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
