import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const Root = () => {
  return (
    <div>
      <NavBar />
      
      <Outlet />
    </div>
  );
};

export default Root;
