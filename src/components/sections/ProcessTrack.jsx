import { useRef } from "react";
import Reveal from "../ui/Reveal.jsx";
import SwipeDots from "../ui/SwipeDots.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./ProcessTrack.module.css";

/* Numbered because these stages genuinely run in order. On phones the
   stages become a swipe carousel with progress dots. */
export default function ProcessTrack({ items, tone = "light" }) {
  const trackRef = useRef(null);
  return (
    <>
      <ol
        ref={trackRef}
        className={`${styles.track} ${tone === "dark" ? styles.dark : ""}`}
      >
        {items.map((item, i) => (
          <Reveal
            as="li"
            className={styles.step}
            key={item.step}
            delay={i * 100}
          >
            <span className={styles.marker} aria-hidden="true" />
            {item.icon ? (
              <span className={styles.icon}>
                <Icon name={item.icon} size={26} />
              </span>
            ) : null}
            <span className={styles.no}>{item.step}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.desc}</p>
          </Reveal>
        ))}
      </ol>
      <SwipeDots targetRef={trackRef} count={items.length} label="Step" />
    </>
  );
}
