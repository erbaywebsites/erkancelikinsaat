import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/erbay-sitesi/aerial-1.jpg";

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const obsAbout = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAboutVisible(true);
      },
      { threshold: 0.15 }
    );
    const obsProjects = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setProjectsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) obsAbout.observe(aboutRef.current);
    if (projectsRef.current) obsProjects.observe(projectsRef.current);

    return () => {
      obsAbout.disconnect();
      obsProjects.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />

      {/* Corporate Hero Section */}
      <section
        id="hero"
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
        <div className="absolute inset-0 bg-background/55" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p
            className={`font-sans text-[10px] tracking-[0.5em] uppercase text-gold-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] mb-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            — ERKAN ÇELİK İNŞAAT & GAYRİMENKUL —
          </p>

          {/* Title */}
          <h1
            className={`serif-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-none mb-4 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Erkan Çelik İnşaat
            <br />
            <span className="gradient-text italic font-normal inline-block translate-y-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
              Güvenin Adresi
            </span>
          </h1>

          {/* Gold divider */}
          <div
            className={`gold-divider w-32 mx-auto my-10 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />

          {/* Subtitle */}
          <p
            className={`font-sans text-sm sm:text-base tracking-[0.15em] text-foreground/80 max-w-xl md:max-w-2xl mx-auto mb-12 uppercase transition-all duration-1000 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Trakya'da en lüks, estetik ve sağlam yapıları inşa ediyoruz. Seçkin projelerimizle hayatınıza değer katın.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <a
              href="#projects"
              className="group font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 gradient-gold text-primary-foreground hover:opacity-95 transition-all duration-300 shadow-gold"
            >
              PROJELERİMİZİ KEŞFET
            </a>
            <a
              href="#about"
              className="group font-sans text-xs tracking-[0.25em] uppercase px-10 py-4 border border-gold/60 text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
            >
              HAKKIMIZDA
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Keşfet</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </section>

      {/* Corporate About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-32 overflow-hidden border-b border-gold-dim/20"
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-section)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— KURUmsal vizyon —</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-6">
              Lüks, Kalite ve Güvenin<br />
              <span className="gradient-text italic">Lüleburgaz'daki İmzası</span>
            </h2>
            <div className="gold-divider w-24 mx-auto mb-10" />

            <p className="font-sans text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8">
              Erkan Çelik İnşaat olarak, kurulduğumuz günden bu yana Lüleburgaz ve çevresinde sadece binalar değil, içinde mutlu hikayelerin birikeceği güvenli ve estetik yaşam alanları inşa ediyoruz.
            </p>
            <p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground/80 max-w-3xl mx-auto">
              A+ malzeme seçimimiz, yüksek işçilik standartlarımız ve modern mimari vizyonumuzla her projemizde mükemmelliği hedefliyoruz. Çevreye duyarlı, modern teknolojiyle entegre ve her detayı titizlikle düşünülmüş projelerimizle yatırımlarınıza değer katıyoruz.
            </p>

            {/* Quick stats banner */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { val: "100%", unit: "", label: "Müşteri Memnuniyeti" },
                { val: "3+", unit: "", label: "Aktif Mega Proje" },
                { val: "A+", unit: "", label: "İnşaat Malzemesi Kalitesi" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-gold-dim/20 bg-card/40 backdrop-blur-sm rounded-lg hover:border-gold/50 transition-colors"
                >
                  <p className="font-serif text-3xl sm:text-4xl text-gold font-light">{item.val}</p>
                  <p className="font-sans text-[9px] sm:text-[10px] tracking-wider uppercase text-muted-foreground mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— PORTFÖYÜMÜZ —</p>
            <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">
              Aktif İnşaat<br />
              <span className="gradient-text italic">Projelerimiz</span>
            </h2>
            <div className="gold-divider w-24 mx-auto" />
            <p className="font-sans text-sm text-muted-foreground max-w-lg mx-auto mt-6">
              Lüleburgaz'ın en prestijli bölgelerinde, her biri kendine has mimariye ve zengin sosyal donatılara sahip aktif inşaat projelerimiz.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`luxury-card flex flex-col group overflow-hidden border border-gold-dim/30 transition-all duration-1000 ${projectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 bg-gold text-primary-foreground font-semibold">
                      {project.badge}
                    </span>
                  </div>

                  {/* Delivery date badge */}
                  <div className="absolute top-4 right-4">
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 bg-background/80 border border-gold-dim/40 text-gold backdrop-blur-sm">
                      Teslim: {project.deliveryYear}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow bg-card/60">
                  <div className="flex flex-col gap-2 mb-3.5">
                    <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold font-medium">
                      {project.location}
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-light font-bold bg-gold/10 px-3 py-1.5 rounded w-fit border border-gold/20 backdrop-blur-sm shadow-[0_2px_10px_rgba(119,90,25,0.1)]">
                      {project.eyebrow.replace(/—/g, "").trim()}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-light text-foreground mb-4 group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <div className="gold-divider w-12 mb-5 group-hover:w-24 transition-all duration-500" />
                  <p className="font-sans text-sm text-muted-foreground/80 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <Link
                    to={`/proje/${project.id}`}
                    className="w-full text-center font-sans text-[10px] tracking-[0.25em] uppercase py-3.5 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
                  >
                    PROJEYİ İNCELE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Contact & Footer */}
      <ContactSection />
      <FooterSection />
    </main>
  );
}
