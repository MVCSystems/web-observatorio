import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

const pages = [
  { path: "/codisec", src: "img/logo-codisec.png", alt: "codisec logo" },
  { path: "/codisec", src: "img/logo-codisec.png", alt: "codisec logo" },
  { path: "/codisec", src: "img/logo-codisec.png", alt: "codisec logo" },
  { path: "/codisec", src: "img/logo-codisec.png", alt: "codisec logo" },
  { path: "/codisec", src: "img/logo-codisec.png", alt: "codisec logo" },
  { path: "/codisec", src: "img/logo-codisec.png", alt: "codisec logo" },
];

const MapLink = ({
  path,
  src,
  alt,
}: {
  path: string;
  src: string;
  alt: string;
}) => {
  return (
    <Card className=" h-60">
      <CardBody className="h-full justify-center">
        <Link to={path}>
          <Image
            src={src}
            isZoomed
            isBlurred
            width={220}
            height={220}
            alt={alt}
          />
        </Link>
      </CardBody>
    </Card>
  );
};

export default function Inicio() {
  return (
    <div className="h-full w-full flex flex-wrap py-10 gap-5">
      {pages.map((page) => (
        <MapLink
          key={page.path}
          path={page.path}
          src={page.src}
          alt={page.alt}
        />
      ))}
    </div>
  );
}
