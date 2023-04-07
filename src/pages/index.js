import Image from "next/image";
import image from "../../public/fondo.png";
import styles from "./page.module.css";
import perfil from "../../public/perfil.jpg"
import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.center}>
            <h1>Hola, soy Juan Andrés Bravo</h1>
          </div>
          <div className={styles.image}>
            <Image src={perfil} width="120" height="120" />
          </div>
        </header>
        <div className={styles.body}>
          <NavBar />
          <div className={styles.box}>
            {" "}
            <div className={styles.container}>
              <h1>Full stack developer</h1>
              <Image
                className={styles.Imagen}
                src={image}
                width="500"
                height="150"
              ></Image>
              <a
                className={styles.link}
                href="https://drive.google.com/file/d/1QbDM2hXiELye1p9xL6maXyfB9gkjZ8zj/view?usp=share_link"
                target="_blank"
              >
                Mi CV
              </a>
            </div>
          </div>
        </div>
      </main>
  );
}
