import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Bell, User, ChevronRight, Wrench, Gift, ShieldCheck, Sparkles, BookOpen,
  Calculator, ArrowLeftRight, Headphones, Fuel, Zap, ParkingCircle, MapPin,
  GraduationCap, BadgeCheck, AlertTriangle, Home as HomeIcon, Car, ShoppingBag,
  CircleUserRound, X, Phone, FileWarning, Receipt, Locate,
  Flame, IndianRupee, Trophy, CloudRain, Star, Camera, Share2,
  MessageCircle, Send, ExternalLink,
  Paintbrush, Settings, ClipboardList, CarFront, FileCheck, CreditCard,
  RefreshCw, Banknote, Package, Disc3, SunMedium, Gauge,
  LifeBuoy, BookMarked, Navigation, ChevronLeft, LayoutGrid,
  Newspaper, Radio, TrendingUp, Megaphone, Building2, Rocket, Globe, Heart,
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

type SectionVariant = "primary" | "default" | "compact";

function SectionHeader({ label, title, action, onAction, variant = "default", icon }: {
  label?: string;
  title: string;
  action?: string;
  onAction?: () => void;
  variant?: SectionVariant;
  icon?: React.ReactNode;
}) {
  if (variant === "primary") {
    return (
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 mb-1.5">
          {icon && <div className="text-accent">{icon}</div>}
          {label && <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-accent">{label}</div>}
        </div>
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-[22px] font-semibold text-foreground tracking-tight leading-tight">{title}</h2>
          {action && (
            <button onClick={onAction} className="text-[13px] font-semibold text-accent flex items-center gap-0.5 hover:gap-1.5 transition-all">
              {action} <ChevronRight size={14} />
            </button>
          )}
        </div>

      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="px-5 mb-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            {label && <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-muted-foreground">{label} ·</span>}
            <h2 className="text-[15px] font-semibold text-foreground tracking-tight">{title}</h2>
          </div>
          {action && (
            <button onClick={onAction} className="text-[12px] font-medium text-accent flex items-center gap-0.5">
              {action} <ChevronRight size={12} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // default
  return (
    <div className="px-5 mb-3">
      {label && (
        <div className="flex items-center gap-1.5 mb-1">
          {icon && <span className="text-accent">{icon}</span>}
          <div className="section-label">{label}</div>
        </div>
      )}
      <div className="flex items-end justify-between">
        <h2 className="text-[18px] font-semibold text-foreground tracking-tight">{title}</h2>
        {action && (
          <button onClick={onAction} className="text-[13px] font-medium text-accent flex items-center gap-0.5">
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
    }, 6000);
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

type CarCareCategory = {
  title: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  items: Action[];
};

function CarCarePopup({ onClose }: { onClose: () => void }) {
  const categories: CarCareCategory[] = [
    {
      title: "Service & Maintenance",
      icon: <Wrench size={18} />,
      color: "#1F6FEB",
      bg: "#EEF4FF",
      items: [
        { icon: <Wrench size={20} />, label: "Book Service", bg: "#EEF4FF", color: "#1F6FEB", dot: true },
        { icon: <ClipboardList size={20} />, label: "Service History", bg: "#EEF4FF", color: "#1F6FEB" },
        { icon: <Settings size={20} />, label: "Periodic Maint.", bg: "#EEF4FF", color: "#1F6FEB" },
        { icon: <Paintbrush size={20} />, label: "Body & Paint", bg: "#EEF4FF", color: "#1F6FEB" },
      ],
    },
    {
      title: "Insurance & Protection",
      icon: <ShieldCheck size={18} />,
      color: "#12A150",
      bg: "#EDFAF4",
      items: [
        { icon: <ShieldCheck size={20} />, label: "Renew Policy", bg: "#EDFAF4", color: "#12A150" },
        { icon: <FileCheck size={20} />, label: "Claim Status", bg: "#EDFAF4", color: "#12A150" },
        { icon: <CarFront size={20} />, label: "RSA Cover", bg: "#EDFAF4", color: "#12A150" },
        { icon: <FileWarning size={20} />, label: "Policy Details", bg: "#EDFAF4", color: "#12A150" },
      ],
    },
    {
      title: "Finance & Payments",
      icon: <IndianRupee size={18} />,
      color: "#7C3AED",
      bg: "#F3F0FF",
      items: [
        { icon: <Calculator size={20} />, label: "EMI Calc", bg: "#F3F0FF", color: "#7C3AED" },
        { icon: <CreditCard size={20} />, label: "Pay EMI", bg: "#F3F0FF", color: "#7C3AED" },
        { icon: <Banknote size={20} />, label: "Loan Offers", bg: "#F3F0FF", color: "#7C3AED" },
        { icon: <RefreshCw size={20} />, label: "Refinance", bg: "#F3F0FF", color: "#7C3AED" },
      ],
    },
    {
      title: "Accessories & Add-Ons",
      icon: <Sparkles size={18} />,
      color: "#D97706",
      bg: "#FEF3C7",
      items: [
        { icon: <Sparkles size={20} />, label: "Accessories", bg: "#FEF3C7", color: "#D97706" },
        { icon: <Gift size={20} />, label: "Buy Add-Ons", bg: "#FEF3C7", color: "#D97706" },
        { icon: <Package size={20} />, label: "Genuine Parts", bg: "#FEF3C7", color: "#D97706" },
        { icon: <Disc3 size={20} />, label: "Alloy Wheels", bg: "#FEF3C7", color: "#D97706" },
      ],
    },
    {
      title: "Tools & Support",
      icon: <Headphones size={18} />,
      color: "#0891B2",
      bg: "#ECFEFF",
      items: [
        { icon: <Headphones size={20} />, label: "S-Assist", bg: "#ECFEFF", color: "#0891B2" },
        { icon: <BookOpen size={20} />, label: "Manual", bg: "#ECFEFF", color: "#0891B2" },
        { icon: <LifeBuoy size={20} />, label: "Roadside SOS", bg: "#ECFEFF", color: "#0891B2" },
        { icon: <BookMarked size={20} />, label: "FAQs", bg: "#ECFEFF", color: "#0891B2" },
      ],
    },
    {
      title: "Drive & Locate",
      icon: <Navigation size={18} />,
      color: "#E11D48",
      bg: "#FFF1F2",
      items: [
        { icon: <Fuel size={20} />, label: "FASTag", bg: "#FFF1F2", color: "#E11D48" },
        { icon: <Receipt size={20} />, label: "Challan", bg: "#FFF1F2", color: "#E11D48" },
        { icon: <ArrowLeftRight size={20} />, label: "True Value", bg: "#FFF1F2", color: "#E11D48" },
        { icon: <Gauge size={20} />, label: "Mileage Track", bg: "#FFF1F2", color: "#E11D48" },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      {/* Panel */}
      <div
        className="relative w-full max-w-[440px] max-h-[85dvh] bg-white rounded-t-[28px] overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#D1D5DB]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-4 pt-1">
          <div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">Car Care</div>
            <h2 className="text-[20px] font-serif font-semibold text-foreground tracking-tight">All Services</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-foreground hover:bg-[#E5E7EB] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable categories */}
        <div className="overflow-y-auto px-5 pb-8" style={{ maxHeight: "calc(85dvh - 90px)" }}>
          <div className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.title}>
                {/* Category header */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <span className="text-[14px] font-semibold text-foreground">{cat.title}</span>
                </div>
                {/* Items grid */}
                <div className="grid grid-cols-4 gap-3">
                  {cat.items.map((a) => (
                    <button key={a.label} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
                      <div
                        className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                        style={{ background: a.bg, color: a.color }}
                      >
                        {a.icon}
                        {a.dot && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#DC2626] border-2 border-white" />}
                      </div>
                      <span className="text-[10.5px] leading-tight text-foreground text-center font-medium">{a.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickActions() {
  const [showPopup, setShowPopup] = useState(false);
  const topActions: Action[] = [
    { icon: <Wrench size={22} />, label: "Book Service", bg: "#EEF4FF", color: "#1F6FEB", dot: true },
    { icon: <ShieldCheck size={22} />, label: "Insurance", bg: "#EDFAF4", color: "#12A150" },
    { icon: <Sparkles size={22} />, label: "Accessories", bg: "#FEF3C7", color: "#D97706" },
    { icon: <Headphones size={22} />, label: "S-Assist", bg: "#ECFEFF", color: "#0891B2" },
  ];
  return (
    <>
      <div className="mt-2">
        <SectionHeader label="Car Care" title="Complete care for your car" variant="primary" icon={<Wrench size={14} />} />
        <div className="px-5">
          <div className="grid grid-cols-5 gap-3">
            {topActions.map((a) => (
              <button key={a.label} className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: a.bg, color: a.color }}
                >
                  {a.icon}
                  {a.dot && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#DC2626] border-2 border-white" />}
                </div>
                <span className="text-[11px] leading-tight text-foreground text-center font-medium">{a.label}</span>
              </button>
            ))}
            <button onClick={() => setShowPopup(true)} className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-[#F3F4F6] text-[#6B7280]">
                <LayoutGrid size={22} />
              </div>
              <span className="text-[11px] leading-tight text-foreground text-center font-medium">More</span>
            </button>
          </div>
        </div>
      </div>
      {showPopup && <CarCarePopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

/* ---------- My Car Health Card ---------- */

function MyCarCard() {
  return (
    <div className="px-5 mt-8">
      <SectionHeader label="My Car" title="Swift VXI · overview" icon={<Car size={14} />} />
      <div className="rounded-[20px] bg-white hairline shadow-elev overflow-hidden">
        {/* Car image banner */}
        <div className="h-[130px] bg-gradient-to-b from-[#F0F4FF] to-[#F9FAFB] flex items-center justify-center">
          <img src={swiftImg} alt="Swift VXI" className="w-[220px] max-h-[120px] object-contain drop-shadow-lg" />
        </div>

        <div className="p-5 pt-4">
          {/* Car identity */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-serif text-[20px] leading-tight text-foreground">Swift VXI</div>
              <div className="text-[12px] text-muted-foreground mt-0.5">DL 4C AB 1234</div>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EDFAF4]">
              <BadgeCheck size={13} className="text-[color:var(--success)]" />
              <span className="text-[10.5px] font-semibold text-[#12A150]">2022 · Petrol</span>
            </div>
          </div>

          {/* Key info cards */}
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            <div className="rounded-xl bg-[#EEF4FF] px-3 py-3 text-center">
              <div className="text-[9px] uppercase tracking-wider text-[#1F6FEB] font-bold">Last Service</div>
              <div className="text-[14px] font-bold text-foreground mt-1">12 Nov '24</div>
            </div>
            <div className="rounded-xl bg-[#FEF3C7] px-3 py-3 text-center">
              <div className="text-[9px] uppercase tracking-wider text-[#D97706] font-bold">Next Service</div>
              <div className="text-[14px] font-bold text-foreground mt-1">Jun '25</div>
            </div>
            <div className="rounded-xl bg-[#EDFAF4] px-3 py-3 text-center">
              <div className="text-[9px] uppercase tracking-wider text-[#12A150] font-bold">Insurance</div>
              <div className="text-[14px] font-bold text-foreground mt-1">45 days</div>
            </div>
          </div>

          {/* Quick action chips */}
          <div className="flex gap-2 mt-4">
            {[
              { icon: <ClipboardList size={13} />, label: "Service History" },
              { icon: <FileCheck size={13} />, label: "Download RC" },
              { icon: <Share2 size={13} />, label: "Share Car" },
            ].map((chip) => (
              <button
                key={chip.label}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#F3F4F6] text-[11px] font-semibold text-foreground hover:bg-[#E5E7EB] transition-colors active:scale-95"
              >
                {chip.icon} {chip.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2.5 mt-5">
            <button className="flex-1 h-11 rounded-full border border-accent text-accent text-[13px] font-semibold">
              View Report
            </button>
            <button className="flex-[1.3] h-11 rounded-full bg-accent text-white text-[13px] font-semibold inline-flex items-center justify-center gap-1">
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
      <div
        className="relative rounded-[24px] text-white p-6 pb-5 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #064E3B 0%, #047857 40%, #0D9488 75%, #14B8A6 100%)" }}
      >
        {/* Decorative rain drops */}
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage: `
            linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.15) 62%, transparent 62%),
            linear-gradient(180deg, transparent 30%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 32%, transparent 32%)
          `,
          backgroundSize: "18px 24px, 12px 18px",
          backgroundPosition: "0 0, 9px 6px",
        }} />

        {/* Glowing circle accent */}
        <div className="absolute -right-8 -top-8 w-[160px] h-[160px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 70%)",
        }} />

        {/* Illustration area */}
        <div
          className="absolute right-3 bottom-3 w-[120px] h-[120px] rounded-[20px] bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-1"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <CloudRain size={44} className="text-white/90" />
          <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Season</span>
        </div>

        <div className="relative max-w-[62%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[9px] uppercase tracking-[0.14em] font-bold text-white/90 mb-2">
            <CloudRain size={10} /> Monsoon Ready
          </div>

          <div className="font-serif text-[24px] leading-[1.15] tracking-tight">
            Monsoon Care<br />Package
          </div>
          <div className="text-[13px] text-white/75 mt-2 leading-snug">
            All-weather check, wipers, undercoat &amp; more — all included.
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {["20-pt Check", "Wipers", "Undercoat"].map((f) => (
              <span key={f} className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-semibold text-white/90">
                {f}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button className="inline-flex items-center gap-1 px-5 py-2.5 rounded-full bg-[#F59E0B] text-[#3B1D00] text-[13px] font-bold shadow-lg hover:brightness-110 transition-all">
              Add to Cart <ChevronRight size={14} />
            </button>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold leading-none">₹999</span>
              <span className="text-[10px] text-white/60 line-through">₹1,499</span>
            </div>
          </div>
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
      <SectionHeader label="Discover" title="Explore Cars" action="View All" variant="primary" icon={<CarFront size={14} />} />
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-5 pb-2 snap-x snap-mandatory">
        {cars.map((c) => (
          <div
            key={c.name}
            className="snap-start min-w-[210px] w-[210px] rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:scale-[1.03] group"
            style={{
              boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1.5px rgba(0,0,0,0.04)",
            }}
          >
            {/* Image area with shimmer highlight */}
            <div className="h-[110px] bg-gradient-to-b from-[#F7F8FC] to-white flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s ease-in-out infinite",
                }}
              />
              {/* Category tag on image */}
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-[9px] font-bold text-muted-foreground uppercase tracking-wider z-[2]">
                {c.tag}
              </div>
              <img src={c.img} alt={c.name} className="w-[170px] max-h-[100px] object-contain relative z-[1] group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <div className="p-3.5">
              {/* Name + Price row */}
              <div className="flex items-start justify-between gap-2">
                <div className="font-semibold text-[14px] text-foreground leading-tight">{c.name}</div>
                <div className="text-[13px] font-bold text-[color:var(--success)] whitespace-nowrap shrink-0">{c.price}</div>
              </div>
              <div className="text-[10.5px] text-muted-foreground mt-0.5">Starting price · Ex-showroom</div>
              <div className="flex gap-1.5 mt-3">
                <button className="flex-1 h-7 rounded-full border border-[rgba(0,0,0,0.12)] text-[11px] font-semibold text-foreground hover:bg-[#F3F4F6] transition-colors">
                  Compare
                </button>
                <button className="flex-1 h-7 rounded-full bg-accent/10 text-accent text-[11px] font-semibold hover:bg-accent/20 transition-colors">
                  Test Drive
                </button>
              </div>
              {/* Buy Now button */}
              <button className="w-full h-9 mt-2 rounded-full bg-accent text-white text-[12px] font-bold inline-flex items-center justify-center gap-1 shadow-md hover:shadow-lg hover:brightness-110 transition-all active:scale-95 relative overflow-hidden group/buy">
                <span className="absolute inset-0 rounded-full opacity-0 group-hover/buy:opacity-100 transition-opacity duration-300" style={{
                  boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.3)",
                }} />
                <ShoppingBag size={13} /> Buy Now
              </button>
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
      <SectionHeader label="Smart Finance" title="Finance your dream car" icon={<IndianRupee size={14} />} />
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

/* ---------- Locators Popup ---------- */

function LocatorsPopup({ onClose }: { onClose: () => void }) {
  const categories = [
    {
      title: "Fuel & Energy",
      icon: <Fuel size={18} />,
      color: "#1F6FEB",
      bg: "#EEF4FF",
      items: [
        { icon: <Fuel size={20} />, label: "Fuel Pump", color: "#1F6FEB" },
        { icon: <Zap size={20} />, label: "EV Charging", color: "#12A150" },
        { icon: <Flame size={20} />, label: "CNG Station", color: "#D97706" },
      ],
    },
    {
      title: "Learning & Help",
      icon: <GraduationCap size={18} />,
      color: "#0891B2",
      bg: "#ECFEFF",
      items: [
        { icon: <GraduationCap size={20} />, label: "Driving School", color: "#0891B2" },
        { icon: <LifeBuoy size={20} />, label: "Roadside SOS", color: "#DC2626" },
        { icon: <MapPin size={20} />, label: "Nearest Dealer", color: "#12A150" },
      ],
    },
    {
      title: "Parking & Services",
      icon: <ParkingCircle size={18} />,
      color: "#7C3AED",
      bg: "#F3F0FF",
      items: [
        { icon: <ParkingCircle size={20} />, label: "Parking", color: "#7C3AED" },
        { icon: <SunMedium size={20} />, label: "Car Wash", color: "#0891B2" },
        { icon: <Disc3 size={20} />, label: "Tyre Shop", color: "#E11D48" },
      ],
    },
    {
      title: "Government",
      icon: <FileCheck size={18} />,
      color: "#D97706",
      bg: "#FEF3C7",
      items: [
        { icon: <Locate size={20} />, label: "PUC Centre", color: "#D97706" },
        { icon: <Building2 size={20} />, label: "RTO Office", color: "#1F6FEB" },
        { icon: <Receipt size={20} />, label: "Toll Plaza", color: "#7C3AED" },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-[440px] max-h-[75dvh] bg-white rounded-t-[28px] overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#D1D5DB]" />
        </div>
        <div className="flex items-center justify-between px-5 pb-4 pt-1">
          <div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">Near You</div>
            <h2 className="text-[20px] font-serif font-semibold text-foreground tracking-tight">All Locations</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-foreground hover:bg-[#E5E7EB] transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto px-5 pb-8" style={{ maxHeight: "calc(75dvh - 90px)" }}>
          <div className="space-y-6">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <span className="text-[14px] font-semibold text-foreground">{cat.title}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {cat.items.map((a) => (
                    <button key={a.label} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
                      <div
                        className="w-12 h-12 rounded-2xl bg-white shadow-card flex items-center justify-center"
                        style={{ color: a.color }}
                      >
                        {a.icon}
                      </div>
                      <span className="text-[10.5px] leading-tight text-foreground text-center font-medium">{a.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Smart Locators ---------- */

function SmartLocators() {
  const [showPopup, setShowPopup] = useState(false);
  const items = [
    { icon: <Fuel size={20} />, label: "Fuel Pump", color: "#1F6FEB" },
    { icon: <Zap size={20} />, label: "EV Charging", color: "#12A150" },
    { icon: <ParkingCircle size={20} />, label: "Parking", color: "#7C3AED" },
    { icon: <Locate size={20} />, label: "PUC Centre", color: "#D97706" },
  ];
  return (
    <>
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
            <button onClick={() => setShowPopup(true)} className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-[#F3F4F6] shadow-card flex items-center justify-center text-[#6B7280]">
                <LayoutGrid size={20} />
              </div>
              <span className="text-[10.5px] font-medium text-foreground text-center leading-tight">More</span>
            </button>
          </div>
        </div>
      </div>
      {showPopup && <LocatorsPopup onClose={() => setShowPopup(false)} />}
    </>
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
      <SectionHeader label="Essentials" title="On-road essentials" variant="compact" icon={<Gauge size={14} />} />
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
      <SectionHeader label="True Value" title="Buy or sell pre-owned" action="Browse" variant="primary" icon={<ArrowLeftRight size={14} />} />
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-5 pb-2">
        {cars.map((c) => (
          <div
            key={c.name}
            className="min-w-[190px] w-[190px] rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:scale-[1.03] group"
            style={{
              boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1.5px rgba(0,0,0,0.04)",
            }}
          >
            <div className="h-[100px] bg-[#F7F8FC] relative overflow-hidden">
              {/* Shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s ease-in-out infinite",
                }}
              />
              <img src={c.img} alt={c.name} className="w-full h-full object-contain p-2 relative z-[0] group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute top-1.5 left-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-[color:var(--success)] text-white text-[9px] font-bold z-[2]">
                <BadgeCheck size={9} /> Certified
              </div>
              <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full bg-white/80 backdrop-blur-sm text-[9px] font-bold text-muted-foreground z-[2]">
                {c.year}
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-1.5">
                <div className="text-[13px] font-semibold text-foreground leading-tight">{c.name}</div>
                <div className="text-[13px] font-bold text-foreground whitespace-nowrap shrink-0">{c.price}</div>
              </div>
              <div className="text-[10.5px] text-muted-foreground mt-0.5">{c.km} · Petrol</div>
              {/* Enquire button per card */}
              <button className="w-full h-8 mt-2.5 rounded-full bg-accent text-white text-[11px] font-bold inline-flex items-center justify-center gap-1 hover:brightness-110 transition-all active:scale-95">
                <Phone size={11} /> Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Common Sell Your Car CTA */}
      <div className="px-5 mt-4">
        <button
          className="w-full relative rounded-2xl p-4 text-white overflow-hidden flex items-center gap-3 active:scale-[0.98] transition-transform"
          style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2563EB 50%, #3B82F6 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }} />
          <div className="relative w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
            <ArrowLeftRight size={22} className="text-white" />
          </div>
          <div className="relative flex-1 text-left">
            <div className="font-semibold text-[14px]">Sell Your Car</div>
            <div className="text-[11px] text-white/70 mt-0.5">Get the best price instantly — free evaluation</div>
          </div>
          <ChevronRight size={18} className="relative text-white/60 shrink-0" />
        </button>
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
    <div className="bg-white/95 backdrop-blur-md border-t border-[rgba(0,0,0,0.06)]">
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

/* ---------- News Ticker ---------- */

type NewsItem = {
  id: string;
  icon: React.ReactNode;
  text: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  gradient: string;
  emoji: string;
  detail: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "ev1",
    icon: <Rocket size={14} className="shrink-0" />,
    text: "e-Vitara pre-bookings open — 500 km range EV!",
    tag: "New Launch",
    tagColor: "#DC2626",
    tagBg: "#FEF2F2",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    emoji: "⚡",
    detail: "Maruti Suzuki's first pure EV, the e-Vitara, is now open for pre-bookings. Featuring a 500 km range, ultra-fast charging, and cutting-edge safety tech. Deliveries start Q1 2027.",
  },
  {
    id: "showroom1",
    icon: <Building2 size={14} className="shrink-0" />,
    text: "20 new Nexa showrooms opening in Tier-2 cities",
    tag: "Expansion",
    tagColor: "#7C3AED",
    tagBg: "#F3F0FF",
    gradient: "linear-gradient(135deg, #2d1b69 0%, #5b2c9d 50%, #8b5cf6 100%)",
    emoji: "🏢",
    detail: "Maruti Suzuki expands its premium Nexa network with 20 new showrooms across tier-2 cities including Indore, Jaipur, Lucknow, and Coimbatore. Grand opening offers include free accessories worth ₹25,000.",
  },
  {
    id: "swift1",
    icon: <Car size={14} className="shrink-0" />,
    text: "All-new Swift hybrid spotted testing — 35 km/l!",
    tag: "Upcoming",
    tagColor: "#1F6FEB",
    tagBg: "#EEF4FF",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%)",
    emoji: "🚗",
    detail: "The next-gen Swift with strong-hybrid technology has been spotted testing on Indian roads. Expected to deliver 35 km/l mileage, making it the most fuel-efficient car in its segment.",
  },
  {
    id: "safety1",
    icon: <ShieldCheck size={14} className="shrink-0" />,
    text: "Grand Vitara scores 5-star Global NCAP rating ⭐",
    tag: "Safety",
    tagColor: "#12A150",
    tagBg: "#EDFAF4",
    gradient: "linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)",
    emoji: "🛡️",
    detail: "The Maruti Suzuki Grand Vitara has achieved a full 5-star safety rating from Global NCAP for both adult and child occupant protection. Features include 6 airbags, ESP, and ADAS.",
  },
  {
    id: "offer1",
    icon: <Gift size={14} className="shrink-0" />,
    text: "Monsoon Bonanza — Up to ₹75,000 off on Arena cars",
    tag: "Offer",
    tagColor: "#D97706",
    tagBg: "#FEF3C7",
    gradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)",
    emoji: "🎁",
    detail: "Limited-time monsoon festival offers on all Arena models. Get up to ₹75,000 in combined benefits including exchange bonus, corporate discounts, and free accessories. Valid till July 31.",
  },
  {
    id: "app1",
    icon: <Globe size={14} className="shrink-0" />,
    text: "Suzuki Connect 2.0 — Remote AC, live tracking & more",
    tag: "Tech",
    tagColor: "#0891B2",
    tagBg: "#ECFEFF",
    gradient: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)",
    emoji: "📱",
    detail: "The all-new Suzuki Connect 2.0 brings remote AC control, real-time vehicle tracking, driving behaviour analysis, and geo-fence alerts. Free 3-year subscription with every new car.",
  },
  {
    id: "cng1",
    icon: <Fuel size={14} className="shrink-0" />,
    text: "S-CNG now available on Brezza & Fronx — ₹1.5/km!",
    tag: "Green",
    tagColor: "#12A150",
    tagBg: "#EDFAF4",
    gradient: "linear-gradient(135deg, #14532d 0%, #15803d 50%, #22c55e 100%)",
    emoji: "⛽",
    detail: "Maruti's factory-fitted S-CNG technology is now available on Brezza and Fronx. Dual-cylinder setup with no boot space compromise. Running cost as low as ₹1.5/km.",
  },
  {
    id: "milestone1",
    icon: <Trophy size={14} className="shrink-0" />,
    text: "Maruti crosses 2.5 crore cumulative sales milestone 🎉",
    tag: "Milestone",
    tagColor: "#D97706",
    tagBg: "#FEF3C7",
    gradient: "linear-gradient(135deg, #451a03 0%, #92400e 50%, #d97706 100%)",
    emoji: "🏆",
    detail: "Maruti Suzuki India has achieved a historic milestone of 2.5 crore cumulative vehicle sales since inception. The company continues to lead with over 41% market share in passenger vehicles.",
  },
];

function NewsTicker() {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setViewerOpen(true)}
        className="w-full overflow-hidden bg-gradient-to-r from-[#0D1B40] via-[#1E3A8A] to-[#0D1B40] py-2 relative group cursor-pointer"
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-shimmer pointer-events-none" />

        {/* Scrolling content — duplicated for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 mx-5 text-white/90">
              <span className="text-[color:#60A5FA]">{item.icon}</span>
              <span
                className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-[1px] rounded-full"
                style={{ color: item.tagColor, background: item.tagBg + "33" }}
              >
                {item.tag}
              </span>
              <span className="text-[12px] font-medium">{item.text}</span>
              <span className="text-white/20 mx-2">│</span>
            </span>
          ))}
        </div>

        {/* Left/right fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0D1B40] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0D1B40] to-transparent pointer-events-none" />

        {/* Pulsing dot */}
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest font-bold text-red-400">Live</span>
        </div>
      </button>

      {viewerOpen && (
        <NewsCardViewer onClose={() => setViewerOpen(false)} />
      )}
    </>
  );
}

/* ---------- News Card Viewer (Tinder-style) ---------- */

function NewsCardViewer({ onClose }: { onClose: () => void }) {
  const [cards, setCards] = useState(() => [...NEWS_ITEMS]);
  const [dragState, setDragState] = useState({ x: 0, y: 0, dragging: false });
  const startRef = useRef({ x: 0, y: 0, time: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [exitAnim, setExitAnim] = useState<"left" | "right" | null>(null);

  const threshold = 80;

  const handleStart = useCallback((clientX: number, clientY: number) => {
    startRef.current = { x: clientX, y: clientY, time: Date.now() };
    setDragState({ x: 0, y: 0, dragging: true });
  }, []);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!dragState.dragging) return;
    const dx = clientX - startRef.current.x;
    const dy = clientY - startRef.current.y;
    setDragState((s) => ({ ...s, x: dx, y: dy * 0.3 }));
  }, [dragState.dragging]);

  const dismissCard = useCallback((dir: "left" | "right") => {
    setExitAnim(dir);
    setTimeout(() => {
      setCards((prev) => {
        if (dir === "right") return []; // skip all
        return prev.slice(1); // next card
      });
      setExitAnim(null);
      setDragState({ x: 0, y: 0, dragging: false });
    }, 300);
  }, []);

  const handleEnd = useCallback(() => {
    if (!dragState.dragging) return;
    if (dragState.x < -threshold) {
      dismissCard("left");
    } else if (dragState.x > threshold) {
      dismissCard("right");
    } else {
      setDragState({ x: 0, y: 0, dragging: false });
    }
  }, [dragState, dismissCard]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX, e.touches[0].clientY);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
  const onTouchEnd = () => handleEnd();

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => { e.preventDefault(); handleStart(e.clientX, e.clientY); };
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => { if (dragState.dragging) handleEnd(); };

  const rotation = dragState.x * 0.08;
  const opacity = Math.max(0, 1 - Math.abs(dragState.x) / 300);

  // Determine stamp
  const stampDirection = Math.abs(dragState.x) > 40
    ? dragState.x < 0 ? "left" : "right"
    : null;

  if (cards.length === 0) {
    return (
      <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md flex items-center justify-center" onClick={onClose}>
        <div className="text-center animate-fade-in" onClick={(e) => e.stopPropagation()}>
          <div className="text-5xl mb-4">✅</div>
          <div className="text-white font-serif text-[22px] font-semibold">All caught up!</div>
          <div className="text-white/60 text-[14px] mt-2">You've seen all the latest updates.</div>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2.5 rounded-full bg-white text-[#0D1B40] text-[14px] font-bold shadow-xl hover:shadow-2xl transition-all active:scale-95"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md flex flex-col" onClick={onClose}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white font-bold text-[15px]">News & Updates</span>
          <span className="text-white/40 text-[12px]">{cards.length} remaining</span>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <X size={18} />
        </button>
      </div>

      {/* Swipe hints */}
      <div className="flex justify-between px-8 mb-2" onClick={(e) => e.stopPropagation()}>
        <span className="text-[11px] text-white/40 flex items-center gap-1">← Swipe left: <span className="text-blue-400 font-semibold">Next</span></span>
        <span className="text-[11px] text-white/40 flex items-center gap-1">Swipe right: <span className="text-amber-400 font-semibold">Skip all</span> →</span>
      </div>

      {/* Card stack */}
      <div className="flex-1 flex items-center justify-center px-6 pb-10" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full max-w-[380px] h-[480px]">
          {/* Background cards (stack effect) */}
          {cards.slice(1, 3).map((card, i) => (
            <div
              key={card.id}
              className="absolute inset-0 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-sm"
              style={{
                transform: `scale(${1 - (i + 1) * 0.04}) translateY(${(i + 1) * 12}px)`,
                zIndex: 10 - i,
                opacity: 1 - (i + 1) * 0.2,
              }}
            />
          ))}

          {/* Top card (draggable) */}
          <div
            ref={cardRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            className={`absolute inset-0 rounded-[24px] overflow-hidden cursor-grab active:cursor-grabbing select-none z-20 ${exitAnim ? "transition-all duration-300 ease-out" : dragState.dragging ? "" : "transition-transform duration-200 ease-out"
              }`}
            style={{
              transform: exitAnim === "left"
                ? "translateX(-150%) rotate(-20deg)"
                : exitAnim === "right"
                  ? "translateX(150%) rotate(20deg)"
                  : `translateX(${dragState.x}px) translateY(${dragState.y}px) rotate(${rotation}deg)`,
              opacity: exitAnim ? 0 : opacity,
            }}
          >
            {/* Card background */}
            <div className="absolute inset-0" style={{ background: cards[0].gradient }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

            {/* Stamp overlays */}
            {stampDirection === "left" && (
              <div className="absolute top-8 right-6 z-30 border-4 border-blue-400 rounded-xl px-4 py-2 rotate-12 opacity-80">
                <span className="text-blue-400 text-[24px] font-black uppercase tracking-wider">Next</span>
              </div>
            )}
            {stampDirection === "right" && (
              <div className="absolute top-8 left-6 z-30 border-4 border-amber-400 rounded-xl px-4 py-2 -rotate-12 opacity-80">
                <span className="text-amber-400 text-[24px] font-black uppercase tracking-wider">Skip</span>
              </div>
            )}

            {/* Content */}
            <div className="relative h-full flex flex-col p-6 text-white">
              {/* Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full"
                  style={{ color: cards[0].tagColor, background: cards[0].tagBg }}
                >
                  {cards[0].tag}
                </span>
              </div>

              {/* Emoji hero */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-8 rounded-full bg-white/5 blur-xl" />
                  <div className="text-[80px] relative z-10 drop-shadow-2xl">{cards[0].emoji}</div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-auto">
                <h3 className="font-serif text-[24px] leading-tight font-bold">{cards[0].text}</h3>
                <p className="text-white/70 text-[13px] mt-3 leading-relaxed">{cards[0].detail}</p>

                {/* Action button */}
                <button className="mt-5 w-full py-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-[13px] flex items-center justify-center gap-1.5 hover:bg-white/25 transition-all active:scale-95 pointer-events-none">
                  Read More <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="flex justify-center gap-1.5 pb-6" onClick={(e) => e.stopPropagation()}>
        {NEWS_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className={`h-1 rounded-full transition-all duration-300 ${i < NEWS_ITEMS.length - cards.length
                ? "w-4 bg-white/60"
                : i === NEWS_ITEMS.length - cards.length
                  ? "w-6 bg-white"
                  : "w-2 bg-white/20"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Stories Rail ---------- */

type Story = {
  id: string;
  label: string;
  bg: string;
  visual: React.ReactNode;
  cta: string;
  headline: string;
  sub: string;
  seen?: boolean;
  isReview?: boolean;
  videoScene: "particles" | "waves" | "aurora" | "circuit" | "rain";
};

const STORIES: Story[] = [
  {
    id: "swift",
    label: "New Swift",
    bg: "bg-gradient-to-br from-[#0D1B40] via-[#1E3A8A] to-[#3B82F6]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0D1B40] via-[#1E3A8A] to-[#3B82F6] p-2">
        <img src={swiftImg} alt="" className="w-[90%] object-contain drop-shadow-2xl" />
      </div>
    ),
    cta: "Explore Now",
    headline: "The All-New Swift",
    sub: "Reimagined for 2026 · 35 km/l hybrid · 6 airbags standard",
    videoScene: "particles",
  },
  {
    id: "ev",
    label: "e-Vitara",
    bg: "bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f3460]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0f3460]">
        <Zap size={32} className="text-[#60A5FA] drop-shadow-lg" fill="#60A5FA" />
      </div>
    ),
    cta: "Pre-Reserve",
    headline: "e-Vitara Revolution",
    sub: "500 km range · Ultra-fast charging · Born electric",
    videoScene: "circuit",
  },
  {
    id: "monsoon",
    label: "Monsoon Care",
    bg: "bg-gradient-to-br from-[#064E3B] via-[#0F766E] to-[#2DD4BF]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#064E3B] via-[#0F766E] to-[#2DD4BF]">
        <CloudRain size={32} className="text-white drop-shadow-lg" />
      </div>
    ),
    cta: "Book Camp",
    headline: "Monsoon Care Camp",
    sub: "Free 20-point check · Wiper & brake inspection · ₹999 package",
    videoScene: "rain",
  },
  {
    id: "offer",
    label: "Mega Offer",
    bg: "bg-gradient-to-br from-[#78350F] via-[#B45309] to-[#F59E0B]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#78350F] via-[#B45309] to-[#F59E0B]">
        <Flame size={32} className="text-white drop-shadow-lg" />
      </div>
    ),
    cta: "Grab Now",
    headline: "Summer Mega Sale",
    sub: "Up to ₹75,000 off · Exchange bonus · Free accessories",
    videoScene: "waves",
  },
  {
    id: "review",
    label: "Rate Us",
    bg: "bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#A78BFA]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#A78BFA]">
        <Star size={32} className="text-white drop-shadow-lg" fill="white" />
      </div>
    ),
    cta: "Rate Service",
    headline: "Share Your Experience",
    sub: "Your feedback drives our excellence",
    isReview: true,
    videoScene: "aurora",
  },
];

function StoryBubble({ story, onTap }: { story: Story; onTap: () => void }) {
  return (
    <button
      onClick={onTap}
      className="flex flex-col items-center gap-2 shrink-0 w-[80px] focus:outline-none group"
    >
      <div className="relative">
        <div
          className={`w-[76px] h-[76px] rounded-full p-[3px] transition-all duration-300 ${story.seen
              ? "bg-gradient-to-br from-[#D3D3D3] to-[#A9A9A9]"
              : "bg-gradient-to-br from-[#FFD700] via-[#C0C0C0] to-[#DAA520] shadow-lg"
            }`}
        >
          <div className={`w-full h-full rounded-full bg-white p-[2.5px] transition-all ${story.seen ? "shadow-sm" : "shadow-md"
            }`}>
            <div
              className={`w-full h-full rounded-full overflow-hidden transition-all duration-300 ${story.seen ? "opacity-60 saturate-40 blur-[0.5px]" : "opacity-100 saturate-100"
                }`}
            >
              {story.visual}
            </div>
          </div>
        </div>
        {!story.seen && (
          <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-[#FFD700] ring-2 ring-white shadow-md animate-pulse" />
        )}
      </div>
      <div className={`text-[10px] leading-tight text-center font-semibold transition-all duration-300 line-clamp-2 px-0.5 ${story.seen ? "text-[#999999]" : "text-[#1a1a1a]"
        }`}>
        {story.label}
      </div>
    </button>
  );
}

function StoriesRail({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <div className="bg-gradient-to-b from-white via-white to-[#f8f8f8] border-b border-[rgba(0,0,0,0.06)] shadow-sm">
      <div className="flex gap-3.5 overflow-x-auto no-scrollbar px-5 py-4">
        {STORIES.map((s, i) => (
          <StoryBubble key={s.id} story={s} onTap={() => onOpen(i)} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Stories Viewer ---------- */

function ReviewOverlay({ story }: { story: Story }) {
  const [rating, setRating] = useState(0);
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-[#f9f9f9] rounded-t-3xl p-6 pb-8 shadow-2xl">
      <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#FFD700] to-[#C0C0C0] mx-auto mb-6 shadow-md" />
      <div className="font-serif text-[24px] text-[#1a1a1a] leading-tight font-bold">Rate Your Experience</div>
      <div className="text-[13px] text-[#666] mt-2 font-medium">{story.sub}</div>
      <div className="flex gap-3 mt-6 justify-center">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} onClick={() => setRating(n)} className="p-1 transition-transform hover:scale-110 active:scale-95">
            <Star size={40} className={n <= rating ? "text-[#FFD700]" : "text-[#E5E7EB]"} fill={n <= rating ? "#FFD700" : "none"} strokeWidth={1.5} />
          </button>
        ))}
      </div>
      <input placeholder="Add a comment (optional)" className="w-full mt-6 px-4 py-3 rounded-xl bg-[#f0f0f0] text-[14px] placeholder:text-[#999] text-[#1a1a1a] font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 transition-all" />
      <button className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#C0C0C0] to-[#DAA520] text-[#1a1a1a] font-bold text-[14px] shadow-lg">Submit Rating</button>
      <button className="w-full mt-3 py-3 rounded-xl bg-white border-2 border-[#E5E7EB] text-[#1a1a1a] font-bold text-[13px] flex items-center justify-center gap-2">
        <Share2 size={16} strokeWidth={2} /> Share on Google
      </button>
    </div>
  );
}

function VideoScene({ scene }: { scene: Story["videoScene"] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const dpr = window.devicePixelRatio || 1;
    c.width = c.offsetWidth * dpr;
    c.height = c.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    const W = c.offsetWidth;
    const H = c.offsetHeight;
    type Pt = { x: number; y: number; vx: number; vy: number; r: number; a: number; hue: number };
    const pts: Pt[] = [];
    if (scene === "particles") {
      for (let i = 0; i < 60; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.6, vy: -Math.random() * 1.2 - 0.3, r: Math.random() * 3 + 1, a: Math.random() * 6, hue: 210 + Math.random() * 40 });
    } else if (scene === "rain") {
      for (let i = 0; i < 100; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: -1, vy: Math.random() * 8 + 6, r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.5 + 0.3, hue: 170 });
    } else if (scene === "circuit") {
      for (let i = 0; i < 30; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1), vy: 0, r: 2, a: Math.random() * 6, hue: 220 + Math.random() * 30 });
    }
    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      if (scene === "particles") {
        for (const p of pts) {
          p.x += p.vx; p.y += p.vy; p.a += 0.005;
          if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue},80%,70%,${0.3 + Math.sin(p.a) * 0.3})`;
          ctx.fill();
        }
        for (let i = 0; i < 3; i++) {
          const ox = W * (0.2 + i * 0.3) + Math.sin(t + i * 2) * 30;
          const oy = H * 0.4 + Math.cos(t * 0.7 + i) * 50;
          const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, 80);
          g.addColorStop(0, "hsla(220,90%,70%,0.15)"); g.addColorStop(1, "transparent");
          ctx.fillStyle = g; ctx.fillRect(ox - 80, oy - 80, 160, 160);
        }
      } else if (scene === "waves") {
        for (let w = 0; w < 4; w++) {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 4) {
            const y = H * (0.35 + w * 0.12) + Math.sin(x * 0.008 + t * (1.5 + w * 0.3) + w) * (30 + w * 10);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
          ctx.fillStyle = `hsla(${30 + w * 15},90%,${55 + w * 5}%,${0.12 - w * 0.02})`;
          ctx.fill();
        }
      } else if (scene === "aurora") {
        for (let b = 0; b < 5; b++) {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 3) {
            const y = H * (0.25 + b * 0.1) + Math.sin(x * 0.005 + t * (0.8 + b * 0.2)) * (50 + b * 15) + Math.cos(x * 0.01 + t * 0.5) * 20;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
          ctx.fillStyle = `hsla(${270 + b * 20},80%,60%,0.08)`;
          ctx.fill();
        }
      } else if (scene === "circuit") {
        ctx.strokeStyle = "rgba(96,165,250,0.15)"; ctx.lineWidth = 1;
        for (let gx = 0; gx < W; gx += 40) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke(); }
        for (let gy = 0; gy < H; gy += 40) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
        for (const p of pts) {
          p.x += p.vx;
          if (Math.random() < 0.02) { const tmp = p.vx; p.vx = p.vy; p.vy = tmp; }
          if (p.x > W + 10 || p.x < -10 || p.y > H + 10 || p.y < -10) { p.x = Math.random() * W; p.y = Math.random() * H; }
          ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue},90%,65%,0.8)`; ctx.fill();
          ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue},90%,65%,0.15)`; ctx.fill();
        }
      } else if (scene === "rain") {
        for (const p of pts) {
          p.x += p.vx; p.y += p.vy;
          if (p.y > H) { p.y = -5; p.x = Math.random() * W; }
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.vx * 3, p.y - p.vy * 2);
          ctx.strokeStyle = `rgba(180,230,255,${p.a})`; ctx.lineWidth = p.r; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [scene]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />;
}

function StoriesViewer({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);
  const [progress, setProgress] = useState(0);
  const story = STORIES[idx];
  useEffect(() => {
    setProgress(0);
    if (story.isReview) return;
    const start = Date.now();
    const t = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / 8000);
      setProgress(p);
      if (p >= 1) { clearInterval(t); if (idx < STORIES.length - 1) { setIdx(idx + 1); STORIES[idx].seen = true; } else { STORIES[idx].seen = true; onClose(); } }
    }, 50);
    return () => clearInterval(t);
  }, [idx, story.isReview, onClose]);
  const goNext = () => { STORIES[idx].seen = true; idx < STORIES.length - 1 ? setIdx(idx + 1) : onClose(); };
  const goPrev = () => { if (idx > 0) { STORIES[idx].seen = true; setIdx(idx - 1); } };
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative w-full max-w-[440px] h-[100dvh] overflow-hidden">
        <div className={`absolute inset-0 ${story.bg}`} />
        <VideoScene key={story.id} scene={story.videoScene} />
        {story.id === "swift" && <img src={swiftImg} alt="" className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[120%] max-w-none object-contain drop-shadow-2xl z-[2]" />}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80 z-[3]" />
        {/* AI Video badge */}
        <div className="absolute top-14 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-white/80">AI Video</span>
        </div>
        {/* Progress */}
        <div className="absolute top-4 left-3 right-3 flex gap-1 z-10">
          {STORIES.map((_, i) => (
            <div key={i} className="flex-1 h-[3px] rounded-full bg-white/30 overflow-hidden">
              <div className="h-full bg-white transition-[width] duration-75 ease-linear" style={{ width: i < idx ? "100%" : i === idx ? `${progress * 100}%` : "0%" }} />
            </div>
          ))}
        </div>
        {/* Header */}
        <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#DAA520] shadow-lg flex items-center justify-center border border-white/30">
              <span className="font-serif text-white text-[13px] font-bold">M</span>
            </div>
            <div className="text-white text-[12.5px] font-bold uppercase tracking-[0.05em]">{story.label}</div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
        <button onClick={goPrev} className="absolute left-0 top-16 bottom-32 w-1/3 z-40" aria-label="Previous" />
        <button onClick={goNext} className="absolute right-0 top-16 bottom-32 w-2/3 z-40" aria-label="Next" />
        {story.isReview ? <ReviewOverlay story={story} /> : (
          <div className="absolute inset-x-0 bottom-0 p-6 pb-8 z-10 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="font-serif text-white text-[28px] leading-tight font-bold tracking-tight">{story.headline}</div>
            <div className="text-white/90 text-[14px] mt-2 max-w-[320px] font-medium leading-relaxed">{story.sub}</div>
            <button className="mt-6 pointer-events-auto w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FFD700] via-[#C0C0C0] to-[#DAA520] text-[#1a1a1a] font-bold text-[14.5px] flex items-center justify-center gap-1.5 shadow-2xl active:scale-95">
              {story.cta} <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Chatbot Components ---------- */

function ChatInterface({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ id: string; text: string; sender: "user" | "bot" }[]>([
    { id: "1", text: "👋 Hello! Welcome to Maruti Suzuki. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), text: input, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponses = [
        "That's a great question! 🚗 Let me help you with that.",
        "I'd be happy to assist! What specific information do you need?",
        "Thanks for reaching out! Our team would love to help you further.",
        "I understand. Let me provide you with the best solution for your needs.",
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: randomResponse, sender: "bot" }]);
    }, 800);
  };

  return (
    <div className="absolute bottom-16 right-0 w-[340px] h-[460px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-[#E5E7EB] animate-scale-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] via-[#C0C0C0] to-[#DAA520] p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
            <MessageCircle size={18} className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-[13px]">Maruti Assistant</div>
            <div className="text-white/80 text-[10px]">Always here to help</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-white/20 p-1 rounded-full transition-all"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f9f9f9]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[260px] px-4 py-2 rounded-xl ${msg.sender === "user"
                  ? "bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-[#1a1a1a] font-medium"
                  : "bg-white text-[#1a1a1a] border border-[#E5E7EB]"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[#E5E7EB] p-3 bg-white rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-full border border-[#E5E7EB] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-[#1a1a1a] p-2.5 rounded-full hover:shadow-lg transition-all active:scale-95 font-semibold"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatbotBubble() {
  const [showOptions, setShowOptions] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="absolute bottom-full right-4 mb-3 z-50">
      {/* Chat Interface */}
      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}

      {/* Options Menu */}
      {showOptions && !showChat && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden animate-scale-in">
          {/* WhatsApp Option */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Maruti%20Suzuki%2C%20I%20need%20assistance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all border-b border-[#E5E7EB] group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
              <Phone size={18} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[13px] text-[#1a1a1a] group-hover:text-green-700">Chat on WhatsApp</div>
              <div className="text-[11px] text-[#666]">Direct messaging</div>
            </div>
            <ExternalLink size={14} className="text-[#999] group-hover:text-green-600" />
          </a>

          {/* Chatbot Option */}
          <button
            onClick={() => {
              setShowOptions(false);
              setShowChat(true);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all group text-left"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#DAA520] flex items-center justify-center text-white">
              <MessageCircle size={18} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[13px] text-[#1a1a1a] group-hover:text-amber-700">Chat with AI</div>
              <div className="text-[11px] text-[#666]">Instant responses</div>
            </div>
            <ChevronRight size={14} className="text-[#999] group-hover:text-amber-600" />
          </button>
        </div>
      )}

      {/* Main Bubble */}
      <button
        onClick={() => {
          if (showChat) {
            setShowChat(false);
          } else {
            setShowOptions(!showOptions);
          }
        }}
        className={`relative w-12 h-12 rounded-full shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center font-bold text-white text-lg group ${showOptions || showChat
            ? "bg-gradient-to-br from-[#1E3A8A] to-[#475569]"
            : "bg-gradient-to-br from-[#1E3A8A] via-[#60A5FA] to-[#C0C0C0] hover:scale-105"
          }`}
      >
        {showOptions || showChat ? (
          <X size={24} strokeWidth={3} />
        ) : (
          <MessageCircle size={24} strokeWidth={1.5} />
        )}

        {/* Animated Pulse Ring */}
        {!showOptions && !showChat && (
          <div className="absolute inset-0 rounded-full bg-[#60A5FA] opacity-15 animate-pulse" />
        )}

        {/* Notification Badge */}
        {!showOptions && !showChat && (
          <div className="absolute -top-0 -right-0 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-[9px] font-bold animate-bounce">
            1
          </div>
        )}
      </button>
    </div>
  );
}

/* ---------- Page ---------- */

function Home() {
  const [alertOpen, setAlertOpen] = useState(true);
  const [storyIdx, setStoryIdx] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[color:var(--surface)]">
      <main className="max-w-[440px] mx-auto bg-[color:var(--surface)] pb-2">
        <TopNav />
        <NewsTicker />
        <StoriesRail onOpen={(i) => setStoryIdx(i)} />
        {alertOpen && <ServiceAlert onDismiss={() => setAlertOpen(false)} />}
        <HeroCarousel />

        {/* ── Section: Car Care ── */}
        <QuickActions />

        {/* divider */}
        <div className="mx-5 my-4 h-px bg-[rgba(0,0,0,0.06)]" />

        {/* ── Section: My Car ── */}
        <MyCarCard />
        <ContextualBanner />

        {/* divider */}
        <div className="mx-5 my-4 h-px bg-[rgba(0,0,0,0.06)]" />

        {/* ── Section: Find & Explore ── */}
        <HelpMeDecide />
        <div className="mt-4" />
        <ExploreCars />

        {/* divider */}
        <div className="mx-5 my-4 h-px bg-[rgba(0,0,0,0.06)]" />

        {/* ── Section: Finance ── */}
        <SmartFinance />

        {/* divider */}
        <div className="mx-5 my-4 h-px bg-[rgba(0,0,0,0.06)]" />

        {/* ── Section: Locators & Utilities ── */}
        <SmartLocators />
        <Utilities />

        {/* divider */}
        <div className="mx-5 my-4 h-px bg-[rgba(0,0,0,0.06)]" />

        {/* ── Section: Pre-owned ── */}
        <TrueValue />

        <div className="h-8" />
        <div className="relative sticky bottom-0 z-30">
          <ChatbotBubble />
          <BottomNav />
        </div>
      </main>
      {storyIdx !== null && (
        <StoriesViewer startIndex={storyIdx} onClose={() => setStoryIdx(null)} />
      )}
    </div>
  );
}
