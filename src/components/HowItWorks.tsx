import { motion } from "framer-motion";
import { Target, Megaphone, CheckCircle2, Send } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "1. Market discovery",
    desc: "We audit your service area, ideal job profile, and current pipeline to lock targeting on the homeowners most likely to close."
  },
  {
    icon: Megaphone,
    title: "2. Launch campaigns",
    desc: "Geo-targeted ads on Meta, Google, and YouTube — written and produced by a creative team that's worked exclusively with water-treatment dealers."
  },
  {
    icon: CheckCircle2,
    title: "3. Pre-qualify & book",
    desc: "Every homeowner is screened for budget, timeline, ownership, and intent — then placed directly on your sales calendar."
  },
  {
    icon: Send,
    title: "4. Real-time CRM delivery",
    desc: "Appointments are pushed live into HubSpot, ServiceTitan, JobNimbus, AccuLynx, or any tool via Zapier. Your reps just close."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-surface-1 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            From kickoff to booked jobs{" "}
            <span className="text-brand-gradient">in 4 steps.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-2 shadow-glow ring-2 ring-accent-cyan">
                  <s.icon className="text-accent-cyan" size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-white/65">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
