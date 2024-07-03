import styles from "./experiencia.module.css";
import Image from "next/image";

export default function experiencia({ title, description, funciones, img }) {
  console.log(description);
  return (
    <div className={styles.proyecto}>
      <h2>{title} </h2>
      <h3>{description}</h3>
      <div className={styles.funciones}>
        <h3>Funciones:</h3>
        {funciones.map((e, index) => (
          <p key={index} className={styles.funcionItem}>
            {e}
          </p>
        ))}
      </div>
    </div>
  );
}
