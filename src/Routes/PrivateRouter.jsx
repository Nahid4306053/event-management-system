import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthnicationContext";

export default function PrivateRouter({ children }) {
  const { Cureentuser, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading) {
    return (
      <div className=" flex justify-center min-h-screen items-center w-full">
        <ThreeCircles
          height="200"
          width="200"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#3498db"
          innerCircleColor="#e67e22"
          middleCircleColor="#e74c3c"
        />
      </div>
    );
  } else {
    if (Cureentuser) {
      return <>{children}</>;
    } else {
      return <Navigate state={{ Vpath: pathname }} to="/login" />;
    }
  }
}
