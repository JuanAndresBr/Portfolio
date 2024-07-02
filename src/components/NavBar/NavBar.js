"use client";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className={styles.box}>
      <li className={styles.list}>
        <Link
          href={"/"}
          className={pathname === "/" ? styles.active : styles.Link}
        >
          <h2>Inicio</h2>
        </Link>
        <Link
          href={"/about"}
          className={pathname === "/about" ? styles.active : styles.Link}
        >
          <h2>Sobre mi</h2>
        </Link>
        <Link
          href={"/skills"}
          className={pathname === "/skills" ? styles.active : styles.Link}
        >
          <h2>Habilidades</h2>
        </Link>
        <Link
          href={"/experience"}
          className={pathname === "/experience" ? styles.active : styles.Link}
        ><h2>Experiencia</h2></Link>
        <Link
          href={"/projects"}
          className={pathname === "/projects" ? styles.active : styles.Link}
        >
          <h2>Proyectos</h2>
        </Link>
        <Link
          href={"/contact"}
          className={pathname === "/contact" ? styles.active : styles.Link}
        >
          <h2>Contacto</h2>
        </Link>
      </li>
    </div>
  );
}
