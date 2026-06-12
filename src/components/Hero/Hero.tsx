import styles from "./Hero.module.css";

const ACTION_ITEMS = [
  { task: "Finalize Q3 roadmap deck", owner: "Maya" },
  { task: "Share transcription API specs", owner: "Devin" },
  { task: "Book customer interviews", owner: "Sam" },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Now with live call summaries
          </div>

          <h1 id="hero-heading" className={styles.title}>
            Never take meeting notes again.
          </h1>

          <p className={styles.subtitle}>
            Parley joins your calls, transcribes every word, and turns
            conversations into action items and follow-up emails — automatically.
            Your team just shows up and talks.
          </p>

          <div className={styles.ctaRow}>
            <a href="#pricing" className={styles.primaryBtn}>
              Start free
            </a>
            <button type="button" className={styles.secondaryBtn}>
              Watch demo
            </button>
          </div>

          <p className={styles.note}>
            Free 14-day trial · No credit card required
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardUrl}>parley.app/recap</span>
              <span className={styles.liveBadge}>
                <span className={styles.liveDot} />
                Summarized
              </span>
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Weekly Product Sync</h2>
              <p className={styles.cardMeta}>Today · 32 min · 6 participants</p>

              <div className={styles.sectionLabel}>Action items</div>
              <ul className={styles.actionList}>
                {ACTION_ITEMS.map((item) => (
                  <li key={item.task} className={styles.actionItem}>
                    <span className={styles.checkbox} />
                    <span className={styles.taskText}>{item.task}</span>
                    <span className={styles.owner}>{item.owner}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.emailBanner}>
                <div>
                  <div className={styles.emailTitle}>Follow-up email drafted</div>
                  <div className={styles.emailMeta}>
                    Sent to 6 attendees · just now
                  </div>
                </div>
                <span className={styles.emailIcon}>✉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
