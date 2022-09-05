import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Feed from "../pages/Feed";
import LandingPage from "../pages/LandingPage";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/feed" element={<Feed />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/welcome" />} />
    </Routes>
  );
};

export default AppRoutes;
