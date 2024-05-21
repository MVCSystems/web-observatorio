import { Card, CardBody, Image } from "@nextui-org/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CodisecListItem = ({ item }) => {
  return (
    <Card className="w-1/3 h-1/3 shadow-lg">
      <CardBody className="overflow-hidden">
        <Image
          isZoomed
          isBlurred
          alt={item.titulo}
          src={item.portada}
          fallbackSrc="img/mapa-peru.png"
        ></Image>
      </CardBody>
    </Card>
  );
};

export default function Codisec() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/eventos/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto overflow-y-auto flex gap-10 bg-slate-300">
      {data.length > 0 &&
        data.map((item, index) => <CodisecListItem key={index} item={item} />)}
    </div>
  );
}

CodisecListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion_truncada: PropTypes.string.isRequired,
    portada: PropTypes.string,
  }),
};
