import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
