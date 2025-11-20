import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const token = sessionStorage.getItem("user-recog");

  return <div>{token ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default Private;
