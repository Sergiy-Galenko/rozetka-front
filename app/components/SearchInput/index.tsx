'use client';

import React, { useState } from "react";
import { RiSearchLine, RiMicLine } from "react-icons/ri";
import styles from "./index.module.css";

export default function SearchInput() {
  const [focused, setFocused] = useState(false);

  return (
    <div className={focused ? styles.wrapperFocused : styles.wrapper}>
      <div className={styles.inputActions}>
        <div className={styles.inputContainer}>
          <span className={styles.icon} onMouseDown={(e) => e.preventDefault()}>
            <RiSearchLine className={styles.iconSvg} aria-hidden="true" />
          </span>
          <input
            type="text"
            placeholder="Пошук товарів"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={focused ? styles.inputFocused : styles.input}
            aria-label="Пошук товарів"
          />
          <button
            type="button"
            className={styles.micButton}
            aria-label="Голосовий пошук"
          >
            <RiMicLine className={styles.micIcon} aria-hidden="true" />
          </button>
        </div>
        <button type="button" className={styles.searchButton}>
          Знайти
        </button>
      </div>
    </div>
  );
}
