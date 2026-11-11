import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, subtitle, as: Tag = "h2" }) {
  return (
    <Reveal className="section-title">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag>{title}</Tag>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}