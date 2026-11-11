import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Loader2 } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { profile, socials } from "../data/siteData";

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const initial = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name (min 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Subject must be at least 3 characters.";
  if (v.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        setValues(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const Field = ({ id, label, type = "text", textarea }) => {
    const Tag = textarea ? "textarea" : "input";
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <Tag
          id={id}
          name={id}
          type={textarea ? undefined : type}
          rows={textarea ? 5 : undefined}
          value={values[id]}
          onChange={handleChange}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `${id}-err` : undefined}
          className={errors[id] ? "invalid" : ""}
        />
        {errors[id] && <span id={`${id}-err`} className="error-text" role="alert">{errors[id]}</span>}
      </div>
    );
  };

  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <SectionTitle as="h1" eyebrow="Contact" title="Let's work together" subtitle="Have a project in mind? Send me a message and I'll get back to you soon." />

          <div className="contact-grid">
            <Reveal x={-40} y={0}>
              <div className="card contact-info">
                <h3>Get in touch</h3>
                <p className="muted">I'm open to freelance projects, full-time roles and collaborations.</p>
                <ul className="info-list">
                  <li><Mail size={18} aria-hidden="true" /> {profile.email}</li>
                  <li><MapPin size={18} aria-hidden="true" /> {profile.location}</li>
                </ul>
                <div className="social-row">
                  {socials.map(({ name, href, icon: Icon }) => (
                    <motion.a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="social-btn" whileHover={{ y: -4 }}>
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal x={40} y={0}>
              <form className="card form" onSubmit={handleSubmit} noValidate>
                <Field id="name" label="Name" />
                <Field id="email" label="Email" type="email" />
                <Field id="subject" label="Subject" />
                <Field id="message" label="Message" textarea />

                <motion.button
                  type="submit"
                  className="btn btn--primary btn--block"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? (<><Loader2 size={18} className="spin" /> Sending...</>) : (<><Send size={18} /> Send Message</>)}
                </motion.button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div className="alert alert--success" role="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      <CheckCircle2 size={20} /> Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div className="alert alert--error" role="alert" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      <AlertCircle size={20} /> Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}