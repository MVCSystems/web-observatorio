import { useState } from 'react';
import Navbar from "./components/Navbar.jsx";
import Contenedor from "./components/Contenedor.jsx";
import Mapsite from "./components/Mapsite.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [currentNav, setCurrentNav] = useState("Inicio");
  return (
    <Router>
     
        <div className="grid-header">
          <Header />
        </div>
        <div className="grid-nav">
          <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav}/>
        </div>
        <div className="grid-main">
          <Contenedor currentNav={currentNav}/>
        </div>
        <div className="grid-mapsite">
          <Mapsite />
        </div>
        <div className="grid-footer">
          <Footer />
        </div>
    </Router>
  );
}

export default App;