import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Signup from "../pages/Signup";
import Login from "../pages/logIn";
import AuthnicationContext from "../Context/AuthnicationContext";
import PrivateRouter from "./PrivateRouter";
import AllService from "../pages/AllService";
import SingleServiceViewPage from "../pages/SingleServiceViewPage";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs";
import AuthHandler from "./AuthHandler";
const CreateDRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthnicationContext><MainLayouts/></AuthnicationContext>  ,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Home/>
      },     
       {
        path: "/services",
        element: <PrivateRouter><AllService/></PrivateRouter> 
       },       
       {
        path: "/singleService/:id",
        loader: ()=> fetch("/data/services.json"),
        element: <PrivateRouter><SingleServiceViewPage/></PrivateRouter> 
       },     
         {
        path: "/aboutus",
        element: <PrivateRouter><AboutUs/></PrivateRouter> 
       },         
       {
        path: "/team",
        element: <PrivateRouter><Team/></PrivateRouter> 
       },       {
        path: "/gallery",
        element: <PrivateRouter><Gallery/></PrivateRouter> 
       },
       {
        path: "/signup",
        element: <AuthHandler><Signup/></AuthHandler>
      },    
         {
        path: "/contactus",
        element: <ContactUs/>
      },      
      {
        path: "/login",
        element: <AuthHandler><Login/></AuthHandler>
      }
    ],
  },
]);

export default CreateDRouter;
