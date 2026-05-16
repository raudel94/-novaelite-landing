import { motion } from "framer-motion";
import { ShieldCheck, FileX, BadgeCheck } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Pay per appointment",
    desc: "You're not paying for clicks, impressions, or shared leads. You pay only when a qualified homeowner is on your calendar — period.",
    badge: "No risk"
  },
  {
    icon: FileX,
    title: "No long-term contracts",
    desc: "Month-to-month engagements. Pause or cancel anytime. We earn your business every 30 days — not lock you in with a 12-month deal.",
    badge: "Month-to-month"
  },
  {
    icon: BadgeCheck,
    title: "Quality replacement guarantee",
    desc: "If an appointment is unqualified or a no-show without a reschedule, we replace it free of charge. Simple as that.",
    badge: "Guaranteed"
  }
];

export default function RiskReversal() {
  return (
    <section className="relative bg-surface-1 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            The NovaElite Guarantee
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            We take the risk —{" "}
            <span className="text-brand-gradient">so you don't have to.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Lead-gen agencies make you pay upfront and hope for results. We flip the model: you only pay
            when we deliver booked appointments to your team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-2 p-7 shadow-card"
            >
              <span className="absolute right-5 top-5 rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                {g.badge}
              </span>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-accent-cyan ring-1 ring-brand-500/30">
                <g.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
