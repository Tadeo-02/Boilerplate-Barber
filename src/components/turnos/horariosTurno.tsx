import styles from "./horariosTurnos.module.css";

function HorarioTurno() {
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
      <h1 style={{ fontSize: 40 }}>Horarios de Turnos</h1>
      <p>Aquí puedes ver los horarios disponibles para agendar tus turnos.</p>
      <br />
      <ul className={styles.horariosTurnoContainer}>
        {horarios.map((hora, idx) => {
          if (hora === "08:00") {
            return (
              <>
                <h2 key="manana"> Mañana --------------------------------</h2>
                <div className={styles.horariosTurno} key={idx}>
                  <li>{hora}</li>
                </div>
              </>
            );
          } else if (hora === "12:00") {
            return (
              <>
                <h2 key="tarde">Tarde ------------------------------------</h2>
                <div className={styles.horariosTurno} key={idx}>
                  <li>{hora}</li>
                </div>
              </>
            );
          } else if (hora === "18:00") {
            return (
              <>
                <h2 key="noche">Noche -----------------------------------</h2>
                <div className={styles.horariosTurno} key={idx}>
                  <li>{hora}</li>
                </div>
              </>
            );
          } else {
            return (
              <div className={styles.horariosTurno} key={idx}>
                <li>{hora}</li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
export default HorarioTurno;
