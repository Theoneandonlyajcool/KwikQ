import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import LandingPage from "../Pages/LandingPage";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import ForgetPsw from "../Pages/ForgetPsw";
import EmailVerify from "../Pages/EmailVerify";
import GetStarted from "../Components/GetStarted/GetStarted";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/forgetPsw" element={<ForgetPsw />} />
        <Route path="/emailVerify" element={<EmailVerify />} />
        <Route path="/businessCategory" element={<GetStarted />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
