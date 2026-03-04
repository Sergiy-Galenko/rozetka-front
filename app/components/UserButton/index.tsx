'use client';

import React, { useState } from "react";
import { RiUserLine, RiCloseLine } from "react-icons/ri";
import styles from "./index.module.css";

export default function UserButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  
  return (
    <>
    <button
      className={styles.button}
      onClick={toggleModal}
      aria-label="Користувач"
    >
      <RiUserLine className={styles.icon} />
    </button>
    { isOpen &&(
      <div className={styles.modalOverlay} onClick={toggleModal}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Вхід</h3>
            <button className={styles.closeButton} onClick={toggleModal}>
              <RiCloseLine size={24}/>
            </button>
          </div>
          <div className={styles.modalBody}>
            <h4 className={styles.modalSubtitle}>Номер телефону</h4>
            <input className={styles.input} />
          </div>
        </div>
      </div>
      
    )}
    </>
  );
}