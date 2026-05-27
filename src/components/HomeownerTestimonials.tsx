import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Calendar, Phone } from "lucide-react";
import { SITE, calendlyLink, telLink } from "../config";

const items = [
  {
    name: "Maria González",
    company: "Coral Gables, FL",
    niche: "Whole-Home Filtration",
    result: "Saved $1,400/yr",
    quote:
      "The technician showed us exactly what was in our water — chlorine levels were 3x what they should be. Two weeks after installing the whole-home system, our skin stopped itching and the water actually tastes clean. Best decision we made for the house."
  },
  {
    name: "James Patterson",
    company: "Pinecrest, FL",
    niche: "Water Softener",
    result: "No more scale",
    quote:
      "We were replacing our water heater every 4 years because of the hard water. Since installing the softener 18 months ago, no scale on the faucets, glasses come out spotless, and my wife says her hair feels different. Zero complaints."
  },
  {
    name: "Andrea Rivera",
    company: "Aventura, FL",
    niche: "Reverse Osmosis",
    result: "Bottled water gone",
    quote:
      "We were spending almost $90 a month on bottled water. The RO at the kitchen sink tastes better than anything in a bottle. Paid itself off in under a year and my kids actually drink water now."
  },
  {
    name: "David Brennan",
    company: "Homestead, FL",
    niche: "Well Water Treatment",
    result: "Iron stains gone",
    quote:
      "On well water and the iron stains were ruining our laundry and bathrooms. NovaElite tested everything, designed a system specific to our well, and the difference is night and day. White towels stay white. Highly recommend."
  }
];

export default function HomeownerTestimonials() {
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Real Miami Homeowners</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Families across Miami{" "}
            <span className="text-brand-gradient">trust their water.</span>
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
              <p className="mt-5 font-display text-xl leading-relaxed text-white md:text-2xl">"{t.quote}"</p>
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
                <div className="rounded-full bg-success/15 px-4 py-1.5 text-sm font-bold text-emerald-300">{t.result}</div>
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
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent-cyan" : "w-2 bg-white/20"}`}
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

          {/* CTA below testimonials */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-card transition hover:scale-[1.03]"
            >
              <Calendar size={16} /> Book my free water test
            </a>
            <a
              href={calendlyLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open Calendly
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={14} /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
