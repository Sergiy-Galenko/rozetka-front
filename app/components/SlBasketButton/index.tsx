'use client';
import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { RiUserLine, RiCloseLine } from "react-icons/ri";
import styles from "./index.module.css";
const LogoSIBasket = "https://xl-static.rozetka.com.ua/h-053960b4/assets/img/design/modal-cart-dummy.svg"

export default function BasketButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);
  
  return (
    <>
    <button
      className={styles.button}
      onClick={toggleModal}
      aria-label="Користувач"
    >
      <SlBasket className={styles.icon} />
    </button>
    { isOpen &&(
      <div className={styles.modalOverlay} onClick={toggleModal}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Кошик</h3>
            <button className={styles.closeButton} onClick={toggleModal}>
              <RiCloseLine size={24}/>
            </button>
          </div>
          <div className={styles.modalBody}>
            <img src={LogoSIBasket} alt="Basket logo" className={styles.logoImage} />
            <div style={{ textAlign: "center" }}>
              <h4 className={styles.modalSubtitle}>Ваш кошик порожній</h4>
              <h4 className={styles.modalSubtitle}>Але це ніколи не пізно виправити :)</h4>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}