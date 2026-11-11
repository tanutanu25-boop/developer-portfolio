import { GraduationCap, Briefcase, MapPin, Mail } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { profile, education, experience } from "../data/siteData";

function Timeline({ icon: Icon, heading, items }) {
  return (
    <div>
      <h3 className="timeline-heading"><Icon size={22} aria-hidden="true" /> {heading}</h3>
      <ul className="timeline">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.1}>
            <li className="timeline__item">
              <span className="timeline__period">{it.period}</span>
              <h4>{it.title}</h4>
              <p className="muted">{it.place}</p>
              {it.desc && <p>{it.desc}</p>}
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <SectionTitle as="h1" eyebrow="About Me" title="Get to know me" subtitle="A little about who I am and what I do." />

          <div className="about-grid">
            <Reveal x={-40} y={0}>
              <img className="about__photo" src={profile.photo} alt={`Profile photo of ${profile.name}`} loading="lazy" />
            </Reveal>
            <Reveal x={40} y={0}>
              {profile.bio.map((p) => <p key={p} className="lead">{p}</p>)}
              <ul className="info-list">
                <li><MapPin size={18} aria-hidden="true" /> {profile.location}</li>
                <li><Mail size={18} aria-hidden="true" /> {profile.email}</li>
              </ul>
            </Reveal>
          </div>

          <div className="two-col">
            <Timeline icon={GraduationCap} heading="Education" items={education} />
            <Timeline icon={Briefcase} heading="Experience" items={experience} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}