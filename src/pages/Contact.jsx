import { useState } from "react";
import { contact, inquiryTopics } from "../data/site.js";
import { faqs } from "../data/content.js";
import Hero from "../components/sections/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Figure from "../components/ui/Figure.jsx";
import Faq from "../components/sections/Faq.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import styles from "./Contact.module.css";

export default function Contact() {
  usePageMeta(
    "Contact — Lexicon One Enterprises",
    `Reach Lexicon One Enterprises at ${contact.street}, ${contact.city}, ${contact.state} ${contact.zip} or ${contact.phoneDisplay}.`
  );

  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `[${data.get("topic")}] Inquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n—\n${data.get("name")}\n${data.get(
      "email"
    )}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Start a conversation"
        lede="Questions about the portfolio, the media studio, or the firm itself are all welcome."
        image="/images/boardroom.jpg"
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <Reveal className={styles.details} variant="left">
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Office</h2>
              <address className={styles.address}>
                Lexicon One Enterprises
                <br />
                {contact.street}
                <br />
                {contact.city}, {contact.state} {contact.zip}
              </address>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Telephone</h2>
              <p className={styles.cardText}>
                <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
              </p>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Written inquiries</h2>
              <p className={styles.cardText}>
                Use the form and your message reaches the firm directly. Every
                inquiry receives a considered reply.
              </p>
            </div>

            <div className={styles.officeFigure}>
              <Figure src="/images/office.jpg" alt="The firm's office interior" />
            </div>
          </Reveal>

          <Reveal className={styles.formWrap} variant="right" delay={100}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="cf-topic">Subject</label>
                <select
                  id="cf-topic"
                  name="topic"
                  defaultValue={inquiryTopics[0]}
                >
                  {inquiryTopics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" rows="6" required />
              </div>

              <Button type="submit">Send message</Button>

              <p className={styles.note} role="status">
                {sent
                  ? "Your email client should now be open with the message ready to send."
                  : "Submitting opens your email client with the message prepared and addressed."}
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section sectionTint">
        <div className="container">
          <SectionHeading
            eyebrow="Common questions"
            title="Before you write"
            intro="A few things worth knowing about how the firm handles inquiries."
          />
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
