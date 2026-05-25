import { useEffect, useRef, useState } from "react";
import { ProjectData } from "@/data/projects";

interface GallerySectionProps {
  projectData: ProjectData;
}

const tabs = ["Tümü", "Dış Görünüm", "İç Mekan", "Hava Çekimi"] as const;
type Tab = (typeof tabs)[number];

export default function GallerySection({ projectData }: GallerySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("Tümü");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Filter project specific images
  const filtered =
    activeTab === "Tümü"
      ? projectData.images
      : projectData.images.filter((i) => i.cat === activeTab);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % filtered.length);
      if (e.key === "ArrowLeft")
        setLightbox((p) => (p! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered]);

  return (
    <section id="gallery" ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— Fotoğraf Galerisi —</p>
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">
            Her Köşede<br />
            <span className="gradient-text italic">Mükemmellik</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-12" />

          {/* Tabs */}
          <div className="flex items-center justify-center gap-1 p-1 border border-gold-dim/30 inline-flex mx-auto w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightbox(null); // Clear lightbox to avoid index out of bounds
                }}
                className={`font-sans text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gold text-primary-foreground"
                    : "text-muted-foreground hover:text-gold"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((img, i) => (
            <div
              key={img.src + i}
              className={`group relative overflow-hidden cursor-pointer aspect-[4/3] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-center">
                  <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-5 h-5 text-gold"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">{img.label}</p>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1 bg-gold text-primary-foreground">
                  {img.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].label}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-center font-sans text-xs tracking-[0.3em] uppercase text-gold mt-4">
              {filtered[lightbox].label}
            </p>
            {/* Prev / Next */}
            <button
              onClick={() => setLightbox((p) => (p! - 1 + filtered.length) % filtered.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gold hover:text-gold-light"
              aria-label="Önceki"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setLightbox((p) => (p! + 1) % filtered.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gold hover:text-gold-light"
              aria-label="Sonraki"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-0 right-0 -translate-y-10 text-gold hover:text-gold-light"
              aria-label="Kapat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
