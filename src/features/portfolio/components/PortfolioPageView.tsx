import NavBarView from "../../navbar/components/NavBarView";
import Image from "next/image";
import styles from "./PortfolioPageView.module.scss";

const profileFacts = [
  { label: "Age", value: "31" },
  { label: "Freelance", value: "Available" },
  { label: "Address", value: "Davao, Philippines" },
];

const languageSkills = [
  { label: "English", value: 100, meterClass: "isFull" },
  { label: "Tagalog", value: 100, meterClass: "isFull" },
];

const professionalSkills = [
  { label: "Administrative Support", value: 95, meterClass: "isNinetyFive" },
  { label: "GHL Funnel", value: 90, meterClass: "isNinety" },
  { label: "Graphics", value: 85, meterClass: "isEightyFive" },
  { label: "Customer Support", value: 80, meterClass: "isEighty" },
  { label: "Social Media", value: 75, meterClass: "isSeventyFive" },
  { label: "Task Management", value: 85, meterClass: "isEightyFive" },
];

const services = [
  {
    title: "Administrative Support",
    items: [
      "Email and calendar management",
      "Data entry and file organization",
      "Internet research",
      "Customer support assistance",
      "Scheduling and task management",
      "CRM and spreadsheet maintenance",
    ],
  },
  {
    title: "Funnel Creation",
    items: [
      "Sales funnel setup",
      "Landing page creation",
      "Lead capture systems",
      "Funnel automation support",
      "Email sequence integration",
      "Funnel optimization assistance",
    ],
  },
  {
    title: "Social Media Content Creation",
    items: [
      "Content planning and scheduling",
      "Caption writing",
      "Branded social media posts",
      "Engagement-focused content",
      "Basic video content support",
      "Content organization and strategy support",
    ],
  },
  {
    title: "Graphic Design",
    items: [
      "Social media graphics",
      "Marketing materials",
      "Presentation design",
      "Branding visuals",
      "Promotional banners",
      "Simple business creatives",
    ],
  },
];

const workHistory = [
  {
    role: "General Admin VA",
    period: "Jan 2018 - Dec 2021",
    company: "Six Eleven Global Services | Davao City",
    summary:
      "SixEleven is a business process outsourcing company with more than 15 years of experience dedicated to helping growing businesses with dependable day-to-day support.",
  },
  {
    role: "Remote Virtual Assistant",
    period: "Jan 2020 - Dec 2024",
    company: "5 Years Work From Home Experience",
    summary:
      "Over the last several years, I have worked remotely as a virtual assistant supporting business owners, entrepreneurs, and online teams with operations, funnel creation, social media content management, and graphic design assistance.",
  },
];

const contactDetails = [
  {
    title: "Location",
    symbol: "L",
    items: [
      { label: "Country", value: "Philippines" },
      { label: "City", value: "Davao" },
    ],
  },
  {
    title: "Reach Out",
    symbol: "@",
    items: [
      { label: "Email", value: "bwendyglen@gmail.com" },
      { label: "Skype", value: "@yourusername" },
      { label: "Telegram", value: "@yourusername" },
    ],
  },
];

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

export default function PortfolioPageView() {
  return (
    <main className={styles.portfolioPage}>
      <NavBarView />
      <div className={styles.portfolioPage__layout}>
        <aside className={styles.profileCard}>
          <div className={styles.profileCard__header}>
            <div className={styles.profileCard__avatar}>
              <Image
                src="/images/circle_img.svg"
                alt="Wendy Glen profile portrait"
                width={134}
                height={134}
              />
            </div>
            <h1 className={styles.profileCard__name}>Wendy Glen Banzon</h1>
            <p className={styles.profileCard__title}>Virtual Assistant</p>
          </div>

          <div className={styles.profileCard__socials}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.profileCard__socialLink}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Image src={link.icon} alt="" width={18} height={18} />
              </a>
            ))}
          </div>

          <dl className={styles.profileCard__facts}>
            {profileFacts.map((fact) => (
              <div key={fact.label} className={styles.profileCard__fact}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.skillBlock}>
            <h2 className={styles.skillBlock__title}>Languages</h2>
            {languageSkills.map((skill) => (
              <div key={skill.label} className={styles.skillBlock__item}>
                <div className={styles.skillBlock__row}>
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className={styles.skillBlock__track}>
                  <span
                    className={`${styles.skillBlock__fill} ${styles[skill.meterClass]}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.skillBlock}>
            <h2 className={styles.skillBlock__title}>Skills</h2>
            {professionalSkills.map((skill) => (
              <div key={skill.label} className={styles.skillBlock__item}>
                <div className={styles.skillBlock__row}>
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className={styles.skillBlock__track}>
                  <span
                    className={`${styles.skillBlock__fill} ${styles[skill.meterClass]}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div className={styles.portfolioPage__content}>
          <section className={styles.heroCard}>
            <div className={styles.heroCard__content}>
              <h2 className={styles.heroCard__title}>
                I&apos;m Wendy Glen
                <span>Virtual Assistant</span>
              </h2>
              <p className={styles.heroCard__copy}>
                Over the years, I&apos;ve worked on a wide range of projects
                including administrative management, sales funnel setup, social
                media content creation, and graphic design. I understand the
                importance of organization, consistency, and delivering quality
                work on time.
              </p>
              <p className={styles.heroCard__copy}>
                Whether you need someone to manage daily tasks, create engaging
                visuals, organize workflows, or build high-converting funnels, I
                bring both technical skills and problem-solving experience to
                every project.
              </p>
              <p className={styles.heroCard__note}>
                I value professionalism, attention to detail, and long-term
                partnerships built on trust and results.
              </p>
              <a
                href="mailto:bwendyglen@gmail.com"
                className={styles.heroCard__action}
              >
                Hire Me
              </a>
            </div>

            <div className={styles.heroCard__visual}>
              <div className={styles.heroCard__shape} aria-hidden="true">
                <Image
                  src="/images/yellow-bg.svg"
                  alt=""
                  width={720}
                  height={629}
                />
              </div>
              <Image
                src="/images/wendy-img.svg"
                alt="Wendy Glen standing portrait"
                width={704}
                height={704}
                className={styles.heroCard__portrait}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.section__title}>My Services</h2>
            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article key={service.title} className={styles.serviceCard}>
                  <h3 className={styles.serviceCard__title}>{service.title}</h3>
                  <ol className={styles.serviceCard__list}>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.section__title}>Work History</h2>
            <div className={styles.historyBoard}>
              {workHistory.map((item) => (
                <article key={item.role} className={styles.historyBoard__item}>
                  <div className={styles.historyBoard__roleBlock}>
                    <h3>{item.role}</h3>
                    <p>VA</p>
                    <span>{item.period}</span>
                  </div>
                  <div className={styles.historyBoard__summary}>
                    <h3>{item.company}</h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2 className={styles.section__title}>Let&apos;s Work Together</h2>
            <p>
              If you&apos;re looking for a dependable Virtual Assistant who can
              support your business operations, improve your online presence,
              and help you stay organized, I&apos;d love to work with you.
            </p>
            <p>
              Let&apos;s discuss how I can help your business save time,
              increase productivity, and grow with confidence.
            </p>
            <a href="mailto:bwendyglen@gmail.com" className={styles.ctaSection__action}>
              Ready to get started? Let&apos;s connect today.
            </a>
          </section>

          <section className={styles.section} id="contact">
            <h2 className={styles.section__title}>Contact Information</h2>
            <div className={styles.contactGrid}>
              {contactDetails.map((group) => (
                <article key={group.title} className={styles.contactCard}>
                  <div className={styles.contactCard__icon}>
                    <span>{group.symbol}</span>
                  </div>
                  <dl className={styles.contactCard__details}>
                    {group.items.map((item) => (
                      <div key={item.label} className={styles.contactCard__row}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <footer className={styles.footer}>
            <div className={styles.footer__links}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.footer__link}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Image src={link.icon} alt="" width={22} height={22} />
                </a>
              ))}
            </div>
            <p className={styles.footer__name}>Wendy Glen</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
