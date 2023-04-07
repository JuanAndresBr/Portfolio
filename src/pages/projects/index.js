"use client";
import styles from "./projects.module.css";
import Project from "../../components/Project/Project";
import { useState } from "react";

const proyectos = [
  {
    title: "Pi dogs",
    description:
      "Proyecto individual de Henry, en el cual demostre mi conocimiento adquerido en React, Redux, Sequelize, Express. El sitio web cuenta con filtros, agregar un nuevo perro y buscar por raza.",
    img: "https://res.cloudinary.com/dqiah55rm/image/upload/v1680735997/dogs_qkqdf4.gif",
    LinkProject: "https://pi-dogs-suuperant.vercel.app/",
    LinkGitHub: "https://github.com/JuanAndresBr/PI-dogs",
  },
  {
    title: "other s",
    description:
      "Proyecto individual de Henry, en el cual demostre mi conocimiento adquerido en React, Redux, Sequelize, Express. El sitio web cuenta con filtros, agregar un nuevo perro y buscar por raza.",
    img: "https://res.cloudinary.com/dqiah55rm/image/upload/v1680735997/dogs_qkqdf4.gif",
    LinkProject: "https://pi-dogs-suuperant.vercel.app/",
    LinkGitHub: "https://github.com/JuanAndresBr/PI-dogs",
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
      {numProject - 1 >= 0 ? (
        <button
          onClick={handleButton}
          className={styles.flecha}
          name="anterior"
        >
          Anterior
        </button>
      ) : null}
      <div className={styles.container}>
        <h1>Proyectos</h1>
        <Project
          title={proyectos[numProject].title}
          description={proyectos[numProject].description}
          img={proyectos[numProject].img}
          LinkProject={proyectos[numProject].LinkProject}
          LinkGitHub={proyectos[numProject].LinkGitHub}
        />
      </div>
      {proyectos.length > 1 && numProject + 1 < proyectos.length ? (
        <button
          onClick={handleButton}
          className={styles.flecha}
          name="siguiente"
        >
          Siguiente
        </button>
      ) : null}
    </div>
  );
}
