import styles from "./project.module.css";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

export default function proyecto({
  title,
  description,
  img,
  LinkProject,
  LinkGitHub,
}) {
  return (
    <div className={styles.proyecto}>
      <h2>{title} </h2>
      <p>{description}</p>
      <div className={styles.box}>
        <Image className={styles.imagen} src={img} width="350" height="250" />
        <div>
          <a href={LinkGitHub} target="_blank">
            <SiGithub size={60}/>
          </a>
          {LinkProject ? (
            <a
              className={styles.LinkProject}
              href={LinkProject}
              target="_blank"
            >
              Ir al sitio
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
