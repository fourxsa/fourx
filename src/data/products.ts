import gzx0w20 from "@/assets/products/gzx-0w20.png";
import gzx5w20 from "@/assets/products/gzx-5w20.png";
import gzx5w30 from "@/assets/products/gzx-5w30.png";
import gzx10w30 from "@/assets/products/gzx-10w30.png";
import gzx20w50 from "@/assets/products/gzx-20w50.png";
import gzxAtfDex6 from "@/assets/products/gzx-atf-dex6.png";
import gzxCvt from "@/assets/products/gzx-cvt.png";
import rocAtfDex3 from "@/assets/products/roc-atf-dex3.png";
import rocDiesel5L from "@/assets/products/roc-super-diesel-5l.jpg";
import rocDiesel4L from "@/assets/products/roc-super-diesel-4l.jpg";
export type ProductCategory = "بنزين" | "ديزل" | "ناقل حركة";

export const CATEGORY_EN: Record<ProductCategory, string> = {
  "بنزين": "Gasoline",
  "ديزل": "Diesel",
  "ناقل حركة": "Transmission",
};

export type Product = {
  id: string;
  name: string;
  grade: string;
  category: ProductCategory;
  spec: string;
  desc: string;
  descEn: string;
  features: string;
  featuresEn: string;
  usage: string;
  usageEn: string;
  image: string;
  accent: string;
  badge?: string;
  badgeEn?: string;
};

export const products: Product[] = [
  {
    id: "gzx-0w20",
    name: "ROC GZX",
    grade: "0W-20",
    category: "بنزين",
    spec: "SAE 0W-20 · API SN",
    desc: "زيت محرك تخليقي بالكامل بتقنية أمريكية للسيارات الحديثة والهجينة.",
    descEn: "Fully synthetic engine oil with American technology for modern and hybrid cars.",
    features: "زيت تخليقي بالكامل (Fully Synthetic) يوفر حماية قصوى عند التشغيل البارد وتقليل استهلاك الوقود.",
    featuresEn: "Fully synthetic oil delivering maximum cold-start protection and lower fuel consumption.",
    usage: "السيارات الحديثة والهجينة (Hybrid) التي تتطلب لزوجة منخفضة جداً.",
    usageEn: "Modern and hybrid vehicles requiring very low viscosity.",
    image: gzx0w20,
    accent: "from-amber-500 to-yellow-600",
    badge: "الأعلى جودة",
    badgeEn: "Top quality",
  },
  {
    id: "gzx-5w20",
    name: "ROC GZX",
    grade: "5W-20",
    category: "بنزين",
    spec: "SAE 5W-20 · API SN",
    desc: "تخليقي بالكامل، لزوجة منخفضة تقلل الاحتكاك وترفع استجابة المحرك.",
    descEn: "Fully synthetic, low viscosity that cuts friction and sharpens engine response.",
    features: "زيت تخليقي بالكامل بلزوجة منخفضة لتقليل الاحتكاك الداخلي للمحرك وزيادة استجابته.",
    featuresEn: "Fully synthetic low-viscosity oil that reduces internal engine friction and improves response.",
    usage: "السيارات الأمريكية والكورية الحديثة لرفع كفاءة استهلاك الوقود.",
    usageEn: "Modern American and Korean cars, for better fuel efficiency.",
    image: gzx5w20,
    accent: "from-zinc-400 to-zinc-600",
  },
  {
    id: "gzx-5w30",
    name: "ROC GZX",
    grade: "5W-30",
    category: "بنزين",
    spec: "SAE 5W-30 · API SN",
    desc: "التوازن المثالي بين الحماية والأداء لمعظم السيارات الحديثة.",
    descEn: "The perfect balance of protection and performance for most modern cars.",
    features: "توازن مثالي بين الحماية والأداء، يتحمل درجات الحرارة العالية ويحافظ على نظافة المحرك.",
    featuresEn: "Ideal balance of protection and performance, handles high temperatures and keeps the engine clean.",
    usage: "الخيار الأكثر شيوعاً لمعظم السيارات الحديثة (تويوتا، هيونداي، كيا، نيسان).",
    usageEn: "The most popular choice for modern cars (Toyota, Hyundai, Kia, Nissan).",
    image: gzx5w30,
    accent: "from-slate-400 to-slate-600",
    badge: "الأكثر طلباً",
    badgeEn: "Most popular",
  },
  {
    id: "gzx-10w30",
    name: "ROC GZX",
    grade: "10W-30",
    category: "بنزين",
    spec: "SAE 10W-30 · API SL",
    desc: "نصف تخليقي عالي الجودة لظروف القيادة الشاقة والحرارة المرتفعة.",
    descEn: "High-quality semi-synthetic for tough driving conditions and high heat.",
    features: "زيت نصف تخليقي عالي الجودة، يوفر حماية ممتازة في ظروف القيادة الشاقة والحرارة المرتفعة.",
    featuresEn: "High-quality semi-synthetic oil offering excellent protection in tough conditions and high heat.",
    usage: "المحركات التي قطعت مسافات متوسطة وسيارات الدفع الرباعي.",
    usageEn: "Engines with medium mileage and SUVs.",
    image: gzx10w30,
    accent: "from-yellow-500 to-amber-600",
  },
  {
    id: "gzx-20w50",
    name: "ROC GZX",
    grade: "20W-50",
    category: "بنزين",
    spec: "SAE 20W-50 · API SL",
    desc: "لزوجة عالية لحماية قصوى للمحركات الأعلى كيلومترات.",
    descEn: "High viscosity for maximum protection of high-mileage engines.",
    features: "زيت بلزوجة عالية يوفر طبقة حماية سميكة تقلل من تآكل الأجزاء الداخلية في المحركات القديمة.",
    featuresEn: "High-viscosity oil forming a thick protective film that reduces wear in older engines.",
    usage: "المحركات التي تعمل في درجات حرارة شديدة أو المحركات ذات العمر الطويل.",
    usageEn: "Engines running in extreme heat or with long service life.",
    image: gzx20w50,
    accent: "from-red-500 to-rose-700",
  },
  {
    id: "roc-diesel-5l",
    name: "ROC SUPER DIESEL PLUS",
    grade: "15W-40 · 5L",
    category: "ديزل",
    spec: "SAE 15W-40 · API CH-4",
    desc: "زيت ديزل عالي الأداء لتنظيف الكربون ومعادلة الأحماض.",
    descEn: "High-performance diesel oil that cleans carbon and neutralizes acids.",
    features: "قدرة عالية على تنظيف الكربون ومعادلة الأحماض الناتجة عن احتراق الديزل.",
    featuresEn: "Strong carbon-cleaning ability and neutralization of acids produced by diesel combustion.",
    usage: "الشاحنات، الحافلات، المولدات، والمعدات الإنشائية ذات محركات الديزل.",
    usageEn: "Trucks, buses, generators, and diesel construction equipment.",
    image: rocDiesel5L,
    accent: "from-blue-600 to-blue-900",
  },
  {
    id: "roc-diesel-4l",
    name: "ROC SUPER DIESEL PLUS",
    grade: "15W-40 · 4L",
    category: "ديزل",
    spec: "SAE 15W-40 · API CH-4",
    desc: "لزوجة ثابتة لحماية شواحن التيربو في الأجواء الحارة.",
    descEn: "Stable viscosity that protects turbochargers in hot climates.",
    features: "لزوجة ثابتة تحت درجات الحرارة العالية جداً لحماية شواحن التيربو.",
    featuresEn: "Stable viscosity under very high temperatures to protect turbochargers.",
    usage: "شاحنات النقل الثقيل والمحركات القديمة التي تعمل في الأجواء الحارة.",
    usageEn: "Heavy-duty trucks and older engines operating in hot climates.",
    image: rocDiesel4L,
    accent: "from-sky-600 to-blue-800",
  },
  {
    id: "gzx-cvt",
    name: "ROC GZX CVT",
    grade: "CVT",
    category: "ناقل حركة",
    spec: "Fully Synthetic CVT Fluid",
    desc: "ثبات قص ممتاز ومقاومة رغوة لناقل الحركة المتغير باستمرار.",
    descEn: "Excellent shear stability and foam resistance for continuously variable transmissions.",
    features: "يمنع الانزلاق ويوفر حماية مثالية للسير المعدني داخل ناقل الحركة.",
    featuresEn: "Prevents slipping and provides ideal protection for the metal belt inside the transmission.",
    usage: "فقط لسيارات نظام CVT (مثل نيسان، هوندا، وتويوتا الحديثة).",
    usageEn: "CVT systems only (e.g. Nissan, Honda, and modern Toyota).",
    image: gzxCvt,
    accent: "from-red-400 to-rose-600",
  },
  {
    id: "gzx-atf-dex6",
    name: "ROC ATF",
    grade: "DEXRON VI",
    category: "ناقل حركة",
    spec: "Fully Synthetic ATF",
    desc: "تخليقي منخفض اللزوجة لتبديلات ناعمة وتقليل حرارة القير.",
    descEn: "Low-viscosity synthetic for smooth shifts and cooler transmission temps.",
    features: "زيت تخليقي منخفض اللزوجة؛ يوفر تبديلات ناعمة جداً ويقلل حرارة القير.",
    featuresEn: "Low-viscosity synthetic fluid; delivers very smooth shifts and lowers transmission heat.",
    usage: "نواقل الحركة الأوتوماتيكية الحديثة (6 سرعات فأكثر) والسيارات الأوروبية.",
    usageEn: "Modern automatic transmissions (6-speed and above) and European cars.",
    image: gzxAtfDex6,
    accent: "from-red-500 to-red-700",
  },
  {
    id: "roc-atf-dex3",
    name: "ROC ATF",
    grade: "DEX III",
    category: "ناقل حركة",
    spec: "Fully Synthetic ATF",
    desc: "مقاومة عالية للأكسدة وحماية فائقة تحت الضغط العالي.",
    descEn: "High oxidation resistance and superior protection under high pressure.",
    features: "مقاومة عالية للأكسدة وحماية فائقة من التآكل تحت الضغط العالي.",
    featuresEn: "High oxidation resistance and superior wear protection under high pressure.",
    usage: "نواقل الحركة القديمة وأنظمة الدركسون (Power Steering) للهيدروليك.",
    usageEn: "Older automatic transmissions and hydraulic power steering systems.",
    image: rocAtfDex3,
    accent: "from-red-600 to-red-800",
  },
];
