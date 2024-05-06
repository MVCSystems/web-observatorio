import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mapsite from "../components/Mapsite";
import Navbar from "../components/Navbar";

export default function Home() {
  const [currentNav, setCurrentNav] = useState("Inicio");
  return (
    <div>
      <div className="grid-header">
        <Header />
      </div>
      <div className="grid-nav">
        <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav} />
      </div>
      <div className="grid-main">
        <Outlet></Outlet>
      </div>
      <div className="grid-mapsite">
        <Mapsite />
      </div>
      <div className="grid-footer">
        <Footer />
      </div>
    </div>
  );
}
