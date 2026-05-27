import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Home, Droplets, ShieldCheck, DollarSign } from "lucide-react";

type Kpi = {
  icon: typeof Home;
  prefix?: string;
  suffix?: string;
  target: number;
  decimals?: number;
  label: string;
  desc: string;
};

const kpis: Kpi[] = [
  {
    icon: Home,
    target: 200,
    suffix: "+",
    label: "Miami homes served",
    desc: "Families across Miami-Dade & Broward have already booked their free water test."
  },
  {
    icon: DollarSign,
    prefix: "$",
    target: 1200,
    suffix: "/yr",
    label: "Average savings",
    desc: "Cut bottled water, plumbing repairs, and appliance replacement costs."
  },
  {
    icon: ShieldCheck,
    target: 99,
    suffix: "%",
    label: "Contaminants removed",
    desc: "Whole-home + RO systems remove 99% of chlorine, PFAS, lead, and hardness."
  },
  {
    icon: Droplets,
    target: 4.9,
    decimals: 1,
    suffix: "★",
    label: "Customer rating",
    desc: "Verified reviews from real Miami homeowners across Google & Facebook."
  }
];

function Counter({ value, prefix, suffix, decimals }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v)
    });
    return () => controls.stop();
  }, [inView, value]);

  const formatted = decimals ? display.toFixed(decimals) : Math.round(display).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function WaterKpis() {
  return (
    <section className="relative border-y border-white/5 bg-surface-1 py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Real Results</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Numbers from <span className="text-brand-gradient">real Miami homes.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            What homeowners across Miami-Dade and Broward see after switching to a NovaElite system.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-surface-2 to-surface-2 p-6 shadow-card transition hover:-translate-y-1 hover:border-accent-cyan/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30">
                <k.icon size={22} />
              </div>
              <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                <Counter value={k.target} prefix={k.prefix} suffix={k.suffix} decimals={k.decimals} />
              </p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-accent-cyan">{k.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{k.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
