import { motion } from "framer-motion";
import {
  Wrench,
  HeartPulse,
  Flame,
  Droplets,
  ShieldAlert,
  ArrowRight,
  Calendar
} from "lucide-react";
import { calendlyLink } from "../config";

const consequences = [
  {
    icon: Wrench,
    title: "Pipes & appliances damage",
    desc: "Hard water and minerals slowly clog pipes, kill water heaters early, and ruin dishwashers, washers and coffee machines."
  },
  {
    icon: HeartPulse,
    title: "Skin, hair & scalp issues",
    desc: "Chlorine and hardness strip natural oils — leaving skin dry, hair brittle, and scalps itchy after every shower."
  },
  {
    icon: Flame,
    title: "Heater efficiency drops",
    desc: "Scale buildup forces your water heater to work harder, raising your electric bill 15–30% before you even notice."
  },
  {
    icon: Droplets,
    title: "Soap & detergent waste",
    desc: "Hard water needs 2–3× more soap to lather. You're literally pouring money down the drain every single load."
  },
  {
    icon: ShieldAlert,
    title: "Invisible contaminants",
    desc: "Lead, PFAS, chlorine byproducts and bacteria don't change color, smell or taste — but they affect your family every day."
  }
];

export default function WhyTestMatters() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            Why a water test matters
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Bad water is costing you —{" "}
            <span className="text-brand-gradient">silently.</span>
          </h2>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            You don't see it until the damage is done. Here's what untested water quietly does
            to your home, your wallet, and your family every single day.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consequences.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.08] via-surface-2 to-surface-2 p-6 shadow-card transition hover:-translate-y-1 hover:border-amber-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30">
                <c.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={calendlyLink()}
            target="_blank"
            rel="noreferrer"
            className="brand-gradient group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover"
          >
            <Calendar size={16} /> Test before the damage compounds
            <ArrowRight size={14} className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
