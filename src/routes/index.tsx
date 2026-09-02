import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Droplet, SprayCan, Wrench, ShieldCheck, Sparkles, Gauge, CheckCircle2, ArrowLeft, ArrowRight, Star, MessageCircle, Send, Navigation, Instagram, Facebook, Youtube, Music2, AtSign, Twitter, Fuel, CupSoda, Globe } from "lucide-react";
import { useState, useMemo } from "react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import logoAsset from "@/assets/logo.png";
import heroImg from "@/assets/hero.jpg";
import rocLineupImg from "@/assets/roc-gzx-lineup.jpg";
import detailingImg from "@/assets/detailing.jpg";
import serviceImg from "@/assets/service.jpg";
import { branches } from "@/data/branches";
import { stations } from "@/data/stations";
import teaImg from "@/assets/tea-world.jpg";
import { products, CATEGORY_EN, type ProductCategory } from "@/data/products";
import { I18nProvider, useI18n } from "@/lib/i18n";
import branch1 from "@/assets/gallery/branch-1.jpg";
import branch2 from "@/assets/gallery/branch-2.jpg";
import branch3 from "@/assets/gallery/branch-3.jpg";
import branch4 from "@/assets/gallery/branch-4.jpg";
import branch5 from "@/assets/gallery/branch-5.jpg";
import gRocLineup from "@/assets/gallery/roc-lineup.jpg";
import gFreeServices from "@/assets/gallery/free-services.jpg";
import gPromo1 from "@/assets/gallery/promo-1.jpg";
import gPromo2 from "@/assets/gallery/promo-2.jpg";
import gTerms from "@/assets/gallery/terms.jpg";
import gInfo1 from "@/assets/gallery/info-1.jpg";
import gInfo2 from "@/assets/gallery/info-2.jpg";
import gInfo3 from "@/assets/gallery/info-3.jpg";
import gInfo4 from "@/assets/gallery/info-4.jpg";

type CaptionKey = "roc" | "promo1" | "promo2" | "free" | "info" | "terms" | "branch";

const GALLERY: Array<{ src: string; key: CaptionKey }> = [
  { src: gRocLineup, key: "roc" },
  { src: gPromo1, key: "promo1" },
  { src: gPromo2, key: "promo2" },
  { src: gFreeServices, key: "free" },
  { src: gInfo1, key: "info" },
  { src: gInfo2, key: "info" },
  { src: gInfo3, key: "info" },
  { src: gInfo4, key: "info" },
  { src: gTerms, key: "terms" },
  { src: branch1, key: "branch" },
  { src: branch2, key: "branch" },
  { src: branch3, key: "branch" },
  { src: branch4, key: "branch" },
  { src: branch5, key: "branch" },
];

const WHATSAPP_NUMBER = "966559527343";
const WHATSAPP_DISPLAY = "+966 55 952 7343";
const MAP_URL =
  "https://www.google.com/maps/place/24%C2%B048'12.4%22N+46%C2%B048'10.5%22E/@24.8034335,46.8051005,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8034335!4d46.8029118?hl=ar&entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "فوراكس سيرفس 4X Service | زيوت وعناية وصيانة السيارات" },
      {
        name: "description",
        content:
          "فوراكس سيرفس - مركز متخصص في تغيير زيوت السيارات، الفلاتر، تلميع وعناية، وصيانة شاملة بأحدث الأجهزة. احجز فحصك المجاني اليوم.",
      },
      {
        name: "keywords",
        content:
          "فوراكس سيرفس, 4X Service, تغيير زيت السيارة, زيوت السيارات, زيت روك, ROC oil, صيانة سيارات, تلميع سيارات, زينة سيارات, فلاتر زيت, فحص سيارة مجاني, ورشة سيارات, مركز صيانة السيارات, خدمة سيارات السعودية",
      },
      { name: "author", content: "4X Service" },
      { name: "robots", content: "index, follow" },
      { httpEquiv: "content-language", content: "ar, en" },

      { property: "og:title", content: "فوراكس سيرفس | زيوت وعناية وصيانة السيارات" },
      {
        property: "og:description",
        content: "زيوت أصلية، فحص مجاني، وعروض حصرية لصيانة سيارتك مع فريق فني معتمد.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "ar_SA" },
      { property: "og:site_name", content: "4X Service" },
      { property: "og:image", content: "https://fourx.lovable.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "شعار 4X Service - فوراكس سيرفس" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "فوراكس سيرفس | زيوت وعناية وصيانة السيارات" },
      {
        name: "twitter:description",
        content: "زيوت أصلية، فحص مجاني، وعروض حصرية لصيانة سيارتك.",
      },
      { name: "twitter:image", content: "https://fourx.lovable.app/og-image.png" },

      { name: "theme-color", content: "#0d1b2a" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "4X Service - فوراكس سيرفس",
          description:
            "مركز متخصص في تغيير الزيوت، العناية، التلميع، وصيانة السيارات الشاملة.",
          areaServed: "SA",
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "الرياض",
            addressLocality: "الرياض",
            streetAddress: "حي إشبيليا - شارع النجاح",
          },
          telephone: "+966559527343",
          openingHours: "Sa-Th 08:00-16:00",

          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "250" },
        }),
      },
    ],
  }),
});

const serviceIcons = [Droplet, SprayCan, Wrench, Gauge, ShieldCheck, Sparkles];

function Index() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  );
}

function Page() {
  const { dir } = useI18n();
  return (
    <div dir={dir} className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Products />
      <OilCatalog />
      <Offers />
      <QuoteForm />
      <About />
      <Stations />
      <TeaWorld />
      <Branches />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  const { dir } = useI18n();
  const Icon = dir === "rtl" ? ArrowLeft : ArrowRight;
  return <Icon className={className} />;
}

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className={`inline-flex items-center gap-2 border border-border bg-surface px-3 py-2 rounded-lg text-sm font-bold hover:border-primary/60 transition ${className}`}
      aria-label={t.switchLabel}
    >
      <Globe className="w-4 h-4 text-brand" />
      {t.switchLabel}
    </button>
  );
}

function Nav() {
  const { t } = useI18n();
  const links = [
    ["#services", t.nav.services],
    ["#offers", t.nav.offers],
    ["#products", t.nav.products],
    ["#oil-catalog", t.nav.catalog],
    ["#gallery", t.nav.gallery],
    ["#stations", t.nav.stations],
    ["#tea", t.nav.tea],
    ["#branches", t.nav.branches],
    ["#about", t.nav.about],
    ["#contact", t.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logoAsset} alt="4X Service" className="h-12 w-12" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-black tracking-tight">{t.nav.brand}</span>
            <span className="text-[11px] text-muted-foreground tracking-widest">4X SERVICE</span>
          </div>
        </a>
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-brand transition">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <a href="#quote" className="hidden sm:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-5 py-2.5 rounded-lg shadow-glow hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
            {t.nav.quote}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt={t.hero.heroAlt} className="w-full h-full object-cover opacity-40" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 diagonal-stripe" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            {t.hero.title1}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#offers" className="group inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-glow hover:scale-105 transition-transform">
              {t.hero.ctaOffers}
              <Arrow className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-border bg-surface/60 backdrop-blur px-8 py-4 rounded-xl font-bold hover:bg-surface transition">
              {t.hero.ctaServices}
            </a>
          </div>
          <div className="flex flex-wrap gap-8 pt-6 border-t border-border/50">
            {t.hero.stats.map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-brand">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-border/50">
            <img src={detailingImg} alt={t.hero.detailAlt} className="w-full h-[500px] object-cover" width={1200} height={900} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 inset-x-6 bg-surface/90 backdrop-blur-lg border border-primary/30 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">{t.hero.todayOffer}</div>
                  <div className="text-2xl font-black">{t.hero.freeAc}</div>
                  <div className="text-sm text-brand mt-1">{t.hero.freeAcSub}</div>
                </div>
                <div className="bg-gradient-primary rounded-xl p-3">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useI18n();
  const items = t.marquee;
  return (
    <div className="border-y border-border bg-surface overflow-hidden">
      <div className="flex gap-16 py-5 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((txt, i) => (
          <div key={i} className="flex items-center gap-3 text-lg font-bold text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {txt}
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-2xl mb-16">
          <div className="text-brand font-bold text-sm tracking-widest mb-3">{t.services.eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            {t.services.title1} <span className="text-brand">{t.services.title2}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <div key={i} className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-black mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="absolute top-6 ltr:right-6 rtl:left-6 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition">
                  0{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const filtered = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );
  const cats: Array<ProductCategory | "all"> = ["all", "بنزين", "ديزل", "ناقل حركة"];
  const catLabel = (c: ProductCategory | "all") =>
    c === "all" ? t.products.all : lang === "ar" ? c : CATEGORY_EN[c];

  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-brand font-bold text-sm tracking-widest mb-3">{t.products.eyebrow}</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              {t.products.title1} <span className="text-brand">ROC GZX</span> {t.products.title2}
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">{t.products.sub}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition ${
                  filter === c
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-surface border-border hover:border-primary/50"
                }`}
              >
                {catLabel(c)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative bg-surface border border-border rounded-3xl overflow-hidden hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card"
            >
              {p.badge && (
                <div className="absolute top-4 ltr:left-4 rtl:right-4 z-10 bg-gradient-primary text-primary-foreground text-[10px] font-black px-2.5 py-1 rounded-full">
                  {lang === "ar" ? p.badge : p.badgeEn}
                </div>
              )}
              <div className={`relative h-64 bg-gradient-to-br ${p.accent} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <img
                  src={p.image}
                  alt={`${p.name} ${p.grade}`}
                  className="relative h-full w-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-muted-foreground font-bold tracking-wider">
                    {lang === "ar" ? p.category : CATEGORY_EN[p.category]}
                  </div>
                  <div className="text-xs text-brand font-black">{p.grade}</div>
                </div>
                <h3 className="text-lg font-black leading-tight">{p.name}</h3>
                <div className="text-[11px] text-muted-foreground font-mono">{p.spec}</div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {lang === "ar" ? p.desc : p.descEn}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    t.products.inquiryMsg(`${p.name} ${p.grade}`),
                  )}`}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
                >
                  {t.products.inquire}
                  <Arrow className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OilCatalog() {
  const { t, lang } = useI18n();
  const groups: ProductCategory[] = ["بنزين", "ديزل", "ناقل حركة"];

  return (
    <section id="oil-catalog" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-brand font-bold text-sm tracking-widest mb-3">{t.catalog.eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            {t.catalog.title1} <span className="text-brand">{t.catalog.title2}</span> {t.catalog.title3}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">{t.catalog.sub}</p>
        </div>

        <div className="space-y-16">
          {groups.map((g) => {
            const items = products.filter((p) => p.category === g);
            return (
              <div key={g}>
                <div className="flex items-end justify-between gap-4 mb-6 border-b border-border pb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black">{t.catalog.groups[g]}</h3>
                    <div className="text-xs md:text-sm text-muted-foreground tracking-widest mt-1 font-mono">
                      {CATEGORY_EN[g]}
                    </div>
                  </div>
                  <div className="text-xs text-brand font-black bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full">
                    {t.catalog.count(items.length)}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {items.map((p) => (
                    <article
                      key={p.id}
                      className="group flex gap-4 bg-background border border-border rounded-2xl p-5 hover:border-primary/60 transition shadow-card"
                    >
                      <div className={`shrink-0 w-24 md:w-28 h-32 md:h-36 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center overflow-hidden`}>
                        <img
                          src={p.image}
                          alt={`${p.name} ${p.grade}`}
                          className="h-full w-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base md:text-lg font-black leading-tight truncate">
                            {p.name} <span className="text-brand">{p.grade}</span>
                          </h4>
                        </div>
                        <div className="text-[11px] md:text-xs text-muted-foreground font-mono bg-surface border border-border rounded-md px-2 py-1 inline-block">
                          {p.spec}
                        </div>
                        <div className="space-y-1.5 text-sm">
                          <div className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                            <p className="text-muted-foreground leading-relaxed">
                              {lang === "ar" ? p.features : p.featuresEn}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Gauge className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                            <p className="text-muted-foreground leading-relaxed">
                              <b className="text-foreground">{t.catalog.usage}</b>
                              {lang === "ar" ? p.usage : p.usageEn}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Offers() {
  const { t } = useI18n();
  return (
    <section id="offers" className="py-24 md:py-32 bg-surface relative">
      <div className="absolute inset-0 diagonal-stripe opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            {t.offers.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-black">{t.offers.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.offers.items.map((o, i) => (
            <div key={i} className="relative bg-background border-2 border-border rounded-3xl overflow-hidden hover:border-primary transition-all group shadow-card">
              <div className="absolute top-6 ltr:left-6 rtl:right-6 z-10 bg-gradient-primary text-primary-foreground text-xs font-black px-3 py-1.5 rounded-full">
                {o.tag}
              </div>
              <div className="relative h-56 overflow-hidden bg-gradient-hero">
                <img src={rocLineupImg} alt={o.title} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700" width={1200} height={900} loading="lazy" />
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">{o.title}</h3>
                    <p className="text-muted-foreground">{o.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {t.offers.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                      {f}
                    </div>
                  ))}
                </div>
                <a href="tel:+966559527343" className="block text-center bg-gradient-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:scale-[1.02] transition-transform shadow-glow">
                  {t.offers.book}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gradient-primary rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
          <div>
            <div className="text-sm font-bold opacity-80 mb-1">{t.offers.extraTag}</div>
            <div className="text-2xl md:text-3xl font-black">{t.offers.extraTitle}</div>
            <div className="opacity-90 mt-1">{t.offers.extraSub}</div>
          </div>
          <a href="tel:+966559527343" className="bg-background text-foreground font-black px-8 py-4 rounded-xl hover:scale-105 transition">
            {t.offers.extraCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={serviceImg} alt={t.about.alt} className="w-full h-[520px] object-cover" width={1200} height={900} loading="lazy" />
          </div>
          <div className="absolute -bottom-8 ltr:-left-8 rtl:-right-8 bg-gradient-primary rounded-2xl p-6 shadow-glow max-w-[220px]">
            <div className="text-4xl font-black text-primary-foreground">+15</div>
            <div className="text-sm text-primary-foreground/90 font-bold mt-1">{t.about.years}</div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-brand font-bold text-sm tracking-widest">{t.about.eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            {t.about.title1} <span className="text-brand">{t.about.title2}</span> {t.about.title3}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.about.body}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {t.about.features.map((f) => (
              <li key={f} className="flex items-center gap-2 bg-surface border border-border rounded-lg px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-16">
          <div className="text-brand font-bold text-sm tracking-widest mb-3">{t.testimonials.eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-black">{t.testimonials.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="bg-background border border-border rounded-2xl p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6">"{item.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center font-black text-primary-foreground">
                  {item.name[0]}
                </div>
                <div className="font-bold">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useI18n();
  const cards = [
    { icon: Phone, label: t.cta.callLabel, value: WHATSAPP_DISPLAY, href: "tel:+966559527343" },
    { icon: MapPin, label: t.cta.locLabel, value: t.cta.locValue, href: MAP_URL },
    { icon: Clock, label: t.cta.hoursLabel, value: t.cta.hoursValue, href: undefined as string | undefined },
  ];
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="relative bg-gradient-hero rounded-3xl p-10 md:p-16 overflow-hidden border border-border shadow-card">
          <div className="absolute inset-0 diagonal-stripe opacity-40" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                {t.cta.title1} <span className="text-brand">{t.cta.title2}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">{t.cta.sub}</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+966559527343" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-glow hover:scale-105 transition">
                  <Phone className="w-5 h-5" />
                  {t.cta.call}
                </a>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-surface/60 backdrop-blur px-8 py-4 rounded-xl font-bold hover:bg-surface transition"
                >
                  <MapPin className="w-5 h-5" />
                  {t.cta.map}
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {cards.map((c) => (
                <div key={c.label} className="flex items-center gap-4 bg-background/60 backdrop-blur border border-border rounded-xl p-5">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                    <c.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="font-bold hover:text-brand transition">
                        {c.value}
                      </a>
                    ) : (
                      <div className="font-bold">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcons({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const links = [
    { label: t.social.whatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, Icon: MessageCircle, color: "hover:text-[#25D366]" },
    { label: t.social.instagram, href: "https://instagram.com/fourxservice", Icon: Instagram, color: "hover:text-[#E4405F]" },
    { label: t.social.tiktok, href: "https://www.tiktok.com/@fourxservice", Icon: Music2, color: "hover:text-foreground" },
    { label: t.social.youtube, href: "https://www.youtube.com/@fourxservice", Icon: Youtube, color: "hover:text-[#FF0000]" },
    { label: t.social.threads, href: "https://www.threads.net/@fourxservice", Icon: AtSign, color: "hover:text-foreground" },
    { label: t.social.facebook, href: "https://www.facebook.com/4xservice", Icon: Facebook, color: "hover:text-[#1877F2]" },
    { label: "X", href: "https://x.com/4xservice", Icon: Twitter, color: "hover:text-foreground" },
  ];
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map(({ label, href, Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`w-10 h-10 grid place-items-center rounded-full border border-border bg-background text-muted-foreground transition hover:scale-110 hover:border-current ${color}`}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-widest mb-4">{t.gallery.eyebrow}</span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            {t.gallery.title1} <span className="text-brand">{t.gallery.title2}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.gallery.sub}</p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((g, i) => {
            const caption = t.gallery.captions[g.key];
            return (
              <figure key={i} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-border bg-background group relative">
                <img src={g.src} alt={caption} loading="lazy" className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs font-medium text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                  {caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="4X Service" className="h-10 w-10" />
            <div>
              <div className="font-black">{t.nav.brand}</div>
              <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} {t.footer.rights}</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-brand">{t.nav.services}</a>
            <a href="#offers" className="hover:text-brand">{t.nav.offers}</a>
            <a href="#branches" className="hover:text-brand">{t.nav.branches}</a>
            <a href="#about" className="hover:text-brand">{t.nav.about}</a>
            <a href="#contact" className="hover:text-brand">{t.footer.contact}</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="text-sm text-muted-foreground font-semibold">{t.footer.follow}</div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

function QuoteForm() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", service: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const quoteSchema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, { message: t.quote.errName }).max(60, { message: t.quote.errNameLong }),
        phone: z
          .string()
          .trim()
          .regex(/^(\+?966|0)?5\d{8}$/, { message: t.quote.errPhone }),
        service: z.string().min(1, { message: t.quote.errService }),
        notes: z.string().trim().max(300, { message: t.quote.errNotes }).optional(),
      }),
    [t],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string") fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error(t.quote.toastError);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { name, phone, service, notes } = result.data;
    const message =
      `${t.quote.waTitle}%0A` +
      `${t.quote.waName}: ${encodeURIComponent(name)}%0A` +
      `${t.quote.waPhone}: ${encodeURIComponent(phone)}%0A` +
      `${t.quote.waService}: ${encodeURIComponent(service)}` +
      (notes ? `%0A${t.quote.waNotes}: ${encodeURIComponent(notes)}` : "");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success(t.quote.toastSuccess);
    setForm({ name: "", phone: "", service: "", notes: "" });
    setSubmitting(false);
  };

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const fieldClass = (k: string) =>
    `w-full bg-background border rounded-xl px-4 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-primary/50 ${
      errors[k] ? "border-destructive" : "border-border focus:border-primary"
    }`;

  return (
    <section id="quote" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 lg:px-10 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2 space-y-6">
          <div className="text-brand font-bold text-sm tracking-widest">{t.quote.eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            {t.quote.title1} <span className="text-brand">{t.quote.title2}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t.quote.sub}</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:scale-105 transition shadow-glow"
          >
            <MessageCircle className="w-5 h-5" />
            {WHATSAPP_DISPLAY}
          </a>
          <div className="pt-2">
            <div className="text-sm font-bold text-muted-foreground mb-3">{t.quote.follow}</div>
            <SocialIcons />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-background border border-border rounded-3xl p-6 md:p-8 shadow-card space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold mb-2">{t.quote.name}</label>
              <input
                type="text"
                value={form.name}
                maxLength={60}
                onChange={(e) => update("name", e.target.value)}
                placeholder={t.quote.namePh}
                className={fieldClass("name")}
                autoComplete="name"
              />
              {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{t.quote.phone}</label>
              <input
                type="tel"
                dir="ltr"
                value={form.phone}
                maxLength={15}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="05xxxxxxxx"
                className={`${fieldClass("phone")} rtl:text-right ltr:text-left`}
                autoComplete="tel"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1.5">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">{t.quote.service}</label>
            <select
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className={fieldClass("service")}
            >
              <option value="">{t.quote.selectService}</option>
              {t.quote.options.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-destructive text-xs mt-1.5">{errors.service}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">
              {t.quote.notes} <span className="text-muted-foreground font-normal">{t.quote.optional}</span>
            </label>
            <textarea
              value={form.notes}
              maxLength={300}
              rows={3}
              onChange={(e) => update("notes", e.target.value)}
              placeholder={t.quote.notesPh}
              className={`${fieldClass("notes")} resize-none`}
            />
            {errors.notes && <p className="text-destructive text-xs mt-1.5">{errors.notes}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-black py-4 rounded-xl shadow-glow hover:scale-[1.01] transition disabled:opacity-60"
          >
            <Send className="w-5 h-5" />
            {t.quote.submit}
          </button>
          <p className="text-xs text-muted-foreground text-center">{t.quote.hint}</p>
        </form>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  const { t } = useI18n();
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.waAria}
      className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
    </a>
  );
}

function TeaWorld() {
  const { t } = useI18n();
  return (
    <section id="tea" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={teaImg}
              alt={t.tea.alt}
              loading="lazy"
              width={1280}
              height={860}
              className="relative rounded-3xl border border-border shadow-card w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-brand font-bold text-sm tracking-widest mb-4">
              <CupSoda className="w-4 h-4" />
              {t.tea.eyebrow}
            </div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              {t.tea.title1} <span className="text-brand">{t.tea.title2}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.tea.body}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {t.tea.chips.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  {c}
                </span>
              ))}
            </div>

            <a
              href="https://maps.app.goo.gl/6fZrM53H9Wa7XsUM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-7 py-4 rounded-xl shadow-glow hover:scale-105 transition-transform"
            >
              <Navigation className="w-5 h-5" />
              {t.tea.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stations() {
  const { t, lang } = useI18n();
  return (
    <section id="stations" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-brand font-bold text-sm tracking-widest mb-3">{t.stations.eyebrow}</div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">{t.stations.title(stations.length)}</h2>
          <p className="text-muted-foreground mt-4 text-lg">{t.stations.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stations.map((st) => (
            <div
              key={st.id}
              className="group relative bg-surface border border-border rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow group-hover:scale-110 transition-transform">
                  <Fuel className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-black leading-tight">{lang === "ar" ? st.name : st.nameEn}</h3>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span className="truncate">{t.stations.tap}</span>
              </div>

              <a
                href={st.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground rounded-xl py-3 text-sm font-bold hover:scale-[1.02] transition shadow-glow"
              >
                <Navigation className="w-4 h-4" />
                {t.stations.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Branches() {
  const { t, lang } = useI18n();
  const [city, setCity] = useState<string>("all");
  const cities = useMemo(() => ["all", ...Array.from(new Set(branches.map((b) => b.city)))], []);
  const list = city === "all" ? branches : branches.filter((b) => b.city === city);
  const cityLabel = (c: string) =>
    c === "all" ? t.branches.all : lang === "ar" ? c : branches.find((b) => b.city === c)?.cityEn ?? c;

  return (
    <section id="branches" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-brand font-bold text-sm tracking-widest mb-3">{t.branches.eyebrow}</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">{t.branches.title(branches.length)}</h2>
            <p className="text-muted-foreground mt-4 text-lg">{t.branches.sub}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition ${
                  city === c
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "bg-surface border-border hover:border-primary/50"
                }`}
              >
                {cityLabel(c)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((b) => (
            <div
              key={b.id}
              className="group relative bg-surface border border-border rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-black leading-tight">{lang === "ar" ? b.name : b.nameEn}</h3>
                  <div className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3.5 h-3.5 text-brand" />
                    {lang === "ar" ? b.city : b.cityEn}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <Wrench className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {(lang === "ar" ? b.services : b.servicesEn).map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto grid grid-cols-2 gap-2">
                <a
                  href={`tel:+966${b.phone.replace(/^0/, "")}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-background border border-border rounded-xl py-2.5 text-sm font-bold hover:border-primary transition"
                >
                  <Phone className="w-4 h-4 text-brand" />
                  {t.branches.call}
                </a>
                <a
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-gradient-primary text-primary-foreground rounded-xl py-2.5 text-sm font-bold hover:scale-[1.02] transition"
                >
                  <Navigation className="w-4 h-4" />
                  {t.branches.location}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
