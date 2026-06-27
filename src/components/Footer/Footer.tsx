import Link from "next/link";
import styles from "./Footer.module.css";

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["Customers", "About", "Careers", "Blog"],
  Legal: ["Privacy", "Terms", "Security", "FAQ"],
} as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#5B50E6" />
                <circle cx="16" cy="16" r="7" fill="white" />
              </svg>
            </span>
            Parley
          </Link>
          <p className={styles.tagline}>
            The AI meeting assistant that turns every conversation into action.
          </p>
        </div>

        <div className={styles.columns}>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className={styles.column}>
              <h3 className={styles.columnTitle}>{title}</h3>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© 2026 Parley Labs, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
