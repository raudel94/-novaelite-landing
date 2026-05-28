import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const doList = [
  { title: "Exclusive appointments", desc: "Every booked homeowner is delivered to one client — yours." },
  { title: "Real pre-qualification", desc: "Filtered by budget, timeline, ownership, and service area." },
  { title: "Human confirmation", desc: "A live U.S.-based agent calls every prospect before it hits your calendar." },
  { title: "CRM integration", desc: "Appointments pushed live to HubSpot, ServiceTitan, JobNimbus, AccuLynx + 60 more." },
  { title: "Pay-per-booked-appointment", desc: "No ad markups. No setup fees. You pay when a job lands on your calendar." },
  { title: "Replacement guarantee", desc: "No-show or off-criteria? We replace it free. Every time." }
];

const dontList = [
  { title: "No shared leads", desc: "We never resell the same homeowner to a competitor." },
  { title: "No junk web forms", desc: "No tire-kicker form-fills that ghost your sales team." },
  { title: "No pay-per-click games", desc: "You don't pay for clicks, impressions, or traffic — only booked jobs." },
  { title: "No renters", desc: "Every appointment is a verified homeowner with decision-making authority." },
  { title: "No generic agency playbooks", desc: "We don't run cookie-cutter campaigns. Every vertical gets its own system." },
  { title: "No long-term contracts", desc: "Month-to-month. We earn the next 30 days every month." }
];

export default function Problem() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            What We Do · What We Don't
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Clear lines.{" "}
            <span className="text-brand-gradient">Premium standards.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Most agencies blur every line to keep you signed. We do the opposite — here's exactly what we will and won't do for your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* WE DO */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-7 md:p-9"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
              <Check size={14} /> What we DO
            </div>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-white">
              We deliver booked appointments — period.
            </h3>

            <ul className="mt-6 space-y-3">
              {doList.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/25 text-emerald-200">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm text-white/65">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WE DON'T */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border-2 border-red-500/40 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent p-7 md:p-9"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-red-200">
              <X size={14} /> What we DON'T
            </div>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-white">
              We refuse to play the broken lead-gen game.
            </h3>

            <ul className="mt-6 space-y-3">
              {dontList.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.05] p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/25 text-red-200">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-sm text-white/65">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
