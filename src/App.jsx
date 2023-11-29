import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../src/pages/home/Home.jsx";
import { About } from "../src/pages/about/About.jsx";
import { Auth } from "../src/pages/auth/Auth.jsx";
import { Profile } from "../src/pages/profile/Profile.jsx";
import { Appointments } from "../src/pages/appointments/Appointments.jsx";
import { Admin } from "../src/pages/admin/Admin.jsx";
import { Header } from "./common/header/Header.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
