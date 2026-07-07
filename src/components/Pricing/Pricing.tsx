"use client";

import { useState } from "react";
import { PRICING_PLANS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2 className={styles.title}>Simple plans that scale with you.</h2>

          <div className={styles.toggleWrap}>
            <button
              type="button"
              className={`${styles.toggleOption} ${!annual ? styles.toggleActive : ""}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`${styles.toggleOption} ${annual ? styles.toggleActive : ""}`}
              onClick={() => setAnnual(true)}
            >
              Annually
              <span className={styles.discount}>−20%</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {PRICING_PLANS.map((plan, i) => {
            const price =
              plan.monthlyPrice === 0
                ? null
                : annual
                  ? plan.annualPrice
                  : plan.monthlyPrice;

            return (
              <Reveal
                key={plan.id}
                as="article"
                delay={i * 140}
                className={`${styles.card} ${plan.popular ? styles.popular : ""}`}
              >
                {plan.popular && (
                  <span className={styles.badge}>Most popular</span>
                )}

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.tagline}>{plan.tagline}</p>

                <div className={styles.priceRow}>
                  {plan.priceLabel ? (
                    <span className={styles.priceLabel}>{plan.priceLabel}</span>
                  ) : (
                    <>
                      <span className={styles.currency}>$</span>
                      <span className={styles.price}>{price}</span>
                      <span className={styles.period}>/user/mo</span>
                    </>
                  )}
                </div>

                {annual && plan.monthlyPrice > 0 && (
                  <p className={styles.billNote}>Billed annually</p>
                )}

                {plan.id === "business" ? (
                  <a
                    href="#contact"
                    className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : ""}`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    className={`${styles.cta} ${plan.popular ? styles.ctaPrimary : ""}`}
                  >
                    {plan.cta}
                  </button>
                )}

                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
