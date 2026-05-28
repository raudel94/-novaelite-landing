import { motion } from "framer-motion";
import { Target, Filter, Send } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Paid Acquisition",
    desc: "Multi-channel paid campaigns (Meta, Google, YouTube) engineered for high-intent traffic — not vanity clicks. We optimize for cost-per-appointment, not cost-per-click."
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    desc: "Every prospect is screened by budget, timeline, and intent through our hybrid AI + human qualification layer before it ever touches your sales team."
  },
  {
    icon: Send,
    title: "Exclusive Routing",
    desc: "Qualified appointments are routed in real time to your CRM, calendar, or sales reps — 100% exclusive, never resold, never shared with competitors."
  }
];

export default function WhatWeDo() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            A full appointment system —{" "}
            <span className="text-brand-gradient">built end-to-end.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            From the first ad to the booked appointment on your calendar, we own every step —
            so your sales team only meets homeowners who are ready to buy.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-surface-1/50 p-7 transition hover:-translate-y-1 hover:border-accent-cyan/40 hover:bg-surface-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
