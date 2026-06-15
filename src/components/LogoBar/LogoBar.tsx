import { LOGOS } from "@/lib/data";
import styles from "./LogoBar.module.css";

export default function LogoBar() {
  return (
    <section className={styles.section} aria-label="Trusted by">
      <div className={styles.container}>
        <p className={styles.label}>Trusted by fast-moving teams</p>
        <ul className={styles.list}>
          {LOGOS.map((logo) => (
            <li key={logo} className={styles.logo}>
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
