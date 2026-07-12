import gzx0w20 from "@/assets/products/gzx-0w20.png.asset.json";
import gzx5w20 from "@/assets/products/gzx-5w20.png.asset.json";
import gzx5w30 from "@/assets/products/gzx-5w30.png.asset.json";
import gzx10w30 from "@/assets/products/gzx-10w30.png.asset.json";
import gzx20w50 from "@/assets/products/gzx-20w50.png.asset.json";
import gzxAtfDex6 from "@/assets/products/gzx-atf-dex6.png.asset.json";
import gzxCvt from "@/assets/products/gzx-cvt.png.asset.json";
import rocAtfDex3 from "@/assets/products/roc-atf-dex3.png.asset.json";

export type Product = {
  id: string;
  name: string;
  grade: string;
  category: "محرك" | "ناقل حركة";
  spec: string;
  desc: string;
  image: string;
  accent: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "gzx-0w20",
    name: "ROC GZX",
    grade: "0W-20",
    category: "محرك",
    spec: "API SN 10000 · Fully Synthetic",
    desc: "زيت محرك تخليقي بالكامل بتقنية أمريكية، أداء فائق وحماية عالية للمحركات الحديثة.",
    image: gzx0w20.url,
    accent: "from-amber-500 to-yellow-600",
    badge: "الأعلى جودة",
  },
  {
    id: "gzx-5w20",
    name: "ROC GZX",
    grade: "5W-20",
    category: "محرك",
    spec: "API SN 10000 · Fully Synthetic",
    desc: "تخليقي بالكامل من زيوت بكر 100% من أرامكو، مثالي للمحركات الاقتصادية.",
    image: gzx5w20.url,
    accent: "from-zinc-400 to-zinc-600",
  },
  {
    id: "gzx-5w30",
    name: "ROC GZX",
    grade: "5W-30",
    category: "محرك",
    spec: "API SN 10000 · Fully Synthetic",
    desc: "حماية شاملة ضد التآكل مع توفير في استهلاك الوقود لمحركات البنزين.",
    image: gzx5w30.url,
    accent: "from-slate-400 to-slate-600",
    badge: "الأكثر طلباً",
  },
  {
    id: "gzx-10w30",
    name: "ROC GZX",
    grade: "10W-30",
    category: "محرك",
    spec: "API SL 5000",
    desc: "زيت محرك متعدد الدرجات، ثبات لزوجة ممتاز وأداء موثوق في الأجواء الحارة.",
    image: gzx10w30.url,
    accent: "from-yellow-500 to-amber-600",
  },
  {
    id: "gzx-20w50",
    name: "ROC GZX",
    grade: "20W-50",
    category: "محرك",
    spec: "API SL 5000",
    desc: "لزوجة عالية للمحركات الأعلى كيلومترات، حماية قصوى وتقليل الاستهلاك.",
    image: gzx20w50.url,
    accent: "from-red-500 to-rose-700",
  },
  {
    id: "gzx-atf-dex6",
    name: "ROC GZX ATF",
    grade: "DEXRON VI",
    category: "ناقل حركة",
    spec: "Fully Synthetic ATF",
    desc: "زيت ناقل حركة أوتوماتيكي تخليقي بالكامل بمواصفة DEXRON VI لنقل حركة سلس.",
    image: gzxAtfDex6.url,
    accent: "from-red-500 to-red-700",
  },
  {
    id: "gzx-cvt",
    name: "ROC GZX CVT",
    grade: "CVT",
    category: "ناقل حركة",
    spec: "Fully Synthetic CVT Fluid",
    desc: "ثبات قص ممتاز ومقاومة رغوة عالية لناقل الحركة المتغير باستمرار.",
    image: gzxCvt.url,
    accent: "from-red-400 to-rose-600",
  },
  {
    id: "roc-atf-dex3",
    name: "ROC ATF",
    grade: "DEX III",
    category: "ناقل حركة",
    spec: "Fully Synthetic ATF",
    desc: "سائل ناقل حركة تخليقي بالكامل بمواصفة DEXRON III لأداء موثوق وطويل الأمد.",
    image: rocAtfDex3.url,
    accent: "from-red-600 to-red-800",
  },
];
