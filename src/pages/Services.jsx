import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <SectionTitle as="h1" eyebrow="Services" title="What I can do for you" subtitle="End-to-end frontend solutions tailored to your needs." />
          <div className="grid grid--3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <motion.article className="card" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="icon-box"><Icon size={26} aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p className="muted">{desc}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}