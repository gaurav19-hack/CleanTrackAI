import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ReportIssue from "./Pages/ReportIssue";
import "./App.css";
import TrackIssue from "./Pages/TrackIssue";
import OfficerPanel from "./Pages/OfficerPanel";
import Heatmap from "./Pages/Heatmap";
import SocialImpact from "./Pages/SocialImpact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/features" element={<Features />} />

        <Route path="/how-it-works" element={<HowItWorks />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/track" element={<TrackIssue />} />
        <Route path="/officer" element={<OfficerPanel />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/socialimpact" element={<SocialImpact/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;