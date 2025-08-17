"use client";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import CatalogButton from "./CatalogButton";
import SearchInput from "./SearchInput";
import React, { useEffect, useState } from "react";
import styles from "./styles/Header.module.css";

export default function Header() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsTablet(e.matches);
    };
    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.menuButton} aria-label="Відкрити меню">
          <GiHamburgerMenu />
        </button>
        <Link href="/">
          <Image
            src={isTablet ? "https://content1.rozetka.com.ua/mb_logo/image_site_mini_logo/original/555588633.svg" : "/images/rozetka-logo.svg"}
            alt="Rozetka Logo"
            width={140}
            height={40}
            priority
            className={styles.logo}
          />
        </Link>
        <CatalogButton />
      </div>
      <SearchInput />
    </header>
  );
} 