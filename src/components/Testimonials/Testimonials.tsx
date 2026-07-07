import { STATS, TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import styles from "./Testimonials.module.css";

function Stars() {
  return (
    <span className={styles.stars} aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="customers" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Loved by teams</p>
          <h2 className={styles.title}>The meeting tax, refunded.</h2>
        </div>

        <div className={styles.stats}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, i) => (
            <Reveal
              key={item.name}
              as="blockquote"
              delay={i * 80}
              className={styles.card}
            >
              <Stars />
              <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
              <footer className={styles.author}>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
