import Image from "next/image";
import Styles from "./skills.module.css";

export default function skills() {
  return (
    <div className={Styles.container}>
      <h1>Mis Habilidades</h1>
      <div className={Styles.imagenes}>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
          width="60"
          height="60"
          alt="csharp"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          width="60"
          height="60"
          alt="css3"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          width="60"
          height="60"
          alt="html5"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          width="60"
          height="60"
          alt="nextjs"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          width="60"
          height="60"
          alt="nodejs"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          width="60"
          height="60"
          alt="postgresql"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          width="60"
          height="60"
          alt="react"
        ></Image>
        <Image
          className={Styles.Image}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
          width="60"
          height="60"
          alt="redux"
        ></Image>
      </div>
    </div>
  );
}
