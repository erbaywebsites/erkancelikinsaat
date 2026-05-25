import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ProjectData } from "@/data/projects";

const MAX = { name: 120, phone: 32, email: 254, message: 4000 } as const;

function normalizeField(s: string, max: number): string {
  return s.replace(/\s+/g, " ").trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  if (email.length > MAX.email) return false;
  // Practical RFC 5322–lite-ish check; blocks obvious header-injection and garbage
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(email);
}

interface ContactSectionProps {
  projectData?: ProjectData;
  isComingSoon?: boolean;
}

export default function ContactSection({ projectData, isComingSoon }: ContactSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");


  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (honeypot.trim() !== "") {
      setSubmitted(true);
      return;
    }

    const name = normalizeField(form.name, MAX.name);
    const phone = normalizeField(form.phone, MAX.phone);
    const email = normalizeField(form.email, MAX.email);
    const message = normalizeField(form.message, MAX.message);

    if (!name || !phone || !email || !message) {
      setErrorMessage("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMessage("Geçerli bir e-posta adresi girin.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("E-posta ayarları eksik. Lütfen EmailJS bilgilerini tanımlayın.");
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_phone: phone,
          reply_to: email,
          message,
        },
        { publicKey }
      );
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setErrorMessage("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold mb-4">— İletişim —</p>
          <h2 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">
            Hayalinizin<br />
            <span className="gradient-text italic inline-block translate-y-3">İlk Adımı</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="font-serif text-3xl font-light text-foreground mb-4">
              Erkan Çelik<br />
              <span className="text-gold">İnşaat &amp; Gayrimenkul</span>
            </h3>
            <div className="gold-divider w-16 mb-8" />
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-10">
              {projectData?.contactText || "Projeye dair tüm sorularınızı yanıtlamak, yerinde gezi ayarlamak ve fiyatlandırma bilgisi almak için bizimle iletişime geçin. Satış ekibimiz size özel çözümler sunmak için hazır."}
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "+90 541 488 94 59",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "E-posta",
                  value: "info@erkancelikinsaat.com",
                  href: "mailto:info@erkancelikinsaat.com",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
                      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                      <circle cx="12" cy="12" r="4.5" />
                      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@erkancelik_insaatgayrimenkul",
                  href: "https://instagram.com/erkancelik_insaatgayrimenkul",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Konum",
                  value: "Lüleburgaz, KIRKLARELİ",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-gold mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sans text-sm text-foreground/80 hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-foreground/80">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Teşekkürler</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Mesajınız iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0 pointer-events-none"
                />
                {(
                  [
                    { name: "name" as const, label: "Ad Soyad", type: "text", placeholder: "Adınız ve soyadınız", maxLength: MAX.name },
                    { name: "phone" as const, label: "Telefon", type: "tel", placeholder: "+90 5XX XXX XX XX", maxLength: MAX.phone },
                    { name: "email" as const, label: "E-posta", type: "email", placeholder: "ornek@email.com", maxLength: MAX.email },
                  ] as const
                ).map((field) => (
                  <div key={field.name}>
                    <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      maxLength={field.maxLength}
                      className="w-full bg-background border border-gold-dim/40 px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold block mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={isComingSoon ? "Trend Palas Konakları projemiz hakkında ön talep veya lansman tarihleri için sorularınızı yazın..." : "Villa, fiyatlandırma veya yerinde gezi hakkında sorularınızı yazın..."}
                    rows={4}
                    required
                    maxLength={MAX.message}
                    className="w-full bg-background border border-gold-dim/40 px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full font-sans text-xs tracking-[0.3em] uppercase py-4 bg-gold text-primary-foreground hover:bg-gold-light transition-all duration-300 shadow-gold mt-2"
                >
                  {isSending ? "Gönderiliyor..." : (isComingSoon ? "Ön Talep Gönder" : "Bilgi Talebi Gönder")}
                </button>
                {errorMessage && (
                  <p className="font-sans text-xs text-destructive">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
