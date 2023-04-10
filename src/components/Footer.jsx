import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-col"]}>
        {/* <div>
          Questions? Call <span>000-800-9191694</span>
        </div> */}
        <span>Faq</span>
        <span>Media Center</span>
        <span>Ways To Watch</span>
        <span>Cookie Preferences</span>
        <span>Speed Test</span>
      </div>
      <div className={styles["footer-col"]}>
        <span>Help Center</span>
        <span>Investor Relations</span>
        <span>Terms Of Use</span>
        <span>Corporate Information</span>
        <span>Legal Notices</span>
      </div>
      <div className={styles["footer-col"]}>
        <span>Account</span>
        <span>Jobs</span>
        <span>Privacy</span>
        <span>Contact Us</span>
        <span>Only On Netflix</span>
      </div>
      <div className={styles["footer-col"]}>
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>
        <strong>Netflix India</strong>
      </div>
    </footer>
  );
};

export default Footer;
