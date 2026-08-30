import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "ar" | "en";

export const dict = {
  ar: {
    dir: "rtl" as const,
    nav: {
      services: "الخدمات",
      offers: "العروض",
      products: "المنتجات",
      catalog: "أنواع الزيوت",
      gallery: "معرض الصور",
      stations: "المحطات",
      tea: "عالم الشاي",
      branches: "الفروع",
      about: "من نحن",
      contact: "تواصل معنا",
      quote: "اطلب عرض",
      brand: "فوراكس سيرفس",
    },
    hero: {
      badge: "مركز صيانة السيارات #1 في المنطقة",
      title1: "سيارتك تستحق",
      title2: "خدمة استثنائية",
      sub: "زيوت أصلية، أجهزة فحص متطورة، وفريق فني معتمد. نعتني بسيارتك كأنها سيارتنا — بسرعة واحترافية.",
      ctaOffers: "شاهد العروض الحصرية",
      ctaServices: "خدماتنا",
      stats: [
        { n: "+15", l: "سنة خبرة" },
        { n: "+25K", l: "عميل راضٍ" },
        { n: "24/7", l: "دعم فني" },
      ],
      todayOffer: "عرض اليوم",
      freeAc: "فلتر مكيف مجاناً",
      freeAcSub: "عند تغيير فلتر الهواء",
      heroAlt: "خدمة السيارات",
      detailAlt: "تلميع السيارات",
    },
    marquee: ["زيوت أصلية", "فحص مجاني", "قطع معتمدة", "فنيون خبراء", "خدمة سريعة"],
    services: {
      eyebrow: "خدماتنا",
      title1: "كل ما تحتاجه سيارتك",
      title2: "تحت سقف واحد",
      items: [
        { title: "تغيير الزيوت", desc: "زيوت أصلية عالية الجودة لجميع أنواع المركبات مع فلاتر معتمدة." },
        { title: "زينة وتلميع", desc: "تلميع خارجي، تنظيف داخلي، وحماية سيراميك احترافية." },
        { title: "صيانة شاملة", desc: "فحص محرك، فرامل، تعليق، ونظام تبريد بأحدث الأجهزة." },
        { title: "فحص مجاني", desc: "فحص كمبيوتر شامل مجاناً مع كل خدمة زيت." },
        { title: "قطع أصلية", desc: "قطع غيار معتمدة مع ضمان على الخدمة." },
        { title: "غسيل داخلي وخارجي", desc: "تنظيف عميق للمقاعد والفرش بأدوات متخصصة." },
      ],
    },
    products: {
      eyebrow: "منتجاتنا",
      title1: "زيوت",
      title2: "الأصلية",
      sub: "زيوت محرك وناقل حركة تخليقية بتقنية أمريكية، مصنوعة من زيوت بكر 100% من أرامكو.",
      all: "الكل",
      inquire: "استفسر عبر واتساب",
      inquiryMsg: (n: string) => `مرحباً، أبغى استفسر عن منتج ${n}`,
    },
    catalog: {
      eyebrow: "كتالوج الزيوت",
      title1: "أنواع",
      title2: "الزيوت",
      title3: "ومواصفاتها",
      sub: "جميع منتجات روك مصنعة من زيوت بكر 100% من أرامكو بتقنية أمريكية لضمان الجودة والاعتمادية في أصعب الظروف المناخية.",
      count: (n: number) => `${n} منتجات`,
      usage: "الاستخدام: ",
      groups: {
        "بنزين": "زيوت محركات البنزين",
        "ديزل": "زيوت محركات الديزل",
        "ناقل حركة": "زيوت ناقل الحركة - القير",
      } as Record<string, string>,
    },
    offers: {
      badge: "عروض حصرية لفترة محدودة",
      title: "اغتنم العرض قبل انتهائه",
      items: [
        { title: "4 علب زيت روك 5000", subtitle: "مع فلتر زيت + فحص مجاني", tag: "الأكثر طلباً" },
        { title: "4 علب زيت روك 10000", subtitle: "مع فلتر زيت + فحص مجاني", tag: "عرض مميز" },
      ],
      features: ["4 علب زيت أصلي", "فلتر زيت جديد", "فحص مجاني شامل"],
      book: "احجز موعدك الآن",
      extraTag: "عرض إضافي",
      extraTitle: "احصل على فلتر المكيف مجاناً",
      extraSub: "عند تغيير فلتر الهواء في أي زيارة",
      extraCta: "استفد الآن",
    },
    quote: {
      eyebrow: "طلب عرض سعر",
      title1: "احصل على عرضك خلال",
      title2: "دقائق",
      sub: "املأ النموذج وسنتواصل معك عبر واتساب فوراً بأفضل عرض يناسب سيارتك.",
      follow: "تابعنا",
      name: "الاسم الكامل",
      namePh: "مثال: عبدالله",
      phone: "رقم الجوال",
      service: "الخدمة المطلوبة",
      selectService: "— اختر الخدمة —",
      notes: "ملاحظات",
      optional: "(اختياري)",
      notesPh: "نوع السيارة، الموديل، أو أي تفاصيل إضافية",
      submit: "إرسال الطلب عبر واتساب",
      hint: "بالضغط على إرسال سيتم توجيهك إلى واتساب لإكمال طلبك.",
      errName: "الاسم يجب أن يكون حرفين على الأقل",
      errNameLong: "الاسم طويل جداً",
      errPhone: "رقم جوال سعودي غير صحيح",
      errService: "اختر نوع الخدمة",
      errNotes: "الملاحظات طويلة جداً",
      toastError: "يرجى تصحيح الحقول المطلوبة",
      toastSuccess: "تم فتح واتساب لإرسال طلبك",
      options: ["تغيير زيت المحرك", "غسيل وتلميع", "فحص شامل", "صيانة عامة", "زينة وإكسسوارات", "أخرى"],
      waTitle: "طلب عرض سعر من موقع 4X Service",
      waName: "الاسم",
      waPhone: "الجوال",
      waService: "الخدمة",
      waNotes: "ملاحظات",
    },
    about: {
      eyebrow: "من نحن",
      title1: "نجمع بين",
      title2: "الخبرة",
      title3: "والتقنية الحديثة",
      body: "فوراكس سيرفس مركز متخصص في خدمات السيارات، نقدم لك تجربة صيانة متكاملة من تغيير الزيوت والفلاتر إلى العناية والتلميع والصيانة الشاملة. نستخدم زيوت وقطع أصلية معتمدة، ويقودنا فريق من الفنيين الخبراء.",
      features: ["زيوت أصلية 100%", "ضمان على الخدمة", "أجهزة فحص متطورة", "خدمة سريعة", "فنيون معتمدون"],
      years: "سنة من الخبرة في خدمة السيارات",
      alt: "ورشة السيارات",
    },
    tea: {
      eyebrow: "عالم الشاي",
      title1: "سيارتك في العناية…",
      title2: "وأنت مع كوب شاي",
      body: "خلّ الفني يشتغل على سيارتك، وخذ لك جلسة هدوء مع كوب شاي دافئ. عندنا الانتظار له طعم ثاني — ضيافة كريمة، رائحة نعناع، ووقت يمر بسرعة.",
      chips: ["شاي طازج على مدار اليوم", "ركن انتظار مريح", "ضيافة على حسابنا"],
      cta: "موقع عالم الشاي على الخريطة",
      alt: "عالم الشاي - ركن الضيافة في فوراكس سيرفس",
    },
    stations: {
      eyebrow: "شبكة محطاتنا",
      title: (n: number) => `${n} محطات في خدمتك`,
      sub: "تجد محطات فوراكس سيرفس في أبرز المواقع — خدمات سريعة وأصلية على مدار طريقك.",
      tap: "اضغط لعرض الموقع على الخريطة",
      cta: "الاتجاه إلى المحطة",
    },
    branches: {
      eyebrow: "فروعنا",
      title: (n: number) => `${n}+ فرع في خدمتك`,
      sub: "نغطي الرياض، القصيم، والدمام — اختر أقرب فرع إليك.",
      all: "الكل",
      call: "اتصال",
      location: "الموقع",
    },
    gallery: {
      eyebrow: "معرض الصور",
      title1: "لحظات من",
      title2: "فوراكس سيرفس",
      sub: "عروضنا الحصرية، خدماتنا المجانية، ومنتجاتنا الأصلية — كل ما تحتاج معرفته في صور.",
      captions: {
        roc: "زيوت ROC GZX الأصلية",
        promo1: "عرض خاص - 4 علب زيت روك 5000",
        promo2: "عرض خاص - 4 علب زيت روك 10000",
        free: "الخدمات المجانية",
        info: "معلومات فوراكس سيرفس",
        terms: "الشروط والأحكام",
        branch: "من داخل الفرع",
      },
    },
    testimonials: {
      eyebrow: "آراء عملائنا",
      title: "يثق بنا الآلاف من قائدي السيارات",
      items: [
        { name: "أحمد الشمري", text: "خدمة ممتازة وسرعة في الإنجاز. الفريق محترف جداً." },
        { name: "فهد العتيبي", text: "أفضل مركز جربته لتغيير الزيت، فحص شامل ونصائح مفيدة." },
        { name: "خالد المطيري", text: "تعامل راقي ونظافة عالية. سيارتي طلعت كالجديدة بعد التلميع." },
      ],
    },
    cta: {
      title1: "جاهز لتجربة خدمة",
      title2: "من نوع مختلف؟",
      sub: "اتصل بنا الآن أو زر مركزنا واحصل على فحص مجاني شامل لسيارتك.",
      call: "اتصل الآن",
      map: "موقعنا على الخريطة",
      callLabel: "اتصل بنا",
      locLabel: "الموقع",
      locValue: "الرياض - حي إشبيليا، شارع النجاح",
      hoursLabel: "ساعات العمل",
      hoursValue: "السبت - الخميس: 8 ص - 4 م",
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
      follow: "تابعنا على وسائل التواصل",
      contact: "تواصل",
    },
    social: {
      whatsapp: "واتساب",
      instagram: "انستقرام",
      tiktok: "تيك توك",
      youtube: "يوتيوب",
      threads: "ثريدز",
      facebook: "فيسبوك",
    },
    waAria: "تواصل عبر واتساب",
    switchLabel: "English",
  },
  en: {
    dir: "ltr" as const,
    nav: {
      services: "Services",
      offers: "Offers",
      products: "Products",
      catalog: "Oil Types",
      gallery: "Gallery",
      stations: "Stations",
      tea: "Tea World",
      branches: "Branches",
      about: "About",
      contact: "Contact",
      quote: "Get a Quote",
      brand: "4X Service",
    },
    hero: {
      badge: "#1 car service center in the region",
      title1: "Your car deserves",
      title2: "exceptional service",
      sub: "Genuine oils, advanced diagnostic equipment, and a certified technical team. We treat your car like our own — fast and professional.",
      ctaOffers: "See exclusive offers",
      ctaServices: "Our services",
      stats: [
        { n: "15+", l: "Years of experience" },
        { n: "25K+", l: "Happy customers" },
        { n: "24/7", l: "Technical support" },
      ],
      todayOffer: "Today's offer",
      freeAc: "Free AC filter",
      freeAcSub: "With every air filter change",
      heroAlt: "Car service",
      detailAlt: "Car detailing",
    },
    marquee: ["Genuine oils", "Free inspection", "Certified parts", "Expert technicians", "Fast service"],
    services: {
      eyebrow: "Our services",
      title1: "Everything your car needs",
      title2: "under one roof",
      items: [
        { title: "Oil change", desc: "Premium genuine oils for every vehicle, with certified filters." },
        { title: "Detailing & polish", desc: "Exterior polishing, interior cleaning, and professional ceramic coating." },
        { title: "Full maintenance", desc: "Engine, brakes, suspension, and cooling checks with the latest equipment." },
        { title: "Free inspection", desc: "Complete computer diagnostics free with every oil service." },
        { title: "Genuine parts", desc: "Certified spare parts backed by a service warranty." },
        { title: "Interior & exterior wash", desc: "Deep cleaning of seats and upholstery with specialized tools." },
      ],
    },
    products: {
      eyebrow: "Our products",
      title1: "Genuine",
      title2: "oils",
      sub: "Synthetic engine and transmission oils made with American technology from 100% virgin Aramco base oils.",
      all: "All",
      inquire: "Ask on WhatsApp",
      inquiryMsg: (n: string) => `Hello, I'd like to ask about ${n}`,
    },
    catalog: {
      eyebrow: "Oil catalog",
      title1: "Oil",
      title2: "types",
      title3: "and specifications",
      sub: "All ROC products are made from 100% virgin Aramco base oils with American technology for reliable quality in the harshest climates.",
      count: (n: number) => `${n} products`,
      usage: "Usage: ",
      groups: {
        "بنزين": "Gasoline Engine Oils",
        "ديزل": "Diesel Engine Oils",
        "ناقل حركة": "Transmission Fluids",
      } as Record<string, string>,
    },
    offers: {
      badge: "Exclusive offers for a limited time",
      title: "Grab the offer before it ends",
      items: [
        { title: "4 bottles of ROC 5000", subtitle: "With oil filter + free inspection", tag: "Most popular" },
        { title: "4 bottles of ROC 10000", subtitle: "With oil filter + free inspection", tag: "Special offer" },
      ],
      features: ["4 bottles of genuine oil", "New oil filter", "Free full inspection"],
      book: "Book your appointment",
      extraTag: "Bonus offer",
      extraTitle: "Get your AC filter free",
      extraSub: "With any air filter change",
      extraCta: "Claim it now",
    },
    quote: {
      eyebrow: "Request a quote",
      title1: "Get your quote in",
      title2: "minutes",
      sub: "Fill in the form and we'll reach you on WhatsApp right away with the best offer for your car.",
      follow: "Follow us",
      name: "Full name",
      namePh: "e.g. Abdullah",
      phone: "Mobile number",
      service: "Requested service",
      selectService: "— Select a service —",
      notes: "Notes",
      optional: "(optional)",
      notesPh: "Car make, model, or any extra details",
      submit: "Send request on WhatsApp",
      hint: "Pressing send will take you to WhatsApp to complete your request.",
      errName: "Name must be at least 2 characters",
      errNameLong: "Name is too long",
      errPhone: "Invalid Saudi mobile number",
      errService: "Please choose a service",
      errNotes: "Notes are too long",
      toastError: "Please correct the required fields",
      toastSuccess: "WhatsApp opened to send your request",
      options: ["Engine oil change", "Wash & polish", "Full inspection", "General maintenance", "Accessories", "Other"],
      waTitle: "Quote request from the 4X Service website",
      waName: "Name",
      waPhone: "Mobile",
      waService: "Service",
      waNotes: "Notes",
    },
    about: {
      eyebrow: "About us",
      title1: "We combine",
      title2: "experience",
      title3: "with modern technology",
      body: "4X Service is a specialized car service center offering a complete maintenance experience — from oil and filter changes to detailing, polishing, and full servicing. We use genuine certified oils and parts, led by a team of expert technicians.",
      features: ["100% genuine oils", "Service warranty", "Advanced diagnostics", "Fast service", "Certified technicians"],
      years: "Years of experience in car care",
      alt: "Car workshop",
    },
    tea: {
      eyebrow: "Tea World",
      title1: "Your car gets the care…",
      title2: "you get the tea",
      body: "Let our technician handle the car while you unwind with a warm cup of tea. Waiting tastes different here — warm hospitality, fresh mint, and time that flies.",
      chips: ["Fresh tea all day", "Comfortable lounge", "Hospitality on us"],
      cta: "Tea World on the map",
      alt: "Tea World — the hospitality corner at 4X Service",
    },
    stations: {
      eyebrow: "Our station network",
      title: (n: number) => `${n} stations at your service`,
      sub: "Find 4X Service stations at key locations — fast, genuine service all along your route.",
      tap: "Tap to view on the map",
      cta: "Navigate to station",
    },
    branches: {
      eyebrow: "Our branches",
      title: (n: number) => `${n}+ branches at your service`,
      sub: "We cover Riyadh, Qassim, and Dammam — pick the branch closest to you.",
      all: "All",
      call: "Call",
      location: "Location",
    },
    gallery: {
      eyebrow: "Gallery",
      title1: "Moments from",
      title2: "4X Service",
      sub: "Our exclusive offers, free services, and genuine products — everything you need to know in pictures.",
      captions: {
        roc: "Genuine ROC GZX oils",
        promo1: "Special offer - 4 bottles of ROC 5000",
        promo2: "Special offer - 4 bottles of ROC 10000",
        free: "Free services",
        info: "4X Service information",
        terms: "Terms & conditions",
        branch: "Inside the branch",
      },
    },
    testimonials: {
      eyebrow: "Customer reviews",
      title: "Trusted by thousands of drivers",
      items: [
        { name: "Ahmed Al-Shammari", text: "Excellent service and quick turnaround. A very professional team." },
        { name: "Fahad Al-Otaibi", text: "The best center I've tried for oil changes — full inspection and useful advice." },
        { name: "Khalid Al-Mutairi", text: "Great treatment and spotless cleanliness. My car looked brand new after the polish." },
      ],
    },
    cta: {
      title1: "Ready for a service experience",
      title2: "of a different kind?",
      sub: "Call us now or visit our center and get a complete free inspection for your car.",
      call: "Call now",
      map: "Find us on the map",
      callLabel: "Call us",
      locLabel: "Location",
      locValue: "Riyadh - Ishbiliyah, Al-Najah Street",
      hoursLabel: "Working hours",
      hoursValue: "Saturday - Thursday: 8 AM - 4 PM",
    },
    footer: {
      rights: "All rights reserved",
      follow: "Follow us on social media",
      contact: "Contact",
    },
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      threads: "Threads",
      facebook: "Facebook",
    },
    waAria: "Chat on WhatsApp",
    switchLabel: "العربية",
  },
} as const;

export type Dict = (typeof dict)["ar"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; dir: "rtl" | "ltr" };

const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "fourx-lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: dict[lang] as unknown as Dict,
      setLang: (l: Lang) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
