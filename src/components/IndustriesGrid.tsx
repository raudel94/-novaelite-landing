import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sun, Hammer, Wind, Flame, ArrowRight, Lock } from "lucide-react";

const comingSoon = [
  { icon: Hammer, name: "Roofing", desc: "Exclusive roof replacement and inspection appointments." },
  { icon: Sun, name: "Solar", desc: "Pre-qualified homeowner consults for residential solar installers." },
  { icon: Wind, name: "Impact Windows", desc: "High-intent appointments for impact window and door dealers." },
  { icon: Flame, name: "HVAC", desc: "Service calls and replacement consults for residential HVAC." }
];

export default function IndustriesGrid() {
  return (
    <section id="industries" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Industries We Serve
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Vertical-specific systems —{" "}
            <span className="text-brand-gradient">not generic agency work.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            We focus on home-services verticals where exclusive, pre-qualified appointments
            create outsized ROI. Each industry gets a dedicated team and playbook.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Active: Water Treatment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Link
              to="/water"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent-cyan/30 bg-gradient-to-br from-cyan-500/15 to-blue-500/5 p-7 transition hover:-translate-y-1 hover:border-accent-cyan hover:shadow-glow"
            >
              <span className="absolute right-5 top-5 z-10 inline-flex items-center gap-1 rounded-full border border-accent-cyan/50 bg-accent-cyan/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-cyan backdrop-blur">
                Available Now
              </span>

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30">
                <Droplets size={26} />
              </div>

              <h3 className="mt-5 pr-28 font-display text-xl font-bold text-white">Water Treatment</h3>
              <p className="mt-2 pr-4 text-sm leading-relaxed text-white/70">
                Lead generation for water softener, RO, and whole-home filtration dealers.
              </p>

              <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-cyan transition group-hover:gap-3">
                Explore Water Treatment Leads
                <ArrowRight size={16} />
              </div>
            </Link>
          </motion.div>

          {/* Coming Soon cards */}
          {comingSoon.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.06 }}
              className="h-full"
            >
              <div className="relative flex h-full cursor-not-allowed flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <span className="absolute right-5 top-5 z-10 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/55 backdrop-blur">
                  <Lock size={10} /> Coming Soon
                </span>

                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white/40 ring-1 ring-white/10">
                  <ind.icon size={26} />
                </div>

                <h3 className="mt-5 pr-28 font-display text-xl font-bold text-white/55">{ind.name}</h3>
                <p className="mt-2 pr-4 text-sm leading-relaxed text-white/40">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/50">
          Don't see your industry?{" "}
          <Link to="/water#contact" className="font-semibold text-accent-cyan hover:underline">
            Talk to us
          </Link>{" "}
          — we expand based on demand.
        </p>
      </div>
    </section>
  );
}
