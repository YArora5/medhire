import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NurseLogin from "./pages/NurseLogin";
import NurseRegister from "./pages/NurseRegister";
import HospitalLogin from "./pages/Hospital Login";
import HospitalRegister from "./pages/HospitalRegister";
import HospitalDashboard from "./pages/HospitalDashboard";
import NurseDashboard from "./pages/NurseDashboard";
import HospitalRequests from "./pages/HospitalRequests";
import Assessment from "./pages/Assessment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nurse-login" element={<NurseLogin />} />
        <Route path="/nurse-register" element={<NurseRegister />} />
        <Route path="/hospital-login" element={<HospitalLogin />} />
        <Route path="/hospital-register" element={<HospitalRegister />} />
        <Route
  path="/hospital-dashboard"
  element={<HospitalDashboard />}
/>
<Route
  path="/nurse-dashboard"
  element={<NurseDashboard />}
/>
<Route
  path="/hospital-requests"
  element={<HospitalRequests />}
/>
<Route
  path="/assessment"
  element={<Assessment />}
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;