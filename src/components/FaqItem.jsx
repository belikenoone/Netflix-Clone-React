import React, { useState } from "react";
import styles from "../styles/Faq.module.css";
const FaqItem = ({ title, description }) => {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <>
      <section>
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
