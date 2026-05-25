import ecLogo from "@/assets/brand/ec-logo.png";

export default function FooterSection() {
  return (
    <footer className="bg-background border-t border-gold-dim/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + brand */}
          <div className="flex items-center gap-4">
            <img
              src={ecLogo}
              alt="Erkan Çelik"
              className="h-12 w-auto object-contain"
              loading="lazy"
              width={48}
              height={48}
            />
            <div>
              <p className="font-serif text-sm font-semibold text-gold tracking-widest uppercase">
                Erkan Çelik
              </p>
              <p className="font-sans text-[9px] tracking-[0.25em] text-muted-foreground uppercase mt-0.5">
                İnşaat &amp; Gayrimenkul
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Ana Sayfa", href: "#hero"     },
              { label: "Proje",     href: "#features" },
              { label: "Galeri",    href: "#gallery"  },
              { label: "Tanıtım",   href: "#video"    },
              { label: "İletişim",  href: "#contact"  },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-sans text-[10px] tracking-[0.15em] text-muted-foreground/50 text-center">
            © {new Date().getFullYear()} Erkan Çelik İnşaat
          </p>
        </div>

        <div className="gold-divider mt-8 opacity-30" />

        <p className="text-center font-sans text-[10px] text-muted-foreground/40 mt-6 tracking-widest uppercase">
          Lüks · Kalite · Güven
        </p>
      </div>
    </footer>
  );
}
