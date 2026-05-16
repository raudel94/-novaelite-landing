import { motion } from "framer-motion";
import { AlertTriangle, Users, Clock } from "lucide-react";

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
    title: "Generic agencies don't get contractors",
    desc: "Most marketing agencies have never run a job site. They optimize for clicks, not closed jobs — and your pipeline pays the price."
  }
];

export default function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Why Contractor Lead-Gen Is Broken
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            You don't need more leads.{" "}
            <span className="text-brand-gradient">You need better appointments.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            We rebuilt the lead-gen model from the ground up — because contractors deserve better than recycled
            form-fills and Zillow-style auctions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-surface-2 p-7 shadow-card transition hover:-translate-y-1 hover:border-white/20 hover:shadow-cardHover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-danger/15 text-rose-300 ring-1 ring-danger/30">
                <p.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
