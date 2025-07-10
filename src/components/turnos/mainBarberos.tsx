import { useState } from "react";
import styles from "./mainBarberos.module.css";

function MainBarberos() {
    const [seleccionado, setSeleccionado] = useState<string | null>(null);

    const barberos = [
        { nombre: "Primer", img: "/images/primerBarbero.png" },
        { nombre: "Paco", img: "/images/paco.webp" },
        { nombre: "Pedro", img: "/images/pedro.jpg" },
    ];

    return (
        <div className={styles.contenedor}>
            <h2 className={styles.titulo}>Barberos</h2>
            <p className={styles.descripcion}>
                Elija a uno de nuestros talentosos barberos.
            </p>
            <div className={styles.galeria}>
                {barberos.map((barbero) => (
                    <div
                        key={barbero.nombre}
                        className={`${styles.cardBarbero} ${seleccionado === barbero.nombre ? styles.seleccionado : ""}`}
                        onClick={() => setSeleccionado(barbero.nombre)}
                        tabIndex={0}
                        role="button"
                        onKeyPress={e => {
                            if (e.key === "Enter" || e.key === " ") setSeleccionado(barbero.nombre);
                        }}
                    >
                        <img src={barbero.img} alt={barbero.nombre} className={styles.imagen} />
                        <p>{barbero.nombre}</p>
                    </div>
                ))}
            </div>
            <button className={styles.boton} disabled={!seleccionado}>
                Confirmar
            </button>
            <button className={styles.boton}>
                Cancelar
            </button>
        </div>
    );
}
export default MainBarberos;