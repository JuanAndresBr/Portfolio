import Image from "next/image";
import image from "../../public/fondo.png";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1>Full stack developer</h1>
        <Image
          className={styles.Imagen}
          src={image}
          width="500"
          height="150"
          alt="background"
        ></Image>
        <a
          className={styles.link}
          href="https://drive.google.com/file/d/1d0I1MAcwll0NyZIn6ILZi9Tf4FSoLVkO/view?usp=sharing"
          target="_blank"
        >
          Mi CV
        </a>
        <div className={styles.icons}>
          <a
            className={styles.icon}
            href="https://github.com/JuanAndresBr"
            target="_banket"
          >
            <SiGithub size={60} />
          </a>
          <a
            className={styles.icon}
            href="https://twitter.com/J_AndresBr"
            target="_banket"
          >
            <FaXTwitter size={60} />
          </a>
        </div>
      </div>
    </div>
  );
}
