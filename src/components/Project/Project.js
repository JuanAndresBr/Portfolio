import styles from "./project.module.css";
import GitHub from "../../../public/GitHub.png";
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
            <Image src={GitHub} width="60" height="60" />
          </a>
          <a
            className={styles.LinkProject}
            href={LinkProject}
            target="_blank"
          >
            Ir al sitio
          </a>
        </div>
      </div>
    </div>
  );
}
