import React, {useEffect, useState} from "react";
import styles from "../styles/Faq.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const FaqItem = ({ title, description }) => {
  const [showFaq, setShowFaq] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section data-aos={"fade-up"}>
        <button
          className={styles.accordion}
          onClick={() => setShowFaq(!showFaq)}
        >
          {title}
        </button>

        <p
          className={`${styles.panel} ${showFaq ? styles.show : styles.hidden}`}
        >
          {description}
        </p>
      </section>
    </>
  );
};

export default FaqItem;
