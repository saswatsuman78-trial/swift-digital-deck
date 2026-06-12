import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Bell, User, ChevronRight, Wrench, Gift, ShieldCheck, Sparkles, BookOpen,
  Calculator, ArrowLeftRight, Headphones, Fuel, Zap, ParkingCircle, MapPin,
  GraduationCap, BadgeCheck, AlertTriangle, Home as HomeIcon, Car, ShoppingBag,
  CircleUserRound, X, Phone, FileWarning, Receipt, Locate,
  Flame, IndianRupee, Trophy, CloudRain, Star, Camera, Share2,
  MessageCircle, Send, ExternalLink, ArrowUpRight,
  Paintbrush, Settings, ClipboardList, CarFront, FileCheck, CreditCard,
  RefreshCw, Banknote, Package, Disc3, SunMedium, Gauge,
  LifeBuoy, BookMarked, Navigation, ChevronLeft, LayoutGrid,
  Newspaper, TrendingUp, Megaphone, Building2, Rocket, Globe, Heart,
  PhoneCall,
} from "lucide-react";
import swiftImg from "@/assets/swift.png";
import vitaraImg from "@/assets/grand-vitara.png";
import brezzaImg from "@/assets/brezza.png";
import dzireImg from "@/assets/dzire.png";
import showroomImg from "@/assets/nexa-showroom.png";

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
      <div className="px-24 mb-16">
        <div className="flex items-center gap-8 mb-8">
          {icon && <div className="text-accent">{icon}</div>}
          {label && <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-accent">{label}</div>}
        </div>
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-[22px] font-semibold text-foreground tracking-tight leading-tight">{title}</h2>
          {action && (
            <button onClick={onAction} className="text-[13px] font-semibold text-accent flex items-center gap-4 hover:gap-8 transition-all">
              {action} <ChevronRight size={14} />
            </button>
          )}
        </div>

      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="px-24 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {icon && <span className="text-muted-foreground">{icon}</span>}
            {label && <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-muted-foreground">{label} ·</span>}
            <h2 className="text-[15px] font-semibold text-foreground tracking-tight">{title}</h2>
          </div>
          {action && (
            <button onClick={onAction} className="text-[12px] font-medium text-accent flex items-center gap-4">
              {action} <ChevronRight size={12} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // default
  return (
    <div className="px-24 mb-16">
      {label && (
        <div className="flex items-center gap-8 mb-4">
          {icon && <span className="text-accent">{icon}</span>}
          <div className="section-label">{label}</div>
        </div>
      )}
      <div className="flex items-end justify-between">
        <h2 className="text-[18px] font-semibold text-foreground tracking-tight">{title}</h2>
        {action && (
          <button onClick={onAction} className="text-[13px] font-medium text-accent flex items-center gap-4">
            {action} <ChevronRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- Nexa Button Component ---------- */

type NexaButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "large" | "medium" | "small";
  color?: "black" | "white" | "accent" | "custom";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
};

function NexaButton({
  children,
  variant = "primary",
  size = "medium",
  color = "black",
  className = "",
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
  icon,
}: NexaButtonProps) {
  let heightClass = "h-[40px]";
  let textClass = "text-[13px] font-bold";
  let pxClass = "px-24";
  let cutH = "8px";
  let cutV = "10px";
  let hasCut = variant !== "tertiary" && size !== "small";

  if (size === "large") {
    heightClass = "h-[52px]";
    textClass = "text-[15px] font-bold";
    pxClass = "px-32";
    cutH = "8px";
    cutV = "11px";
  } else if (size === "small") {
    heightClass = "h-[32px]";
    textClass = "text-[11.5px] font-bold";
    pxClass = "px-16";
    hasCut = false;
  }

  const clipPathStr = hasCut
    ? `polygon(0 ${cutV}, ${cutH} 0, 100% 0, 100% calc(100% - ${cutV}), calc(100% - ${cutH}) 100%, 0 100%)`
    : "none";

  const baseStyle = "relative inline-flex items-center justify-center shrink-0 active:scale-[0.98] transition-transform select-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  if (variant === "tertiary") {
    const textColor = color === "accent" ? "text-accent" : color === "white" ? "text-white" : "text-[#18171A]";
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle} ${textColor} ${textClass} hover:opacity-80 transition-opacity ${className}`}
      >
        {leftIcon || icon}
        <span>{children}</span>
        {rightIcon}
      </button>
    );
  }

  if (variant === "primary") {
    const bgColor = color === "white" ? "bg-white" : color === "accent" ? "bg-accent" : color === "custom" ? "bg-inherit" : "bg-[#18171A]";
    const textColor = color === "white" ? "text-[#18171A]" : color === "accent" ? "text-white" : color === "custom" ? "text-inherit" : "text-white";
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle} ${heightClass} ${pxClass} ${className} cursor-pointer group`}
        style={{
          clipPath: clipPathStr,
        }}
      >
        {/* Background fill */}
        <div className={`absolute inset-0 ${bgColor} transition-colors group-hover:brightness-110`} />
        {/* Content */}
        <span className={`relative z-10 flex items-center justify-center gap-8 ${textColor} ${textClass}`}>
          {leftIcon || icon}
          <span>{children}</span>
          {rightIcon}
        </span>
      </button>
    );
  }

  if (variant === "secondary") {
    const borderColor = color === "white" ? "bg-white" : color === "accent" ? "bg-accent" : color === "custom" ? "bg-inherit" : "bg-[#18171A]";
    const textColor = color === "white" ? "text-white" : color === "accent" ? "text-accent" : color === "custom" ? "text-inherit" : "text-[#18171A]";
    const innerBg = color === "white" ? "bg-[#18171A]" : "bg-white";

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle} ${heightClass} ${pxClass} ${className} cursor-pointer group`}
      >
        {/* Outer border shape */}
        {hasCut ? (
          <>
            <div className={`absolute inset-0 ${borderColor} transition-colors group-hover:brightness-110`} style={{ clipPath: clipPathStr }} />
            <div className={`absolute inset-[1.5px] ${innerBg} transition-colors`} style={{ clipPath: clipPathStr }} />
          </>
        ) : (
          <div className={`absolute inset-0 rounded-md border-2 ${color === "white" ? "border-white" : color === "accent" ? "border-accent" : color === "custom" ? "border-inherit" : "border-[#18171A]"} ${innerBg}`} />
        )}
        {/* Content */}
        <span className={`relative z-10 flex items-center justify-center gap-8 ${textColor} ${textClass}`}>
          {leftIcon || icon}
          <span>{children}</span>
          {rightIcon}
        </span>
      </button>
    );
  }

  return null;
}

/* ---------- Homepage Main Card ---------- */

function HomepageMainCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="px-24 mt-32">
      <div
        className="relative h-[220px] rounded-tl-[32px] rounded-tr-[8px] rounded-br-[32px] rounded-bl-[8px] overflow-hidden shadow-elev text-white group"
        style={{
          background: "linear-gradient(135deg, #1b2a4a 0%, #0d1527 100%)",
        }}
      >
        {/* Background glow overlay */}
        <div className="absolute right-0 top-0 w-[180px] h-[180px] rounded-full bg-accent/20 blur-[40px] pointer-events-none" />

        {/* Vehicle Image */}
        <img
          src={vitaraImg}
          alt="Grand Vitara"
          className="absolute -right-16 top-12 w-[190px] object-contain drop-shadow-2xl opacity-90 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Glassmorphic card overlay */}
        <div
          className="absolute bottom-16 left-16 right-16 p-16 rounded-[16px] flex items-center justify-between gap-16 shadow-lg border border-white/10"
          style={{
            background: "linear-gradient(135deg, rgba(56, 79, 110, 0.75) 0%, rgba(91, 91, 91, 0.75) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        >
          <div className="flex-1 text-left">
            <h4 className="font-serif text-[15px] font-bold text-white leading-tight">Test drive your dream car?</h4>
            <p className="text-[10px] text-white/70 mt-4 leading-normal">Check the availability and book your slot today!</p>
          </div>
          <NexaButton
            variant="primary"
            color="white"
            size="small"
            onClick={onClick}
            className="shrink-0"
          >
            Know More
          </NexaButton>
        </div>
      </div>
    </div>
  );
}

/* ---------- Homepage Sub Card ---------- */

function HomepageSubCard({ onClick }: { onClick: () => void }) {
  return (
    <div className="px-24 mt-24">
      <div
        className="relative h-[185px] rounded-tl-[8px] rounded-tr-[32px] rounded-br-[8px] rounded-bl-[32px] overflow-hidden p-24 text-white shadow-elev flex flex-col justify-between group"
        style={{
          background: "linear-gradient(135deg, #2c2c2e 0%, #18171a 100%)",
        }}
      >
        {/* Bottom darkening gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#18171A] to-transparent pointer-events-none" />
        
        {/* Sparkles background accent */}
        <div className="absolute right-16 bottom-16 opacity-15 text-white pointer-events-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
          <Sparkles size={110} strokeWidth={1} />
        </div>

        <div className="relative z-10">
          <h4 className="font-serif text-[20px] font-bold text-white leading-tight">Searching for accessories?</h4>
          <p className="text-[11.5px] text-white/70 mt-4 leading-normal max-w-[65%]">Explore our accessories to upgrade your car!</p>
        </div>

        <div className="relative z-10 flex justify-between items-center mt-16">
          <NexaButton
            variant="primary"
            color="white"
            size="small"
            onClick={onClick}
          >
            Know More
          </NexaButton>
        </div>
      </div>
    </div>
  );
}

/* ---------- Homepage Short Card Grid ---------- */

function HomepageShortCardGrid({
  onServiceClick,
  onBookClick,
}: {
  onServiceClick: () => void;
  onBookClick: () => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-12 px-24 mt-24 items-end">
      {/* Explore Car Services */}
      <div
        onClick={onServiceClick}
        className="min-w-0 rounded-[20px] p-16 flex flex-col justify-between h-[165px] text-[#18171A] text-left relative overflow-hidden group cursor-pointer shadow-card border border-[rgba(0,0,0,0.04)] hover:shadow-md transition-shadow"
        style={{
          background: "linear-gradient(217deg, #CEE5E9 0%, #DAC8C6 100%)",
        }}
      >
        <div>
          <h4 className="font-serif text-[16px] font-bold leading-tight break-words">Explore Car<br />Services</h4>
          <p className="text-[11px] text-[#18171A]/70 mt-4 leading-normal">We have all your answers here!</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[12px] font-bold text-[#18171A] whitespace-nowrap">Know More</span>
          <div className="w-[32px] h-[32px] rounded-full bg-[#18171A] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      {/* Book Your Car */}
      <div
        onClick={onBookClick}
        className="min-w-0 rounded-[20px] p-16 flex flex-col justify-between h-[165px] text-white text-left relative overflow-hidden group cursor-pointer shadow-card hover:shadow-md transition-shadow"
        style={{
          backgroundColor: "#18171A",
        }}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "12px 12px",
        }} />

        <div className="relative">
          <h4 className="font-serif text-[16px] font-bold leading-tight break-words">Book Your<br />Car</h4>
          <p className="text-[11px] text-white/70 mt-4 leading-normal">Get your dream car today.</p>
        </div>
        <div className="relative flex items-center justify-between mt-auto">
          <span className="text-[12px] font-bold text-white whitespace-nowrap">Know More</span>
          <div className="w-[32px] h-[32px] rounded-full bg-white text-[#18171A] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Top Nav ---------- */

function TopNav({ activeTab = "Home" }: { activeTab?: string }) {
  if (activeTab !== "Home") {
    return (
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between px-24 pt-16 pb-16">
          <div className="flex items-center gap-8">
            <div className="w-[36px] h-[36px] rounded-xl bg-primary flex items-center justify-center">
              <span className="font-serif text-white text-[18px] leading-none">R</span>
            </div>
            <div className="font-serif text-[18px] font-bold text-foreground">
              {activeTab === "Service" && "Service & Maintenance"}
              {activeTab === "My Car" && "My Swift VXI"}
              {activeTab === "Shop" && "Nexa Accessories"}
              {activeTab === "Profile" && "My Profile"}
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button aria-label="Notifications" className="relative w-[40px] h-[40px] rounded-full bg-secondary flex items-center justify-center">
              <Bell size={18} className="text-foreground" />
              <span className="absolute top-[8px] right-[10px] w-[6px] h-[6px] rounded-full bg-[color:var(--amber)]" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between px-24 pt-16 pb-8">
        <div className="flex items-center gap-8">
          <div className="w-[36px] h-[36px] rounded-xl bg-primary flex items-center justify-center">
            <span className="font-serif text-white text-[18px] leading-none">R</span>
          </div>
          <div className="leading-tight">
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">Maruti Suzuki</div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button aria-label="Notifications" className="relative w-[40px] h-[40px] rounded-full bg-secondary flex items-center justify-center">
            <Bell size={18} className="text-foreground" />
            <span className="absolute top-[8px] right-[10px] w-[6px] h-[6px] rounded-full bg-[color:var(--amber)]" />
          </button>
          {/* Rewards Points */}
          <button className="h-[40px] px-16 rounded-full bg-amber-50/80 border border-amber-200/50 hover:bg-amber-100/50 flex items-center gap-8 text-[#B45309] active:scale-95 transition-all">
            <Trophy size={14} className="text-[#D97706]" fill="currentColor" />
            <span className="text-[12px] font-bold">2,450 <span className="text-[10px] text-[#B45309]/80 font-semibold">Pts</span></span>
          </button>
          {/* SOS Button */}
          <button className="h-[40px] px-16 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center gap-4 text-[12px] font-bold shadow-md shadow-red-600/20 active:scale-95 transition-all">
            <span className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
            <span>SOS</span>
          </button>
        </div>
      </div>
      <div className="px-24 pb-16">
        <div className="font-serif text-[22px] leading-tight text-foreground">
          Good morning, Rahul <span aria-hidden>👋</span>
        </div>
        <button className="mt-16 inline-flex items-center gap-8 px-8 py-4 rounded-full bg-secondary text-[11.5px] text-foreground font-medium">
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
    <div className="mx-24 mt-16 flex items-center gap-8 px-16 py-8 rounded-xl bg-[#FEF3C7] text-[#92400E]">
      <AlertTriangle size={15} />
      <span className="text-[12.5px] font-medium flex-1">
        Service due in 15 days — Book now
      </span>
      <ChevronRight size={14} />
      <button onClick={onDismiss} aria-label="Dismiss" className="ml-4 opacity-70">
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
      sub: "Your Swift is due in 15 days. Lock in a slot this week.",
      cta: "Book Now",
      gradient: "var(--background-image-nexa-grad-3)",
      accentBg: "#161D1F",
      illustration: <img src={swiftImg} alt="Swift" className="w-[150px] absolute -right-8 bottom-0 drop-shadow-2xl" />,
    },
    {
      eyebrow: "Seasonal Camp",
      title: "Monsoon Care Camp",
      sub: "Free 20-point check-up + up to 20% off on parts.",
      cta: "Book Now",
      gradient: "linear-gradient(135deg, #274E3A 0%, #298555 100%)",
      accentBg: "#298555",
      illustration: (
        <div className="absolute right-16 bottom-16 w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center">
          <Sparkles size={56} className="text-white/80" />
        </div>
      ),
    },
    {
      eyebrow: "Genuine Accessories",
      title: "Personalise your Swift",
      sub: "Seat covers, dash cams, alloys — fitted by experts.",
      cta: "Shop Now",
      gradient: "linear-gradient(135deg, #AC6200 0%, #FFBD66 100%)",
      accentBg: "#AC6200",
      illustration: (
        <div className="absolute right-16 bottom-16 w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center">
          <Gift size={56} className="text-white/80" />
        </div>
      ),
    },
    {
      eyebrow: "Insurance",
      title: "Renew & save ₹2,100",
      sub: "Your cover expires in 45 days. Pay nothing until renewal.",
      cta: "Renew Now",
      gradient: "var(--background-image-nexa-grad-4)",
      accentBg: "#384F6E",
      illustration: (
        <div className="absolute right-16 bottom-16 w-[110px] h-[110px] rounded-full bg-white/10 flex items-center justify-center">
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
    <div className="mt-16">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full px-24 snap-center">
            <div
              className="relative h-[190px] rounded-[20px] overflow-hidden p-24 text-white shadow-elev"
              style={{ background: s.gradient }}
            >
              <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-white/80">{s.eyebrow}</div>
              <div className="font-serif text-[22px] leading-[1.15] mt-4 max-w-[62%]">{s.title}</div>
              <div className="text-[12.5px] text-white/80 mt-8 max-w-[60%] leading-snug">{s.sub}</div>
              <NexaButton
                variant="primary"
                color="white"
                size="medium"
                className="absolute bottom-24 left-24"
                rightIcon={<ChevronRight size={14} />}
              >
                {s.cta}
              </NexaButton>
              {s.illustration}
              {i === 0 && (
                <div className="absolute top-24 right-24 px-8 py-4 rounded-full bg-white/15 backdrop-blur text-[10px] font-semibold">
                  15 days left
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 mt-16">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-[6px] rounded-full transition-all ${i === idx ? "w-[20px] bg-accent" : "w-[6px] bg-[#D1D5DB]"}`}
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
        <div className="flex justify-center pt-16 pb-4">
          <div className="w-[40px] h-[4px] rounded-full bg-[#D1D5DB]" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-24 pb-16 pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">Car Care</div>
            <h2 className="text-[20px] font-serif font-semibold text-foreground tracking-tight">All Services</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-[36px] h-[36px] rounded-full bg-[#F3F4F6] flex items-center justify-center text-foreground hover:bg-[#E5E7EB] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable categories */}
        <div className="overflow-y-auto px-24 pb-32 max-h-[calc(85dvh-90px)]">
          <div className="space-y-24">
            {categories.map((cat) => (
              <div key={cat.title}>
                {/* Category header */}
                <div className="flex items-center gap-8 mb-16">
                  <div
                    className="w-[28px] h-[28px] rounded-lg flex items-center justify-center"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <span className="text-[14px] font-semibold text-foreground">{cat.title}</span>
                </div>
                {/* Items grid */}
                <div className="grid grid-cols-4 gap-16">
                  {cat.items.map((a) => (
                    <button key={a.label} className="flex flex-col items-center gap-8 active:scale-95 transition-transform">
                      <div
                        className="relative w-[56px] h-[56px] rounded-2xl flex items-center justify-center shadow-sm"
                        style={{ background: a.bg, color: a.color }}
                      >
                        {a.icon}
                        {a.dot && <span className="absolute -top-[2px] -right-[2px] w-[10px] h-[10px] rounded-full bg-[#DC2626] border-2 border-white" />}
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
      <div className="mt-8">
        <SectionHeader label="Car Care" title="Complete care for your car" variant="primary" icon={<Wrench size={14} />} />
        <div className="px-24">
          <div className="grid grid-cols-5 gap-16">
            {topActions.map((a) => (
              <button key={a.label} className="flex flex-col items-center gap-8 active:scale-95 transition-transform">
                <div
                  className="relative w-[56px] h-[56px] rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: a.bg, color: a.color }}
                >
                  {a.icon}
                  {a.dot && <span className="absolute -top-[2px] -right-[2px] w-[10px] h-[10px] rounded-full bg-[#DC2626] border-2 border-white" />}
                </div>
                <span className="text-[11px] leading-tight text-foreground text-center font-medium">{a.label}</span>
              </button>
            ))}
            <button onClick={() => setShowPopup(true)} className="flex flex-col items-center gap-8 active:scale-95 transition-transform">
              <div className="relative w-[56px] h-[56px] rounded-2xl flex items-center justify-center shadow-sm bg-[#F3F4F6] text-[#6B7280]">
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
    <div className="px-24 mt-32">
      <SectionHeader label="My Car" title="Swift VXI · overview" icon={<Car size={14} />} />
      <div className="rounded-[20px] bg-white hairline shadow-elev overflow-hidden">
        {/* Car image banner */}
        <div className="h-[130px] bg-gradient-to-b from-[#F0F4FF] to-[#F9FAFB] flex items-center justify-center">
          <img src={swiftImg} alt="Swift VXI" className="w-[220px] max-h-[120px] object-contain drop-shadow-lg" />
        </div>

        <div className="p-24 pt-16">
          {/* Car identity */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-serif text-[20px] leading-tight text-foreground">Swift VXI</div>
              <div className="text-[12px] text-muted-foreground mt-4">DL 4C AB 1234</div>
            </div>
            <div className="flex items-center gap-8 px-8 py-4 rounded-full bg-[#EDFAF4]">
              <BadgeCheck size={13} className="text-[color:var(--success)]" />
              <span className="text-[10.5px] font-semibold text-[#12A150]">2022 · Petrol</span>
            </div>
          </div>

          {/* Key info cards */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="rounded-xl bg-[#EEF4FF] px-16 py-16 text-center">
              <div className="text-[9px] uppercase tracking-wider text-[#1F6FEB] font-bold">Last Service</div>
              <div className="text-[14px] font-bold text-foreground mt-4">12 Nov '24</div>
            </div>
            <div className="rounded-xl bg-[#FEF3C7] px-16 py-16 text-center">
              <div className="text-[9px] uppercase tracking-wider text-[#D97706] font-bold">Next Service</div>
              <div className="text-[14px] font-bold text-foreground mt-4">Jun '25</div>
            </div>
            <div className="rounded-xl bg-[#EDFAF4] px-16 py-16 text-center">
              <div className="text-[9px] uppercase tracking-wider text-[#12A150] font-bold">Insurance due</div>
              <div className="text-[14px] font-bold text-foreground mt-4">45 days</div>
            </div>
          </div>

          {/* Quick action chips */}
          <div className="flex gap-8 mt-16">
            {[
              { icon: <ClipboardList size={13} />, label: "Service History" },
              { icon: <FileCheck size={13} />, label: "Download RC" },
              { icon: <PhoneCall size={13} />, label: "Call for Insurance" },
            ].map((chip) => (
              <button
                key={chip.label}
                className="flex-1 inline-flex items-center justify-center gap-8 py-8 rounded-xl bg-[#F3F4F6] text-[11px] font-semibold text-foreground hover:bg-[#E5E7EB] transition-colors active:scale-95"
              >
                {chip.icon} {chip.label}
              </button>
            ))}
          </div>

          <div className="flex gap-8 mt-16">
            <NexaButton
              variant="secondary"
              color="accent"
              size="medium"
              className="flex-1"
            >
              View Report
            </NexaButton>
            <NexaButton
              variant="primary"
              color="accent"
              size="medium"
              className="flex-[1.3]"
              rightIcon={<ChevronRight size={14} />}
            >
              Book Service
            </NexaButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Live Contextual Banner ---------- */

function ContextualBanner() {
  return (
    <div className="px-24 mt-32">
      <div
        className="relative rounded-[24px] text-white p-24 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #274E3A 0%, #298555 100%)" }}
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
          background: "radial-gradient(circle, rgba(41, 133, 85, 0.5) 0%, transparent 70%)",
        }} />

        {/* Illustration area */}
        <div
          className="absolute right-16 bottom-16 w-[120px] h-[120px] rounded-[20px] bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <CloudRain size={44} className="text-white/90" />
          <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Season</span>
        </div>

        <div className="relative max-w-[62%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/15 backdrop-blur-sm text-[9px] uppercase tracking-[0.14em] font-bold text-white/90 mb-8">
            <CloudRain size={10} /> Monsoon Ready
          </div>

          <div className="font-serif text-[24px] leading-[1.15] tracking-tight">
            Monsoon Care<br />Package
          </div>
          <div className="text-[13px] text-white/75 mt-8 leading-snug">
            All-weather check, wipers, undercoat &amp; more — all included.
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-8 mt-16">
            {["20-pt Check", "Wipers", "Undercoat"].map((f) => (
              <span key={f} className="inline-flex items-center px-8 py-4 rounded-full bg-white/15 text-[10px] font-semibold text-white/90">
                {f}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-16 mt-16">
            <button className="inline-flex items-center gap-4 px-24 py-8 rounded-full bg-[#F59E0B] text-[#3B1D00] text-[13px] font-bold shadow-lg hover:brightness-110 transition-all">
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

function ExploreCars({ onSelect }: { onSelect?: (car: CarItem) => void }) {
  const cars: CarItem[] = [
    { name: "Grand Vitara", tag: "Intelligent SUV", price: "₹11.42 L*", img: vitaraImg },
    { name: "Brezza", tag: "Compact SUV", price: "₹8.69 L*", img: brezzaImg },
    { name: "Dzire", tag: "Premium sedan", price: "₹6.84 L*", img: dzireImg },
    { name: "Swift", tag: "City hatchback", price: "₹6.49 L*", img: swiftImg },
    { name: "Ciaz", tag: "Executive sedan", price: "₹9.40 L*", img: dzireImg },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    for (let i = 0; i < el.children.length; i++) {
      const child = el.children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    }
    setActiveIdx(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="mt-32">
      <SectionHeader label="Discover" title="Explore Cars" action="View All" variant="primary" icon={<CarFront size={14} />} />
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto no-scrollbar px-24 pb-8 snap-x snap-mandatory items-end"
        style={{ scrollPaddingLeft: "24px" }}
      >
        {cars.map((c, idx) => {
          const isActive = idx === activeIdx;

          return (
            <div
              key={c.name}
              onClick={() => onSelect?.(c)}
              className="snap-center shrink-0 overflow-hidden group cursor-pointer flex flex-col justify-between"
              style={{
                width: isActive ? 240 : 160,
                height: isActive ? 320 : 260,
                borderRadius: isActive ? "28px 4px 28px 4px" : "16px",
                background: isActive ? "#18171A" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#18171A",
                boxShadow: isActive
                  ? "0 8px 28px rgba(0,0,0,0.40)"
                  : "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1.5px rgba(0,0,0,0.04)",
                border: isActive ? "1px solid rgba(255,255,255,0.10)" : "none",
                transition: "width 0.35s cubic-bezier(.4,0,.2,1), height 0.35s cubic-bezier(.4,0,.2,1), border-radius 0.35s ease, background 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              {/* Image area */}
              <div
                className="flex items-center justify-center relative overflow-hidden shrink-0"
                style={{
                  height: isActive ? 130 : 100,
                  background: isActive
                    ? "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)"
                    : "linear-gradient(to bottom, #F7F8FC, #FFFFFF)",
                  transition: "height 0.35s ease, background 0.35s ease",
                }}
              >
                {/* Category tag */}
                <div
                  className="absolute top-8 left-8 px-8 py-4 rounded-full text-[9px] font-bold uppercase tracking-wider z-[2]"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.80)",
                    backdropFilter: "blur(6px)",
                    color: isActive ? "#FFFFFF" : "var(--muted-foreground)",
                    transition: "background 0.3s ease, color 0.3s ease",
                  }}
                >
                  {c.tag}
                </div>
                <img
                  src={c.img}
                  alt={c.name}
                  className="object-contain relative z-[1] group-hover:scale-105 transition-transform duration-300"
                  style={{
                    width: isActive ? 190 : 130,
                    maxHeight: isActive ? 115 : 85,
                    filter: isActive ? "drop-shadow(0 4px 12px rgba(255,255,255,0.15))" : "none",
                    transition: "width 0.35s ease, max-height 0.35s ease",
                  }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between" style={{ padding: isActive ? 16 : 12 }}>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="font-semibold leading-tight"
                      style={{
                        fontSize: isActive ? 15 : 12,
                        fontFamily: isActive ? "var(--font-serif)" : "inherit",
                        fontWeight: isActive ? 700 : 600,
                        transition: "font-size 0.3s ease",
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      className="font-bold whitespace-nowrap shrink-0"
                      style={{
                        fontSize: isActive ? 13 : 11,
                        color: isActive ? "#FFFFFF" : "var(--success)",
                        transition: "font-size 0.3s ease, color 0.3s ease",
                      }}
                    >
                      {c.price}
                    </div>
                  </div>
                  <div
                    className="mt-4"
                    style={{
                      fontSize: isActive ? 10 : 9,
                      color: isActive ? "rgba(255,255,255,0.5)" : "var(--muted-foreground)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Starting price · Ex-showroom
                  </div>
                </div>

                {/* Buttons — shown on active card, hidden on inactive for cleanliness */}
                <div style={{ opacity: isActive ? 1 : 0, maxHeight: isActive ? 120 : 0, overflow: "hidden", transition: "opacity 0.3s ease 0.1s, max-height 0.3s ease" }}>
                  <div className="flex gap-8 mt-8">
                    <NexaButton
                      variant="secondary"
                      color={isActive ? "white" : undefined}
                      size="small"
                      className="flex-1 text-[11px]"
                      onClick={(e) => { e.stopPropagation(); onSelect?.(c); }}
                    >
                      Compare
                    </NexaButton>
                    <NexaButton
                      variant="primary"
                      color="white"
                      size="small"
                      className="flex-1 bg-white text-[#18171A] hover:bg-white/90 text-[11px]"
                      onClick={(e) => { e.stopPropagation(); onSelect?.(c); }}
                    >
                      Test Drive
                    </NexaButton>
                  </div>
                  <NexaButton
                    variant="primary"
                    color="accent"
                    size="small"
                    className="w-full mt-8"
                    leftIcon={<ShoppingBag size={11} />}
                    onClick={(e) => { e.stopPropagation(); onSelect?.(c); }}
                  >
                    Book now
                  </NexaButton>
                </div>

                {/* Inactive card: simple "View" link */}
                {!isActive && (
                  <div className="mt-8">
                    <NexaButton
                      variant="primary"
                      color="accent"
                      size="small"
                      className="w-full text-[10px]"
                      onClick={(e) => { e.stopPropagation(); onSelect?.(c); }}
                    >
                      View Details
                    </NexaButton>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Variants View ---------- */

interface VariantsViewProps {
  car: CarItem;
  onClose: () => void;
}

function VariantsView({ car, onClose }: VariantsViewProps) {
  const isVitara = car.name.toLowerCase().includes("vitara");
  const isSwift = car.name.toLowerCase().includes("swift");
  const isBrezza = car.name.toLowerCase().includes("brezza");
  
  const specsA = {
    engine: isVitara ? "1462 CC" : isSwift ? "1197 CC" : isBrezza ? "1462 CC" : "1197 CC",
    transmission: "Automatic",
    efficiency: isVitara ? "20.58 km/l" : isSwift ? "25.75 km/l" : isBrezza ? "19.89 km/l" : "22.41 km/l",
    price: isVitara ? "Rs. 15,41,000/-" : isSwift ? "Rs. 8,95,500/-" : isBrezza ? "Rs. 12,24,000/-" : "Rs. 9,45,000/-"
  };

  const specsB = {
    engine: isVitara ? "1462 CC" : isSwift ? "1197 CC" : isBrezza ? "1462 CC" : "1197 CC",
    transmission: "Manual",
    efficiency: isVitara ? "21.11 km/l" : isSwift ? "24.80 km/l" : isBrezza ? "17.38 km/l" : "23.50 km/l",
    price: isVitara ? "Rs. 13,85,000/-" : isSwift ? "Rs. 7,49,000/-" : isBrezza ? "Rs. 10,95,000/-" : "Rs. 8,25,000/-"
  };

  return (
    <div className="animate-fade-in pb-120">
      {/* Sticky Back Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-12 px-24 py-16">
          <button
            onClick={onClose}
            className="w-32 h-32 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
            aria-label="Back"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <div>
            <h2 className="font-serif text-[18px] font-bold text-foreground">{car.name}</h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Explore Variants</p>
          </div>
        </div>
      </div>

      <div className="px-24 py-20 flex flex-col gap-24">
        {/* Variant Card A: Alpha AT / Premium Variant */}
        <div 
          className="w-full bg-[#18171A] rounded-[24px] text-white flex flex-col overflow-hidden border border-white/10 shadow-lg relative group transition-all duration-300 hover:shadow-xl"
        >
          {/* Variant Info */}
          <div className="p-24 flex flex-col items-start">
            <h3 className="font-serif text-[22px] font-bold text-white tracking-wide">Alpha AT</h3>
            <span className="text-[12px] text-white/70 font-light mt-4">Smart Hybrid</span>
          </div>

          {/* Car Image with float animation */}
          <div className="h-[140px] flex items-center justify-center relative px-16">
            <img 
              src={car.img} 
              alt={`${car.name} Alpha AT`} 
              className="max-w-[220px] max-h-[120px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Specs Details */}
          <div className="grid grid-cols-3 gap-8 px-24 py-16 border-t border-b border-white/5 text-center">
            <div>
              <div className="text-[12px] font-bold text-[#F2F2F2]">{specsA.engine}</div>
              <div className="text-[9px] text-[#B2B2B2] uppercase tracking-wider font-semibold mt-2">Engine</div>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#F2F2F2]">{specsA.transmission}</div>
              <div className="text-[9px] text-[#B2B2B2] uppercase tracking-wider font-semibold mt-2">Transmission</div>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#F2F2F2]">{specsA.efficiency}</div>
              <div className="text-[9px] text-[#B2B2B2] uppercase tracking-wider font-semibold mt-2">Efficiency</div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="px-24 py-16 flex flex-col">
            <span className="text-[10px] text-[#B2B2B2] uppercase tracking-wider font-semibold">Starting at</span>
            <span className="text-[20px] font-bold text-white mt-2">{specsA.price}</span>
          </div>

          {/* Features Bottom Overlay */}
          <div 
            className="p-20 flex flex-col gap-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(216deg, #384F6E 0%, #5B5B5B 100%)"
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
            
            <div className="flex flex-col gap-8">
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/60 font-bold">featuring</span>
              <div className="flex flex-wrap gap-6 mt-4">
                <span className="bg-white/10 text-white text-[11px] px-10 py-4 rounded-md border border-white/5">Smart Play Pro+</span>
                <span className="bg-white/10 text-white text-[11px] px-10 py-4 rounded-md border border-white/5">Cruise Control</span>
                <span className="bg-white/10 text-white text-[11px] px-10 py-4 rounded-md border border-white/5">Paddle Shifters</span>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              <NexaButton
                variant="secondary"
                size="medium"
                className="border-white text-white hover:bg-white/10 w-full"
              >
                Compare with other Cars
              </NexaButton>
              <NexaButton
                variant="primary"
                color="custom"
                size="medium"
                className="bg-white text-[#18171A] hover:bg-white/90 w-full font-bold"
              >
                Build Your Own
              </NexaButton>
            </div>
          </div>
        </div>

        {/* Variant Card B: Zeta MT / Classic Manual */}
        <div 
          className="w-full bg-[#18171A] rounded-[24px] text-white flex flex-col overflow-hidden border border-white/10 shadow-lg relative group transition-all duration-300 hover:shadow-xl"
        >
          {/* Variant Info */}
          <div className="p-24 flex flex-col items-start">
            <h3 className="font-serif text-[22px] font-bold text-white tracking-wide">Zeta MT</h3>
            <span className="text-[12px] text-white/70 font-light mt-4">Manual Transmission</span>
          </div>

          {/* Car Image */}
          <div className="h-[140px] flex items-center justify-center relative px-16">
            <img 
              src={car.img} 
              alt={`${car.name} Zeta MT`} 
              className="max-w-[220px] max-h-[120px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Specs Details */}
          <div className="grid grid-cols-3 gap-8 px-24 py-16 border-t border-b border-white/5 text-center">
            <div>
              <div className="text-[12px] font-bold text-[#F2F2F2]">{specsB.engine}</div>
              <div className="text-[9px] text-[#B2B2B2] uppercase tracking-wider font-semibold mt-2">Engine</div>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#F2F2F2]">{specsB.transmission}</div>
              <div className="text-[9px] text-[#B2B2B2] uppercase tracking-wider font-semibold mt-2">Transmission</div>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#F2F2F2]">{specsB.efficiency}</div>
              <div className="text-[9px] text-[#B2B2B2] uppercase tracking-wider font-semibold mt-2">Efficiency</div>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="px-24 py-16 flex flex-col">
            <span className="text-[10px] text-[#B2B2B2] uppercase tracking-wider font-semibold">Starting at</span>
            <span className="text-[20px] font-bold text-white mt-2">{specsB.price}</span>
          </div>

          {/* Features Bottom Overlay */}
          <div 
            className="p-20 flex flex-col gap-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(216deg, #4A5B72 0%, #6E6E6E 100%)"
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
            
            <div className="flex flex-col gap-8">
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/60 font-bold">featuring</span>
              <div className="flex flex-wrap gap-6 mt-4">
                <span className="bg-white/10 text-white text-[11px] px-10 py-4 rounded-md border border-white/5">Smart Play Pro</span>
                <span className="bg-white/10 text-white text-[11px] px-10 py-4 rounded-md border border-white/5">Reverse Camera</span>
                <span className="bg-white/10 text-white text-[11px] px-10 py-4 rounded-md border border-white/5">Rear Wiper</span>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              <NexaButton
                variant="secondary"
                size="medium"
                className="border-white text-white hover:bg-white/10 w-full"
              >
                Compare with other Cars
              </NexaButton>
              <NexaButton
                variant="primary"
                color="custom"
                size="medium"
                className="bg-white text-[#18171A] hover:bg-white/90 w-full font-bold"
              >
                Build Your Own
              </NexaButton>
            </div>
          </div>
        </div>

        {/* RYI Card */}
        <div 
          className="w-full rounded-[24px] p-24 bg-gradient-to-br from-[#CEE5E9] to-[#DAC8C6] text-[#18171A] flex flex-col justify-between min-h-[252px] shadow-sm border border-white/20 relative overflow-hidden group hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="absolute -right-20 -bottom-20 w-120 h-120 rounded-full border border-black/[0.03] group-hover:scale-110 transition-transform duration-500" />
          
          <div className="flex flex-col gap-12 relative z-10">
            <h3 className="font-serif text-[22px] font-bold text-[#18171A] leading-tight">
              Hi Shraddha, register your interest
            </h3>
            <p className="text-[13px] text-[#18171A]/80 font-light leading-relaxed mt-8">
              Register your interest in this {car.name} and we will reach out to you for assistance and details.
            </p>
          </div>

          <NexaButton
            variant="primary"
            color="custom"
            size="medium"
            className="bg-[#18171A] text-white hover:bg-black w-full relative z-10 font-bold mt-20"
          >
            Show Interest
          </NexaButton>
        </div>

        {/* Text + CTA Card (Flexible Financing) */}
        <div 
          className="w-full rounded-[24px] p-24 bg-gradient-to-br from-[#C9D3D7] to-[#EBEBEB] text-[#18171A] flex flex-col justify-between min-h-[228px] shadow-sm border border-white/20 relative overflow-hidden group hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="flex flex-col gap-12 relative z-10">
            <h3 className="font-serif text-[20px] font-bold text-[#18171A] leading-tight">
              Flexible Financing Options
            </h3>
            <p className="text-[13px] text-black/80 font-light leading-relaxed mt-8">
              Find a payment plan that fits your budget and drives you forward.
            </p>
          </div>

          <NexaButton
            variant="primary"
            color="custom"
            size="medium"
            className="bg-white text-[#18171A] hover:bg-white/90 w-full relative z-10 font-bold mt-20"
          >
            Smart Financing
          </NexaButton>
        </div>

        {/* Dealer Locator Card */}
        <div 
          className="w-full rounded-[24px] bg-white overflow-hidden shadow-card border border-[rgba(0,0,0,0.04)] flex flex-col hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="h-[180px] w-full relative overflow-hidden">
            <img 
              src={showroomImg} 
              alt="Nexa Showroom" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="p-24 flex flex-col gap-12">
            <h3 className="font-serif text-[22px] font-bold text-[#18171A] leading-tight">
              Find dealerships at your fingertips
            </h3>
            <p className="text-[13.5px] text-muted-foreground font-light leading-relaxed">
              Whether you're ready to buy or just browsing, your local dealership is your gateway to a personalized car-shopping experience.
            </p>
            <NexaButton
              variant="primary"
              color="custom"
              size="medium"
              className="bg-[#18171A] text-white hover:bg-black w-full mt-8 font-bold"
            >
              Locate Now
            </NexaButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Smart Finance ---------- */

function SmartFinance() {
  return (
    <div className="px-24 mt-32">
      <SectionHeader label="Smart Finance" title="Finance your dream car" icon={<IndianRupee size={14} />} />
      <div className="rounded-[20px] bg-[#EEF4FF] p-24 relative overflow-hidden">
        <div className="absolute right-16 top-16 w-[56px] h-[56px] rounded-2xl bg-white flex items-center justify-center shadow-card">
          <Calculator size={26} className="text-accent" />
        </div>
        <div className="font-serif text-[20px] leading-tight text-foreground max-w-[70%]">
          Get your loan in 10 minutes
        </div>
        <div className="text-[12.5px] text-muted-foreground mt-8 max-w-[80%]">
          50% of Maruti buyers use Smart Finance. 35 lenders. Best rate guaranteed.
        </div>
        <NexaButton
          variant="primary"
          color="accent"
          size="medium"
          className="mt-16"
          rightIcon={<ChevronRight size={14} />}
        >
          Calculate My EMI
        </NexaButton>
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { v: "₹1.7L cr", l: "Disbursed" },
            { v: "2.5M+", l: "Loans" },
            { v: "35", l: "Partners" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-white px-16 py-8">
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
    <div className="px-24 mt-24">
      <div className="relative rounded-[20px] bg-primary text-white p-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "12px 12px",
        }} />
        <div className="relative flex items-start gap-16">
          <div className="text-[28px] leading-none">🤔</div>
          <div className="flex-1">
            <div className="font-serif text-[18px] leading-tight">Not sure which car?</div>
            <div className="text-[12px] text-white/70 mt-4">Answer 5 quick questions → get your perfect match.</div>
            <NexaButton
              variant="primary"
              color="custom"
              size="medium"
              className="mt-16 bg-[#FB7185] text-white"
              rightIcon={<ChevronRight size={12} />}
            >
              Find My Car
            </NexaButton>
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
        <div className="flex justify-center pt-16 pb-4">
          <div className="w-[40px] h-[4px] rounded-full bg-[#D1D5DB]" />
        </div>
        <div className="flex items-center justify-between px-24 pb-16 pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground font-semibold">Near You</div>
            <h2 className="text-[20px] font-serif font-semibold text-foreground tracking-tight">All Locations</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-[36px] h-[36px] rounded-full bg-[#F3F4F6] flex items-center justify-center text-foreground hover:bg-[#E5E7EB] transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto px-24 pb-32 max-h-[calc(75dvh-90px)]">
          <div className="space-y-24">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-8 mb-16">
                  <div
                    className="w-[28px] h-[28px] rounded-lg flex items-center justify-center"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <span className="text-[14px] font-semibold text-foreground">{cat.title}</span>
                </div>
                <div className="grid grid-cols-3 gap-16">
                  {cat.items.map((a) => (
                    <button key={a.label} className="flex flex-col items-center gap-8 active:scale-95 transition-transform">
                      <div
                        className="w-[48px] h-[48px] rounded-2xl bg-white shadow-card flex items-center justify-center"
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
      <div className="mt-32">
        <div className="px-24 flex items-center gap-8 mb-16">
          <MapPin size={14} className="text-accent" />
          <div className="section-label !text-foreground">Near You</div>
        </div>
        <div className="mx-24 relative rounded-2xl bg-white hairline shadow-card overflow-hidden">
          <div className="absolute inset-0 opacity-[0.5]" style={{
            backgroundImage: `
              linear-gradient(rgba(31,111,235,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31,111,235,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "22px 22px",
          }} />
          <div className="relative grid grid-cols-5 gap-4 p-16">
            {items.map((a) => (
              <button key={a.label} className="flex flex-col items-center gap-8 active:scale-95 transition-transform">
                <div className="w-[44px] h-[44px] rounded-2xl bg-white shadow-card flex items-center justify-center" style={{ color: a.color }}>
                  {a.icon}
                </div>
                <span className="text-[10.5px] font-medium text-foreground text-center leading-tight">{a.label}</span>
              </button>
            ))}
            <button onClick={() => setShowPopup(true)} className="flex flex-col items-center gap-8 active:scale-95 transition-transform">
              <div className="w-[44px] h-[44px] rounded-2xl bg-[#F3F4F6] shadow-card flex items-center justify-center text-[#6B7280]">
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
    <div className="mt-32">
      <SectionHeader label="Essentials" title="On-road essentials" variant="compact" icon={<Gauge size={14} />} />
      <div className="px-24 space-y-8">
        {items.map((u) => (
          <button key={u.title} className="w-full flex items-center gap-16 p-16 rounded-2xl bg-white hairline shadow-card">
            <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center" style={{ background: u.bg, color: u.color }}>
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
    { name: "Ertiga VXI", year: 2021, km: "38,000 km", price: "₹9.15 L", img: vitaraImg },
    { name: "Alto K10", year: 2023, km: "12,500 km", price: "₹4.20 L", img: swiftImg },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.offsetWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    for (let i = 0; i < el.children.length; i++) {
      const child = el.children[i] as HTMLElement;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    }
    setActiveIdx(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="mt-32">
      <SectionHeader label="True Value" title="Buy or sell pre-owned" action="Browse" variant="primary" icon={<ArrowLeftRight size={14} />} />
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto no-scrollbar px-24 pb-8 snap-x snap-mandatory items-end"
        style={{ scrollPaddingLeft: "24px" }}
      >
        {cars.map((c, idx) => {
          const isActive = idx === activeIdx;

          return (
            <div
              key={c.name}
              className="snap-center shrink-0 overflow-hidden group flex flex-col justify-between text-left cursor-pointer"
              style={{
                width: isActive ? 220 : 155,
                height: isActive ? 270 : 220,
                borderRadius: isActive ? "4px 24px 24px 24px" : "16px",
                background: isActive
                  ? "linear-gradient(217deg, #CEE5E9 0%, #DAC8C6 100%)"
                  : "#FFFFFF",
                boxShadow: isActive
                  ? "0 6px 24px rgba(0,0,0,0.15)"
                  : "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1.5px rgba(0,0,0,0.04)",
                border: isActive ? "1px solid rgba(255,255,255,0.20)" : "none",
                transition: "width 0.35s cubic-bezier(.4,0,.2,1), height 0.35s cubic-bezier(.4,0,.2,1), border-radius 0.35s ease, background 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              {/* Image area */}
              <div
                className="relative overflow-hidden shrink-0"
                style={{
                  height: isActive ? 100 : 80,
                  background: isActive ? "transparent" : "#F7F8FC",
                  transition: "height 0.35s ease, background 0.35s ease",
                }}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-contain p-[8px] relative z-[0] group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Tags */}
                <div className="absolute top-[8px] left-[8px] flex flex-col gap-4 z-[2]">
                  <div className="inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full bg-[color:var(--success)] text-white text-[8px] font-bold">
                    <BadgeCheck size={8} /> Certified
                  </div>
                  {isActive && (
                    <div
                      className="inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-full bg-[#D97706] text-white text-[8px] font-bold"
                      style={{ opacity: 1, transition: "opacity 0.3s ease" }}
                    >
                      <Sparkles size={8} /> Best Deal
                    </div>
                  )}
                </div>
                <div
                  className="absolute top-[8px] right-[8px] px-[8px] py-[3px] rounded-full backdrop-blur-sm text-[8px] font-bold z-[2]"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.80)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {c.year}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between" style={{ padding: isActive ? 16 : 12 }}>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="font-bold leading-tight"
                      style={{
                        fontSize: isActive ? 13 : 11,
                        color: "#18171A",
                        transition: "font-size 0.3s ease",
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      className="font-bold whitespace-nowrap shrink-0"
                      style={{
                        fontSize: isActive ? 13 : 11,
                        color: "#18171A",
                        transition: "font-size 0.3s ease",
                      }}
                    >
                      {c.price}
                    </div>
                  </div>
                  <div
                    className="mt-4"
                    style={{
                      fontSize: isActive ? 10 : 9,
                      color: isActive ? "rgba(24,23,26,0.7)" : "var(--muted-foreground)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {c.km} · Petrol
                  </div>
                </div>

                <NexaButton
                  variant="primary"
                  color={isActive ? "custom" : "accent"}
                  size="small"
                  className={isActive ? "w-full mt-8 bg-[#18171A] text-white hover:bg-black font-bold" : "w-full mt-6"}
                  leftIcon={<Phone size={isActive ? 11 : 10} />}
                >
                  Enquire Now
                </NexaButton>
              </div>
            </div>
          );
        })}
      </div>

      {/* Common Sell Your Car CTA */}
      <div className="px-24 mt-16">
        <button
          className="w-full relative rounded-2xl p-16 text-white overflow-hidden flex items-center gap-16 active:scale-[0.98] transition-transform"
          style={{ background: "linear-gradient(135deg, #19458B 0%, #384F6E 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }} />
          <div className="relative w-[44px] h-[44px] rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center shrink-0">
            <ArrowLeftRight size={22} className="text-white" />
          </div>
          <div className="relative flex-1 text-left">
            <div className="font-semibold text-[14px]">Sell Your Car</div>
            <div className="text-[11px] text-white/70 mt-4">Get the best price instantly — free evaluation</div>
          </div>
          <ChevronRight size={18} className="relative text-white/60 shrink-0" />
        </button>
      </div>
    </div>
  );
}

/* ---------- Bottom Nav ---------- */

function BottomNav({
  activeTab,
  onChangeTab,
}: {
  activeTab: string;
  onChangeTab: (tab: "Home" | "Service" | "My Car" | "Shop" | "Profile") => void;
}) {
  const tabs = [
    { icon: <HomeIcon size={20} />, label: "Home" as const },
    { icon: <Wrench size={20} />, label: "Service" as const },
    { icon: <Car size={20} />, label: "My Car" as const },
    { icon: <ShoppingBag size={20} />, label: "Shop" as const },
    { icon: <CircleUserRound size={20} />, label: "Profile" as const },
  ];
  return (
    <div className="bg-white/95 backdrop-blur-md border-t border-[rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-5 px-8 pt-8 pb-8">
        {tabs.map((t) => {
          const isActive = activeTab === t.label;
          return (
            <button
              key={t.label}
              onClick={() => onChangeTab(t.label)}
              className="flex flex-col items-center gap-4 py-8 cursor-pointer group"
            >
              <div className={isActive ? "text-accent" : "text-muted-foreground group-hover:text-accent transition-colors"}>
                {t.icon}
              </div>
              <div className={`text-[10.5px] font-medium ${isActive ? "text-accent" : "text-muted-foreground group-hover:text-accent transition-colors"}`}>
                {t.label}
              </div>
              {isActive && <div className="w-[4px] h-[4px] rounded-full bg-accent mt-4" />}
            </button>
          );
        })}
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
    tagColor: "#19458B",
    tagBg: "#D1E3FF",
    gradient: "linear-gradient(135deg, #161D1F 0%, #384F6E 50%, #9DCFDA 100%)",
    emoji: "⚡",
    detail: "Maruti Suzuki's first pure EV, the e-Vitara, is now open for pre-bookings. Featuring a 500 km range, ultra-fast charging, and cutting-edge safety tech. Deliveries start Q1 2027.",
  },
  {
    id: "showroom1",
    icon: <Building2 size={14} className="shrink-0" />,
    text: "20 new Nexa showrooms opening in Tier-2 cities",
    tag: "Expansion",
    tagColor: "#515151",
    tagBg: "#F2F2F2",
    gradient: "linear-gradient(135deg, #384F6E 0%, #5B5B5B 100%)",
    emoji: "🏢",
    detail: "Maruti Suzuki expands its premium Nexa network with 20 new showrooms across tier-2 cities including Indore, Jaipur, Lucknow, and Coimbatore. Grand opening offers include free accessories worth ₹25,000.",
  },
  {
    id: "swift1",
    icon: <Car size={14} className="shrink-0" />,
    text: "All-new Swift hybrid spotted testing — 35 km/l!",
    tag: "Upcoming",
    tagColor: "#19458B",
    tagBg: "#D1E3FF",
    gradient: "linear-gradient(135deg, #CEE5E9 0%, #DAC8C6 100%)",
    emoji: "🚗",
    detail: "The next-gen Swift with strong-hybrid technology has been spotted testing on Indian roads. Expected to deliver 35 km/l mileage, making it the most fuel-efficient car in its segment.",
  },
  {
    id: "safety1",
    icon: <ShieldCheck size={14} className="shrink-0" />,
    text: "Grand Vitara scores 5-star Global NCAP rating ⭐",
    tag: "Safety",
    tagColor: "#298555",
    tagBg: "#EDFAF4",
    gradient: "linear-gradient(135deg, #274E3A 0%, #298555 100%)",
    emoji: "🛡️",
    detail: "The Maruti Suzuki Grand Vitara has achieved a full 5-star safety rating from Global NCAP for both adult and child occupant protection. Features include 6 airbags, ESP, and ADAS.",
  },
  {
    id: "offer1",
    icon: <Gift size={14} className="shrink-0" />,
    text: "Monsoon Bonanza — Up to ₹75,000 off on Arena cars",
    tag: "Offer",
    tagColor: "#AC6200",
    tagBg: "#FFF3C8",
    gradient: "linear-gradient(135deg, #AC6200 0%, #FFBD66 100%)",
    emoji: "🎁",
    detail: "Limited-time monsoon festival offers on all Arena models. Get up to ₹75,000 in combined benefits including exchange bonus, corporate discounts, and free accessories. Valid till July 31.",
  },
  {
    id: "app1",
    icon: <Globe size={14} className="shrink-0" />,
    text: "Suzuki Connect 2.0 — Remote AC, live tracking & more",
    tag: "Tech",
    tagColor: "#19458B",
    tagBg: "#D1E3FF",
    gradient: "linear-gradient(135deg, #161D1F 0%, #9DCFDA 100%)",
    emoji: "📱",
    detail: "The all-new Suzuki Connect 2.0 brings remote AC control, real-time vehicle tracking, driving behaviour analysis, and geo-fence alerts. Free 3-year subscription with every new car.",
  },
  {
    id: "cng1",
    icon: <Fuel size={14} className="shrink-0" />,
    text: "S-CNG now available on Brezza & Fronx — ₹1.5/km!",
    tag: "Green",
    tagColor: "#298555",
    tagBg: "#EDFAF4",
    gradient: "linear-gradient(135deg, #274E3A 0%, #298555 100%)",
    emoji: "⛽",
    detail: "Maruti's factory-fitted S-CNG technology is now available on Brezza and Fronx. Dual-cylinder setup with no boot space compromise. Running cost as low as ₹1.5/km.",
  },
  {
    id: "milestone1",
    icon: <Trophy size={14} className="shrink-0" />,
    text: "Maruti crosses 2.5 crore cumulative sales milestone 🎉",
    tag: "Milestone",
    tagColor: "#AC6200",
    tagBg: "#FFF3C8",
    gradient: "linear-gradient(135deg, #AC6200 0%, #FFBD66 100%)",
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
        className="w-full bg-[#18171A] py-8 relative group cursor-pointer flex items-center h-[32px] overflow-hidden"
      >
        {/* Pulsing LIVE badge on the left */}
        <div className="absolute left-16 top-0 bottom-0 flex items-center gap-8 bg-[#18171A] pr-8 z-10">
          <span className="w-[6px] h-[6px] rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest font-bold text-red-400">Live</span>
        </div>

        {/* Separator after Live */}
        <div className="absolute left-56 top-0 bottom-0 flex items-center bg-[#18171A] pr-8 z-10 text-white/20">
          │
        </div>

        {/* Scrolling content container - restricted to scroll within the remaining area and clipped */}
        <div className="relative flex-1 h-full overflow-hidden ml-64 mr-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-shimmer pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap items-center h-full">
            {[...NEWS_ITEMS, ...NEWS_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-8 mx-24 text-white/90">
                <span className="text-accent">{item.icon}</span>
                <span
                  className="text-[9px] uppercase tracking-wider font-bold px-8 py-4 rounded-full"
                  style={{ color: item.tagColor, background: item.tagBg + "33" }}
                >
                  {item.tag}
                </span>
                <span className="text-[12px] font-medium">{item.text}</span>
                <span className="text-white/20 mx-8">│</span>
              </span>
            ))}
          </div>

          {/* Left/right fade edges inside the scrolling area */}
          <div className="absolute left-0 top-0 bottom-0 w-[16px] bg-gradient-to-r from-[#18171A] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[16px] bg-gradient-to-l from-[#18171A] to-transparent pointer-events-none" />
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
          <div className="text-white/60 text-[14px] mt-8">You've seen all the latest updates.</div>
          <button
            onClick={onClose}
            className="mt-24 px-24 py-8 rounded-full bg-white text-[#18171A] text-[14px] font-bold shadow-xl hover:shadow-2xl transition-all active:scale-95"
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
      <div className="flex items-center justify-between px-24 pt-24 pb-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-8">
          <div className="w-[8px] h-[8px] rounded-full bg-red-500 animate-pulse" />
          <span className="text-white font-bold text-[15px]">News & Updates</span>
          <span className="text-white/40 text-[12px]">{cards.length} remaining</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-[36px] h-[36px] rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <X size={18} />
        </button>
      </div>

      {/* Swipe hints */}
      <div className="flex justify-between px-8 mb-8" onClick={(e) => e.stopPropagation()}>
        <span className="text-[11px] text-white/40 flex items-center gap-4">← Swipe left: <span className="text-blue-400 font-semibold">Next</span></span>
        <span className="text-[11px] text-white/40 flex items-center gap-4">Swipe right: <span className="text-amber-400 font-semibold">Skip all</span> →</span>
      </div>

      {/* Card stack */}
      <div className="flex-1 flex items-center justify-center px-24 pb-40" onClick={(e) => e.stopPropagation()}>
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
              <div className="absolute top-8 right-24 z-30 border-4 border-blue-400 rounded-xl px-4 py-8 rotate-12 opacity-80">
                <span className="text-blue-400 text-[24px] font-black uppercase tracking-wider">Next</span>
              </div>
            )}
            {stampDirection === "right" && (
              <div className="absolute top-8 left-24 z-30 border-4 border-amber-400 rounded-xl px-4 py-8 -rotate-12 opacity-80">
                <span className="text-amber-400 text-[24px] font-black uppercase tracking-wider">Skip</span>
              </div>
            )}

            {/* Content */}
            <div className="relative h-full flex flex-col p-24 text-white">
              {/* Tag */}
              <div className="flex items-center gap-8 mb-4">
                <span
                  className="text-[10px] uppercase tracking-wider font-bold px-8 py-4 rounded-full"
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
                <p className="text-white/70 text-[13px] mt-8 leading-relaxed">{cards[0].detail}</p>

                {/* Action button */}
                <button className="mt-24 w-full py-16 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-[13px] flex items-center justify-center gap-8 hover:bg-white/25 transition-all active:scale-95 pointer-events-none">
                  Read More <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicators */}
      <div className="flex justify-center gap-4 pb-24" onClick={(e) => e.stopPropagation()}>
        {NEWS_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className={`h-[4px] rounded-full transition-all duration-300 ${i < NEWS_ITEMS.length - cards.length
              ? "w-[16px] bg-white/60"
              : i === NEWS_ITEMS.length - cards.length
                ? "w-[24px] bg-white"
                : "w-[8px] bg-white/20"
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
  category: string;
  coverGradient: string;
  coverAccent: string;
  coverEmoji: string;
  coverArt?: React.ReactNode;
  teaser: string;
  bg: string;
  visual: React.ReactNode;
  cta: string;
  headline: string;
  sub: string;
  seen?: boolean;
  isNew?: boolean;
  isReview?: boolean;
  videoScene: "particles" | "waves" | "aurora" | "circuit" | "rain";
};

const STORIES: Story[] = [
  {
    id: "swift",
    label: "New Swift",
    category: "LAUNCH",
    coverGradient: "linear-gradient(150deg, #161D1F 0%, #384F6E 55%, #9DCFDA 100%)",
    coverAccent: "#9DCFDA",
    coverEmoji: "🚗",
    coverArt: <img src={swiftImg} alt="" className="w-[85%] object-contain drop-shadow-2xl" />,
    teaser: "35 km/l hybrid",
    bg: "bg-gradient-to-br from-[#161D1F] via-[#384F6E] to-[#9DCFDA]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#161D1F] via-[#384F6E] to-[#9DCFDA] p-8">
        <img src={swiftImg} alt="" className="w-[90%] object-contain drop-shadow-2xl" />
      </div>
    ),
    cta: "Explore Now",
    headline: "The All-New Swift",
    sub: "Reimagined for 2026 · 35 km/l hybrid · 6 airbags standard",
    isNew: true,
    videoScene: "particles",
  },
  {
    id: "ev",
    label: "e-Vitara",
    category: "EV",
    coverGradient: "linear-gradient(150deg, #18171A 0%, #19458B 55%, #767879 100%)",
    coverAccent: "#19458B",
    coverEmoji: "⚡",
    teaser: "500 km range",
    bg: "bg-gradient-to-br from-[#18171A] via-[#19458B] to-[#767879]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#18171A] via-[#19458B] to-[#767879]">
        <Zap size={32} className="text-[#9DCFDA] drop-shadow-lg" fill="#9DCFDA" />
      </div>
    ),
    cta: "Pre-Reserve",
    headline: "e-Vitara Revolution",
    sub: "500 km range · Ultra-fast charging · Born electric",
    isNew: true,
    videoScene: "circuit",
  },
  {
    id: "monsoon",
    label: "Monsoon Care",
    category: "TIPS",
    coverGradient: "linear-gradient(150deg, #274E3A 0%, #298555 100%)",
    coverAccent: "#298555",
    coverEmoji: "🌧️",
    teaser: "Free 20-pt check",
    bg: "bg-gradient-to-br from-[#274E3A] to-[#298555]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#274E3A] to-[#298555]">
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
    label: "Festival Offer",
    category: "OFFER",
    coverGradient: "linear-gradient(150deg, #AC6200 0%, #FFBD66 100%)",
    coverAccent: "#AC6200",
    coverEmoji: "🎁",
    teaser: "Up to ₹75,000 off",
    bg: "bg-gradient-to-br from-[#AC6200] to-[#FFBD66]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#AC6200] to-[#FFBD66]">
        <Flame size={32} className="text-white drop-shadow-lg" />
      </div>
    ),
    cta: "Grab Now",
    headline: "Summer Mega Sale",
    sub: "Up to ₹75,000 off · Exchange bonus · Free accessories",
    isNew: true,
    videoScene: "waves",
  },
  {
    id: "ev-charging",
    label: "EV Charging",
    category: "INSIGHTS",
    coverGradient: "linear-gradient(150deg, #384F6E 0%, #5B5B5B 100%)",
    coverAccent: "#9DCFDA",
    coverEmoji: "🔋",
    teaser: "Charging guide",
    bg: "bg-gradient-to-br from-[#384F6E] to-[#5B5B5B]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#384F6E] to-[#5B5B5B]">
        <Zap size={32} className="text-[#9DCFDA] drop-shadow-lg" />
      </div>
    ),
    cta: "Learn More",
    headline: "EV Charging Insights",
    sub: "Find nearby chargers, charging tips & cost savings for EV owners",
    videoScene: "circuit",
  },
  {
    id: "review",
    label: "Rate Service",
    category: "REVIEW",
    coverGradient: "linear-gradient(150deg, #CEE5E9 0%, #DAC8C6 100%)",
    coverAccent: "#767879",
    coverEmoji: "⭐",
    teaser: "Share feedback",
    bg: "bg-gradient-to-br from-[#CEE5E9] to-[#DAC8C6]",
    visual: (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#CEE5E9] to-[#DAC8C6]">
        <Star size={32} className="text-[#18171A] drop-shadow-lg" fill="#18171A" />
      </div>
    ),
    cta: "Rate Service",
    headline: "Share Your Experience",
    sub: "Your feedback drives our excellence",
    isReview: true,
    videoScene: "aurora",
  },
];

function StoryCard({ story, onTap }: { story: Story; onTap: () => void }) {
  const newCount = STORIES.filter(s => s.isNew && !s.seen).length;
  void newCount;
  return (
    <button
      onClick={onTap}
      className="shrink-0 focus:outline-none active:scale-95 transition-transform duration-150 group"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Ring + Card */}
      <div className="relative">
        {/* Outer ring */}
        <div
          className="rounded-[22px] p-[2.5px] transition-all duration-300"
          style={{
            background: story.seen
              ? "linear-gradient(135deg, #B2B2B2 0%, #F2F2F2 50%, #767879 100%)"
              : "linear-gradient(135deg, #19458B 0%, #9DCFDA 50%, #19458B 100%)",
            boxShadow: story.seen
              ? "none"
              : "0 0 0 1px rgba(25, 69, 139, 0.3), 0 4px 16px rgba(25, 69, 139, 0.25)",
          }}
        >
          {/* White gap ring */}
          <div className="rounded-[20px] p-[2px] bg-white">
            {/* Mini magazine cover card */}
            <div
              className="relative w-[76px] h-[96px] rounded-[18px] overflow-hidden"
              style={{ background: story.coverGradient }}
            >
              {/* Subtle noise texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] rounded-[18px]"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "100px 100px",
                }}
              />

              {/* Category badge */}
              <div
                className="absolute top-8 left-8"
              >
                <span
                  className="text-[7.5px] font-black uppercase tracking-[0.1em] px-[6px] py-[2px] rounded-full leading-none"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    color: story.coverAccent,
                    backdropFilter: "blur(4px)",
                    border: `0.5px solid ${story.coverAccent}40`,
                  }}
                >
                  {story.category}
                </span>
              </div>

              {/* Art / emoji area */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ top: "20px", bottom: "28px" }}>
                {story.coverArt ? (
                  <div className="w-full h-full flex items-center justify-center px-4">
                    {story.coverArt}
                  </div>
                ) : (
                  <span
                    className="text-[30px] leading-none drop-shadow-lg"
                    style={{ filter: `drop-shadow(0 2px 8px ${story.coverAccent}60)` }}
                  >
                    {story.coverEmoji}
                  </span>
                )}
              </div>

              {/* Bottom overlay with teaser text */}
              <div
                className="absolute bottom-0 left-0 right-0 px-8 py-8"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                }}
              >
                <div
                  className="text-[8px] font-bold leading-tight text-white/95 truncate"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {story.teaser}
                </div>
              </div>

              {/* Viewed overlay */}
              {story.seen && (
                <div className="absolute inset-0 bg-white/30 rounded-[18px]" style={{ backdropFilter: "saturate(0.3) brightness(0.85)" }} />
              )}
            </div>
          </div>
        </div>

        {/* NEW indicator — integrated into top-right of ring */}
        {story.isNew && !story.seen && (
          <div
            className="absolute -top-4 -right-4 min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-4"
            style={{
              background: "linear-gradient(135deg, #FF6B35 0%, #E53E3E 100%)",
              boxShadow: "0 0 0 2px white, 0 2px 6px rgba(229,62,62,0.5)",
            }}
          >
            <span className="text-[7px] font-black text-white uppercase tracking-[0.05em]">NEW</span>
          </div>
        )}
      </div>
    </button>
  );
}

function StoriesHeader() {
  const newCount = STORIES.filter(s => s.isNew && !s.seen).length;
  const text = "Maruti Digest";
  return (
    <div className="px-24 pt-16 pb-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-8 mb-4">
            <span className="relative flex h-[6px] w-[6px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-accent"></span>
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.14em] font-bold text-accent">Exclusive Digest</span>
          </div>
          <h2 className="font-serif text-[22px] font-bold tracking-tight flex overflow-hidden">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block maruti-digest-text animate-reveal-text"
                style={{
                  animationDelay: `${i * 0.06}s`,
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>

        {/* Elegant story count chip occupying the space next to the title */}
        {newCount > 0 && (
          <div
            className="flex items-center gap-8 px-8 py-4 rounded-full text-[10.5px] font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(25,69,139,0.12) 0%, rgba(157,207,218,0.08) 100%)",
              border: "1px solid rgba(25,69,139,0.25)",
              color: "#19458B",
            }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{ background: "linear-gradient(135deg, #19458B, #9DCFDA)" }}
            />
            {newCount} New
          </div>
        )}
      </div>
    </div>
  );
}

function StoriesRail({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <div
      className="border-b shadow-sm"
      style={{
        background: "linear-gradient(180deg, #FEFEFE 0%, #F9F8F5 60%, #F5F3EE 100%)",
        borderColor: "rgba(178,178,178,0.2)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04), 0 1px 0 rgba(178,178,178,0.15)",
      }}
    >
      <StoriesHeader />
      <div className="flex gap-16 overflow-x-auto no-scrollbar px-24 pb-16 pt-8">
        {STORIES.map((s, i) => (
          <StoryCard key={s.id} story={s} onTap={() => onOpen(i)} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Stories Viewer ---------- */

function ReviewOverlay({ story }: { story: Story }) {
  const [rating, setRating] = useState(0);
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-[#f9f9f9] rounded-t-3xl p-24 pb-32 shadow-2xl">
      <div className="w-[48px] h-[4px] bg-gradient-to-r from-[#19458B] to-[#B2B2B2] mx-auto mb-24 shadow-md" />
      <div className="font-serif text-[24px] text-[#1a1a1a] leading-tight font-bold">Rate Your Experience</div>
      <div className="text-[13px] text-[#666] mt-8 font-medium">{story.sub}</div>
      <div className="flex gap-16 mt-24 justify-center">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} onClick={() => setRating(n)} aria-label={`Rate ${n} stars`} className="p-4 transition-transform hover:scale-110 active:scale-95">
            <Star size={40} className={n <= rating ? "text-[#FFD700]" : "text-[#E5E7EB]"} fill={n <= rating ? "#FFD700" : "none"} strokeWidth={1.5} />
          </button>
        ))}
      </div>
      <input placeholder="Add a comment (optional)" className="w-full mt-24 px-16 py-16 rounded-xl bg-[#f0f0f0] text-[14px] placeholder:text-[#999] text-[#1a1a1a] font-medium focus:outline-none focus:ring-2 focus:ring-[#19458B] focus:ring-offset-2 transition-all" />
      <NexaButton
        variant="primary"
        color="black"
        size="large"
        className="w-full mt-16"
      >
        Submit Rating
      </NexaButton>
      <NexaButton
        variant="secondary"
        color="black"
        size="large"
        className="w-full mt-16"
        leftIcon={<Share2 size={16} strokeWidth={2} />}
      >
        Share on Google
      </NexaButton>
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
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-screen" />;
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
        <div className="absolute top-56 left-16 z-10 flex items-center gap-8 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-white/80">AI Video</span>
        </div>
        {/* Progress */}
        <div className="absolute top-16 left-16 right-16 flex gap-4 z-10">
          {STORIES.map((_, i) => (
            <div key={i} className="flex-1 h-[3px] rounded-full bg-white/30 overflow-hidden">
              <div className="h-full bg-white transition-[width] duration-75 ease-linear" style={{ width: i < idx ? "100%" : i === idx ? `${progress * 100}%` : "0%" }} />
            </div>
          ))}
        </div>
        {/* Header */}
        <div className="absolute top-32 left-16 right-16 flex items-center justify-between z-10">
          <div className="flex items-center gap-8">
            <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#18171A] to-[#19458B] shadow-lg flex items-center justify-center border border-white/30">
              <span className="font-serif text-white text-[13px] font-bold">M</span>
            </div>
            <div className="text-white text-[12.5px] font-bold uppercase tracking-[0.05em]">{story.label}</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="w-[36px] h-[36px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
        <button onClick={goPrev} className="absolute left-0 top-64 bottom-120 w-1/3 z-40" aria-label="Previous" />
        <button onClick={goNext} className="absolute right-0 top-64 bottom-120 w-2/3 z-40" aria-label="Next" />
        {story.isReview ? <ReviewOverlay story={story} /> : (
          <div className="absolute inset-x-0 bottom-0 p-24 pb-32 z-10 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="font-serif text-white text-[28px] leading-tight font-bold tracking-tight">{story.headline}</div>
            <div className="text-white/90 text-[14px] mt-8 max-w-[320px] font-medium leading-relaxed">{story.sub}</div>
            <NexaButton
              variant="primary"
              color="custom"
              size="large"
              className="mt-24 w-full bg-gradient-to-r from-[#18171A] via-[#19458B] to-[#18171A] pointer-events-auto"
              rightIcon={<ChevronRight size={16} strokeWidth={3} />}
            >
              {story.cta}
            </NexaButton>
          </div>
        )}
      </div>
    </div>
  );
}

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
    <div className="absolute bottom-64 right-0 w-[340px] h-[460px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-[#E5E7EB] animate-scale-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#18171A] via-[#19458B] to-[#767879] p-16 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-[32px] h-[32px] rounded-full bg-white/30 flex items-center justify-center">
            <MessageCircle size={18} className="text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-[13px]">Maruti Assistant</div>
            <div className="text-white/80 text-[10px]">Always here to help</div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chatbot"
          className="text-white hover:bg-white/20 p-4 rounded-full transition-all"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-16 space-y-16 bg-[#f9f9f9]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[260px] px-16 py-8 rounded-xl ${msg.sender === "user"
                ? "bg-gradient-to-br from-[#18171A] to-[#19458B] text-white font-medium shadow-sm"
                : "bg-white text-[#18171A] border border-[#E5E7EB]"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[#E5E7EB] p-16 bg-white rounded-b-2xl">
        <div className="flex gap-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-16 py-8 rounded-full border border-[#E5E7EB] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#19458B]"
          />
          <button
            onClick={handleSend}
            aria-label="Send message"
            className="bg-[#18171A] text-white p-8 rounded-full hover:bg-[#515151] hover:shadow-lg transition-all active:scale-95 font-semibold flex items-center justify-center"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function DealerChatInterface({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ id: string; text: string; sender: "user" | "dealer" }[]>([
    { id: "1", text: "👋 Hello! I'm Amit Kumar from Rama Motors, your Maruti Suzuki Arena dealer. How can I assist you with your car purchase or service today?", sender: "dealer" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [callConnected, setCallConnected] = useState(false);
  const [callSeconds, setCallSeconds] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Call timer and connection logic
  useEffect(() => {
    if (showCall) {
      // Connect after 2.5 seconds of ringing
      const connectTimeout = setTimeout(() => {
        setCallConnected(true);
        // Start counting seconds
        timerRef.current = setInterval(() => {
          setCallSeconds((prev) => prev + 1);
        }, 1000);
      }, 2500);

      return () => {
        clearTimeout(connectTimeout);
        if (timerRef.current) clearInterval(timerRef.current);
      };
    } else {
      setCallConnected(false);
      setCallSeconds(0);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [showCall]);

  const formatCallTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const simulateDealerResponse = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let reply = "";
      const text = userText.toLowerCase();

      if (text.includes("test drive") || text.includes("book")) {
        reply = "🚗 I would be delighted to arrange a test drive for you! We have the new Swift hybrid VXI and e-Vitara slots available this week. Would you prefer a home test drive or a visit to our Rama Motors showroom?";
      } else if (text.includes("price") || text.includes("quote") || text.includes("cost") || text.includes("on-road")) {
        reply = "📄 Absolutely! The Swift VXI on-road price starts at approximately ₹7.2 Lakhs (subject to location/taxes). I can share the detailed price breakout sheet with active discounts. Could you share your email or phone number?";
      } else if (text.includes("stock") || text.includes("availability") || text.includes("available")) {
        reply = "📦 Great news! We have immediate stock availability for the new Swift in Pearl Arctic White, Magma Grey, and Luster Blue. Other premium variants have a short 2-week waiting period. Which color are you looking for?";
      } else if (text.includes("callback") || text.includes("call") || text.includes("phone")) {
        reply = "📞 Understood. I've scheduled a callback with our senior sales consultant. They will reach out to you within the next 15 minutes at your registered number. Let me know if there's anything else I can help with!";
      } else {
        reply = "Thank you! I've noted your query regarding Maruti Suzuki vehicles. Let me check the latest inventory at Rama Motors. Would you like me to book a test drive or send a customized price quote?";
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), text: reply, sender: "dealer" }]);
    }, 1500);
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage = { id: Date.now().toString(), text: text, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");

    simulateDealerResponse(text);
  };

  const quickReplies = [
    { text: "🚗 Book a Test Drive", label: "Book a Test Drive" },
    { text: "📄 Request Price Quote", label: "Request Quote" },
    { text: "📦 Check Stock Availability", label: "Check Stock" },
    { text: "📞 Request Callback", label: "Request Callback" },
  ];

  return (
    <div className="absolute bottom-64 right-0 w-[340px] h-[460px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-[#E5E7EB] animate-scale-in overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#18171A] via-[#19458B] to-[#767879] p-16 flex items-center justify-between shadow-md relative z-10 border-b border-white/10">
        <div className="flex items-center gap-8">
          <div className="relative">
            <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white font-bold text-[14px]">
              AK
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#19458B] animate-pulse" />
          </div>
          <div>
            <div className="text-white font-bold text-[13px] tracking-wide">Amit Kumar</div>
            <div className="text-slate-300 text-[10px] font-medium flex items-center gap-4">
              <span className="w-1 h-1 rounded-full bg-[#19458B] animate-ping" />
              Rama Motors (Arena)
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => setShowCall(true)}
            className="w-[32px] h-[32px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-90"
            title="Call Dealer"
            aria-label="Call Dealer"
          >
            <Phone size={14} className="animate-[pulse_2s_infinite]" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-[32px] h-[32px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Message Screen */}
      <div className="flex-1 overflow-y-auto p-16 space-y-16 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-8 max-w-[82%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {msg.sender === "dealer" && (
                <div className="w-[24px] h-[24px] rounded-full bg-[#19458B] text-white flex items-center justify-center font-bold text-[9px] shrink-0 self-end mb-4">
                  AK
                </div>
              )}
              <div
                className={`px-16 py-8 rounded-2xl text-[13px] shadow-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-gradient-to-br from-[#18171A] to-[#19458B] text-white font-medium rounded-tr-none"
                    : "bg-white text-[#1E293B] border border-[#E2E8F0] rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-8 max-w-[80%] flex-row">
              <div className="w-[24px] h-[24px] rounded-full bg-[#19458B] text-white flex items-center justify-center font-bold text-[9px] shrink-0 self-end mb-4">
                AK
              </div>
              <div className="px-16 py-16 rounded-2xl rounded-tl-none bg-white text-[#1E293B] border border-[#E2E8F0] shadow-sm flex items-center">
                <div className="flex gap-4 items-center">
                  <div className="w-[6px] h-[6px] bg-[#19458B] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-[6px] h-[6px] bg-[#19458B] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-[6px] h-[6px] bg-[#19458B] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-16 pt-8 bg-gradient-to-t from-white to-[#F1F5F9] border-t border-slate-100">
        <div className="flex gap-8 overflow-x-auto no-scrollbar pb-4">
          {quickReplies.map((qr) => (
            <button
              key={qr.label}
              onClick={() => handleSend(qr.text)}
              className="shrink-0 px-16 py-8 rounded-full border border-[var(--border)] bg-[#F2F2F2]/60 text-[#18171A] hover:bg-[#F2F2F2] hover:border-[#B2B2B2] text-[11px] font-semibold transition-all active:scale-95 shadow-sm"
            >
              {qr.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="p-16 bg-white border-t border-slate-100">
        <div className="flex gap-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about test drives, quotes, stock..."
            className="flex-1 px-16 py-8 rounded-full border border-slate-200 text-[12.5px] focus:outline-none focus:ring-2 focus:ring-[#19458B] bg-[#F8FAFC]"
          />
          <button
            onClick={() => handleSend()}
            aria-label="Send message"
            className="bg-[#18171A] text-white p-8 rounded-full hover:bg-[#515151] shadow-md transition-all active:scale-90 flex items-center justify-center"
          >
            <Send size={15} />
          </button>
        </div>
      </div>

      {/* Simulated Phone Call Screen */}
      {showCall && (
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex flex-col items-center justify-between p-24 text-white animate-scale-in">
          {/* Top details */}
          <div className="text-center mt-24">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#19458B]">In-App Dealer Connect</span>
            <h3 className="text-2xl font-bold font-serif mt-8">Rama Motors</h3>
            <p className="text-slate-400 text-[12px] mt-4">+91 98765 43210</p>
          </div>

          {/* Central Animation */}
          <div className="relative flex items-center justify-center my-24">
            {/* Pulsing ring */}
            <div className="absolute w-[96px] h-[96px] rounded-full border-2 border-[#19458B]/30 animate-[ping_2s_infinite]" />
            <div className="absolute w-[144px] h-[144px] rounded-full border border-[#19458B]/10 animate-[ping_3s_infinite]" />
            <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#18171A] to-[#19458B] flex items-center justify-center border-2 border-white/20 shadow-2xl z-10">
              <Phone size={32} className={callConnected ? "" : "animate-[bounce_1s_infinite]"} />
            </div>
          </div>

          {/* Call Status / Audio waveform simulation */}
          <div className="text-center w-full px-16">
            {callConnected ? (
              <div className="space-y-16">
                <div className="text-green-400 font-bold text-[14px] tracking-wide">Connected</div>
                <div className="text-2xl font-mono font-semibold tracking-widest">{formatCallTime(callSeconds)}</div>
                
                {/* Audio Waveform Anim */}
                <div className="flex gap-8 justify-center items-center h-[32px] mt-8">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[6px] rounded-full bg-[#19458B]"
                      style={{
                        height: "100%",
                        animation: "bounce 0.8s ease-in-out infinite alternate",
                        animationDelay: `${i * 0.12}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-slate-400 font-medium text-[13px] animate-pulse">Ringing...</div>
            )}
          </div>

          {/* Controls & End Call */}
          <div className="w-full flex flex-col items-center gap-24 mb-16">
            <div className="flex gap-24 justify-center text-slate-400 text-[11px]">
              <div className="flex flex-col items-center gap-8 cursor-not-allowed opacity-55">
                <div className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="w-[6px] h-[6px] rounded-full bg-white" />
                </div>
                <span>Mute</span>
              </div>
              <div className="flex flex-col items-center gap-8 cursor-not-allowed opacity-55">
                <div className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Headphones size={16} />
                </div>
                <span>Speaker</span>
              </div>
            </div>

            <button
              onClick={() => setShowCall(false)}
              aria-label="End call"
              className="w-[56px] h-[56px] rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-all active:scale-90 relative"
            >
              <Phone size={24} className="rotate-[135deg]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ChatbotBubble() {
  const [showOptions, setShowOptions] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showDealerChat, setShowDealerChat] = useState(false);

  return (
    <div className="absolute bottom-full right-16 mb-8 z-50">
      {/* Chat Interface (AI Helper) */}
      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}

      {/* Dealer Chat Interface */}
      {showDealerChat && (
        <DealerChatInterface onClose={() => setShowDealerChat(false)} />
      )}

      {/* Options Menu */}
      {showOptions && !showChat && !showDealerChat && (
        <div className="absolute bottom-64 right-0 bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden animate-scale-in w-[250px]">
          {/* Dealer Chat Option (Replaces WhatsApp) */}
          <button
            onClick={() => {
              setShowOptions(false);
              setShowDealerChat(true);
            }}
            className="w-full flex items-center gap-16 px-16 py-16 hover:bg-slate-50 transition-all border-b border-[#E5E7EB] group cursor-pointer text-left"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#18171A] via-[#19458B] to-[#767879] flex items-center justify-center text-white shadow-md">
              <PhoneCall size={18} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[13px] text-[#1a1a1a] group-hover:text-[#19458B]">Chat with Dealer</div>
              <div className="text-[11px] text-[#666]">Rama Motors (Online)</div>
            </div>
            <ChevronRight size={14} className="text-[#999] group-hover:text-[#19458B] shrink-0" />
          </button>

          {/* Chatbot Option */}
          <button
            onClick={() => {
              setShowOptions(false);
              setShowChat(true);
            }}
            className="w-full flex items-center gap-16 px-16 py-16 hover:bg-slate-50 transition-all group cursor-pointer text-left"
          >
            <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#18171A] via-[#19458B] to-[#767879] flex items-center justify-center text-white shadow-md">
              <MessageCircle size={18} strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[13px] text-[#1a1a1a] group-hover:text-[#19458B]">Chat with AI</div>
              <div className="text-[11px] text-[#666]">Instant responses</div>
            </div>
            <ChevronRight size={14} className="text-[#999] group-hover:text-[#19458B] shrink-0" />
          </button>
        </div>
      )}

      {/* Main Bubble */}
      <button
        onClick={() => {
          if (showChat) {
            setShowChat(false);
          } else if (showDealerChat) {
            setShowDealerChat(false);
          } else {
            setShowOptions(!showOptions);
          }
        }}
        aria-label="Toggle chat menu"
        className={`relative w-[48px] h-[48px] rounded-full shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center font-bold text-white text-lg group ${
          showOptions || showChat || showDealerChat
            ? "bg-gradient-to-br from-[#18171A] to-[#515151]"
            : "bg-gradient-to-br from-[#18171A] via-[#19458B] to-[#767879] hover:scale-105"
        }`}
      >
        {showOptions || showChat || showDealerChat ? (
          <X size={24} strokeWidth={3} />
        ) : (
          <MessageCircle size={24} strokeWidth={1.5} />
        )}


        {/* Animated Pulse Ring */}
        {!showOptions && !showChat && (
          <div className="absolute inset-0 rounded-full bg-[#19458B] opacity-15 animate-pulse" />
        )}

        {/* Notification Badge */}
        {!showOptions && !showChat && (
          <div className="absolute -top-0 -right-0 w-[16px] h-[16px] rounded-full bg-red-500 flex items-center justify-center text-white text-[9px] font-bold animate-bounce">
            1
          </div>
        )}
      </button>
    </div>
  );
}

/* ---------- Subviews ---------- */

function ServiceView() {
  const [estimateKm, setEstimateKm] = useState(20000);
  const getEstimate = (km: number) => {
    switch (km) {
      case 10000:
        return { parts: 1500, labor: 800, wash: 400, total: 2700 };
      case 20000:
        return { parts: 2800, labor: 1200, wash: 400, total: 4400 };
      case 30000:
        return { parts: 2200, labor: 1000, wash: 400, total: 3600 };
      case 40000:
        return { parts: 4500, labor: 1600, wash: 400, total: 6500 };
      default:
        return { parts: 2500, labor: 1000, wash: 400, total: 3900 };
    }
  };
  const est = getEstimate(estimateKm);

  return (
    <div className="px-24 py-16 flex flex-col gap-24 animate-fade-in pb-120">
      {/* Active Service Tracker Card */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-16">
          <div className="text-[12px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-8 py-4 rounded-md">Service Scheduled</div>
          <span className="text-[11px] text-muted-foreground font-semibold">June 15, 10:00 AM</span>
        </div>
        <div className="font-serif text-[16px] font-bold text-foreground">Rama Motors Nexa, Gurgaon</div>
        <div className="text-[12px] text-muted-foreground mt-4">Driver Pick-up requested for DL 4C AB 1234</div>
        
        {/* Tracker Steps */}
        <div className="grid grid-cols-4 gap-8 mt-24 relative">
          <div className="absolute top-[8px] left-[15%] right-[15%] h-[2px] bg-secondary z-0" />
          <div className="absolute top-[8px] left-[15%] w-[20%] h-[2px] bg-accent z-0" />
          
          <div className="flex flex-col items-center gap-8 relative z-10">
            <div className="w-[18px] h-[18px] rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold">✓</div>
            <span className="text-[10px] font-semibold text-foreground">Booked</span>
          </div>
          <div className="flex flex-col items-center gap-8 relative z-10">
            <div className="w-[18px] h-[18px] rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold animate-pulse">2</div>
            <span className="text-[10px] font-semibold text-accent">Pick-up</span>
          </div>
          <div className="flex flex-col items-center gap-8 relative z-10">
            <div className="w-[18px] h-[18px] rounded-full bg-secondary text-muted-foreground flex items-center justify-center text-[10px] font-bold">3</div>
            <span className="text-[10px] font-semibold text-muted-foreground">In Service</span>
          </div>
          <div className="flex flex-col items-center gap-8 relative z-10">
            <div className="w-[18px] h-[18px] rounded-full bg-secondary text-muted-foreground flex items-center justify-center text-[10px] font-bold">4</div>
            <span className="text-[10px] font-semibold text-muted-foreground">Ready</span>
          </div>
        </div>
      </div>

      {/* Estimator Tool */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)]">
        <h3 className="font-serif text-[16px] font-bold text-foreground mb-8">Maintenance Cost Estimator</h3>
        <p className="text-[11px] text-muted-foreground mb-16">Select your odometer reading to estimate service cost:</p>
        
        <div className="flex gap-8 mb-24">
          {[10000, 20000, 30000, 40000].map((km) => (
            <button
              key={km}
              onClick={() => setEstimateKm(km)}
              className={`flex-1 py-8 text-[12px] font-bold rounded-lg border transition-all cursor-pointer ${
                estimateKm === km
                  ? "bg-accent text-white border-accent"
                  : "bg-secondary text-muted-foreground border-transparent hover:bg-slate-100"
              }`}
            >
              {km.toLocaleString()} km
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-16 text-[12.5px] font-medium text-foreground">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Genuine Parts & Fluids</span>
            <span>₹{est.parts}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Nexa Certified Labor</span>
            <span>₹{est.labor}</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-muted/30 pb-16">
            <span className="text-muted-foreground">Eco Wash & Detailing</span>
            <span>₹{est.wash}</span>
          </div>
          <div className="flex justify-between text-[14px] font-bold mt-4">
            <span>Estimated Total</span>
            <span className="text-accent">₹{est.total}</span>
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div>
        <h3 className="font-serif text-[15px] font-bold text-foreground mb-16">Recommended Packages</h3>
        <div className="flex flex-col gap-16">
          {[
            { name: "Nexa Shield Engine Care", desc: "Full synthetic oil replacement, engine tuneup, oil filter, cabin air filter replacement", price: "₹4,200" },
            { name: "Monsoon Underbody Wash", desc: "Anti-rust chassis coating, deep wheel arch cleaning, body wash", price: "₹1,400" },
            { name: "Wheel Alignment & Balance", desc: "Laser alignment, wheel balancing, tyre rotation", price: "₹850" }
          ].map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-2xl p-16 shadow-card border border-[rgba(0,0,0,0.04)] flex justify-between items-center gap-16">
              <div className="flex-1">
                <div className="text-[13px] font-bold text-foreground">{pkg.name}</div>
                <div className="text-[11px] text-muted-foreground mt-4 leading-normal">{pkg.desc}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[13px] font-black text-accent">{pkg.price}</div>
                <NexaButton
                  variant="secondary"
                  size="small"
                  className="mt-8"
                >
                  Add
                </NexaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MyCarView() {
  return (
    <div className="px-24 py-16 flex flex-col gap-24 animate-fade-in pb-120">
      {/* Telemetry Panel */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)] text-center relative overflow-hidden">
        <div className="absolute top-16 right-16 flex items-center gap-8 bg-green-50 text-green-700 px-8 py-4 rounded-full text-[10px] font-bold">
          <span className="w-[6px] h-[6px] rounded-full bg-green-500 animate-pulse" />
          Connected
        </div>
        <h3 className="font-serif text-[18px] font-bold text-[#18171A] mb-4">Maruti Swift VXI</h3>
        <p className="text-[11px] text-muted-foreground">DL 4C AB 1234 · Pearl Arctic White</p>
        
        <div className="my-24 flex justify-center">
          <img src={swiftImg} alt="Swift VXI" className="w-[180px] object-contain drop-shadow-xl animate-float" />
        </div>

        {/* Diagnostic Stats */}
        <div className="grid grid-cols-3 gap-16 border-t border-[#f2f2f2] pt-16">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Fuel Level</div>
            <div className="text-[15px] font-black text-foreground mt-4 flex items-center justify-center gap-4">
              <Fuel size={14} className="text-[#19458B]" /> 68%
            </div>
            <div className="text-[9px] text-[#666] mt-4">~410 km left</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Odometer</div>
            <div className="text-[15px] font-black text-foreground mt-4 flex items-center justify-center gap-4">
              <Gauge size={14} className="text-[#19458B]" /> 12,450
            </div>
            <div className="text-[9px] text-[#666] mt-4">km run</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Battery</div>
            <div className="text-[15px] font-black text-foreground mt-4 flex items-center justify-center gap-4">
              <Zap size={14} className="text-[#19458B]" /> 12.4 V
            </div>
            <div className="text-[9px] text-[#298555] font-semibold mt-4">Healthy</div>
          </div>
        </div>
      </div>

      {/* Diagnostics Panel */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)]">
        <h4 className="font-serif text-[15px] font-bold text-foreground mb-16">Real-time Vehicle Health</h4>
        <div className="flex flex-col gap-16">
          {[
            { name: "Engine & Powertrain", status: "Optimal", color: "text-green-600 bg-green-50" },
            { name: "Brake Fluid & Hydraulics", status: "Optimal", color: "text-green-600 bg-green-50" },
            { name: "Tyre Pressure Monitoring", status: "Attention Required", detail: "Rear left is 28 PSI (recommended 32 PSI)", color: "text-amber-600 bg-amber-50" },
            { name: "Airbags & Safety Systems", status: "Active (6/6)", color: "text-green-600 bg-green-50" },
          ].map((sys) => (
            <div key={sys.name} className="flex flex-col gap-4 border-b border-[#f2f2f2] pb-16 last:border-b-0 last:pb-0">
              <div className="flex justify-between items-center text-[12.5px]">
                <span className="font-semibold text-foreground">{sys.name}</span>
                <span className={`text-[10px] font-bold px-8 py-4 rounded-full ${sys.color}`}>{sys.status}</span>
              </div>
              {sys.detail && <span className="text-[10.5px] text-muted-foreground leading-normal mt-4">{sys.detail}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Digital Document Wallet */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)]">
        <h4 className="font-serif text-[15px] font-bold text-foreground mb-16">Digital Vault (DigiLocker Linked)</h4>
        <div className="flex flex-col gap-16">
          {[
            { name: "Registration Certificate (RC)", num: "DL 4C AB 1234", expiry: "Permanent", ok: true },
            { name: "Motor Insurance Policy", num: "NEXA-GI-9823482", expiry: "Valid till Nov 24, 2026", ok: true },
            { name: "Pollution Control (PUC)", num: "PUC-918238", expiry: "Expires Sep 15, 2026", ok: true },
          ].map((doc) => (
            <div key={doc.name} className="flex items-center justify-between p-16 bg-secondary rounded-xl">
              <div className="flex items-center gap-16">
                <FileCheck size={20} className="text-[#19458B]" />
                <div>
                  <div className="text-[12px] font-bold text-foreground">{doc.name}</div>
                  <div className="text-[10px] text-muted-foreground mt-4">{doc.num} · {doc.expiry}</div>
                </div>
              </div>
              <span className="text-[10px] font-black text-green-700 bg-green-100 px-8 py-4 rounded-md">Linked</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopView() {
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState("All");
  
  const items = [
    { id: 1, name: "Premium Dual-Tone Alloys (15\")", cat: "Alloys", price: "₹28,500", desc: "Machine cut styling, high-durability alloy", img: <Disc3 size={48} className="text-muted-foreground mx-auto" /> },
    { id: 2, name: "Nexa Premium Seat Covers", cat: "Interior", price: "₹12,400", desc: "Perforated leatherette, active breathing tech", img: <User size={48} className="text-muted-foreground mx-auto" /> },
    { id: 3, name: "Nexa Dashcam Pro (Dual)", cat: "Electronics", price: "₹5,900", desc: "Full HD recording, parking monitor & WiFi", img: <Camera size={48} className="text-muted-foreground mx-auto" /> },
    { id: 4, name: "Ceramic Coating Kit", cat: "Care", price: "₹1,800", desc: "9H hardness gloss finish, water repellant", img: <Paintbrush size={48} className="text-muted-foreground mx-auto" /> },
  ];

  const filteredItems = filter === "All" ? items : items.filter(i => i.cat === filter);

  return (
    <div className="px-24 py-16 flex flex-col gap-24 animate-fade-in pb-120">
      {/* Promo banner */}
      <div className="bg-gradient-to-r from-[#19458B] to-[#384F6E] rounded-2xl p-16 text-white flex items-center justify-between shadow-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }} />
        <div className="relative">
          <div className="text-[10px] uppercase tracking-widest font-black text-white/80">Monsoon Sale</div>
          <div className="text-[15px] font-bold mt-4">15% Off Nexa Alloys</div>
          <div className="text-[10px] text-white/70 mt-4">Discount automatically applied at checkout</div>
        </div>
        {/* Shopping Cart Indicator */}
        <div className="relative w-[48px] h-[48px] bg-white/10 rounded-full flex items-center justify-center border border-white/20 shrink-0">
          <ShoppingBag size={20} className="text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-4 -right-4 bg-red-500 text-white text-[9px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex gap-8 overflow-x-auto no-scrollbar">
        {["All", "Alloys", "Interior", "Electronics", "Care"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-16 py-8 text-[12px] font-bold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
              filter === cat
                ? "bg-accent text-white border-accent"
                : "bg-secondary text-muted-foreground border-transparent hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accessories Grid */}
      <div className="grid grid-cols-2 gap-16">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-16 shadow-card border border-[rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div className="bg-secondary rounded-xl p-16 flex items-center justify-center min-h-[96px] mb-16">
              {item.img}
            </div>
            <div>
              <div className="text-[13px] font-bold text-foreground leading-tight line-clamp-2">{item.name}</div>
              <div className="text-[11px] text-muted-foreground mt-4 leading-normal min-h-[32px] line-clamp-2">{item.desc}</div>
              <div className="flex items-center justify-between mt-16 pt-8 border-t border-[#f2f2f2]">
                <span className="text-[13px] font-black text-foreground">{item.price}</span>
                <NexaButton
                  variant="primary"
                  color="black"
                  size="small"
                  onClick={() => setCartCount(c => c + 1)}
                >
                  Add
                </NexaButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="px-24 py-16 flex flex-col gap-24 animate-fade-in pb-120">
      {/* Profile Info Header */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)] flex items-center gap-16">
        <div className="w-[56px] h-[56px] rounded-full bg-primary flex items-center justify-center text-white font-serif text-[24px] font-black shadow-md shrink-0">
          R
        </div>
        <div>
          <h3 className="font-serif text-[18px] font-bold text-foreground">Rahul Sharma</h3>
          <p className="text-[11px] text-muted-foreground mt-4">Nexa Blue Elite Club Member</p>
          <div className="mt-8 inline-flex items-center gap-4 bg-blue-50 text-blue-700 px-8 py-2 rounded-full text-[10px] font-bold">
            <Trophy size={10} className="text-blue-600" /> Platinum Tier
          </div>
        </div>
      </div>

      {/* Rewards Card */}
      <div className="bg-gradient-to-br from-[#18171A] via-[#515151] to-[#18171A] rounded-2xl p-24 text-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }} />
        <div className="relative flex justify-between items-start">
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/60">Maruti Suzuki Rewards</div>
            <div className="text-[28px] font-black mt-8 flex items-baseline gap-4">
              2,450 <span className="text-[12px] text-white/70 font-semibold">Points</span>
            </div>
            <div className="text-[10px] text-white/50 mt-16 font-medium">1,500 Pts expire Dec 31, 2026</div>
          </div>
          <Trophy size={36} className="text-amber-400 opacity-80" />
        </div>
        <div className="border-t border-white/10 mt-16 pt-16 flex gap-16 text-[11px] text-white/80">
          <div>
            <span className="text-white/40">From Services:</span> 1,500
          </div>
          <div>
            <span className="text-white/40">From Referrals:</span> 950
          </div>
        </div>
      </div>

      {/* Saved Addresses */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)]">
        <h4 className="font-serif text-[15px] font-bold text-foreground mb-16">Saved Locations</h4>
        <div className="flex flex-col gap-16">
          <div className="flex gap-16 items-start border-b border-[#f2f2f2] pb-16">
            <MapPin size={16} className="text-accent mt-4 shrink-0" />
            <div>
              <div className="text-[12.5px] font-bold text-foreground">Home Address</div>
              <div className="text-[11px] text-muted-foreground mt-4 leading-normal">Sector 15, Gurgaon, Haryana 122001</div>
            </div>
          </div>
          <div className="flex gap-16 items-start">
            <MapPin size={16} className="text-accent mt-4 shrink-0" />
            <div>
              <div className="text-[12.5px] font-bold text-foreground">Office Address</div>
              <div className="text-[11px] text-muted-foreground mt-4 leading-normal">Building 10C, DLF Cyber City, Phase 2, Gurgaon, Haryana 122002</div>
            </div>
          </div>
        </div>
      </div>

      {/* Account actions */}
      <div className="bg-white rounded-2xl p-24 shadow-card border border-[rgba(0,0,0,0.04)]">
        <h4 className="font-serif text-[15px] font-bold text-foreground mb-16">Account Options</h4>
        <div className="flex flex-col gap-16">
          {[
            { label: "My Bookings", icon: <FileCheck size={16} /> },
            { label: "Payment Methods", icon: <CreditCard size={16} /> },
            { label: "Help & Support", icon: <LifeBuoy size={16} /> },
            { label: "App Settings", icon: <Settings size={16} /> },
          ].map((act) => (
            <button key={act.label} className="w-full flex items-center justify-between py-8 text-[12.5px] text-foreground font-semibold group hover:text-accent transition-colors cursor-pointer border-b border-[#f2f2f2] last:border-0 last:pb-0">
              <span className="flex items-center gap-16">
                <span className="text-[#19458B]">{act.icon}</span>
                {act.label}
              </span>
              <ChevronRight size={14} className="text-muted-foreground group-hover:text-accent transition-transform group-hover:translate-x-4" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Home() {
  const [storyIdx, setStoryIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"Home" | "Service" | "My Car" | "Shop" | "Profile">("Home");
  const [selectedCarForVariants, setSelectedCarForVariants] = useState<CarItem | null>(null);

  return (
    <div className="min-h-screen bg-[color:var(--surface)]">
      <main className="max-w-[440px] mx-auto bg-[color:var(--surface)] pb-120 relative">
        {!selectedCarForVariants && <TopNav activeTab={activeTab} />}

        {activeTab === "Home" && (
          <div className="animate-fade-in">
            {selectedCarForVariants ? (
              <VariantsView car={selectedCarForVariants} onClose={() => setSelectedCarForVariants(null)} />
            ) : (
              <>
                <NewsTicker />
                <StoriesRail onOpen={(i) => setStoryIdx(i)} />

                {/* ── Section: Car Care ── */}
                <QuickActions />

                {/* divider */}
                <div className="mx-24 my-16 h-px bg-[rgba(0,0,0,0.06)]" />

                {/* ── Section: My Car ── */}
                <MyCarCard />
                <ContextualBanner />
                <HomepageSubCard onClick={() => setActiveTab("Shop")} />

                {/* divider */}
                <div className="mx-24 my-16 h-px bg-[rgba(0,0,0,0.06)]" />

                {/* ── Section: Find & Explore ── */}
                <HomepageMainCard onClick={() => setActiveTab("Service")} />
                <div className="mt-16" />
                <ExploreCars onSelect={(car) => setSelectedCarForVariants(car)} />

                {/* divider */}
                <div className="mx-24 my-16 h-px bg-[rgba(0,0,0,0.06)]" />

                {/* ── Section: Finance ── */}
                <SmartFinance />

                {/* divider */}
                <div className="mx-24 my-16 h-px bg-[rgba(0,0,0,0.06)]" />

                {/* ── Section: Locators & Utilities ── */}
                <SmartLocators />
                <Utilities />

                {/* divider */}
                <div className="mx-24 my-16 h-px bg-[rgba(0,0,0,0.06)]" />

                {/* ── Section: Pre-owned & Quiz ── */}
                <HelpMeDecide />
                <HomepageShortCardGrid onServiceClick={() => setActiveTab("Service")} onBookClick={() => setActiveTab("Home")} />
                <div className="mx-24 my-16 h-px bg-[rgba(0,0,0,0.06)]" />
                <TrueValue />
              </>
            )}
          </div>
        )}

        {activeTab === "Service" && <ServiceView />}
        {activeTab === "My Car" && <MyCarView />}
        {activeTab === "Shop" && <ShopView />}
        {activeTab === "Profile" && <ProfileView />}

        {/* Viewport-fixed bottom navigation area */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] z-30">
          <ChatbotBubble />
          <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
        </div>
      </main>

      {storyIdx !== null && (
        <StoriesViewer startIndex={storyIdx} onClose={() => setStoryIdx(null)} />
      )}
    </div>
  );
}
