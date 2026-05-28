import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Droplets, Coffee, Shirt, Flame, Sparkles, AlertCircle, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { calendlyLink } from "../config";

type Symptom = {
  key: string;
  label: string;
  icon: typeof Droplets;
  systems: string[];
};

const symptoms: Symptom[] = [
  { key: "taste", label: "Bad taste or smell", icon: Coffee, systems: ["RO", "Whole-Home"] },
  { key: "scale", label: "White scale on faucets", icon: Sparkles, systems: ["Softener"] },
  { key: "skin", label: "Dry skin & hair", icon: Droplets, systems: ["Softener"] },
  { key: "stains", label: "Rust / orange stains", icon: Flame, systems: ["Iron Filter", "Well Treatment"] },
  { key: "laundry", label: "Stiff laundry", icon: Shirt, systems: ["Softener"] },
  { key: "worry", label: "Worried about contaminants", icon: AlertCircle, systems: ["Whole-Home", "RO"] }
];

const systemDescriptions: Record<string, string> = {
  Softener: "Water Softener — kills scale, saves skin & appliances",
  RO: "Reverse Osmosis — bottled-water purity at your kitchen tap",
  "Whole-Home": "Whole-Home Filtration — total protection at the main line",
  "Iron Filter": "Iron Filter + Softener — removes orange/rust stains",
  "Well Treatment": "Well Treatment System — custom for private wells"
};

export default function WaterCheck() {
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const recommended = useMemo(() => {
    if (picked.size === 0) return [];
    const counts: Record<string, number> = {};
    symptoms.forEach((s) => {
      if (picked.has(s.key)) {
        s.systems.forEach((sys) => {
          counts[sys] = (counts[sys] || 0) + 1;
        });
      }
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([sys]) => sys);
  }, [picked]);

  const toggle = (k: string) => {
    const next = new Set(picked);
    next.has(k) ? next.delete(k) : next.add(k);
    setPicked(next);
  };

  return (
    <section className="relative bg-surface-1 py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-25" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">Do these sound familiar?</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            7 signs your water is <span className="text-brand-gradient">working against you.</span>
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Most Miami homes show at least 3 of these. Scan the list, then tap the ones you've noticed —
            we'll match the right system instantly.
          </p>
        </div>

        {/* Static visual symptom strip */}
        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 lg:grid-cols-7">
          {[
            { label: "White spots on faucets", icon: Sparkles },
            { label: "Strange smell", icon: AlertCircle },
            { label: "Metallic taste", icon: Coffee },
            { label: "Dry skin after shower", icon: Droplets },
            { label: "Stiff laundry", icon: Shirt },
            { label: "Scale on appliances", icon: Flame },
            { label: "Cloudy water", icon: Droplets }
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-surface-2/60 p-3 text-center"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Icon size={16} />
              </div>
              <span className="text-[11px] font-medium leading-tight text-white/75 sm:text-xs">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">Interactive · 30 seconds</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
            Now tap what you notice <span className="text-brand-gradient">at home.</span>
          </h3>
          <p className="mt-3 text-sm text-white/65 sm:text-base">
            We'll match the right system instantly — and confirm everything with a free in-home test.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-12 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {symptoms.map((s) => {
            const active = picked.has(s.key);
            const Icon = s.icon;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => toggle(s.key)}
                className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition sm:gap-4 sm:p-5 ${
                  active
                    ? "border-accent-cyan bg-brand-500/15 shadow-glow"
                    : "border-white/10 bg-surface-2 hover:border-white/30"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition sm:h-12 sm:w-12 ${
                    active ? "bg-accent-cyan text-surface-0" : "bg-cyan-500/15 text-cyan-300"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span className="text-sm font-semibold text-white sm:text-base">{s.label}</span>
                {active && <CheckCircle2 className="ml-auto text-accent-cyan" size={18} />}
              </button>
            );
          })}
        </div>

        {recommended.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-3xl border border-accent-cyan/40 bg-brand-500/10 p-7 shadow-cardHover md:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Your match</p>
            <h3 className="mt-3 font-display text-2xl font-extrabold text-white md:text-3xl">
              {recommended.length === 1 ? "We recommend:" : "Best combo for your home:"}
            </h3>
            <ul className="mt-4 space-y-2">
              {recommended.map((sys) => (
                <li key={sys} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={20} />
                  <span>{systemDescriptions[sys]}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="brand-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-card transition hover:scale-[1.03]"
              >
                <Calendar size={16} /> Protect your home & family — get your free test
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
