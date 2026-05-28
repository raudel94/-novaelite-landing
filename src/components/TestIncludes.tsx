import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical, ShieldCheck, FileText, Lightbulb, Microscope } from "lucide-react";

const items = [
  {
    icon: FlaskConical,
    title: "Hardness level analysis",
    desc: "Precise grains-per-gallon reading so you know exactly how aggressive your water really is."
  },
  {
    icon: Microscope,
    title: "Harmful mineral detection",
    desc: "We screen for iron, chlorine, lead traces and TDS — the silent damage drivers."
  },
  {
    icon: ShieldCheck,
    title: "Overall quality evaluation",
    desc: "A clear pass/fail snapshot of your tap water versus EPA and Florida benchmarks."
  },
  {
    icon: FileText,
    title: "Clear results walkthrough",
    desc: "No jargon. Our specialist explains every number so you understand exactly what you're drinking."
  },
  {
    icon: Lightbulb,
    title: "Personalized recommendations",
    desc: "If — and only if — your water needs treatment, we'll show you the right system for your home and budget."
  }
];

export default function TestIncludes() {
  return (
    <section className="relative bg-surface-1 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            What you get
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your free water test <span className="text-brand-gradient">includes:</span>
          </h2>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Lab-grade equipment. A licensed Miami technician. 100% free, even if you never buy anything from us.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative flex items-start gap-4 rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.08] via-surface-2 to-surface-2 p-5 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">
                <it.icon size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  <h3 className="font-display text-base font-bold text-white">{it.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
