import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does the water test take?",
    a: "About 15 minutes inside your home. We sample the kitchen tap (and the shower or well if relevant), run lab-grade tests on the spot, and walk you through the results immediately. No waiting on a lab, no follow-up visits."
  },
  {
    q: "Are there any hidden costs?",
    a: "None. The test is 100% free — no service charge, no travel fee, no consultation fee, no obligation. Even if you decide our systems aren't right for your home, you owe us nothing."
  },
  {
    q: "What if I don't want to buy anything?",
    a: "That's completely fine. Most homeowners just want to know what's in their water — and that's the whole point of the test. We'll hand you the results, answer your questions, and leave. No pressure tactics, no follow-up spam."
  },
  {
    q: "What kind of results will I receive?",
    a: "A clear, plain-English report showing your water's hardness (grains per gallon), chlorine levels, total dissolved solids (TDS), iron content, and pH. We compare each number against EPA and Florida benchmarks so you know exactly where you stand."
  },
  {
    q: "Is the test safe for my family?",
    a: "Absolutely. We only sample water that already flows through your taps — we don't add chemicals, modify your plumbing, or disturb anything in your home. Our technician is licensed, insured, and background-checked."
  },
  {
    q: "How fast can someone come out?",
    a: "Most Miami-Dade and Broward homes are tested within 24–48 hours of booking. We'll confirm the exact time by phone right after you submit your request."
  },
  {
    q: "Do you serve my zip code?",
    a: "We cover all of Miami-Dade and Broward County (zip codes 33010–33399). If you're slightly outside that range, mention it on the booking form and we'll check if we can still help."
  }
];

export default function WaterFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="water-faq" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you might be{" "}
            <span className="text-brand-gradient">wondering.</span>
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Straight answers — no fine print, no sales pitch.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-surface-2 transition shadow-card ${
                  isOpen ? "border-accent-cyan/50" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-white md:text-lg">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-accent-cyan text-surface-0" : "bg-white/10 text-white/80"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
