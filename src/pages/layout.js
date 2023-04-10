import Image from "next/image";
import image from "../../public/fondo.png";
import styles from "./page.module.css";
import perfil from "../../public/perfil.jpg";
import NavBar from "@/components/NavBar/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}) {
  return (
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.center}>
            <h1>Hola, soy Juan Andrés Bravo</h1>
          </div>
          <div className={styles.image}>
            <Image src={perfil} width="120" height="120" alt="profile" />
          </div>
        </header>
        <div className={styles.body}>
          <NavBar />
          <div className={styles.box}>{children}</div>
        </div>
      </main>
  );
}
