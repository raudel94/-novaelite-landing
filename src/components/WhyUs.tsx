import { motion } from "framer-motion";
import { Lock, DollarSign, Layers, Flag } from "lucide-react";

const reasons = [
  {
    icon: Lock,
    title: "100% Exclusive",
    desc: "Every appointment is yours alone — never shared, never resold, never auctioned to your competitors."
  },
  {
    icon: DollarSign,
    title: "Pay Per Appointment",
    desc: "You only pay when a qualified prospect actually books. No retainers, no clicks, no risk on impressions."
  },
  {
    icon: Layers,
    title: "Industry-Specialized",
    desc: "Each vertical has its own dedicated team, playbook, and qualification logic — we go deep, not wide."
  },
  {
    icon: Flag,
    title: "U.S.-Based Team",
    desc: "Onshore strategists, designers, and qualification specialists who understand the American home-services market."
  }
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Why NovaElite
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Built differently —{" "}
            <span className="text-brand-gradient">because the old model is broken.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-surface-1/50 p-6 transition hover:border-accent-cyan/40 hover:bg-surface-1"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30">
                <r.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
