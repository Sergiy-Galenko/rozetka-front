'use client';
import '../../i18n';
import React from "react";
import { RiApps2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import styles from "./styles/CatalogButton.module.css";

export default function CatalogButton({ onClick }: { onClick?: () => void }) {
  const { t } = useTranslation();
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
    >
      <RiApps2Line className={styles.icon} />
      {t("catalog")}
    </button>
  );
} 