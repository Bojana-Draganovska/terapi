// React
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import EmergencyHelp from "./pages/EmergencyHelp/EmergencyHelp";
import MentalHealth from "./pages/MentalHealth/MentalHealth";
import BreathingTech from "./pages/BreathingTech/BreathingTech";
import AboutUs from "./pages/AboutUs/AboutUs";
import InformativeCorner from "./pages/InformativeCorner/InformativeCorner";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
// Styles
import "./index.css";
import MentalCondition from "./pages/MentalCondition/MentalCondition";
import BreathingCondition from "./pages/BreathingCondition/BreathingCondition";
import FAQ from "./pages/FAQ/FAQ";







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/emergency-help" element={<EmergencyHelp />} />
      <Route path="/mental-health" element={<MentalHealth />} />
      <Route path="/breathing" element={<BreathingTech />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/health-selected" element={<MentalCondition/>} />
      <Route path="/breathing-tech" element={<BreathingCondition/>} />
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/info-corner" element={<InformativeCorner />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
