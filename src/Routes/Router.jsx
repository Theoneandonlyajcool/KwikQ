import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Auth/Signup";
import SignIn from "../Pages/Auth/SignIn";
import SignUpCategory from "../Pages/Auth/SignUpCategory";
import VerifyEmail from "../Pages/Auth/VerifyEmail";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import GetStarted from "../Pages/Auth/GetStarted";
import Landing from "../Pages/Landing";
import ResetPassword from "../Pages/Auth/ResetPassword";
import Sevendayfree from "../Pages/Auth/Sevendayfree";
import QueueForm from "../Pages/QueueForm";
import QueueSuccess from "../Pages/QueueSuccess";
const Router = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Landing />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/category" element={<SignUpCategory />} />
          <Route path="/verification" element={<VerifyEmail />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="businessCategory" element={<GetStarted />}></Route>
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/Sevenday_free" element={<Sevendayfree />} />
          <Route path="/queue_form" element={<QueueForm />} />
          <Route path="/queue_success" element={<QueueSuccess />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
