import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function Mapsite() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 p-4 bg-white sm:grid-cols-2 md:grid-cols-3">
          <section>
            <h2 className="mb-2 text-lg font-bold">Mapa de sitio</h2>
            <ul className="text-sm">
              <li>
                <a href="/home">
                  <strong>Dirección</strong>{" "}
                </a>{" "}
              </li>
              <li>
                <a href="/home">
                  <strong>Ubicación</strong>{" "}
                </a>{" "}
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold">Contactanos</h2>
            <p className="text-sm"> </p>
            <strong>Dirección:</strong> Av. Chiclayo N°100 <br />
            José Leonardo Ortiz <br />
            <strong>Teléfono:</strong> 123456789 <br />
            <strong>Email:</strong>
            <a href="mailto:carlosmerav@gmail.com" className="text-blue-600">
              carlosmerav@gmail.com
            </a>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold">Redes sociales</h2>
            <div>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600" size="2em" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-500" size="2em" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-red-600" size="2em" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-black" size="2em" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Mapsite;
