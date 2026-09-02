export type Station = {
  id: number;
  name: string;
  nameEn: string;
  mapUrl: string;
};

export const stations: Station[] = [
  { id: 1, name: "محطة النجاح", nameEn: "Al-Najah Station", mapUrl: "https://maps.app.goo.gl/tdUa5gMbgmFSEtiK6" },
  { id: 2, name: "محطة الصواري عزه الخبر", nameEn: "Al-Sawari Azzah Station - Khobar", mapUrl: "https://maps.app.goo.gl/MJcZ4ZWXuppxWnEw9" },
  { id: 3, name: "محطة نجد لبن", nameEn: "Najd Laban Station", mapUrl: "https://maps.app.goo.gl/v88xqQkn2sxEZjeSA" },
  { id: 4, name: "محطة التنال", mapUrl: "https://maps.app.goo.gl/pBrLvvbr4QB1GPwo8", nameEn: "Al-Tanal Station" },
  { id: 5, name: "محطة اشبيليا", nameEn: "Ishbiliyah Station", mapUrl: "https://maps.app.goo.gl/7XW1psHX2XGycpLp6?g_st=awb" },
  { id: 6, name: "محطة الفيحاء", nameEn: "Al-Faiha Station", mapUrl: "https://maps.app.goo.gl/YSS4cer56LW8Lhnt6?g_st=awb" },
  { id: 7, name: "محطة السويدي", nameEn: "Al-Suwaidi Station", mapUrl: "https://maps.app.goo.gl/E7TJ6FN4bnioKuC46?g_st=awb" },
  { id: 8, name: "محطة القدس", nameEn: "Al-Quds Station", mapUrl: "https://maps.app.goo.gl/DhFPgibrQLm3mZfn9?g_st=awb" },
];
