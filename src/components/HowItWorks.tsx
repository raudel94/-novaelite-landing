import { motion } from "framer-motion";
import { Target, Filter, UserCheck, CalendarCheck2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "1. Smart capture",
    desc: "Geo-targeted Meta, Google, and YouTube campaigns engineered around real homeowner intent — not vanity clicks."
  },
  {
    icon: Filter,
    title: "2. Auto pre-qualification",
    desc: "Every prospect is filtered for budget, timeline, ownership, and service area before they ever reach your team."
  },
  {
    icon: UserCheck,
    title: "3. Human validation",
    desc: "A live U.S.-based agent confirms intent on the phone, answers initial questions, and verifies the homeowner is ready to meet."
  },
  {
    icon: CalendarCheck2,
    title: "4. Appointment confirmation",
    desc: "The booked slot is dropped into your CRM in real time and double-confirmed with the homeowner 24h before — minimizing no-shows."
  },
  {
    icon: TrendingUp,
    title: "5. Continuous optimization",
    desc: "We monitor show-rate, close-rate, and CAC weekly — tightening creative, targeting, and scripts so quality keeps climbing."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-surface-1 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Our Process
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            From cold homeowner to booked appointment{" "}
            <span className="text-brand-gradient">in 5 steps.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Every step is engineered to filter out tire-kickers and deliver only the homeowners who are ready to buy.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-2 shadow-glow ring-2 ring-accent-cyan">
                  <s.icon className="text-accent-cyan" size={22} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white lg:text-lg">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-white/65">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
