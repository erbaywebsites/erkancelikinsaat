import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ecLogo from "@/assets/brand/ec-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/proje/");
  const activeProjectId = isProjectPage ? location.pathname.split("/").pop() : null;
  const currentProject = projects.find((p) => p.id === activeProjectId);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Define dynamic nav links
  const links = isProjectPage
    ? [
        { label: "ÖZELLİKLER", href: "#features" },
        { label: "GÖRSELLER", href: "#gallery" },
        ...(currentProject?.videoSrc ? [{ label: "VİDEO", href: "#video" }] : []),
        { label: "İLETİŞİM", href: "#contact" },
      ]
    : [
        { label: "Ana Sayfa", href: "#hero" },
        { label: "Hakkımızda", href: "#about" },
        { label: "PROJELERİMİZ", href: "#projects" },
        { label: "İLETİŞİM", href: "#contact" },
      ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-gold-dim/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={ecLogo}
            alt="Erkan Çelik İnşaat & Gayrimenkul"
            className="h-12 w-auto object-contain"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <p className="font-serif text-base font-semibold text-foreground tracking-widest uppercase leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
              Erkan Çelik
            </p>
            <p className="font-sans text-[9px] tracking-[0.25em] text-muted-foreground uppercase mt-0.5">
              İnşaat &amp; Gayrimenkul
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isProjectPage && (
            <Link
              to="/"
              className="font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-300 font-medium mr-4 flex items-center gap-1.5"
            >
              <span>←</span> ANA SAYFA
            </Link>
          )}

          {/* Dynamic anchors */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link-gold font-sans text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}

          {/* Projects Dropdown Selector */}
          {isProjectPage && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1.5 font-sans text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-gold transition-colors duration-300 focus:outline-none"
              >
                DİĞER PROJELERİMİZ
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute right-0 mt-3.5 w-60 bg-background border border-gold-dim/40 py-3 shadow-gold backdrop-blur-md flex flex-col z-50 animate-fade-in"
                >
                  {projects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/proje/${p.id}`}
                      className={`font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-3 transition-colors duration-300 text-left ${
                        activeProjectId === p.id
                          ? "bg-gold text-primary-foreground font-semibold"
                          : "text-muted-foreground hover:bg-gold-dim/10 hover:text-gold"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <a
            href="#contact"
            className="ml-4 font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 gradient-gold text-primary-foreground hover:opacity-95 transition-all duration-300 shadow-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          >
            BİLGİ AL
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <div
            className={`w-6 h-0.5 bg-gold transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gold mt-1.5 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gold mt-1.5 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8 bg-background/98 backdrop-blur-lg border-t border-gold-dim/30">
          {isProjectPage && (
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="font-sans text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors"
            >
              ← ANA SAYFA
            </Link>
          )}

          {/* Dynamic Anchors */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-xs tracking-[0.25em] uppercase text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Mobile Projects list */}
          {isProjectPage && (
            <>
              {/* Divider */}
              <div className="w-16 h-px bg-gold-dim/30 my-2" />
              
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-1">— DİĞER PROJELERİMİZ —</p>
              {projects.map((p) => (
                <Link
                  key={p.id}
                  to={`/proje/${p.id}`}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-[10px] tracking-[0.2em] uppercase py-1 ${
                    activeProjectId === p.id
                      ? "text-gold font-bold underline underline-offset-4 decoration-gold/50"
                      : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
