import { useState, useEffect } from "react";
import ecLogo from "@/assets/ec-logo.png";

const links = [
  { label: "Ana Sayfa",    href: "#hero"     },
  { label: "PROJE",        href: "#features" },
  { label: "Görseller",    href: "#gallery"  },
  { label: "VİDEO",      href: "#video"    },
  { label: "İLETİŞİM",     href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="#hero" className="flex items-center gap-3">
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
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link-gold font-sans text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
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
          <div className={`w-6 h-0.5 bg-gold transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <div className={`w-6 h-0.5 bg-gold mt-1.5 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-gold mt-1.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8 bg-background/98 backdrop-blur-lg border-t border-gold-dim/30">
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
        </nav>
      </div>
    </header>
  );
}
