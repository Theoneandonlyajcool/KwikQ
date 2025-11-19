import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
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
import Pricepage from "../Pages/PricingPage/PriceLandingPage";
import AdminLandingPage from "../Pages/AdminLandingPage/AdminLandingPage";
import Orgform from "../Pages/ApiOrgform/ApiOrgform";
import Branch from "../Pages/ApiBranchform/ApiBranch";
import Organization from "../Pages/OnBoarding/Orangization";
import BranchOnboarding from "../Pages/OnBoarding/Branch";
import Review from "../Pages/OnBoarding/Review";
import Submitted from "../Pages/OnBoarding/Submitted";
import VerifyForgetpassword from "../Pages/Auth/VerifyForgetpassword";
import OrganizationSettings from "../Pages/pagesbranch/OrganizationSettings";
import BranchManagement from "../Pages/pagesbranch/BranchManagement";
import AdminDash from "../Pages/Admin/AdminDash";
import GetStarted2 from "../Pages/Auth/GetStarted2";
import LoginForm from "../Pages/Auth/SingleBranchLogin";
import Editbranch from "../Pages/pagesbranch/Editbranch";
import Allbranch from "../Pages/pagesbranch/Allbranch";
import ThankYouModal from "../Pages/SuccessPayment";
import SalesTeamModal from "../Pages/SalesTeamModal";
import InterestModal from "../Pages/InterestModal";
import MultiStepModal from "../Pages/CustomModal/CustomModal";
import CustomStep1 from "../Pages/CustomModal/CustomStep1";
import CustomStep2 from "../Pages/CustomModal/CustomStep2";
import FinalStep from "../Pages/CustomModal/FinalStep";

// Hooks
import { useState } from "react";
import { Role } from "../Components/Context";
import BranchSigninV from "../Pages/Auth/BranchSigninV";
import QueueFormNorm from "../Pages/QueueFormNorm";

const Router = () => {
  const [OrgRole, SetOrgRole] = useState("");

  return (
    <div>
      <Role.Provider value={{ OrgRole, SetOrgRole }}>
        <HashRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Landing />} />
            <Route path="/sign_up/" element={<Signup />} />
            <Route path="/sign_in/" element={<SignIn />} />
            <Route path="/category" element={<SignUpCategory />} />
            <Route path="/verification" element={<VerifyEmail />} />
            <Route path="/forget_password" element={<ForgetPassword />} />

            <Route path="/businessCategory" element={<GetStarted />} />
            <Route path="/Branch_SigninV" element={<BranchSigninV />} />
            <Route
              path="/verification_forgetpassword"
              element={<VerifyForgetpassword />}
            />

            <Route path="/businessCategory2" element={<GetStarted2 />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/Sevenday_free" element={<Sevendayfree />} />
            <Route path="/users_form/:queue/:id" element={<QueueForm />} />
            <Route path="/queue_success" element={<QueueSuccess />} />
            <Route path="/pricing" element={<Pricepage />} />
            <Route path="/singleBranch" element={<LoginForm />} />
            <Route path="/admin_landingpage" element={<AdminLandingPage />} />
            <Route path="/businessCategory2" element={<GetStarted2 />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/Sevenday_free" element={<Sevendayfree />} />
            <Route path="/queue_form" element={<QueueFormNorm />} />
            <Route path="/queue_success" element={<QueueSuccess />} />
            <Route path="/edit_branch" element={<Editbranch />} />
            <Route path="/pricing" element={<Pricepage />} />
            <Route path="/singleBranch" element={<LoginForm />} />
            <Route path="/admin_landingpage" element={<AdminLandingPage />} />
            <Route path="/orgform" element={<Orgform />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/salesteam_modal" element={<SalesTeamModal />} />
            <Route path="/Interest_Modal" element={<InterestModal />} />
            <Route path="/Custom_path" element={<MultiStepModal />} />
            <Route path="/Custom_step1" element={<CustomStep1 />} />
            <Route path="/Custom_step2" element={<CustomStep2 />} />
            <Route path="/Final_step" element={<FinalStep />} />

            <Route path="/organization_onboarding" element={<Organization />} />
            <Route path="/branch_onboarding" element={<BranchOnboarding />} />
            <Route path="/review" element={<Review />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/payment_succesful/:id" element={<ThankYouModal />} />

            <Route path="/dashboard/*" element={<LayoutShell />}>
              <Route index element={<Navigate to="overview" />} />
              <Route path="overview" element={<BranchOverview />} />
              <Route path="allbranchview" element={<Allbranch />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="branch-management" element={<BranchManagement />} />
              <Route path="settings" element={<OrganizationSettings />} />
            </Route>

            <Route path="/admin_dashboard" element={<AdminDash />} />
          </Routes>
        </HashRouter>
      </Role.Provider>
    </div>
  );
};

export default Router;
