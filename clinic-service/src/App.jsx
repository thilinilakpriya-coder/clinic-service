import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorList from "./pages/DoctorList";
import ManagePatients from "./pages/ManagePatients";
import ManageDoctors from "./components/DoctorTable";
import ManageAppointments from "./pages/ManageAppointments";
import ClinicSettings from "./pages/ClinicSettings";
import About from "./pages/About";
import LoginCard from "./components/LoginCard";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

// Layout wrapper to hide header/footer on login page
function LayoutWrapper({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <main>{children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/DoctorList" element={<DoctorList />} />
          <Route path="/ManageAppointments" element={<ManageAppointments />} />
          <Route path="/ClinicSettings" element={<ClinicSettings />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/patients" element={<ManagePatients />} />
          <Route path="/doctors" element={<ManageDoctors />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
