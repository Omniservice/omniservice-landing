import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/signUp";
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Screen */}
        <Route path="/" element={<Home />} />
        {/* Signup Screen */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
