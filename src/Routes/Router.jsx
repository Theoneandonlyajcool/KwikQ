import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import LandingPage from "../Pages/LandingPage";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ForgetPsw from "../Pages/ForgetPsw";
import EmailVerify from "../Pages/EmailVerify";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forget-psw" element={<ForgetPsw />} />
        <Route path="email-verify" element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
