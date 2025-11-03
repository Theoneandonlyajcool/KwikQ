import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
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
import LayoutShell from "../Pages/branchdashboard/LayoutShell";
import BranchOverview from "../Pages/pagesbranch/BranchOverview";
import Analytics from "../Pages/pagesbranch/AnalyticsPage.jsx/Analytics";
// import BranchManagement from "../Pages/pagesbranch/BranchManagement";
import Pricepage from "../Pages/PricingPage/PriceLandingPage";
import AdminLandingPage from "../Pages/AdminLandingPage/AdminLandingPage";

import OrganizationSettings from "../Pages/pagesbranch/OrganizationSettings";
import BranchManagement from "../Pages/pagesbranch/BranchManagement";
import AdminDash from "../Pages/Admin/AdminDash";
import GetStarted2 from "../Pages/Auth/GetStarted2";
import LoginForm from "../Pages/Auth/SingleBranchLogin";

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

          <Route path="/businessCategory" element={<GetStarted />} />

          <Route path="/businessCategory2" element={<GetStarted2 />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/Sevenday_free" element={<Sevendayfree />} />
          <Route path="/queue_form" element={<QueueForm />} />
          {/* <Route path="/queue_success" element={<QueueSuccess />} /> */}
          <Route path="/pricing" element={<Pricepage />} />
          <Route path="/singleBranch" element={<LoginForm />} />
          <Route path="/admin_landingpage" element={<AdminLandingPage />} />

          <Route path="/dashboard/*" element={<LayoutShell />}>
            <Route index element={<Navigate to="overview" />} />
            <Route path="overview" element={<BranchOverview />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="branch-management" element={<BranchManagement />} />
            <Route path="settings" element={<OrganizationSettings />} />
          </Route>

          <Route path="/admin_dashboard" element={<AdminDash />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
