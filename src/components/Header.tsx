function Header() {
  return (
    <nav className="">
      <div className="fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white px-4 flex items-center justify-between z-50">
        {/* Logo a la izquierda */}
        <div>
          <img
            src="/images/logo-barber.jpg"
            alt="logo-barber"
            className="h-12"
          />
        </div>

        {/* Título centrado */}
        <h1 className="text-lg text-center flex-1">Mechas Barbershop</h1>

        {/* Botón a la derecha */}
        <div>
          <button className="bg-white text-gray-800 px-4 py-2 rounded">
            OPT
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
