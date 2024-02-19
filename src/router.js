import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoginForm from "./Components/LoginForm/LoginForm";
import CustomLayout from "./Components/CustomLayout/CustomLayout";

export default function Routers(Redirectpath) {
  const token = localStorage.getItem("token");
  console.log("token", token);
  let route = token
    ? [
        {
          path: "/dashboard",
          element: <Dashboard index={true} Redirectpath={Redirectpath} />,
          // children: [
          //   {
          //     index: true,
          //     path: "/dashboard",
          //     element: <Dashboard Redirectpath={Redirectpath} />,
          //   },
          // ],
        },
        {
          path: "/customLayout",
          element: <CustomLayout index={true} Redirectpath={Redirectpath} />,
          // children: [
          //   {
          //     index: true,
          //     path: "/dashboard",
          //     element: <Dashboard Redirectpath={Redirectpath} />,
          //   },
          // ],
        },
      ]
    : [
        {
          path: "/*",
          element: <LoginForm Redirectpath={Redirectpath} />,
          children: [],
        },
      ];
  console.log("route", route);
  return route;
}
