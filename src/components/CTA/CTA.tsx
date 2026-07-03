import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <h2 id="cta-heading" className={styles.title}>
          Get your time back.
        </h2>
        <p className={styles.subtitle}>
          Join thousands of teams who let Parley handle the notes so they can
          focus on the conversation.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.primaryBtn}>
            Start free
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Book a demo
          </a>
        </div>

        <p className={styles.note}>
          14-day trial · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}
