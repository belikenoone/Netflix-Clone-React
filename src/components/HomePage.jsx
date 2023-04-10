import React from "react";
import styles from "../styles/HomePage.module.css";
import logo from "../assets/logo.svg";
const HomePage = () => {
  return (
    <div className={styles["home-wrapper"]}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* <span className={styles.logo}></span> */}
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles["nav-section"]}>
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button>Sign In</button>
          </div>
        </nav>
      </header>
      <section className={styles.showcase}>
        <span className={styles["showcase-heading"]}>
          Unlimited Movies,TV Shows and more
        </span>
        <span className={styles["showcase-sub-heading"]}>
          Watch Anywhere, Cancel Anytime
        </span>
        <span className={styles["showcase-subtitle"]}>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className={styles["showcase-input-section"]}>
          <input type="text" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
