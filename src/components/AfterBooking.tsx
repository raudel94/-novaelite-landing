import { motion } from "framer-motion";
import { PhoneCall, Home, FlaskConical, FileText, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "We call to confirm",
    desc: "Within minutes of booking, our team rings you back to confirm your address and a time that actually works for you."
  },
  {
    icon: Home,
    title: "A specialist visits your home",
    desc: "A licensed Miami technician arrives on time, in uniform, with lab-grade equipment. No high-pressure salesman in a suit."
  },
  {
    icon: FlaskConical,
    title: "Water tested in under 15 min",
    desc: "We sample the kitchen tap and (if relevant) the shower or well. Results come back on the spot — no waiting on a lab."
  },
  {
    icon: FileText,
    title: "Results explained, plain English",
    desc: "We walk you through every reading: hardness, chlorine, TDS, iron. You'll know exactly what's in your water."
  },
  {
    icon: Lightbulb,
    title: "Personalized recommendation",
    desc: "If treatment is needed, we'll show the right system for your home and budget. If not, we'll tell you that too."
  }
];

export default function AfterBooking() {
  return (
    <section className="relative bg-surface-1 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            After you book
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Here's exactly{" "}
            <span className="text-brand-gradient">what happens next.</span>
          </h2>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            No surprises, no upsells, no waiting weeks. The whole process — from booking to
            recommendation — takes less than 48 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-surface-2 p-6 shadow-card transition hover:-translate-y-1 hover:border-accent-cyan/40"
            >
              <div className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-cyan text-xs font-extrabold text-surface-0 shadow-glow">
                {i + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
