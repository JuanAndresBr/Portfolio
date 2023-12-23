"use client";
import styles from "./projects.module.css";
import Project from "../../components/Project/Project";
import { useState, useEffect } from "react";

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

const Projects = () => {
  const [numProject, setNumProject] = useState(0);
  const [project, setProject] = useState(proyectos[0]);

  const handleButton = (e) => {
    if (e.target.name === "siguiente" && numProject + 1 < proyectos.length) {
      setNumProject(numProject + 1);
      setProject({
        title: "",
        description: "",
        img: "",
        LinkProject: "",
        LinkGitHub: "",
      });
    } else if (e.target.name === "anterior" && numProject - 1 >= 0) {
      setNumProject(numProject - 1);
    }
  };

  useEffect(() => {
    setProject(proyectos[numProject]);
  }, [numProject]);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.botones}>
          {numProject - 1 >= 0 && (
            <button onClick={handleButton} name="anterior">
              Anterior
            </button>
          )}
        </div>
        <h1>Proyectos</h1>
        <div className={styles.botones}>
          {numProject + 1 < proyectos.length && (
            <button onClick={handleButton} name="siguiente">
              Siguiente
            </button>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <Project {...project} />
      </div>
    </div>
  );
};

export default Projects;
