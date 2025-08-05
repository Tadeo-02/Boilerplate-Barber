import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white px-4 flex items-center justify-between z-50">
        {/* logo a la izquierda */}
        <div>
          <Link to="/" aria-label="Ir al inicio">
            <img
              src="/images/logoAplicacion.jpg"
              alt="logo-barber"
              className="h-12"
            />
          </Link>
        </div>

        {/* titulo en el medio */}
        <h1 className="text-lg text-center flex-1">Mechas Barbershop</h1>

        {/* boton a la derecha */}
        <div>
          <button
            className="bg-white text-gray-800 px-4 py-2 rounded"
            onClick={() => setOpen(true)}
          >
            <FaBars style={{ fontSize: "2.2rem" }} />
          </button>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "50vw", maxWidth: 400 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-800"
          onClick={() => setOpen(false)}
        >
          Cerrar
        </button>
        <ul className="mt-16 p-4">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            {/* <Link to="/productos" onClick={() => navigate("/productos")}> */}
            <Link to="/productos/mainProductos.tsx" onClick={() => setOpen(false)}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* fondo oscuro al abrir el sidebar */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}

export default Header;
