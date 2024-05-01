import PropTypes from "prop-types";
import About from "./About";
import Inicio from "./Inicio";
function Contenedor({ currentNav }) {
  return (
    <>
   
      {currentNav === "Inicio" && (
        <Inicio />
      )}
      {currentNav === "Nosotros" && (
        <div>
          <About />
        </div>
      )}
      { currentNav === "Actividades" && (
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
