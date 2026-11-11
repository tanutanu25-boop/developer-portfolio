import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { skills } from "../data/siteData";

export default function Skills() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <SectionTitle as="h1" eyebrow="Skills" title="My technical toolkit" subtitle="Technologies I use to bring ideas to life." />
          <div className="grid grid--2">
            {skills.map(({ name, level, icon: Icon }, i) => (
              <Reveal key={name} delay={(i % 2) * 0.1}>
                <motion.div className="card skill" whileHover={{ scale: 1.02 }}>
                  <div className="skill__head">
                    <span className="skill__name"><Icon size={20} aria-hidden="true" /> {name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency`}>
                    <motion.div
                      className="bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}