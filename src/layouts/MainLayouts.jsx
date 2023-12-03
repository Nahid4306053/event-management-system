import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { ThreeCircles } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import "../styles/App.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayouts() {
  const navigation = useNavigation();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="overflow-x-auto flex flex-col justify-between">
      <Navber />
      <div>
        <ToastContainer
          className="mt-24"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      {navigation.state === "loading" ? (
        <div className=" flex justify-center items-center  w-full">
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
      ) : (
        <Outlet></Outlet>
      )}
      <Footer />
    </div>
  );
}
