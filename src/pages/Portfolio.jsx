import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { projects } from "../data/siteData";

export default function Portfolio() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <SectionTitle as="h1" eyebrow="Portfolio" title="Featured projects" subtitle="A selection of things I've built recently." />
          <div className="grid grid--2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                <motion.article className="card project" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div className="project__img">
                    <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" />
                  </div>
                  <div className="project__body">
                    <h3>{p.title}</h3>
                    <p className="muted">{p.desc}</p>
                    <ul className="tags">
                      {p.tech.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <div className="btn-row">
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
                        <Github size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}