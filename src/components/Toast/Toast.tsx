import styles from "./Toast.module.css";

type ToastProps = {
  message: string;
  onDismiss: () => void;
};

export default function Toast({ message, onDismiss }: ToastProps) {
  return (
    <div className={styles.toast} role="status">
      <span className={styles.icon} aria-hidden="true">
        ✓
      </span>
      <p className={styles.message}>{message}</p>
      <button
        type="button"
        className={styles.dismiss}
        aria-label="Dismiss notification"
        onClick={onDismiss}
      >
        ×
      </button>
    </div>
  );
}
