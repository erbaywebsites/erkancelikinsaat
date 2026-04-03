import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Özel Villa",
    desc: "Her aile için bağımsız, doğayla iç içe modern villa tasarımı",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <path d="M5.64 5.64l2.83 2.83M15.54 15.54l2.83 2.83M5.64 18.36l2.83-2.83M15.54 8.46l2.83-2.83" />
      </svg>
    ),
    title: "Kişisel Havuz",
    desc: "Her villanın kendine ait özel yüzme havuzu ve güneş terası",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <rect x="2" y="13" width="20" height="8" rx="1" />
        <path d="M2 13l5-9h10l5 9" />
        <path d="M8 13v8M16 13v8" />
        <circle cx="7" cy="17" r="1" fill="currentColor" stroke="none" />
        <circle cx="17" cy="17" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Üstü Kapalı Garaj",
    desc: "Geniş garaj – araçlarınız için güvenli ve geniş bir alan",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M12 22c-4.97 0-9-4.03-9-9 0-3.73 2.26-6.92 5.5-8.33" />
        <path d="M15.5 4.67C18.74 6.08 21 9.27 21 13c0 4.97-4.03 9-9 9" />
        <path d="M8 3s1 2 1 4-1 4-1 4M16 3s-1 2-1 4 1 4 1 4" />
        <path d="M12 3v4" />
      </svg>
    ),
    title: "Özel Bahçe",
    desc: "Peyzajlı geniş bahçe – çocuklarınız ve dinlenme için yeşil alan",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "10 Dk Merkez",
    desc: "Şehrin tüm imkânlarına 10 dakika – huzur ve konfor bir arada",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Üstün Kalite",
    desc: "A+ malzeme, modern mimari ve yüksek işçilik standardıyla inşaat",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-section)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— Proje Özellikleri —</p>
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">
            Yaşamın Her Detayı<br />
            <span className="gradient-text italic">Sizin İçin</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`luxury-card p-8 border border-gold-dim/30 group transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <div className="gold-divider w-10 mb-5 group-hover:w-20 transition-all duration-500" />
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3">{f.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-dim/30 border border-gold-dim/30 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { val: "10",    unit: " DK",   label: "Merkeze Uzaklık" },
            { val: "100+",  unit: " m²",   label: "Villa Büyüklüğü" },
            { val: "90+",  unit: " m²",      label: "Özel Bahçe" },
            { val: "2027",  unit: "",      label: "Teslim Yılı" },
          ].map((s) => (
            <div key={s.label} className="bg-card py-10 px-6 text-center">
              <p className="font-serif text-4xl sm:text-5xl font-light text-gold">
                {s.val}<span className="text-2xl text-gold-dim">{s.unit}</span>
              </p>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
