function Footer() {
  return (
    <div className="bg-slate-900 mt-auto">
      <footer className="py-4">
        <section className="flex flex-col items-center text-center text-white">
          <div className="text-sm">
            <strong>Sede central: </strong> Av. Chiclayo - Jose Leonardo Ortiz{" "}
            <br />
            <strong>Teléfono:</strong> 123456789 <br />
            <strong>Email: </strong>
            <a href="mailto:carlosmerav@gmail.com" className="text-blue-600">
              carlosmerav@gmail.com
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
