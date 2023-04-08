"use client";
import styles from "./projects.module.css";
import Project from "../../components/Project/Project";
import { useState } from "react";

const proyectos = [
  {
    title: "Pi dogs",
    description:
      "Proyecto individual de Henry, en el cual demostré mi conocimiento adquirido en React, Redux, Sequelize, Express. El sitio web cuenta con filtros, agregar un nuevo perro y buscar por raza.",
    img: "https://res.cloudinary.com/dqiah55rm/image/upload/v1680735997/dogs_qkqdf4.gif",
    LinkProject: "https://pi-dogs-suuperant.vercel.app/",
    LinkGitHub: "https://github.com/JuanAndresBr/PI-dogs",
  },
  {
    title: "Rick and Morty",
    description:
      "Se realizo durante el bootcamp de Henry, con este proyecto aprendí la mayoría de las tecnologías que sé, mayormente en front-end con redux y react, y backend con Express. Este proyecto es mi comienzo en el mundo web. Cuenta con un search, filtros, selección de favoritos, log out",
    img: "https://res.cloudinary.com/dqiah55rm/image/upload/v1680912014/rickandmorty_Hecho_con_Clipchamp_d6anjm.gif",
    LinkProject: null,
    LinkGitHub: "https://github.com/JuanAndresBr/RickandMorty",
  },
];

export default function projects() {
  const [numProject, setNumProject] = useState(0);

  const handleButton = (e) => {
    if (e.target.name === "siguiente") {
      setNumProject(numProject + 1);
    } else {
      setNumProject(numProject - 1);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.botones}>
          {numProject - 1 >= 0 ? (
            <button onClick={handleButton} name="anterior">
              Anterior
            </button>
          ) : null}
        </div>
        <h1>Proyectos</h1>
        <div className={styles.botones}>
          {proyectos.length > 1 && numProject + 1 < proyectos.length ? (
            <button onClick={handleButton} name="siguiente">
              Siguiente
            </button>
          ) : null}
        </div>
      </div>
      <div className={styles.container}>
        <Project
          title={proyectos[numProject].title}
          description={proyectos[numProject].description}
          img={proyectos[numProject].img}
          LinkProject={proyectos[numProject].LinkProject}
          LinkGitHub={proyectos[numProject].LinkGitHub}
        />
      </div>
    </div>
  );
}
