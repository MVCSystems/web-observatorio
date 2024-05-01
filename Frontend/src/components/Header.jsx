function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex flex-col justify-between mt-2 border-gray-300 sm:flex-col">
        <div className="bg-slate-900">
          <img
            src="img/logo_municipalidad_01.png"
            alt="Logo 1"
            className="mt-1 mb-1 ml-1 h-custom"
          />
        </div>
        <div className="bg-white">
          <img
            src="img/logo_observatorio_jlo.png"
            alt="Logo 2"
            className="h-16 mt-1 mb-1"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;