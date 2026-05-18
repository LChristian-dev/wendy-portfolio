import NavBarView from "../../navbar/components/NavBarView";
import styles from "./HomePageView.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePageView() {
  return (
    <div>
      <NavBarView />
      <div className={styles.home}>
        <div className={styles.home__left}>
          <p>Virtual Assistant</p>
          <h1>
            Hello, my name
            <br /> is Wendy Glen
          </h1>
          <p>
            I’m a professional Virtual Assistant with a decade of experience
            supporting businesses across different industries. My goal is
            simple: help business owners reduce overwhelm and improve efficiency
            through reliable support and creative execution.
          </p>
          <div>
            <Link href="/" className={styles.home__left_homeBtn}>
              Home
            </Link>
            <Link href="/portfolio" className={styles.home__left_portfolioBtn}>
              Portfolio
            </Link>
          </div>
        </div>
        <div className={styles.home__right}>
          <div>
            <Image
              src="/images/wendy-img.svg"
              alt="Logo"
              width={800}
              height={800}
              className={styles.home__right_hero}
            />
          </div>
        </div>
      </div>
      <div className={styles.bg}>
        <Image
          src="/images/yellow-bg.svg"
          alt="Logo"
          width={800}
          height={800}
          className={styles.bg__img}
        />
      </div>
    </div>
  );
}
