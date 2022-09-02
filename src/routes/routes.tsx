import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Dashboard/>} />
      <Route path="*" element={<Navigate replace to="/welcome" />} />
    </Routes>
  );
}

export default AppRoutes;
