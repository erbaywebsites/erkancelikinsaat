import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/villa-exterior-3.jpg";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: loaded ? "scale(1)" : "scale(1.05)",
        }}
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-background/20" />

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-50">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-50">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className={`font-sans text-[10px] tracking-[0.5em] uppercase text-gold-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] mb-6 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          — Erkan Çelik İnşaat &amp; GAYRİMENKUL —
        </p>

        {/* Title */}
        <h1
          className={`serif-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground leading-none mb-4 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block font-sans text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.35em] uppercase text-gold-light mb-2 md:mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
            Lüleburgaz
          </span>
          Erbay Sitesi
          <br />
          <span className="gradient-text text-[0.8em] font-normal italic inline-block translate-y-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">Elit Villalar</span>
        </h1>

        {/* Gold divider */}
        <div
          className={`gold-divider w-32 mx-auto my-8 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        {/* Subtitle */}
        <p
          className={`font-sans text-sm sm:text-base tracking-[0.15em] text-foreground/70 max-w-xl md:max-w-none mx-auto mb-12 uppercase md:whitespace-nowrap transition-all duration-1000 delay-[900ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          LÜLEBURGAZ'DA DOĞAYLA İÇ İÇE, MERKEZE 10 DAKİKA · Özel havuz · Garaj · Bahçe
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#gallery"
            className="group font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 gradient-gold text-primary-foreground hover:opacity-95 transition-all duration-300 shadow-gold"
          >
            GÖRSELLERİ Keşfet
          </a>
          <a
            href="#video"
            className="group font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/60 text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300 flex items-center gap-3"
          >
            <span className="w-5 h-5 rounded-full border border-gold flex items-center justify-center">
              <span className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-gold ml-0.5" />
            </span>
            TANITIM FİLMİ
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Keşfet</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
