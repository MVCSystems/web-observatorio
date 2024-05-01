function Inicio() {
  const images = [
    { src: "img/mapa-peru.png", href: "/enlace1" },
    { src: "img/mapa-peru.png", href: "/enlace2" },
    { src: "img/mapa-peru.png", href: "/enlace3" },
    { src: "img/mapa-peru.png", href: "/enlace4" },
    { src: "img/mapa-peru.png", href: "/enlace5" },
    { src: "img/mapa-peru.png", href: "/enlace6" },
  ];

  return (
    <div className="container mx-auto">
    <div className="flex items-center justify-center mt-4">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="flex items-center justify-center overflow-hidden rounded shadow-lg"
          >
            <a href={img.href} target="#" rel="noopener noreferrer">
              <img
                className="object-contain w-full h-full"
                src={img.src}
                alt={`Imagen ${i + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Inicio;
