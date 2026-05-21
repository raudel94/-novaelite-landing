import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-0 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent-cyan/15 blur-3xl" />
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-60" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-cyan"
          >
            <ShieldCheck size={14} /> Trusted by 200+ U.S. contractors
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Booked Appointments.
            <br />
            <span className="text-brand-gradient">Not Just Leads.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg"
          >
            We deliver <strong className="text-white">pre-qualified, exclusive homeowner appointments</strong> straight to your sales calendar.
            Built for roofing, solar, water filtration, and impact-window contractors who are tired of paying for shared leads.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 grid max-w-xl gap-2 text-sm text-white/85 sm:grid-cols-2"
          >
            {[
              "100% exclusive to your business",
              "Pre-qualified by budget & timeline",
              "Real-time CRM delivery",
              "Pay per appointment — not per click"
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
              className="brand-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover"
            >
              See Availability in Your Market
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Play size={16} /> How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-white/45"
          >
            <span>Certified Partners:</span>
            <span className="text-white/80">Meta Business</span>
            <span className="text-white/80">Google Ads</span>
            <span className="text-white/80">HubSpot</span>
            <span className="text-white/80">ServiceTitan</span>
          </motion.div>
        </div>

        {/* Visual: dashboard mockup on dark panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-brand-500/30 blur-3xl" />
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-surface-2 p-6 shadow-cardHover">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white/55">Today's Pipeline</span>
              <span className="rounded-full bg-success/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Live
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { name: "Michael R.", job: "Roof Replacement · Dallas, TX", val: "$18,400" },
                { name: "Sarah K.", job: "Solar Install · Phoenix, AZ", val: "$24,900" },
                { name: "Anthony G.", job: "Impact Windows · Miami, FL", val: "$31,200" }
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/55">{t.job}</p>
                  </div>
                  <span className="text-sm font-bold text-emerald-300">{t.val}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-white/[0.04] p-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Booked</p>
                <p className="font-display text-2xl font-extrabold text-white">47</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Show Rate</p>
                <p className="font-display text-2xl font-extrabold text-white">82%</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Close</p>
                <p className="font-display text-2xl font-extrabold text-white">34%</p>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-surface-2 px-4 py-3 shadow-card sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/55">Avg ROI</p>
            <p className="font-display text-2xl font-extrabold text-white">8.4x</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity }}
            className="absolute -right-2 bottom-10 hidden rounded-2xl border border-white/10 bg-surface-2 px-4 py-3 shadow-card sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/55">Appts / mo</p>
            <p className="font-display text-2xl font-extrabold text-white">+128</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
