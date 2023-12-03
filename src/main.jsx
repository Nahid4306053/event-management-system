import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateDRouter from '../src/Routes/Routes'

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
      <RouterProvider router={CreateDRouter}></RouterProvider>
    </React.StrictMode> 

);
