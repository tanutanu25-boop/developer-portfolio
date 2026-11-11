import { Link } from "react-router-dom";
import { navLinks, socials, profile } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__brand">{profile.name}</h3>
          <p className="muted">{profile.role}. Building clean, fast and responsive web experiences.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h4>Connect</h4>
          <div className="social-row">
            {socials.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="social-btn">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}