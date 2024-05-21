import { NextUIProvider } from "@nextui-org/react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Actividades from "./Pages/Actividades";
import Codisec from "./Pages/Codisec";
import CodisecDetail from "./Pages/CodisecDetail";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import Publicaciones from "./Pages/Publicaciones";
import Servicios from "./Pages/Servicios";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Navigate to="/inicio" />} path="/"></Route>
          <Route element={<Inicio />} path="/inicio"></Route>
          <Route element={<Nosotros />} path="/nosotros"></Route>
          <Route element={<Actividades />} path="/actividades"></Route>
          <Route element={<Publicaciones />} path="/publicaciones"></Route>
          <Route element={<Servicios />} path="/servicios"></Route>
          {/*  */}
          <Route element={<Codisec />} path="/codisec"></Route>
          <Route element={<CodisecDetail />} path="/codisec/:id"></Route>
        </Route>
      </Routes>
    </NextUIProvider>
  );
}

export default App;
