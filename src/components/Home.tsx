import styles from './home.module.css';
import {FaShoppingCart} from 'react-icons/fa';
import { PiScissorsFill } from "react-icons/pi";


function Home() {
  return (
    <div className={styles.homeContainer}>
      <button className={styles.button}>
        <PiScissorsFill style={{ fontSize: "4rem" }} />
        SACAR TURNO
      </button>
      <button className={styles.button}>
        <FaShoppingCart style={{ fontSize: "4rem" }} />
        COMPRAR PRODUCTOS
      </button>
    </div>
  );
}

export default Home;
