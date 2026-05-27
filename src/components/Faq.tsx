import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Are appointments truly exclusive to my business?",
    a: "Yes. Every appointment we book is delivered to exactly one client. We never sell, share, or resell the same homeowner to a competitor — guaranteed in writing in your service agreement."
  },
  {
    q: "What's the pricing model?",
    a: "We operate on a pay-per-booked-appointment model. There are no setup fees or media-spend markups. Pricing varies by industry and market, typically between $150–$450 per qualified appointment."
  },
  {
    q: "What happens if an appointment no-shows?",
    a: "If a homeowner doesn't reschedule and doesn't show, we replace the appointment at no cost. Our quality team also monitors no-show rates weekly to tighten qualification scripts."
  },
  {
    q: "How fast do you ramp up?",
    a: "Most clients are receiving booked appointments within 7–14 days of kickoff. Full pipeline volume typically lands in week 3–4, after the campaign optimization window."
  },
  {
    q: "Can I integrate with my existing CRM?",
    a: "Yes. We push appointments directly into HubSpot, Salesforce, ServiceTitan, JobNimbus, AccuLynx, Housecall Pro, and 60+ other tools via native integrations or Zapier."
  },
  {
    q: "Which markets do you serve?",
    a: "We operate nationwide across the United States, with deep coverage in Florida, Texas, Arizona, the Carolinas, the Northeast corridor, and California. Markets are sold exclusively per ZIP."
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. All engagements are month-to-month. Most clients renew for years, but you're never locked in. We earn the next 30 days every single month."
  },
  {
    q: "Do you work with smaller operators or only enterprises?",
    a: "Both. We serve solo operators ramping up to 7-figure shops and 8-figure enterprise home-service businesses. Starter plans begin at 15 appointments/month."
  }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Answers for serious <span className="text-brand-gradient">operators.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-surface-2 transition shadow-card ${
                  isOpen ? "border-accent-cyan/50" : "border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-white md:text-lg">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-accent-cyan text-surface-0" : "bg-white/10 text-white/80"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
