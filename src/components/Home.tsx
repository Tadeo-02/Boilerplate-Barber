import styles from './home.module.css';

function Home() {
  return (
    <div className= {styles.homeContainer}>
        <button className={styles.button}>
          SACAR TURNO
        </button>
        <button className={styles.button}>
          COMPRAR PRODUCTOS
        </button>
    </div>
  );
}

export default Home;
