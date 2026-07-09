export type Branch = {
  id: number;
  name: string;
  city: string;
  mapUrl: string;
  services: string[];
  phone: string;
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
  { id: 1, name: "فرع النجاح 1", city: "الرياض", mapUrl: "https://maps.app.goo.gl/Gf4f5YQeDoZvwyS27", services: s("زيوت بطاريات اطارات زينة"), phone: "0536075012" },
  { id: 2, name: "فرع النجاح 2", city: "الرياض", mapUrl: "https://maps.app.goo.gl/7XW1psHX2XGycpLp6", services: s("زيوت اطارات بطاريات مغسلة"), phone: "0545089619" },
  { id: 3, name: "فرع النجاح 3", city: "الرياض", mapUrl: "https://maps.app.goo.gl/QvGdiVzBSntCumCo9", services: s("زيوت بطاريات اطارات"), phone: "0502744928" },
  { id: 4, name: "فرع اليرموك", city: "الرياض", mapUrl: "https://maps.app.goo.gl/vrMwtvBUjCa5iyGSA", services: s("زيوت بطاريات اطارات"), phone: "0502744928" },
  { id: 5, name: "فرع نجاحات", city: "الرياض", mapUrl: "https://maps.app.goo.gl/X59n9QNb18JEvcBC7", services: s("زيوت بطاريات اطارات"), phone: "0502744928" },
  { id: 6, name: "فرع المونسية 1", city: "الرياض", mapUrl: "https://maps.app.goo.gl/Hkm8UFC98EuouL1K7", services: s("زيوت بطاريات اطارات"), phone: "0554682848" },
  { id: 7, name: "فرع المونسية 2", city: "الرياض", mapUrl: "https://maps.app.goo.gl/ouGBHFWTArSJ9dnC9", services: s("زيوت بطاريات اطارات"), phone: "0554682848" },
  { id: 8, name: "فرع البديعة", city: "الرياض", mapUrl: "https://maps.app.goo.gl/YHArp73cu7Cx579i8", services: s("زيوت"), phone: "0544917665" },
  { id: 9, name: "فرع التنال", city: "الرياض", mapUrl: "https://maps.app.goo.gl/MwrDWHztnExmAmkx8", services: s("زيوت بطاريات اطارات"), phone: "0532987872" },
  { id: 10, name: "فرع الفيحاء", city: "الرياض", mapUrl: "https://maps.app.goo.gl/YSS4cer56LW8Lhnt6", services: s("زيوت"), phone: "0544917665" },
  { id: 11, name: "فرع السويدي", city: "الرياض", mapUrl: "https://maps.app.goo.gl/E7TJ6FN4bnioKuC46", services: s("زيوت بطاريات اطارات مغسلة"), phone: "0508104122" },
  { id: 12, name: "فرع الأفق", city: "القصيم", mapUrl: "https://maps.app.goo.gl/ftXQihFz7Nndda1a8", services: s("زيوت بطاريات اطارات"), phone: "0570851033" },
  { id: 13, name: "فرع الصناعية", city: "القصيم", mapUrl: "https://share.google/H2QNyTyabnP4mRpGo", services: s("زيوت بطاريات اطارات"), phone: "0553917741" },
  { id: 14, name: "فرع مبروكة", city: "القصيم", mapUrl: "https://maps.app.goo.gl/NdyxHpJvFZXaLyAd8", services: s("زيوت بطاريات اطارات"), phone: "0544006487" },
  { id: 15, name: "فرع الريان", city: "القصيم", mapUrl: "https://share.google/Lk7iKu37MAlU6z8uS", services: s("زيوت بطاريات اطارات"), phone: "0536909764" },
  { id: 16, name: "فرع التحلية", city: "الدمام", mapUrl: "https://maps.app.goo.gl/Vx9NuNuqDUVTMBGq9", services: s("زيوت بطاريات اطارات"), phone: "0544917665" },
];
