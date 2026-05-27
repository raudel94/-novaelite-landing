import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ChevronDown, ArrowRight, Calendar } from "lucide-react";
import { calendlyLink } from "../config";

type Contaminant = {
  name: string;
  emoji: string;
  short: string;
  impact: string;
  system: string;
  systemBlurb: string;
};

const items: Contaminant[] = [
  {
    name: "Lead",
    emoji: "🧪",
    short: "Found in older pipes & soldered joints.",
    impact:
      "Even tiny amounts of lead damage children's developing brains, lower IQ, and have no safe exposure level (EPA & CDC).",
    system: "Reverse Osmosis + Whole-Home Filtration",
    systemBlurb: "RO at the kitchen sink removes 99% of lead; whole-home stops it at the main line."
  },
  {
    name: "PFAS",
    emoji: "⚠️",
    short: "'Forever chemicals' — found in 45% of U.S. tap water (USGS).",
    impact:
      "PFAS are linked to cancer, immune-system suppression, and developmental delays. They never break down in your body.",
    system: "Whole-Home Filtration (carbon-block + RO)",
    systemBlurb: "Multi-stage carbon + RO is the only EPA-approved method to remove PFAS."
  },
  {
    name: "Chlorine",
    emoji: "💨",
    short: "Added by every U.S. city — you smell it and taste it.",
    impact:
      "Chlorine dries skin and hair, kills gut bacteria, and creates carcinogenic byproducts (trihalomethanes) when it reacts with organics.",
    system: "Whole-Home Filtration",
    systemBlurb: "Carbon filtration removes 99% of chlorine before it touches your shower or appliances."
  },
  {
    name: "Hard Water",
    emoji: "🪨",
    short: "85% of U.S. homes have it (WQA).",
    impact:
      "Calcium & magnesium destroy water heaters, clog pipes, ruin dishwashers, and leave your skin dry and clothes stiff.",
    system: "Water Softener",
    systemBlurb: "Ion-exchange softeners extend appliance life by 30%+ and cut soap usage in half."
  },
  {
    name: "Iron",
    emoji: "🟫",
    short: "The orange/brown stains on your sinks & laundry.",
    impact:
      "Iron stains every surface, ruins white clothes, gives water a metallic taste, and feeds bacteria in pipes.",
    system: "Iron Filter + Softener",
    systemBlurb: "A combined oxidation + softening system removes iron before it reaches your home."
  },
  {
    name: "Bacteria",
    emoji: "🦠",
    short: "A real risk for well-water households.",
    impact:
      "E. coli, coliform, and other bacteria cause stomach illness, infections, and are invisible without lab testing.",
    system: "UV Disinfection + Well Treatment",
    systemBlurb: "UV systems kill 99.99% of bacteria, viruses, and parasites — chemical-free."
  }
];

export default function ContaminantGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="relative bg-surface-1 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            <AlertTriangle size={14} /> What's in your water?
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            6 things hiding in <span className="text-brand-gradient">your tap right now.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Click any contaminant to see the health impact — and the exact system that removes it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => {
            const isOpen = open === c.name;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen ? "border-accent-cyan bg-brand-500/10" : "border-white/10 bg-surface-2 hover:border-white/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : c.name)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl" aria-hidden>
                      {c.emoji}
                    </span>
                    <div>
                      <p className="font-display text-xl font-extrabold text-white">{c.name}</p>
                      <p className="mt-1 text-sm text-white/60">{c.short}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`shrink-0 text-white/55 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      <div className="space-y-4 p-6">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                            Health impact
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-white/80">{c.impact}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                            Recommended system
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">{c.system}</p>
                          <p className="mt-1 text-sm text-white/70">{c.systemBlurb}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <a
                            href="#contact"
                            className="brand-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white shadow-card transition hover:scale-[1.03]"
                          >
                            <Calendar size={12} /> Book free water test
                          </a>
                          <a
                            href={calendlyLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                          >
                            Schedule call <ArrowRight size={12} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-white/45">
          Sources: U.S. EPA, CDC, USGS (2023 PFAS national study), Water Quality Association.
        </p>
      </div>
    </section>
  );
}
