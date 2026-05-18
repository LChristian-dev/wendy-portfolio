import Link from "next/link";
import styles from "./NavBarView.module.scss";

export default function NavBarView() {
  return (
    <div className={styles.navBar}>
      <h2>Wendy Glen</h2>
      <div className={styles.navBar_list}>
        <Link href="/" className={styles.navBar_home}>
          Home
        </Link>
        <Link href="/portfolio" className={styles.navBar_portfolio}>
          Portfolio
        </Link>
      </div>
    </div>
  );
}
