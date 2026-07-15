import gzx0w20 from "@/assets/products/gzx-0w20.png.asset.json";
import gzx5w20 from "@/assets/products/gzx-5w20.png.asset.json";
import gzx5w30 from "@/assets/products/gzx-5w30.png.asset.json";
import gzx10w30 from "@/assets/products/gzx-10w30.png.asset.json";
import gzx20w50 from "@/assets/products/gzx-20w50.png.asset.json";
import gzxAtfDex6 from "@/assets/products/gzx-atf-dex6.png.asset.json";
import gzxCvt from "@/assets/products/gzx-cvt.png.asset.json";
import rocAtfDex3 from "@/assets/products/roc-atf-dex3.png.asset.json";
import rocDiesel5L from "@/assets/products/roc-super-diesel-5l.jpg.asset.json";
import rocDiesel4L from "@/assets/products/roc-super-diesel-4l.jpg.asset.json";

export type ProductCategory = "بنزين" | "ديزل" | "ناقل حركة";

export type Product = {
  id: string;
  name: string;
  grade: string;
  category: ProductCategory;
  spec: string;
  desc: string;
  features: string;
  usage: string;
  image: string;
  accent: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "gzx-0w20",
    name: "ROC GZX",
    grade: "0W-20",
    category: "بنزين",
    spec: "SAE 0W-20 · API SN",
    desc: "زيت محرك تخليقي بالكامل بتقنية أمريكية للسيارات الحديثة والهجينة.",
    features: "زيت تخليقي بالكامل (Fully Synthetic) يوفر حماية قصوى عند التشغيل البارد وتقليل استهلاك الوقود.",
    usage: "السيارات الحديثة والهجينة (Hybrid) التي تتطلب لزوجة منخفضة جداً.",
    image: gzx0w20.url,
    accent: "from-amber-500 to-yellow-600",
    badge: "الأعلى جودة",
  },
  {
    id: "gzx-5w20",
    name: "ROC GZX",
    grade: "5W-20",
    category: "بنزين",
    spec: "SAE 5W-20 · API SN",
    desc: "تخليقي بالكامل، لزوجة منخفضة تقلل الاحتكاك وترفع استجابة المحرك.",
    features: "زيت تخليقي بالكامل بلزوجة منخفضة لتقليل الاحتكاك الداخلي للمحرك وزيادة استجابته.",
    usage: "السيارات الأمريكية والكورية الحديثة لرفع كفاءة استهلاك الوقود.",
    image: gzx5w20.url,
    accent: "from-zinc-400 to-zinc-600",
  },
  {
    id: "gzx-5w30",
    name: "ROC GZX",
    grade: "5W-30",
    category: "بنزين",
    spec: "SAE 5W-30 · API SN",
    desc: "التوازن المثالي بين الحماية والأداء لمعظم السيارات الحديثة.",
    features: "توازن مثالي بين الحماية والأداء، يتحمل درجات الحرارة العالية ويحافظ على نظافة المحرك.",
    usage: "الخيار الأكثر شيوعاً لمعظم السيارات الحديثة (تويوتا، هيونداي، كيا، نيسان).",
    image: gzx5w30.url,
    accent: "from-slate-400 to-slate-600",
    badge: "الأكثر طلباً",
  },
  {
    id: "gzx-10w30",
    name: "ROC GZX",
    grade: "10W-30",
    category: "بنزين",
    spec: "SAE 10W-30 · API SL",
    desc: "نصف تخليقي عالي الجودة لظروف القيادة الشاقة والحرارة المرتفعة.",
    features: "زيت نصف تخليقي عالي الجودة، يوفر حماية ممتازة في ظروف القيادة الشاقة والحرارة المرتفعة.",
    usage: "المحركات التي قطعت مسافات متوسطة وسيارات الدفع الرباعي.",
    image: gzx10w30.url,
    accent: "from-yellow-500 to-amber-600",
  },
  {
    id: "gzx-20w50",
    name: "ROC GZX",
    grade: "20W-50",
    category: "بنزين",
    spec: "SAE 20W-50 · API SL",
    desc: "لزوجة عالية لحماية قصوى للمحركات الأعلى كيلومترات.",
    features: "زيت بلزوجة عالية يوفر طبقة حماية سميكة تقلل من تآكل الأجزاء الداخلية في المحركات القديمة.",
    usage: "المحركات التي تعمل في درجات حرارة شديدة أو المحركات ذات العمر الطويل.",
    image: gzx20w50.url,
    accent: "from-red-500 to-rose-700",
  },
  {
    id: "roc-diesel-5l",
    name: "ROC SUPER DIESEL PLUS",
    grade: "15W-40 · 5L",
    category: "ديزل",
    spec: "SAE 15W-40 · API CH-4",
    desc: "زيت ديزل عالي الأداء لتنظيف الكربون ومعادلة الأحماض.",
    features: "قدرة عالية على تنظيف الكربون ومعادلة الأحماض الناتجة عن احتراق الديزل.",
    usage: "الشاحنات، الحافلات، المولدات، والمعدات الإنشائية ذات محركات الديزل.",
    image: rocDiesel5L.url,
    accent: "from-blue-600 to-blue-900",
  },
  {
    id: "roc-diesel-4l",
    name: "ROC SUPER DIESEL PLUS",
    grade: "15W-40 · 4L",
    category: "ديزل",
    spec: "SAE 15W-40 · API CH-4",
    desc: "لزوجة ثابتة لحماية شواحن التيربو في الأجواء الحارة.",
    features: "لزوجة ثابتة تحت درجات الحرارة العالية جداً لحماية شواحن التيربو.",
    usage: "شاحنات النقل الثقيل والمحركات القديمة التي تعمل في الأجواء الحارة.",
    image: rocDiesel4L.url,
    accent: "from-sky-600 to-blue-800",
  },
  {
    id: "gzx-cvt",
    name: "ROC GZX CVT",
    grade: "CVT",
    category: "ناقل حركة",
    spec: "Fully Synthetic CVT Fluid",
    desc: "ثبات قص ممتاز ومقاومة رغوة لناقل الحركة المتغير باستمرار.",
    features: "يمنع الانزلاق ويوفر حماية مثالية للسير المعدني داخل ناقل الحركة.",
    usage: "فقط لسيارات نظام CVT (مثل نيسان، هوندا، وتويوتا الحديثة).",
    image: gzxCvt.url,
    accent: "from-red-400 to-rose-600",
  },
  {
    id: "gzx-atf-dex6",
    name: "ROC ATF",
    grade: "DEXRON VI",
    category: "ناقل حركة",
    spec: "Fully Synthetic ATF",
    desc: "تخليقي منخفض اللزوجة لتبديلات ناعمة وتقليل حرارة القير.",
    features: "زيت تخليقي منخفض اللزوجة؛ يوفر تبديلات ناعمة جداً ويقلل حرارة القير.",
    usage: "نواقل الحركة الأوتوماتيكية الحديثة (6 سرعات فأكثر) والسيارات الأوروبية.",
    image: gzxAtfDex6.url,
    accent: "from-red-500 to-red-700",
  },
  {
    id: "roc-atf-dex3",
    name: "ROC ATF",
    grade: "DEX III",
    category: "ناقل حركة",
    spec: "Fully Synthetic ATF",
    desc: "مقاومة عالية للأكسدة وحماية فائقة تحت الضغط العالي.",
    features: "مقاومة عالية للأكسدة وحماية فائقة من التآكل تحت الضغط العالي.",
    usage: "نواقل الحركة القديمة وأنظمة الدركسون (Power Steering) للهيدروليك.",
    image: rocAtfDex3.url,
    accent: "from-red-600 to-red-800",
  },
];
