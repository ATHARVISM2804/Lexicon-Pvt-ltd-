import { company, contact } from "../data/site.js";
import Hero from "../components/sections/Hero.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Privacy.module.css";

export default function Privacy() {
  usePageMeta(`Privacy — ${company.name}`);

  return (
    <>
      <Hero
        eyebrow="Privacy"
        title="How we handle your information"
        image="/images/bg-street.jpg"
      />
      <section className={styles.page}>
        <div className={`container ${styles.inner}`}>
          <h2 className={styles.heading}>What we collect</h2>
          <p>
            When you use the inquiry form we receive what you choose to send:
            your name, email address, subject, how you were introduced to us,
            and your message. We do not collect anything else through this
            website.
          </p>

          <h2 className={styles.heading}>How we use it</h2>
          <p>
            Only to read and reply to your inquiry. We do not sell or share it,
            and we do not add you to any mailing list.
          </p>

          <h2 className={styles.heading}>How it reaches us</h2>
          <p>
            Form messages are delivered to our inbox through FormSubmit, an
            email delivery service. This website does not use advertising or
            tracking cookies.
          </p>

          <h2 className={styles.heading}>Your choices</h2>
          <p>
            To ask what we hold about you, or to have it deleted, write to{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>

          <p className={styles.address}>
            {company.name}, {contact.street}, {contact.city}, {contact.state}{" "}
            {contact.zip}
          </p>
        </div>
      </section>
    </>
  );
}
