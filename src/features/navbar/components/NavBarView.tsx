import Link from "next/link";
import styles from "./NavBarView.module.scss";

export default function NavBarView() {
  return (
    <nav className={styles.navBar} aria-label="Primary">
      <Link href="/" className={styles.navBar__brand}>
        Wendy Glen
      </Link>
      <div className={styles.navBar__list}>
        <Link href="/" className={styles.navBar__link}>
          Home
        </Link>
        <Link href="/portfolio" className={styles.navBar__link}>
          Portfolio
        </Link>
      </div>
    </nav>
  );
}
