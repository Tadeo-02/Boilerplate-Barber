import { useNavigate } from "react-router-dom"; /* modulo para poder navegar entre subrutas */
import styles from "./home.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { PiScissorsFill } from "react-icons/pi";

function Home() {
  const navigate = useNavigate(); /* hook para navegar entre rutas */
  return (
    <div className={styles.homeContainer}>
      <button className={styles.button} onClick={() => navigate("/turnos")}>
        <PiScissorsFill style={{ fontSize: "4rem" }} />
        <span style={{ marginRight: "35px" }}></span>
        SACAR TURNO
      </button>
      <button className={styles.button} onClick={() => navigate("/productos")}>
        <FaShoppingCart style={{ fontSize: "4rem" }} />
        COMPRAR PRODUCTOS
      </button>
    </div>
  );
}

export default Home;
