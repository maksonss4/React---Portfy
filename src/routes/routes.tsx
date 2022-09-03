import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage/>} />
      <Route path="*" element={<Navigate replace to="/welcome" />} />
    </Routes>
  );
}

export default AppRoutes;
