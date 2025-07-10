import { Link, Routes, Route } from "react-router-dom";
import styles from "./mainSucursal.module.css";

function Ubicacion() {
  return <div>Formulario para solicitar un turno nuevo</div>;
}
function Horarios() {
  return <div>Historial de turnos</div>;
}
function Barberos() {
    return <div>Historial de turnos</div>;
}
function AgendarTurno() {
  return <div>Formulario para solicitar un turno nuevo</div>;
}       

function MainSucursal() {
  return (
    <div>
      <h1 style={{ fontSize: 40 }}>Sucursal Centro</h1>
      <img src="/images/fotoSucursal.jpg" alt="logo-sucursal" />
      {/* BOTONES SUCURSAL */}
      <div className={styles.mainSucursal}>
        <Link to="Ubicación">Ubicación</Link>
      </div>
      <div className={styles.mainSucursal}>
        <Link to="Horarios">Horarios</Link>
      </div>
      <div className={styles.mainSucursal}>
        <Link to="Barberos">Barberos</Link>
      </div>
      <div className={styles.mainSucursal}>
        <Link to="Agendar Turnos">Agendar Turnos</Link>
      </div>
      <Routes>
        <Route path="Ubicación" element={<Ubicacion />} />
        <Route path="Horarios" element={<Horarios />} />
        <Route path="Barberos" element={<Barberos />} />
        <Route path="Agendar Turnos" element={<AgendarTurno />} />
      </Routes>
    </div>
  );
}
export default MainSucursal;