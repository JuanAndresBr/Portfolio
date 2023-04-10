import styles from "./about.module.css";

export default function about() {
  return (
    <div className={styles.container}>
      <h1>Sobre mi</h1>
      <h2>¿Quien soy? </h2>
      <p>
        Desde que tengo memoria me ha interesado las ciencias exactas, a su vez
        la tecnología me apasiona queriendo saber cómo funciona cada cosa que me
        rodea, con curiosidad y apasionadamente. He desarrollado mis habilidades
        en las <span className={styles.underline}> matemáticas y programación</span>, me he dirigido por ciencias como la
        geología y astronomía. Siendo serio y entregado a mis deberes, buscando
        siempre la superación personal, dispuesta al cambio y la colaboración en
        equipo. Con conocimiento en desarrollo de apps web y de escritorio, en
        lenguajes como
        <span className={styles.underline}>C#, JavaScript y SQL</span> , con
        tecnologías como
        <span className={styles.underline}>
          React, Redux, Express, Sequelize, PostgreSQL.
        </span>
        Dispuesto a enfrentar nuevos aprendizajes.
      </p>
    </div>
  );
}
