import { GiBrain, GiLighthouse, GiMeditation, GiPuzzle } from "react-icons/gi";
import { MdSchema, MdSentimentVeryDissatisfied, MdPsychology, MdBlock } from "react-icons/md";
import { FaHeart, FaUserCircle, FaRing, FaAngry, FaThumbsUp, FaUsers } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

export interface ServiceItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const servicesItems: ServiceItem[] = [
  {
    title: "روان‌درمانگر تحلیلی",
    subtitle: "درمان عمیق مبتنی بر تحلیل ریشه‌ای مشکلات",
    icon: <GiBrain className="text-primary text-6xl" />,
  },
  {
    title: "طرحواره‌درمانی",
    subtitle: "شناسایی و اصلاح الگوهای ناکارآمد ذهنی",
    icon: <MdSchema className="text-primary text-6xl" />,
  },
  {
    title: "زوج‌درمانگر",
    subtitle: "بهبود روابط و حل تعارضات زوجین",
    icon: <FaHeart className="text-primary text-6xl" />,
  },
  {
    title: "روان‌درمانی تحلیلی فردی",
    subtitle: "رشد فردی و شناخت بهتر خود",
    icon: <FaUserCircle className="text-primary text-6xl" />,
  },
  {
    title: "مشاوره روابط بین‌فردی",
    subtitle: "بهبود تعامل و ارتباط مؤثر",
    icon: <RiTeamLine className="text-primary text-6xl" />,
  },
  {
    title: "مشاوره قبل از ازدواج",
    subtitle: "ارزیابی ریسک و آمادگی برای ازدواج",
    icon: <FaRing className="text-primary text-6xl" />,
  },
  {
    title: "مشاوره افسردگی",
    subtitle: "کاهش علائم افسردگی و بهبود خلق",
    icon: <MdSentimentVeryDissatisfied className="text-primary text-6xl" />,
  },
  {
    title: "مشاوره بهداشت روان",
    subtitle: "تقویت سلامت روان و مدیریت احساسات",
    icon: <MdPsychology className="text-primary text-6xl" />,
  },
  {
    title: "کنترل ذهن و عدم تمرکز",
    subtitle: "افزایش تمرکز و آرام‌سازی ذهن",
    icon: <GiMeditation className="text-primary text-6xl" />,
  },
  {
    title: "وسواس و نشخوار فکری",
    subtitle: "کاهش افکار مزاحم و چرخه وسواس",
    icon: <GiLighthouse className="text-primary text-6xl" />,
  },
  {
    title: "کنترل خشم و پرخاشگری",
    subtitle: "مدیریت خشم و واکنش‌های هیجانی",
    icon: <FaAngry className="text-primary text-6xl" />,
  },
  {
    title: "حل مسئله",
    subtitle: "تقویت مهارت‌های تصمیم‌گیری",
    icon: <GiPuzzle className="text-primary text-6xl" />,
  },
  {
    title: "اعتماد به نفس",
    subtitle: "افزایش خودباوری و ارزشمندی",
    icon: <FaThumbsUp className="text-primary text-6xl" />,
  },
  {
    title: "مهارت نه گفتن",
    subtitle: "تقویت قاطعیت و مرزبندی سالم",
    icon: <MdBlock className="text-primary text-6xl" />,
  },
  {
    title: "روابط اجتماعی",
    subtitle: "بهبود مهارت‌های ارتباطی",
    icon: <FaUsers className="text-primary text-6xl" />,
  },
];
