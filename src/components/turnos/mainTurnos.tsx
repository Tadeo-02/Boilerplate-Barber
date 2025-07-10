import { Link } from "react-router-dom";
import styles from './mainTurnos.module.css';

function MainTurnos() {
  return (
     /*MUESTRA DE SUCURSALES */
    <div>
      <br />
      <Link to="/mainSucursal">
        <div className={styles.container}>
          <h2 className={styles.title}>Sucursal Centro</h2>
          <div className={styles.branchGallery}>
            <img src="/images/sucursal1.jpeg" alt="Sucursal Centro" className={styles.branchImage} />
          </div>
          <a href="https://maps.app.goo.gl/ut38V2Tf414qxqs28" className={styles.mapLink}>Dirección: Mendoza 2774, Rosario </a>
        </div>
      </Link>
      <Link to="/mainSucursal">
        <div className={styles.container}>
          <h2 className={styles.title}>Sucursal Norte</h2>
          <div className={styles.branchGallery}>
            <img src="/images/sucursal2.jpg" alt="Sucursal Norte" className={styles.branchImage} />
          </div>
          <a href="https://maps.app.goo.gl/KJnih2u2hf5S9jmB6" className={styles.mapLink}>Dirección: Juan B. Justo 1767, Rosario </a>
        </div>
      </Link>
    </div>
  );

}
export default MainTurnos;
