import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Bell, User, ChevronRight, Wrench, Gift, ShieldCheck, Sparkles, BookOpen,
  Calculator, ArrowLeftRight, Headphones, Fuel, Zap, ParkingCircle, MapPin,
  GraduationCap, BadgeCheck, AlertTriangle, Home as HomeIcon, Car, ShoppingBag,
  CircleUserRound, X, Phone, FileWarning, Receipt, Locate,
} from "lucide-react";
import swiftImg from "@/assets/swift.png";
import vitaraImg from "@/assets/grand-vitara.png";
import brezzaImg from "@/assets/brezza.png";
import dzireImg from "@/assets/dzire.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Maruti Suzuki — Your Car, Simplified" },
      { name: "description", content: "Book service, renew insurance, shop accessories and explore new Maruti Suzuki cars — all in one place." },
    ],
  }),
});

/* ---------- Reusable atoms ---------- */

function SectionHeader({ label, title, action }: { label?: string; title: string; action?: string }) {
  return (
    <div className="px-5 mb-3">
      {label && <div className="section-label mb-1">{label}</div>}
      <div className="flex items-end justify-between">
        <h2 className="text-[18px] font-semibold text-foreground tracking-tight">{title}</h2>
        {action && (
          <button className="text-[13px] font-medium text-accent flex items-center gap-0.5">
            {action} <ChevronRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- Top Nav ---------- */

function TopNav() {
  return (
    <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between px-5 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="font-serif text-white text-[18px] leading-none">S</span>
          </div>
          <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">Maruti Suzuki</div>
            <div className="text-[13px] font-semibold text-foreground -mt-0.5">Rewards Member</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Bell size={18} className="text-foreground" />
            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-[color:var(--amber)]" />
          </button>
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <User size={18} />
          </button>
        </div>
      </div>
      <div className="px-5 pb-4">
        <div className="font-serif text-[22px] leading-tight text-foreground">
          Good morning, Rahul <span aria-hidden>👋</span>
        </div>
        <button className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-[11.5px] text-foreground font-medium">
          <Car size={12} className="text-accent" />
          Swift VXI · DL 4C AB 1234
          <ChevronRight size={12} className="text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}

/* ---------- Alert Pill ---------- */

function ServiceAlert({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="mx-5 mt-3 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FEF3C7] text-[#92400E]">
      <AlertTriangle size={15} />
      <span className="text-[12.5px] font-medium flex-1">
        Service due in 340 km — Book now
      </span>
      <ChevronRight size={14} />
      <button onClick={onDismiss} aria-label="Dismiss" className="ml-1 opacity-70">
        <X size={14} />
      </button>
    </div>
  );
}

/* ---------- Hero Carousel ---------- */

type Slide = {
  eyebrow: string;
  title: string;
  sub: string;
  cta: string;
  gradient: string;
  accentBg: string;
  illustration: React.ReactNode;
};

function HeroCarousel() {
  const slides: Slide[] = [
    {
      eyebrow: "Service Due",
      title: "Book your next service",
      sub: "Your Swift is due in 340 km. Lock in a slot this week.",
      cta: "Book Now",
      gradient: "linear-gradient(135deg, #0D1B40 0%, #1F3A8A 60%, #1F6FEB 100%)",
      accentBg: "#1F6FEB",
      illustration: <img src={swiftImg} alt="Swift" className="w-[150px] absolute -right-2 bottom-0 drop-shadow-2xl" />,
    },
    {
      eyebrow: "Seasonal Camp",
      title: "Monsoon Care Camp",
      sub: "Free 20-point check-up + up to 20% off on parts.",
      cta: "Book Now",
      gradient: "linear-gradient(135deg, #0A4A6E 0%, #0E7490 60%, #06B6D4 100%)",
      accentBg: "#06B6D4",
      illustration: (
        <div className="absolute right-3 bottom-3 w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center">
          <Sparkles size={56} className="text-white/80" />
        </div>
      ),
    },
    {
      eyebrow: "Genuine Accessories",
      title: "Personalise your Swift",
      sub: "Seat covers, dash cams, alloys — fitted by experts.",
      cta: "Shop Now",
      gradient: "linear-gradient(135deg, #4A1D6E 0%, #7C3AED 70%, #A78BFA 100%)",
      accentBg: "#7C3AED",
      illustration: (
        <div className="absolute right-3 bottom-3 w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center">
          <Gift size={56} className="text-white/80" />
        </div>
      ),
    },
    {
      eyebrow: "Insurance",
      title: "Renew & save ₹2,100",
      sub: "Your cover expires in 45 days. Pay nothing until renewal.",
      cta: "Renew Now",
      gradient: "linear-gradient(135deg, #064E3B 0%, #0F766E 60%, #12A150 100%)",
      accentBg: "#12A150",
      illustration: (
        <div className="absolute right-3 bottom-3 w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center">
          <ShieldCheck size={56} className="text-white/80" />
        </div>
      ),
    },
  ];

  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => {
        const next = (i + 1) % slides.length;
        const el = trackRef.current;
        if (el) el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
        return next;
      });
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== idx) setIdx(i);
  }

  return (
    <div className="mt-4">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full px-5 snap-center">
            <div
              className="relative h-[190px] rounded-[20px] overflow-hidden p-5 text-white shadow-elev"
              style={{ background: s.gradient }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-white/80">{s.eyebrow}</div>
              <div className="font-serif text-[22px] leading-[1.15] mt-1 max-w-[62%]">{s.title}</div>
              <div className="text-[12.5px] text-white/80 mt-1.5 max-w-[60%] leading-snug">{s.sub}</div>
              <button
                className="absolute bottom-5 left-5 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white text-foreground text-[13px] font-semibold"
              >
                {s.cta} <ChevronRight size={14} />
              </button>
              {s.illustration}
              {i === 0 && (
                <div className="absolute top-5 right-5 px-2 py-1 rounded-full bg-white/15 backdrop-blur text-[10px] font-semibold">
                  340 km left
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-accent" : "w-1.5 bg-[#D1D5DB]"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Quick Actions ---------- */

type Action = { icon: React.ReactNode; label: string; bg: string; color: string; dot?: boolean };

function QuickActions() {
  const row1: Action[] = [
    { icon: <Wrench size={20} />, label: "Book Service", bg: "#EEF4FF", color: "#1F6FEB", dot: true },
    { icon: <Gift size={20} />, label: "Buy Add-Ons", bg: "#F3F0FF", color: "#7C3AED" },
    { icon: <ShieldCheck size={20} />, label: "Insurance", bg: "#EDFAF4", color: "#12A150" },
    { icon: <Sparkles size={20} />, label: "Accessories", bg: "#FEF3C7", color: "#D97706" },
    { icon: <BookOpen size={20} />, label: "Manual", bg: "#F3F4F6", color: "#6B7280" },
  ];
  const row2: Action[] = [
    { icon: <Calculator size={20} />, label: "EMI Calc", bg: "#EEF4FF", color: "#1F6FEB" },
    { icon: <ArrowLeftRight size={20} />, label: "True Value", bg: "#FFF1F2", color: "#E11D48" },
    { icon: <Headphones size={20} />, label: "S-Assist", bg: "#ECFEFF", color: "#0891B2" },
    { icon: <Fuel size={20} />, label: "Fastag", bg: "#FEF3C7", color: "#D97706" },
    { icon: <Receipt size={20} />, label: "Challan", bg: "#F3F4F6", color: "#6B7280" },
  ];
  return (
    <div className="mt-2">
      <SectionHeader label="Car Care" title="Complete care for your car" />
      <div className="px-5 space-y-4">
        {[row1, row2].map((row, ri) => (
          <div key={ri} className="grid grid-cols-5 gap-1.5">
            {row.map((a) => (
              <button key={a.label} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: a.bg, color: a.color }}
                >
                  {a.icon}
                  {a.dot && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#DC2626] border-2 border-white" />}
                </div>
                <span className="text-[10.5px] leading-tight text-foreground text-center font-medium">{a.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- My Car Health Card ---------- */

function MyCarCard() {
  const pct = 86; // 86% of service interval used
  return (
    <div className="px-5 mt-8">
      <SectionHeader label="My Car" title="Swift VXI · health" />
      <div className="relative rounded-[20px] bg-white hairline shadow-elev p-5 overflow-hidden">
        <div className="absolute -right-6 top-2 w-[180px] opacity-95 pointer-events-none">
          <img src={swiftImg} alt="Swift VXI" className="w-full" />
        </div>
        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-muted-foreground">2022 · Petrol</span>
            <BadgeCheck size={14} className="text-[color:var(--success)]" />
          </div>
          <div className="font-serif text-[20px] leading-tight text-foreground mt-1">Swift VXI</div>
          <div className="text-[11.5px] text-muted-foreground">DL 4C AB 1234</div>

          <div className="grid grid-cols-3 gap-3 mt-5 max-w-[230px]">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Odometer</div>
              <div className="text-[14px] font-semibold text-foreground mt-0.5">42,340 km</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Last Svc</div>
              <div className="text-[14px] font-semibold text-foreground mt-0.5">6 mo ago</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Next Due</div>
              <div className="text-[14px] font-semibold text-[#D97706] mt-0.5">~800 km</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-1.5 rounded-full bg-[#F1F2F6] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, #12A150 0%, #F59E0B 70%, #DC2626 100%)",
                  transition: "width 700ms ease-out",
                }}
              />
            </div>
            <div className="flex justify-between text-[10.5px] text-muted-foreground mt-1.5">
              <span>Last 10,000 km service</span>
              <span className="text-[#D97706] font-semibold">86% used</span>
            </div>
          </div>

          <div className="flex gap-2 mt-5">
            <button className="flex-1 h-10 rounded-full border border-accent text-accent text-[13px] font-semibold">
              View Report
            </button>
            <button className="flex-[1.3] h-10 rounded-full bg-accent text-white text-[13px] font-semibold inline-flex items-center justify-center gap-1">
              Book Service <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Live Contextual Banner ---------- */

function ContextualBanner() {
  return (
    <div className="px-5 mt-8">
      <div className="relative rounded-[20px] bg-primary text-white p-5 overflow-hidden h-[140px]">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }} />
        <div className="relative max-w-[64%]">
          <div className="text-[10px] uppercase tracking-[0.14em] text-white/60 font-semibold">Monsoon Ready</div>
          <div className="font-serif text-[19px] leading-tight mt-1">Monsoon Care Package</div>
          <div className="text-[12px] text-white/70 mt-1">All-weather check, wipers, undercoat — ₹999 all-in.</div>
          <button className="mt-3 inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#F59E0B] text-[#3B1D00] text-[12px] font-bold">
            Add to Cart <ChevronRight size={12} />
          </button>
        </div>
        <div className="absolute right-4 bottom-4 w-[100px] h-[100px] rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Sparkles size={48} className="text-white/80" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Explore Cars ---------- */

type CarItem = { name: string; tag: string; price: string; img: string };

function ExploreCars() {
  const cars: CarItem[] = [
    { name: "Grand Vitara", tag: "Intelligent SUV", price: "₹11.42 L*", img: vitaraImg },
    { name: "Brezza", tag: "Compact SUV", price: "₹8.69 L*", img: brezzaImg },
    { name: "Dzire", tag: "Premium sedan", price: "₹6.84 L*", img: dzireImg },
    { name: "Swift", tag: "City hatchback", price: "₹6.49 L*", img: swiftImg },
  ];
  return (
    <div className="mt-8">
      <SectionHeader label="Discover" title="Explore Cars" action="View All" />
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-5 pb-2 snap-x snap-mandatory">
        {cars.map((c) => (
          <div key={c.name} className="snap-start min-w-[200px] w-[200px] rounded-2xl bg-white hairline shadow-card overflow-hidden">
            <div className="h-[110px] bg-gradient-to-b from-[#F7F8FC] to-white flex items-center justify-center">
              <img src={c.img} alt={c.name} className="w-[170px] max-h-[100px] object-contain" loading="lazy" />
            </div>
            <div className="p-3.5">
              <div className="text-[14px] font-semibold text-foreground">{c.name}</div>
              <div className="text-[11px] text-muted-foreground">{c.tag}</div>
              <div className="text-[12.5px] font-semibold text-[color:var(--success)] mt-1.5">{c.price}</div>
              <div className="flex gap-1.5 mt-3">
                <button className="flex-1 h-7 rounded-full border border-[rgba(0,0,0,0.12)] text-[11px] font-semibold text-foreground">
                  Compare
                </button>
                <button className="flex-[1.3] h-7 rounded-full bg-accent text-white text-[11px] font-semibold">
                  Test Drive
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Smart Finance ---------- */

function SmartFinance() {
  return (
    <div className="px-5 mt-8">
      <SectionHeader label="Smart Finance" title="Finance your dream car" />
      <div className="rounded-[20px] bg-[#EEF4FF] p-5 relative overflow-hidden">
        <div className="absolute right-4 top-4 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-card">
          <Calculator size={26} className="text-accent" />
        </div>
        <div className="font-serif text-[20px] leading-tight text-foreground max-w-[70%]">
          Get your loan in 10 minutes
        </div>
        <div className="text-[12.5px] text-muted-foreground mt-1.5 max-w-[80%]">
          50% of Maruti buyers use Smart Finance. 35 lenders. Best rate guaranteed.
        </div>
        <button className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-accent text-white text-[13px] font-semibold">
          Calculate My EMI <ChevronRight size={14} />
        </button>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { v: "₹1.7L cr", l: "Disbursed" },
            { v: "2.5M+", l: "Loans" },
            { v: "35", l: "Partners" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white px-3 py-2.5">
              <div className="text-[13px] font-bold text-foreground">{s.v}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Help Me Decide ---------- */

function HelpMeDecide() {
  return (
    <div className="px-5 mt-6">
      <div className="relative rounded-[20px] bg-primary text-white p-5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "12px 12px",
        }} />
        <div className="relative flex items-start gap-3">
          <div className="text-[28px] leading-none">🤔</div>
          <div className="flex-1">
            <div className="font-serif text-[18px] leading-tight">Not sure which car?</div>
            <div className="text-[12px] text-white/70 mt-1">Answer 5 quick questions → get your perfect match.</div>
            <button className="mt-3 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#FB7185] text-white text-[12.5px] font-bold">
              Find My Car <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Smart Locators ---------- */

function SmartLocators() {
  const items = [
    { icon: <Fuel size={20} />, label: "Fuel Pump", color: "#1F6FEB" },
    { icon: <Zap size={20} />, label: "EV Charging", color: "#12A150" },
    { icon: <ParkingCircle size={20} />, label: "Parking", color: "#7C3AED" },
    { icon: <Locate size={20} />, label: "PUC Centre", color: "#D97706" },
    { icon: <GraduationCap size={20} />, label: "Driving", color: "#0891B2" },
  ];
  return (
    <div className="mt-8">
      <div className="px-5 flex items-center gap-1.5 mb-3">
        <MapPin size={14} className="text-accent" />
        <div className="section-label !text-foreground">Near You</div>
      </div>
      <div className="mx-5 relative rounded-2xl bg-white hairline shadow-card overflow-hidden">
        <div className="absolute inset-0 opacity-[0.5]" style={{
          backgroundImage: `
            linear-gradient(rgba(31,111,235,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(31,111,235,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
        }} />
        <div className="relative grid grid-cols-5 gap-1 p-3.5">
          {items.map((a) => (
            <button key={a.label} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-white shadow-card flex items-center justify-center" style={{ color: a.color }}>
                {a.icon}
              </div>
              <span className="text-[10.5px] font-medium text-foreground text-center leading-tight">{a.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Utilities ---------- */

function Utilities() {
  const items = [
    { icon: <Receipt size={18} />, title: "Recharge FASTag", sub: "Top up in seconds", color: "#1F6FEB", bg: "#EEF4FF" },
    { icon: <FileWarning size={18} />, title: "Check Challan", sub: "DL 4C AB 1234", color: "#D97706", bg: "#FEF3C7" },
    { icon: <Phone size={18} />, title: "Roadside Assistance", sub: "24×7 SOS · Call or track", color: "#DC2626", bg: "#FEF2F2" },
  ];
  return (
    <div className="mt-8">
      <SectionHeader label="Essentials" title="On-road essentials" />
      <div className="px-5 space-y-2.5">
        {items.map((u) => (
          <button key={u.title} className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl bg-white hairline shadow-card">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: u.bg, color: u.color }}>
              {u.icon}
            </div>
            <div className="flex-1 text-left">
              <div className="text-[14px] font-semibold text-foreground">{u.title}</div>
              <div className="text-[11.5px] text-muted-foreground">{u.sub}</div>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- True Value ---------- */

function TrueValue() {
  const cars = [
    { name: "Baleno Zeta", year: 2021, km: "32,100 km", price: "₹6.85 L", img: dzireImg },
    { name: "Brezza VXI", year: 2020, km: "48,400 km", price: "₹8.20 L", img: brezzaImg },
    { name: "Swift ZXI", year: 2022, km: "21,900 km", price: "₹6.40 L", img: swiftImg },
  ];
  return (
    <div className="mt-8">
      <SectionHeader label="True Value" title="Buy or sell pre-owned" action="Browse" />
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-5 pb-2">
        {cars.map((c) => (
          <div key={c.name} className="min-w-[180px] w-[180px] rounded-2xl bg-white hairline shadow-card overflow-hidden">
            <div className="h-[90px] bg-[#F7F8FC] relative">
              <img src={c.img} alt={c.name} className="w-full h-full object-contain p-2" loading="lazy" />
              <div className="absolute top-1.5 left-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[color:var(--success)] text-white text-[9px] font-bold">
                <BadgeCheck size={9} /> Certified
              </div>
            </div>
            <div className="p-3">
              <div className="text-[13px] font-semibold text-foreground">{c.name}</div>
              <div className="text-[10.5px] text-muted-foreground">{c.year} · {c.km}</div>
              <div className="flex items-center justify-between mt-1.5">
                <div className="text-[13px] font-bold text-foreground">{c.price}</div>
                <ChevronRight size={14} className="text-accent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Bottom Nav ---------- */

function BottomNav() {
  const tabs = [
    { icon: <HomeIcon size={20} />, label: "Home", active: true },
    { icon: <Wrench size={20} />, label: "Service" },
    { icon: <Car size={20} />, label: "My Car" },
    { icon: <ShoppingBag size={20} />, label: "Shop" },
    { icon: <CircleUserRound size={20} />, label: "Profile" },
  ];
  return (
    <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-[rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-5 px-2 pt-2 pb-3">
        {tabs.map((t) => (
          <button key={t.label} className="flex flex-col items-center gap-1 py-1.5">
            <div className={t.active ? "text-accent" : "text-muted-foreground"}>{t.icon}</div>
            <div className={`text-[10.5px] font-medium ${t.active ? "text-accent" : "text-muted-foreground"}`}>{t.label}</div>
            {t.active && <div className="w-1 h-1 rounded-full bg-accent -mt-0.5" />}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Home() {
  const [alertOpen, setAlertOpen] = useState(true);
  return (
    <div className="min-h-screen bg-[color:var(--surface)]">
      <main className="max-w-[440px] mx-auto bg-[color:var(--surface)] pb-2">
        <TopNav />
        {alertOpen && <ServiceAlert onDismiss={() => setAlertOpen(false)} />}
        <HeroCarousel />
        <QuickActions />
        <MyCarCard />
        <ContextualBanner />
        <ExploreCars />
        <SmartFinance />
        <HelpMeDecide />
        <SmartLocators />
        <Utilities />
        <TrueValue />
        <div className="h-8" />
        <BottomNav />
      </main>
    </div>
  );
}
