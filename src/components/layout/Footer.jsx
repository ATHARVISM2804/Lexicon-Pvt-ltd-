import { Link } from "react-router-dom";
import { company, contact, nav } from "../../data/site.js";
import Logo from "./Logo.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Logo tone="light" />
            <p className={styles.tagline}>{company.summary}</p>
          </div>

          <nav className={styles.col} aria-label="Footer">
            <h2 className={styles.colTitle}>Navigate</h2>
            <ul className={styles.list}>
              {nav
                .filter((item) => item.to !== "/")
                .map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Office</h2>
            <address className={styles.address}>
              {contact.street}
              <br />
              {contact.city}, {contact.state} {contact.zip}
              <br />
              <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
            </address>
          </div>
        </div>

        <div className={styles.legal}>
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span className={styles.motto}>{company.motto}</span>
        </div>
      </div>
    </footer>
  );
}
