import { useEffect, useRef, useState } from "react";
import exterior1 from "@/assets/villa-exterior-1.jpg";
import exterior2 from "@/assets/villa-exterior-2.jpg";
import exterior3 from "@/assets/villa-exterior-3.jpg";
import exterior4 from "@/assets/villa-exterior-4.jpg";
import exterior5 from "@/assets/villa-exterior-5.jpg";
import exterior6 from "@/assets/villa-exterior-6.jpg";
import exterior7 from "@/assets/villa-exterior-7.jpg";
import exterior8 from "@/assets/villa-exterior-8.jpg";
import exterior9 from "@/assets/villa-exterior-9.jpg";
import exterior10 from "@/assets/villa-exterior-10.jpg";
import aerial1 from "@/assets/villa-aerial-1.jpg";
import aerial2 from "@/assets/villa-aerial-2.jpg";
import aerial3 from "@/assets/villa-aerial-3.jpg";
import aerial4 from "@/assets/villa-aerial-4.jpg";
import aerial5 from "@/assets/villa-aerial-5.jpg";
import aerial6 from "@/assets/villa-aerial-6.jpg";
import aerial7 from "@/assets/villa-aerial-7.jpg";
import aerial8 from "@/assets/villa-aerial-8.jpg";
import interior1 from "@/assets/villa-interior-1.jpg";
import interior2 from "@/assets/villa-interior-2.jpg";
import interior3 from "@/assets/villa-interior-3.jpg";
import interior4 from "@/assets/villa-interior-4.jpg";
import interior5 from "@/assets/villa-interior-5.jpg";
import interior6 from "@/assets/villa-interior-6.jpg";
import interior7 from "@/assets/villa-interior-7.jpg";
import interior8 from "@/assets/villa-interior-8.jpg";
import interior9 from "@/assets/villa-interior-9.jpg";
import interior10 from "@/assets/villa-interior-10.jpg";
import interior11 from "@/assets/villa-interior-11.jpg";
import interior12 from "@/assets/villa-interior-12.jpg";

const tabs = ["Tümü", "Dış Görünüm", "İç Mekan", "Hava Çekimi"] as const;
type Tab = (typeof tabs)[number];

const images = [
  { src: exterior1, label: "Dış Görünüm 1", cat: "Dış Görünüm" },
  { src: exterior2, label: "Dış Görünüm 2", cat: "Dış Görünüm" },
  { src: exterior3, label: "Dış Görünüm 3", cat: "Dış Görünüm" },
  { src: exterior4, label: "Dış Görünüm 4", cat: "Dış Görünüm" },
  { src: exterior5, label: "Dış Görünüm 5", cat: "Dış Görünüm" },
  { src: exterior6, label: "Dış Görünüm 6", cat: "Dış Görünüm" },
  { src: exterior7, label: "Dış Görünüm 7", cat: "Dış Görünüm" },
  { src: exterior8, label: "Dış Görünüm 8", cat: "Dış Görünüm" },
  { src: exterior9, label: "Dış Görünüm 9", cat: "Dış Görünüm" },
  { src: exterior10, label: "Dış Görünüm 10", cat: "Dış Görünüm" },

  { src: interior1, label: "İç Mekan 1",  cat: "İç Mekan" },
  { src: interior2, label: "İç Mekan 2",  cat: "İç Mekan" },
  { src: interior3, label: "İç Mekan 3",  cat: "İç Mekan" },
  { src: interior4, label: "İç Mekan 4",  cat: "İç Mekan" },
  { src: interior5, label: "İç Mekan 5",  cat: "İç Mekan" },
  { src: interior6, label: "İç Mekan 6",  cat: "İç Mekan" },
  { src: interior7, label: "İç Mekan 7",  cat: "İç Mekan" },
  { src: interior8, label: "İç Mekan 8",  cat: "İç Mekan" },
  { src: interior9, label: "İç Mekan 9",  cat: "İç Mekan" },
  { src: interior10, label: "İç Mekan 10", cat: "İç Mekan" },
  { src: interior11, label: "İç Mekan 11", cat: "İç Mekan" },
  { src: interior12, label: "İç Mekan 12", cat: "İç Mekan" },

  { src: aerial1, label: "Hava Çekimi 1", cat: "Hava Çekimi" },
  { src: aerial2, label: "Hava Çekimi 2", cat: "Hava Çekimi" },
  { src: aerial3, label: "Hava Çekimi 3", cat: "Hava Çekimi" },
  { src: aerial4, label: "Hava Çekimi 4", cat: "Hava Çekimi" },
  { src: aerial5, label: "Hava Çekimi 5", cat: "Hava Çekimi" },
  { src: aerial6, label: "Hava Çekimi 6", cat: "Hava Çekimi" },
  { src: aerial7, label: "Hava Çekimi 7", cat: "Hava Çekimi" },
  { src: aerial8, label: "Hava Çekimi 8", cat: "Hava Çekimi" },
];

export default function GallerySection() {
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
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Keyboard navigation in lightbox
  useEffect(() => {
    const filtered = activeTab === "Tümü" ? images : images.filter((i) => i.cat === activeTab);
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % filtered.length);
      if (e.key === "ArrowLeft")  setLightbox((p) => (p! - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, activeTab]);

  const filtered = activeTab === "Tümü" ? images : images.filter((i) => i.cat === activeTab);

  return (
    <section id="gallery" ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
                onClick={() => setActiveTab(tab)}
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold">
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
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
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
