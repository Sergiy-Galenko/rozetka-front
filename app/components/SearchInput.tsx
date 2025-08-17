'use client';

import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./styles/SearchInput.module.css";

export default function SearchInput() {
  const [focused, setFocused] = useState(false);

  return (
    <div className={focused ? styles.wrapperFocused : styles.wrapper}>
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <RiSearchLine className={styles.iconSvg} />
        </span>
        <input
          type="text"
          placeholder="Пошук товарів"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={focused ? styles.inputFocused : styles.input}
        />
      </div>
    </div>
  );
} 