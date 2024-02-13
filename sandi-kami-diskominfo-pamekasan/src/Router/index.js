import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Beranda from "../Pages/Beranda";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/auth/Login";
import PendaftaranTTE from "../Pages/PendaftaranTTE";
import Authenticated from "../Middleware/Authenticated";
import Pengaju from "../Components/AdminComponents/Pengaju";

function Router() {
  const authh = localStorage.getItem("auth") ? true : false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/formulir-permohonan-tte" element={<PendaftaranTTE />} />
        <Route
          path="/login"
          element={authh ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard/"
          element={
            <Authenticated>
              <Dashboard />
            </Authenticated>
          }
        />
        <Route
          path="/dashboard/pengaju"
          element={
            <Authenticated>
              <Pengaju />
            </Authenticated>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
