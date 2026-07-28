import { useState } from "react";
import Reveal from "../ui/Reveal.jsx";
import styles from "./Faq.module.css";

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <Reveal className={styles.item} key={item.q} delay={i * 70}>
            <h3 className={styles.heading}>
              <button
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span>{item.q}</span>
                <span
                  className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              hidden={!open}
            >
              <p>{item.a}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
