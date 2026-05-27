import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { calendlyLink, telLink, SITE } from "../config";

export default function FinalCtaBand() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-accent-cyan/30 bg-gradient-to-br from-brand-500/30 via-brand-500/10 to-accent-cyan/20 p-10 text-center md:p-16"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-cyan/20 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready to fill your calendar with{" "}
              <span className="text-brand-gradient">qualified appointments?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              Book a 30-minute strategy call. We'll walk you through our system, share real
              case studies, and show you exactly what's possible in your market.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="brand-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover"
              >
                Book Your Strategy Call
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <Phone size={16} /> Call {SITE.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
