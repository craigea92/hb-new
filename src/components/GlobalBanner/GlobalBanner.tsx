// components/GlobalBanner/GlobalBanner.tsx
"use client";

import React, { useState } from "react";
import styles from "./GlobalBanner.module.css";

type BannerVariant = "teal" | "blue" | "green";

interface GlobalBannerProps {
  promotionText?: string;
  promoCode?: string;
  variant?: BannerVariant;
}

export const GlobalBanner = ({
  promotionText = "15% off £30 or 20% off £40",
  promoCode = "DEAL",
  variant = "teal",
}: GlobalBannerProps) => {
  const [showSecondaryLinks, setShowSecondaryLinks] = useState(false);

  return (
    <div
      className={`${styles.bannerWrapper} ${styles[variant]}`}
      role="banner"
      aria-label="Promotional banner"
    >
      <div className={styles.innerContainer}>
        <div className={styles.promotionContainer}>
          <p className={styles.promotionText}>{promotionText}</p>

          <div className={styles.codeWrapper}>
            <span className={styles.codeLabel}>Code:</span>
            <span className={styles.codeValue}>{promoCode}</span>
          </div>

          <button
            onClick={() => setShowSecondaryLinks(!showSecondaryLinks)}
            className={styles.collapseButton}
            aria-expanded={showSecondaryLinks}
            aria-label={`${
              showSecondaryLinks ? "Hide" : "Show"
            } additional links`}
          >
            {showSecondaryLinks ? "▲" : "▼"}
          </button>
        </div>

        {/* Collapsible section */}
        <div
          className={`${styles.secondaryLinks} ${
            showSecondaryLinks ? styles.visible : styles.hidden
          }`}
        >
          <a href="/info/redeem-in-store/" className={styles.secondaryLink}>
            Redeem instore | T&amp;Cs
          </a>
          <a href="/stores/" className={styles.secondaryLink}>
            Find a store
          </a>
          <a
            href="https://help.hollandandbarrett.com/hc/en-gb"
            className={styles.secondaryLink}
          >
            Help
          </a>
        </div>
      </div>
    </div>
  );
};
