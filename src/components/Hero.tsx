import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Droplets, FlaskConical, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-0 pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-60" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-5 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-cyan"
          >
            <ShieldCheck size={14} /> Trusted by 200+ Miami homeowners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Know what's in your water.
            <br />
            <span className="text-brand-gradient">Free in-home test.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg"
          >
            A licensed Miami technician arrives at your door with lab-grade equipment, tests for{" "}
            <strong className="text-white">chlorine, hard water, PFAS, lead, and bacteria</strong>, and gives you a clear,
            no-pressure report. 30 minutes. Zero cost. Zero obligation.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 grid max-w-xl gap-2 text-sm text-white/85 sm:grid-cols-2"
          >
            {[
              "100% free — no sales pressure",
              "Lab-grade results in 30 min",
              "Custom system recommendation",
              "Financing 0% APR available"
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={18} />
                <span>{b}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="brand-gradient group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover sm:px-7 sm:py-4 sm:text-base"
            >
              Find out what's really in your water
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>

        {/* Visual: in-home test mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/30 blur-3xl" />
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-surface-2 p-6 shadow-cardHover">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white/55">Your Free Water Test</span>
              <span className="rounded-full bg-success/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Available Today
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { icon: FlaskConical, label: "Chlorine & Hardness", val: "Tested" },
                { icon: Droplets, label: "PFAS · Lead · Iron", val: "Tested" },
                { icon: Sparkles, label: "Bacteria (UV check)", val: "Tested" }
              ].map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <t.icon className="text-cyan-300" size={18} />
                    <p className="text-sm font-semibold text-white">{t.label}</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-300">✓ {t.val}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Duration</p>
                <p className="font-display text-2xl font-extrabold text-white">30m</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Cost</p>
                <p className="font-display text-2xl font-extrabold text-emerald-300">$0</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Rating</p>
                <p className="font-display text-2xl font-extrabold text-white">4.9★</p>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-surface-2 px-4 py-3 shadow-card sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/55">Homes Served</p>
            <p className="font-display text-2xl font-extrabold text-white">200+</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity }}
            className="absolute -right-2 bottom-10 hidden rounded-2xl border border-white/10 bg-surface-2 px-4 py-3 shadow-card sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/55">Avg Savings</p>
            <p className="font-display text-2xl font-extrabold text-white">$1.2K/yr</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
