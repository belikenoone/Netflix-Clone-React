import React, { useEffect } from "react";
import styles from "../styles/Other.module.css";
import mobile from "../assets/home-mobile.jpg";
import tv from "../assets/home-tv.webp";
import mac from "../assets/home-imac.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const OtherSections = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles["other-wrapper"]}>
      <section className={styles.tv} data-aos="fade-right">
        <div className={styles["section-text"]}>
          <span>Enjoy On Your TV</span>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <img src={tv} alt="tv-image" />
      </section>
      <section className={styles.offline} data-aos="fade-left" data-aos-offeset="300">
        <img src={mobile} alt="image" />
        <div className={styles["section-text"]}>
          <span>Download Your Shows To Watch Offline</span>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </section>
      <section className={styles.mac} data-aos="fade-right">
        <img src={mac} alt="image" />
        <div className={styles["section-text"]}>
          <span>Watch Anywhere</span>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OtherSections;
