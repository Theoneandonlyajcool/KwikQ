import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Auth/Signup";
import SignIn from "../Pages/Auth/SignIn";
import SignUpCategory from "../Pages/Auth/SignUpCategory";
import VerifyEmail from "../Pages/Auth/VerifyEmail";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import GetStarted from "../Pages/Auth/GetStarted";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/category" element={<SignUpCategory />} />
          <Route path="/verification" element={<VerifyEmail />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="businessCategory" element={<GetStarted />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
