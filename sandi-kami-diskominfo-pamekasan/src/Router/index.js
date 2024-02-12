// import React from "react";
// import Beranda from "../Pages/Beranda";
// import Dashboard from "../Pages/Dashboard";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Login from "../Pages/auth/Login";
// import PendaftaranTTE from "../Pages/PendaftaranTTE";
// import Authenticated from "../Middleware/Authenticated";

// function Router() {
//   const authh = localStorage.getItem("@_@") ? true : false;
//   console.log(authh);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Beranda />} />
//         <Route path="/formulir-permohonan-tte" element={<PendaftaranTTE />} />
//         <Route
//           path="/login"
//           element={authh ? <Navigate to="/dashboard" /> : <Login />}
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <Authenticated>
//               <Dashboard />
//             </Authenticated>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;
// Router.jsx
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
  console.log(authh);
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
        {/* <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/dashboard/pengaju" element={<Pengaju />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
