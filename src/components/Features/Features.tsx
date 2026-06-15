import { FEATURES } from "@/lib/data";
import styles from "./Features.module.css";

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    mic: "🎙",
    text: "📝",
    check: "✓",
    mail: "✉",
    search: "🔍",
    link: "🔗",
  };

  return (
    <span className={styles.icon} aria-hidden="true">
      {icons[type] ?? "•"}
    </span>
  );
}

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Everything, handled</p>
          <h2 className={styles.title}>From “are we recording?” to done.</h2>
          <p className={styles.subtitle}>
            Parley runs quietly in the background of every meeting and hands you
            the output your team actually needs.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <FeatureIcon type={feature.icon} />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
