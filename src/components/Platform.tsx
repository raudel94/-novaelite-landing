import { motion } from "framer-motion";
import {
  CalendarCheck,
  Zap,
  BarChart3,
  UserCheck,
  Plug,
  ShieldCheck
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Exclusive Booked Appointments",
    desc: "Each homeowner is yours alone — never sold to competitors. Confirmed by phone and SMS before they hit your calendar."
  },
  {
    icon: Zap,
    title: "Real-Time CRM Delivery",
    desc: "Appointments push instantly into your CRM with full context: timeline, budget, scope, and homeowner notes."
  },
  {
    icon: BarChart3,
    title: "Transparent ROI Dashboard",
    desc: "Track cost per appointment, show rate, close rate, and revenue attribution in one live dashboard. No black boxes."
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    desc: "A contractor-marketing strategist embedded in your business — not a chatbot. Weekly performance reviews included."
  },
  {
    icon: Plug,
    title: "60+ CRM Integrations",
    desc: "Native connections to HubSpot, Salesforce, ServiceTitan, JobNimbus, AccuLynx, Housecall Pro, plus Zapier."
  },
  {
    icon: ShieldCheck,
    title: "Replacement Guarantee",
    desc: "Bad appointment? No-show without reschedule? We replace it. Quality is on us, not your sales team."
  }
];

export default function Platform() {
  return (
    <section id="platform" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">What You Get</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            More than appointments —{" "}
            <span className="text-brand-gradient">a complete growth system.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Every NovaElite engagement includes the targeting, qualification, delivery, and reporting
            infrastructure contractors usually need 4 separate vendors to assemble.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-surface-2 p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-cardHover"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-accent-cyan ring-1 ring-brand-500/30">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
