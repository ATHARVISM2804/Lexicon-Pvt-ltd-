import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact, nav } from "../../data/site.js";
import Logo from "./Logo.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  /* Every page opens with a dark full-bleed hero, so the bar starts
     transparent and only takes on a background once it leaves it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={`${styles.header} ${solid ? styles.solid : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a className={styles.call} href={`tel:${contact.phoneHref}`}>
            {contact.phoneDisplay}
          </a>
        </nav>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barTop : ""} />
          <span className={open ? styles.barMid : ""} />
          <span className={open ? styles.barBot : ""} />
        </button>
      </div>

      <div
        className={styles.mobileNav}
        id="mobile-nav"
        hidden={!open}
      >
        {nav.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.active : ""}`
            }
            style={{ animationDelay: `${i * 55}ms` }}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
