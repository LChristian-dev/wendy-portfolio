import NavBarView from "../../navbar/components/NavBarView";
import styles from "./HomePageView.module.scss";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.instagram.com/yourusername",
    icon: "/images/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/yourusername",
    icon: "/images/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "mailto:bwendyglen@gmail.com",
    icon: "/images/email.svg",
    label: "Email",
  },
];

export default function HomePageView() {
  return (
    <main className={styles.homePage}>
      <div className={styles.homePage__backdrop} aria-hidden="true">
        <Image
          src="/images/yellow-bg.svg"
          alt=""
          width={720}
          height={629}
          className={styles.homePage__backdropImage}
          priority
        />
      </div>
      <NavBarView />
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>Virtual Assistant</p>
          <h1 className={styles.hero__title}>
            Hello, my name
            <br /> is Wendy Glen
          </h1>
          <p className={styles.hero__description}>
            I&apos;m a professional Virtual Assistant with a decade of
            experience supporting businesses across different industries. My
            goal is simple: help business owners reduce overwhelm and improve
            efficiency through reliable support and creative execution.
          </p>
          <div className={styles.hero__actions}>
            <Link href="/portfolio" className={styles.hero__primaryAction}>
              Portfolio
            </Link>
            <a
              href="mailto:bwendyglen@gmail.com"
              className={styles.hero__secondaryAction}
            >
              Contact
            </a>
          </div>
        </div>
        <div className={styles.hero__visual}>
          <div className={styles.hero__portraitFrame}>
            <Image
              src="/images/wendy-img.svg"
              alt="Wendy Glen portrait"
              width={704}
              height={704}
              className={styles.hero__portrait}
              priority
            />
          </div>
        </div>
      </section>
      <footer className={styles.socialFooter}>
        <div className={styles.socialFooter__links}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.socialFooter__link}
              aria-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Image src={link.icon} alt="" width={22} height={22} />
            </a>
          ))}
        </div>
        <p className={styles.socialFooter__name}>Wendy Glen</p>
      </footer>
    </main>
  );
}
