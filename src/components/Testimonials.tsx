import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const items = [
  {
    name: "Adam Brennan",
    company: "Brennan Roofing",
    niche: "Roofing · Dallas, TX",
    result: "+$2.4M in 6 months",
    quote:
      "We cut our cost per closed job in half. The appointments are pre-qualified, the homeowners actually pick up the phone, and our reps are closing 34% — up from 18% on shared leads."
  },
  {
    name: "Sarah K. Whitman",
    company: "SunRidge Solar",
    niche: "Solar · Phoenix, AZ",
    result: "82% show rate",
    quote:
      "NovaElite is the first lead-gen partner that actually understood our sales cycle. Our show rate jumped from 51% to 82% in the first 60 days. Game changer."
  },
  {
    name: "Luis Bermúdez",
    company: "GulfCoast Impact Windows",
    niche: "Impact Windows · Tampa, FL",
    result: "+58 booked appts/mo",
    quote:
      "Appointments flow straight into AccuLynx with full context. My reps stopped wasting half their week on bad leads. ROI is the highest we've ever measured."
  },
  {
    name: "Mark Davies",
    company: "PureWell Water Systems",
    niche: "Water Filtration · Houston, TX",
    result: "11.2x ROI",
    quote:
      "Pay-per-appointment changed our entire growth model. We scale spend up or down with confidence because every dollar maps to a real homeowner on the calendar."
  }
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 6500);
    return () => clearInterval(id);
  }, []);

  const t = items[idx];

  return (
    <section className="relative bg-surface-1 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Client Results</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Contractors closing more jobs{" "}
            <span className="text-brand-gradient">with less wasted spend.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <Quote className="absolute -left-2 -top-4 text-brand-500/25" size={64} />
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative rounded-3xl border border-white/10 bg-surface-2 p-8 shadow-card md:p-12"
            >
              <div className="flex items-center gap-1 text-warn">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 font-display text-xl leading-relaxed text-white md:text-2xl">
                "{t.quote}"
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/20 font-bold text-accent-cyan ring-1 ring-brand-500/30">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/55">
                      {t.company} · {t.niche}
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-success/15 px-4 py-1.5 text-sm font-bold text-emerald-300">
                  {t.result}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
              className="rounded-full border border-white/15 bg-surface-2 p-2 text-white/85 transition hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-6 bg-accent-cyan" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % items.length)}
              className="rounded-full border border-white/15 bg-surface-2 p-2 text-white/85 transition hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
