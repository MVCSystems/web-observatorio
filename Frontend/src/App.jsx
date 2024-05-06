import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import About from "./Pages/About";
import Actividades from "./Pages/Actividades";
import Home from "./Pages/Home";
import Inicio from "./Pages/Inicio";
import Publicaciones from "./Pages/Publicaciones";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home></Home>}>
          <Route element={<Navigate to="inicio" />} path="/"></Route>
          <Route element={<Inicio></Inicio>} path="inicio"></Route>
          <Route
            element={<Actividades></Actividades>}
            path="actividades"
          ></Route>
          <Route element={<Services></Services>} path="servicios"></Route>
          <Route element={<About></About>} path="nosotros"></Route>
          <Route
            element={<Publicaciones></Publicaciones>}
            path="publicaciones"
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
