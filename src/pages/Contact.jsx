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

  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  /* Delivered to the firm's inbox through FormSubmit. If the service can't
     be reached, fall back to the visitor's own email app so no inquiry is
     lost. */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `[${data.get("topic")}] Inquiry from ${data.get("name")}`;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          _captcha: "false",
          _honey: data.get("_honey") || "",
          Name: data.get("name"),
          Email: data.get("email"),
          Subject: data.get("topic"),
          "Introduced by": data.get("referral") || "—",
          Message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      const body = `${data.get("message")}\n\n—\n${data.get("name")}\n${data.get("email")}`;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("error");
    }
  };

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Private inquiries"
        lede="Call us, write to us, or use the form below. Every inquiry is read by the firm and treated in confidence."
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
              <h2 className={styles.cardTitle}>Email</h2>
              <p className={styles.cardText}>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>

            <div className={styles.officeFigure}>
              <Figure src="/images/office.jpg" alt="The firm's office interior" sizes="(max-width: 860px) 100vw, 30vw" />
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
                <label htmlFor="cf-referral">
                  How were you introduced to us? <span className={styles.optional}>Optional</span>
                </label>
                <input id="cf-referral" name="referral" type="text" />
              </div>

              <div className={styles.field}>
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" rows="6" required />
              </div>

              {/* Spam trap: hidden from people, filled in by bots. */}
              <input
                type="text"
                name="_honey"
                className={styles.honey}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send inquiry"}
              </Button>

              <p className={styles.note} role="status">
                {status === "sent"
                  ? "Thank you. Your inquiry has been received and will be treated in confidence."
                  : status === "error"
                  ? "We couldn't send that just now, so your email app has opened with the message ready to send."
                  : "Your inquiry goes directly to the firm and is treated in confidence."}
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
