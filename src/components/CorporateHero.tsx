import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export default function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-surface-0 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-60" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-cyan"
        >
          <ShieldCheck size={14} /> Exclusive Pre-Qualified Appointments
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Exclusive, pre-qualified appointments for{" "}
          <span className="text-brand-gradient">home-service businesses ready to scale.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          We fill your calendar with real homeowner appointments — confirmed, exclusive,
          and ready to close. <strong className="text-white">No shared leads. No junk forms.
          No clicks. Just booked jobs.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#industries"
            className="brand-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover"
          >
            Book a discovery call
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <TrendingUp size={16} /> See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-white/45"
        >
          <span>Certified Partners:</span>
          <span className="text-white/80">Meta Business</span>
          <span className="text-white/80">Google Ads</span>
          <span className="text-white/80">HubSpot</span>
          <span className="text-white/80">ServiceTitan</span>
        </motion.div>
      </div>
    </section>
  );
}
