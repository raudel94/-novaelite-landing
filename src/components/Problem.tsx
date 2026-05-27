import { motion } from "framer-motion";
import { AlertTriangle, Users, Clock, XCircle, CheckCircle2 } from "lucide-react";

const pains = [
  {
    icon: Users,
    title: "Shared leads, 4 competitors deep",
    desc: "Most lead-gen companies sell the same homeowner to 3–5 contractors. By the time you call, they've already heard your pitch — twice."
  },
  {
    icon: Clock,
    title: "No-shows from low-intent forms",
    desc: "Cheap web forms attract tire-kickers. Your sales team wastes hours on prospects who never picked up or were never serious."
  },
  {
    icon: AlertTriangle,
    title: "Generic agencies don't get home services",
    desc: "Most marketing agencies have never run a job site or sat with a sales team. They optimize for clicks, not closed jobs — and your pipeline pays the price."
  }
];

const wins = [
  "100% exclusive — never shared with competitors",
  "Pre-qualified by budget, timeline & intent",
  "Pay-per-appointment — not per click or lead"
];

export default function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Why Most Lead-Gen Is Broken
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            You don't need more leads.{" "}
            <span className="text-brand-gradient">You need better appointments.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            We rebuilt the lead-gen model from the ground up — because home-service businesses deserve better than recycled
            form-fills and shared lead auctions.
          </p>
        </div>

        {/* RED BLOCK — what competitors do */}
        <div className="relative mt-16 rounded-3xl border-2 border-red-500/40 bg-red-500/5 p-6 pt-8 md:p-8 md:pt-10">
          <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/60 bg-red-500 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-red-500/30 sm:gap-2 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
              <XCircle size={12} className="sm:hidden" />
              <XCircle size={14} className="hidden sm:inline" />
              <span className="sm:hidden">What others do</span>
              <span className="hidden sm:inline">What other lead-gen companies do</span>
            </span>
          </div>

          <div className="mt-2 grid gap-6 md:grid-cols-3">
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-red-500/30 bg-red-500/[0.07] p-7 transition hover:-translate-y-1 hover:border-red-500/50"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 text-red-300 ring-1 ring-red-500/40">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GREEN BLOCK — NovaElite difference */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative mt-16 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-6 pt-8 md:p-8 md:pt-10"
        >
          <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-500 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-emerald-500/30 sm:gap-2 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
              <CheckCircle2 size={12} className="sm:hidden" />
              <CheckCircle2 size={14} className="hidden sm:inline" />
              <span className="sm:hidden">NovaElite difference</span>
              <span className="hidden sm:inline">How NovaElite is different</span>
            </span>
          </div>

          <div className="mt-2 grid items-center gap-6 md:grid-cols-3">
            {wins.map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.07] p-5"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={22} />
                <span className="text-sm font-semibold leading-snug text-white">{w}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
