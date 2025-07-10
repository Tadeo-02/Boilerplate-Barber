import styles from "./horariosTurno.module.css";
import { useState } from "react";

function HorarioTurno() {
  const [seleccionado, setSeleccionado] = useState<string | null>(null);

  const horarios = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  return (

    <div>
      <h1 style={{ fontSize: 40 }}>Seleccionar horario</h1>
      <br />
      <ul className={styles.horariosTurnoContainer}>
        {horarios.map((hora, idx) => {
          if (hora === "08:00") {
            return (
              <>
                <h2 key="mañana"> Mañana --------------------------------</h2>
                <div
                  className={`${styles.horariosTurno} ${
                    seleccionado === hora ? styles.seleccionado : ""
                  }`}
                  onClick={() => setSeleccionado(hora)}
                  key={idx}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSeleccionado(hora);
                  }}
                >
                  <li>{hora}</li>
                </div>
              </>
            );
          } else if (hora === "12:00") {
            return (
              <>
                <h2 key="tarde">Tarde ------------------------------------</h2>
                <div
                  className={`${styles.horariosTurno} ${
                    seleccionado === hora ? styles.seleccionado : ""
                  }`}
                  onClick={() => setSeleccionado(hora)}
                  key={idx}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSeleccionado(hora);
                  }}
                >
                  <li>{hora}</li>
                </div>
              </>
            );
          } else if (hora === "18:00") {
            return (
              <>
                <h2 key="noche">Noche -----------------------------------</h2>
                <div
                  className={`${styles.horariosTurno} ${
                    seleccionado === hora ? styles.seleccionado : ""
                  }`}
                  onClick={() => setSeleccionado(hora)}
                  key={idx}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSeleccionado(hora);
                  }}
                >
                  <li>{hora}</li>
                </div>
              </>
            );
          } else {
            return (
              <div
                className={`${styles.horariosTurno} ${
                  seleccionado === hora ? styles.seleccionado : ""
                }`}
                onClick={() => setSeleccionado(hora)}
                key={idx}
                tabIndex={0}
                role="button"
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSeleccionado(hora);
                }}
              >
                <li>{hora}</li>
              </div>
            );
          }
        })}
      </ul>
      <br />
    </div>
  );
}
export default HorarioTurno;
