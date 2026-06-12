import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Login from "./Pages/Login";

import "./App.css";

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

      </Routes>

    </BrowserRouter>
  );
}

export default App;