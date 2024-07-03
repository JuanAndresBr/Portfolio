"use client";
import styles from "./experience.module.css";
import Experiencia from "../../components/Experiencia/Experiencia";
import { useState, useEffect } from "react";

const experiencias = [
  {
    title: "Aprendiz inteligencia Comercial",
    description:
      "Prácticas profesionales que se desarrollaron en la empresa Estudio de Moda SAS, desde enero a julio del 2024 ",
    funciones: [
      "Apoyar los procesos modelos de ciencia de datos, evaluando y comparando algoritmos, para que se reflejen mejores resultados.",
      "Aumentar la productividad y reducir tiempos de operación a las diferentes áreas de la compañía.",
      "Documentación de procesos actuales que se encuentran en producción.",
      "Participar activamente en las reuniones de seguimiento con los proveedores de desarrollo.",
      "Desarrollar modelos enfocados en herramientas de mejoramiento del área.",
    ]
  },
];

const Experiencias = () => {
  const [numProject, setNumProject] = useState(0);
  const [experiencia, setExperiencia] = useState(experiencias[0]);

  const handleButton = (e) => {
    if (e.target.name === "siguiente" && numProject + 1 < experiencias.length) {
      setProject({
        title: "",
        description: "",
        funciones: "",
        img: "",
      });
      setNumProject(numProject + 1);
    } else if (e.target.name === "anterior" && numProject - 1 >= 0) {
      setProject({
        title: "",
        description: "",
        funciones: "",
        img: "",
      });
      setNumProject(numProject - 1);
    }
  };

  useEffect(() => {
    setExperiencia(experiencias[numProject]);
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
        <h1>Experiencia</h1>
        <div className={styles.botones}>
          {numProject + 1 < experiencias.length && (
            <button onClick={handleButton} name="siguiente">
              Siguiente
            </button>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <Experiencia {...experiencia} />
      </div>
    </div>
  );
};

export default Experiencias;
