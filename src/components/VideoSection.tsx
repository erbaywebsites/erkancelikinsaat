import { useEffect, useRef, useState } from "react";
import { ProjectData } from "@/data/projects";

interface VideoSectionProps {
  projectData: ProjectData;
}

export default function VideoSection({ projectData }: VideoSectionProps) {
  // If no video is specified, do not render this section
  if (!projectData.videoSrc) {
    return null;
  }

  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    const v = videoRef.current;
    if (v) {
      void v.play().catch(() => {
        /* Mobil tarayıcılar bazen ilk karede reddeder; native kontroller görünür kalır */
      });
    }
  };

  return (
    <section id="video" ref={ref} className="relative py-32 overflow-hidden">
      {/* Bg */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectData.videoPoster || projectData.heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— Tanıtım Filmi —</p>
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">
            Projeyi<br />
            <span className="gradient-text italic inline-block translate-y-3">Keşfedin</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        {/* Video Player */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative aspect-video border border-gold-dim/40 overflow-hidden bg-card shadow-gold">
            <video
              ref={videoRef}
              src={projectData.videoSrc}
              className="w-full h-full object-cover"
              controls={playing}
              playsInline
              poster={projectData.videoPoster || projectData.heroImage}
              preload={visible ? "auto" : "metadata"}
              title="Proje Tanıtım Filmi"
              aria-label="Proje Tanıtım Filmi"
            />
            {!playing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-background/40">
                <button
                  type="button"
                  onClick={handlePlay}
                  className="group relative z-10 w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center hover:bg-gold/20 transition-all duration-300 shadow-gold"
                >
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-gold ml-2 group-hover:border-l-gold-light transition-colors" />
                  <div className="absolute inset-0 rounded-full border border-gold/30 scale-125 animate-ping" />
                </button>
                <p className="relative z-10 font-sans text-xs tracking-[0.3em] uppercase text-foreground/60">
                  Tanıtım Filmini İzle
                </p>
                <p className="relative z-10 font-sans text-[10px] text-muted-foreground">
                  Videoyu başlatmak için tıklayın
                </p>
              </div>
            )}
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />
        </div>

        {/* Caption */}
        {projectData.videoDescription && (
          <p
            className={`text-center font-sans text-sm text-muted-foreground mt-8 tracking-wide max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {projectData.videoDescription}
          </p>
        )}
      </div>
    </section>
  );
}
