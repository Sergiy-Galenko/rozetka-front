'use client';

import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./styles/SearchInput.module.css";

export default function SearchInput() {
  const [focused, setFocused] = useState(false);

  return (
    <div className={focused ? styles.wrapperFocused : styles.wrapper}>
      <div className={styles.inputContainer}>
        {/* preventDefault, щоб клік по іконці не забирав фокус з інпута */}
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
      </div>
    </div>
  );
}
