import PropTypes from "prop-types";
import About from "../Pages/About";
import Inicio from "../Pages/Inicio";
function Contenedor({ currentNav }) {
  return (
    <>
      {currentNav === "Inicio" && <Inicio />}
      {currentNav === "Nosotros" && (
        <div>
          <About />
        </div>
      )}
      {currentNav === "Actividades" && (
        <div>
          <About />
        </div>
      )}
    </>
  );
}

Contenedor.propTypes = {
  currentNav: PropTypes.string.isRequired,
};
export default Contenedor;
