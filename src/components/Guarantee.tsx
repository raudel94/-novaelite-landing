import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const promises = [
  {
    title: "No-show? We replace it.",
    desc: "If a homeowner books and doesn't show, we replace the appointment at no cost — every time."
  },
  {
    title: "Off-criteria? We replace it.",
    desc: "If a confirmed appointment doesn't meet our qualification criteria (homeowner, budget, timeline), we replace it."
  },
  {
    title: "Pay only for booked jobs.",
    desc: "No ad-spend markups. No setup fees. No per-click charges. You only pay when a qualified appointment hits your calendar."
  }
];

export default function Guarantee() {
  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -top-32 right-0 h-[300px] w-[400px] rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                <ShieldCheck size={14} /> The NovaElite Guarantee
              </div>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
                Zero risk.{" "}
                <span className="text-brand-gradient">Every appointment, replaced.</span>
              </h2>
              <p className="mt-5 text-base text-white/75">
                We stand behind every appointment we book. If it doesn't show or doesn't qualify, we replace it —
                no questions, no fine print. That's how confident we are in our system.
              </p>
            </div>

            <div className="grid gap-4 lg:col-span-7">
              {promises.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.07] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/40">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-white">{p.title}</p>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
