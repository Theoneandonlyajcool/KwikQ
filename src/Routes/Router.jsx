import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Auth/Signup";
import SignIn from "../Pages/Auth/SignIn";
import SignUpCategory from "../Pages/Auth/SignUpCategory";
import VerifyEmail from "../Pages/Auth/VerifyEmail";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import GetStarted from "../Pages/Auth/GetStarted";
import Landing from "../Pages/Landing";
import ResetPassword from "../Pages/Auth/ResetPassword";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Landing />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/category" element={<SignUpCategory />} />
          <Route path="/verification" element={<VerifyEmail />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
