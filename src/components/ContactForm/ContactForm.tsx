"use client";

import { FormEvent, useState } from "react";
import { useToast } from "@/components/Toast";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("Please fill in all fields before submitting.");
      return;
    }

    showToast("Thanks! We'll be in touch shortly.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Contact us</p>
          <h2 id="contact-heading" className={styles.title}>
            Let&apos;s talk about your team.
          </h2>
          <p className={styles.subtitle}>
            Questions about Business plans, security, or a custom rollout? We
            typically respond within one business day.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Jane Doe"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email">Work email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="jane@company.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell us about your team and meeting volume..."
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
