import { motion } from "framer-motion";
import { Quote, HeartHandshake } from "lucide-react";

export default function WhyFreeTest() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-accent-cyan/30 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 p-8 md:p-14"
        >
          <Quote className="absolute -right-6 -top-6 text-accent-cyan/15" size={170} strokeWidth={1.5} />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-cyan">
              <HeartHandshake size={14} /> Why we offer this for free
            </div>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              We're not here to sell you{" "}
              <span className="text-brand-gradient">water you don't need.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
              <p>
                We want you to understand the real quality of the water coming into your home —
                that's it. If after the test you decide to work with us, great. If not, you'll
                still walk away with useful information to protect your family.
              </p>
              <p className="text-white">
                <strong>No pressure. No hidden fee. No obligation.</strong> Just honest data
                about what's flowing through your pipes.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-3/50 px-5 py-3">
              <img
                src="/logo.png"
                alt="NovaElite"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <div>
                <p className="text-sm font-bold text-white">The NovaElite Water team</p>
                <p className="text-xs text-white/55">Licensed & insured in Florida · Miami-based</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
