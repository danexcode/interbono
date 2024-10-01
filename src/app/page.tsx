import Taablex from "app/componets/taablex";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hola mundo</h1>
      <p>Bienvenido a gestor financiero</p>
      <p>inicia sesion para continuar</p>
      <p>Iniciar sesion</p>
    </main>

    //<Taablex />
  );
}
