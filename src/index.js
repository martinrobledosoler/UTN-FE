import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import { ResetPassword } from "./auth/resetPassword";
import { ForgotYourPassword } from "./auth/forgotPassword";
import { ValidateUser } from "./auth/validateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./app/home";
import { Stadistics } from "./app/stadistics";
import { Profile } from "./app/profile";
import { Jobs } from "./app/jobs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/forgotPassword" element={<ForgotYourPassword />} />
      <Route path="/validateUser" element={<ValidateUser />} />

      <Route path="/" element={<Home />} />
      <Route path="/stadistics" element={<Stadistics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
