import { motion } from "framer-motion";
import { Zap, DollarSign, TrendingUp, Filter } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Homeowners want it solved NOW",
    desc: "When a home-service problem appears (broken HVAC, hard water, roof leak), homeowners search and decide within 48 hours. Our system reaches them at that exact moment."
  },
  {
    icon: DollarSign,
    title: "High ticket = fast ROI",
    desc: "Home-service tickets average $3K–$15K. One closed appointment can return your monthly investment — every booked job after is pure margin."
  },
  {
    icon: TrendingUp,
    title: "Demand is constant",
    desc: "Water, roofing, HVAC, solar, and impact windows aren't trends — they're year-round needs. We tap demand that never sleeps."
  },
  {
    icon: Filter,
    title: "We filter the buyers, not the clicks",
    desc: "Other agencies optimize for cost-per-click. We optimize for cost-per-CLOSED job — and engineer every step backwards from your sales team's reality."
  }
];

export default function WhyItWorks() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Why The System Works
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Built on four{" "}
            <span className="text-brand-gradient">market truths.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            We didn't invent home-service demand — we built the cleanest path to capture it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-surface-1/50 p-7 transition hover:-translate-y-1 hover:border-accent-cyan/40 hover:bg-surface-1"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30">
                <p.icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
