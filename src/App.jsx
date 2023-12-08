import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./common/header/Header.jsx";
import { Home } from "../src/pages/home/Home.jsx";
import { TattooArtists } from "./pages/tattooArtists/TattooArtists.jsx";
import { Login } from "../src/pages/login/Login.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Profile } from "../src/pages/profile/Profile.jsx";
import { Appointments } from "../src/pages/appointments/Appointments.jsx";
import { Admin } from "../src/pages/admin/Admin.jsx";
import { AdminAppointments } from "./pages/admin/AdminAppointments.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/tattooArtists" element={<TattooArtists />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/admin/users" element={<Admin />} />
          <Route path="/admin/appointments" element={<AdminAppointments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
