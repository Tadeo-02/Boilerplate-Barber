import { Link, Routes, Route } from "react-router-dom";

function TurnoNuevo() {
  return <div>Formulario para solicitar un turno nuevo</div>;
}
function TurnosHistorial() {
  return <div>Historial de turnos</div>;
}

function MainTurnos() {
  return (
    <div>
      <h2>Turnos</h2>
      <nav>
        <Link to="nuevo" style={{ marginRight: 16 }}>
          Nuevo Turno
        </Link>
        <Link to="historial">Historial</Link>
      </nav>
      <Routes>
        <Route path="nuevo" element={<TurnoNuevo />} />
        <Route path="historial" element={<TurnosHistorial />} />
        <Route path="" element={<div>Selecciona una opción</div>} />
      </Routes>
    </div>
  );
}
export default MainTurnos;
