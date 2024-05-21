import { Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";
import useSWR from "swr";

const CodisecListItem = ({ evento }: { evento: Evento }) => {
  return (
    <div>
      <Link to={"" + evento.id}>
        <Card className="shadow-lg">
          <CardBody>
            <Image
              isZoomed
              width={300}
              height={300}
              alt={evento.titulo}
              src={evento.portada || "img/logo-codisec.png"}
            ></Image>
          </CardBody>
          <CardFooter>
            <h2 className="text-center">{evento.titulo}</h2>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default function Codisec() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    "http://127.0.0.1:8000/api/eventos/",
    fetcher
  );
  return (
    <div>
      {isLoading && <Spinner />}
      {error && <div>Error al cargar las reuniones de codisec</div>}
      {data && (
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
          {data.map((evento: Evento) => (
            <CodisecListItem key={evento.id} evento={evento} />
          ))}
        </div>
      )}
    </div>
  );
}

interface Evento {
  id: number;
  titulo: string;
  descripcion_truncada: string;
  portada: string;
}
