import { Image } from "@nextui-org/react";

function Header() {
  return (
    <header>
      <div className="p-2 md:p-1 bg-slate-900">
        <Image
          className="w-2/3 md:w-1/2 lg:w-1/4"
          radius="none"
          shadow="none"
          src="img/logo_municipalidad_01.png"
          alt="Logo municipalidad"
        />
      </div>
      <div className="bg-white p-1">
        <Image
          className="w-2/3 md:w-1/2 lg:w-1/4"
          radius="none"
          src="img/logo_observatorio_jlo.png"
          shadow="none"
          alt="Logo 2"
        />
      </div>
    </header>
  );
}

export default Header;
