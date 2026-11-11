import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks, profile } from "../data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="logo" aria-label={`${profile.name} - Home`}>
          <Code2 size={24} aria-hidden="true" />
          <span>{profile.name.split(" ")[0]}<b>.dev</b></span>
        </Link>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l, i) => (
              <motion.div key={l.to} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                <NavLink to={l.to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}