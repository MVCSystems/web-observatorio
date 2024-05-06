import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MapLink({ url }) {
  return (
    <div>
      <Link to={url}>
        <img
          src="img/mapa-peru.png"
          alt="mapa peru"
          className="h-full w-full"
        />
      </Link>
    </div>
  );
}

function Inicio() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-4">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <MapLink />
            <MapLink />
            <MapLink />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <MapLink />
          <MapLink />
        </div>
      </div>
    </div>
  );
}

MapLink.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Inicio;
