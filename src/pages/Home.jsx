import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { profile } from "../data/siteData";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Home() {
  return (
    <PageWrapper>
      <section className="hero">
        <div className="container hero__inner">
          <motion.div variants={container} initial="hidden" animate="show" className="hero__text">
            <motion.span variants={item} className="badge">👋 Available for freelance work</motion.span>
            <motion.h1 variants={item}>
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </motion.h1>
            <motion.h2 variants={item} className="hero__role">{profile.role}</motion.h2>
            <motion.p variants={item} className="hero__intro">{profile.intro}</motion.p>
            <motion.div variants={item} className="btn-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/portfolio" className="btn btn--primary">View Portfolio <ArrowRight size={18} /></Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn btn--outline"><Mail size={18} /> Contact Me</Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="container stats">
          {[["3+", "Years Experience"], ["20+", "Projects Completed"], ["15+", "Happy Clients"]].map(([n, l]) => (
            <motion.div key={l} className="stat" whileHover={{ y: -4 }}>
              <strong>{n}</strong><span>{l}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}