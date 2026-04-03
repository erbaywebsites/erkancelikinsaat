import { useEffect, useRef, useState } from "react";
import aerialBg from "@/assets/villa-aerial-1.jpg";
import tanitimVideo from "@/assets/tanitim.mp4";

export default function VideoSection() {
  const localVideoSrc = tanitimVideo;
  const ref    = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handlePlay = () => setPlaying(true);

  return (
    <section id="video" ref={ref} className="relative py-32 overflow-hidden">
      {/* Bg */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${aerialBg})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— Tanıtım Filmi —</p>
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">
            Projeyi<br />
            <span className="gradient-text italic inline-block translate-y-3">Keşfedin</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        {/* Video Player */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative aspect-video border border-gold-dim/40 overflow-hidden bg-card shadow-gold">
            {playing ? (
              <video
                src={localVideoSrc}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
                title="Villa Tanıtım Filmi"
                aria-label="Villa Tanıtım Filmi"
              />
            ) : (
              <>
                {/* Thumbnail */}
                <img
                  src={aerialBg}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-background/40 flex flex-col items-center justify-center gap-6">
                  {/* Play button */}
                  <button
                    onClick={handlePlay}
                    className="group relative w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center hover:bg-gold/20 transition-all duration-300 shadow-gold"
                  >
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-gold ml-2 group-hover:border-l-gold-light transition-colors" />
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-gold/30 scale-125 animate-ping" />
                  </button>
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-foreground/60">
                    Tanıtım Filmini İzle
                  </p>
                  <p className="font-sans text-[10px] text-muted-foreground">
                    Videoyu başlatmak için tıklayın
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />
        </div>

        {/* Caption */}
        <p
          className={`text-center font-sans text-sm text-muted-foreground mt-8 tracking-wide max-w-2xl mx-auto transition-all duration-1000 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          Yaklaşık 1 dakikalık tanıtım filmimizde proje alanını, villa tasarımlarını ve çevre düzenlemesini keşfedin.
        </p>
      </div>
    </section>
  );
}
