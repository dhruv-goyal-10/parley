import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>This page wandered off.</h1>
        <p className={styles.text}>
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <Link href="/" className={styles.button}>
          Back to home
        </Link>
      </div>
    </main>
  );
}
