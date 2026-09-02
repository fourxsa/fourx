export type Branch = {
  id: number;
  name: string;
  nameEn: string;
  city: string;
  cityEn: string;
  mapUrl: string;
  services: string[];
  servicesEn: string[];
  phone: string;
};

const SERVICE_EN: Record<string, string> = {
  "تبديل زيوت": "Oil Change",
  "بطاريات": "Batteries",
  "إطارات": "Tires",
  "مغسلة سيارات": "Car Wash",
  "زينة سيارات": "Accessories",
};

const CITY_EN: Record<string, string> = {
  "الرياض": "Riyadh",
  "القصيم": "Qassim",
  "الدمام": "Dammam",
};

const s = (label: string): string[] => {
  const map: Record<string, string> = {
    "زيوت": "تبديل زيوت",
    "بطاريات": "بطاريات",
    "اطارات": "إطارات",
    "مغسلة": "مغسلة سيارات",
    "زينة": "زينة سيارات",
  };
  const out: string[] = [];
  for (const key of Object.keys(map)) if (label.includes(key)) out.push(map[key]);
  return out.length ? out : ["تبديل زيوت"];
};

export const branches: Branch[] = [
  { id: 1, name: "فرع النجاح 1", nameEn: "Al-Najah Branch 1", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/Gf4f5YQeDoZvwyS27", services: s("زيوت بطاريات اطارات زينة"), servicesEn: s("زيوت بطاريات اطارات زينة").map((x) => SERVICE_EN[x]), phone: "0536075012" },
  { id: 2, name: "فرع النجاح 2", nameEn: "Al-Najah Branch 2", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/7XW1psHX2XGycpLp6", services: s("زيوت اطارات بطاريات مغسلة"), servicesEn: s("زيوت اطارات بطاريات مغسلة").map((x) => SERVICE_EN[x]), phone: "0545089619" },
  { id: 3, name: "فرع النجاح 3", nameEn: "Al-Najah Branch 3", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/QvGdiVzBSntCumCo9", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0502744928" },
  { id: 4, name: "فرع اليرموك", nameEn: "Al-Yarmouk Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/vrMwtvBUjCa5iyGSA", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0502744928" },
  { id: 5, name: "فرع نجاحات", nameEn: "Najahat Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/X59n9QNb18JEvcBC7", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0502744928" },
  { id: 6, name: "فرع المونسية 1", nameEn: "Al-Munisiyah Branch 1", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/Hkm8UFC98EuouL1K7", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0554682848" },
  { id: 7, name: "فرع المونسية 2", nameEn: "Al-Munisiyah Branch 2", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/ouGBHFWTArSJ9dnC9", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0554682848" },
  { id: 8, name: "فرع البديعة", nameEn: "Al-Badiah Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/YHArp73cu7Cx579i8", services: s("زيوت"), servicesEn: s("زيوت").map((x) => SERVICE_EN[x]), phone: "0544917665" },
  { id: 9, name: "فرع التنال", nameEn: "Al-Tanal Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/MwrDWHztnExmAmkx8", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0532987872" },
  { id: 10, name: "فرع الفيحاء", nameEn: "Al-Faiha Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/YSS4cer56LW8Lhnt6", services: s("زيوت"), servicesEn: s("زيوت").map((x) => SERVICE_EN[x]), phone: "0544917665" },
  { id: 11, name: "فرع السويدي", nameEn: "Al-Suwaidi Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/E7TJ6FN4bnioKuC46", services: s("زيوت بطاريات اطارات مغسلة"), servicesEn: s("زيوت بطاريات اطارات مغسلة").map((x) => SERVICE_EN[x]), phone: "0508104122" },
  { id: 12, name: "فرع الأفق", nameEn: "Al-Ufuq Branch", city: "القصيم", cityEn: CITY_EN["القصيم"], mapUrl: "https://maps.app.goo.gl/ftXQihFz7Nndda1a8", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0570851033" },
  { id: 13, name: "فرع الصناعية", nameEn: "Industrial Area Branch", city: "القصيم", cityEn: CITY_EN["القصيم"], mapUrl: "https://share.google/H2QNyTyabnP4mRpGo", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0553917741" },
  { id: 14, name: "فرع مبروكة", nameEn: "Mabrouka Branch", city: "القصيم", cityEn: CITY_EN["القصيم"], mapUrl: "https://maps.app.goo.gl/NdyxHpJvFZXaLyAd8", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0544006487" },
  { id: 15, name: "فرع الريان", nameEn: "Al-Rayyan Branch", city: "القصيم", cityEn: CITY_EN["القصيم"], mapUrl: "https://share.google/Lk7iKu37MAlU6z8uS", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0536909764" },
  { id: 16, name: "فرع التحلية", nameEn: "Al-Tahliyah Branch", city: "الدمام", cityEn: CITY_EN["الدمام"], mapUrl: "https://maps.app.goo.gl/Vx9NuNuqDUVTMBGq9", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0544917665" },
  { id: 17, name: "فرع البيان", nameEn: "Al-Bayan Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/sPjM8V8WFCVsT9wWA", services: s("زيوت بطاريات اطارات"), servicesEn: s("زيوت بطاريات اطارات").map((x) => SERVICE_EN[x]), phone: "0505989387" },
  { id: 18, name: "فرع العقيق", nameEn: "Al-Aqiq Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/8riQxTy9as9NJy8v7", services: s("زيوت بطاريات اطارات مغسلة"), servicesEn: s("زيوت بطاريات اطارات مغسلة").map((x) => SERVICE_EN[x]), phone: "0576213034" },
  { id: 19, name: "فرع القادسية", nameEn: "Al-Qadisiyah Branch", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/MUps3HQAgmpWeGMP8", services: s("زيوت"), servicesEn: s("زيوت").map((x) => SERVICE_EN[x]), phone: "0532718909" },
  { id: 20, name: "محل طريق الملك عبدالله", nameEn: "King Abdullah Road Shop", city: "الرياض", cityEn: CITY_EN["الرياض"], mapUrl: "https://maps.app.goo.gl/Y3cgQc2xkBoCkqvJA?g_st=awb", services: s("زيوت اطارات"), servicesEn: s("زيوت اطارات").map((x) => SERVICE_EN[x]), phone: "0502744928" },
];
