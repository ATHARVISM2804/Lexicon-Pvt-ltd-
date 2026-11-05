import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { contact } from "../../data/site.js";
import styles from "./MobileActions.module.css";

/* Phones only: Call and Private inquiry stay one tap away once the visitor
   has scrolled past the hero, and step aside over the footer, which has
   both already. */
export default function MobileActions() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    let atFooter = false;
    const io = footer
      ? new IntersectionObserver(([e]) => {
          atFooter = e.isIntersecting;
          update();
        })
      : null;
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6 && !atFooter);
    if (io) io.observe(footer);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [pathname]);

  const onContact = pathname === "/contact";

  return (
    <div className={`${styles.bar} ${visible ? styles.show : ""}`} aria-hidden={!visible}>
      <a className={styles.call} href={`tel:${contact.phoneHref}`} tabIndex={visible ? 0 : -1}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M5.2 2.5 6.6 5 5.4 6.6a8 8 0 0 0 4 4L11 9.4l2.5 1.4v2.4a1 1 0 0 1-1.1 1A11.5 11.5 0 0 1 2.2 3.6a1 1 0 0 1 1-1.1h2Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
        Call
      </a>
      {onContact ? null : (
        <Link className={styles.inquire} to="/contact" tabIndex={visible ? 0 : -1}>
          Private inquiry
        </Link>
      )}
    </div>
  );
}
