"use client";
import { BiSolidCookie } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import styles from "./CookiePopup.module.css"; // Importer CSS-modulet

const CookiePopup = () => {
  return (
    <article className={styles.cookiePopup}>
      <div className={styles.icons}>
        <BiSolidCookie className={styles.cookie} />
        <RxCross2 className={styles.cross} />
      </div>
      <p className={styles.paragraph}>We use cookies to improve your user experience</p>
      <button className={styles.button}>I like Cookies</button>
    </article>
  );
};

export default CookiePopup;
