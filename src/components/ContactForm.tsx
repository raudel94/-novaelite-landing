import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Droplets,
  Waves,
  FlaskConical,
  Sparkles,
  CheckCircle2,
  Calendar,
  Mail,
  Phone
} from "lucide-react";
import { SITE, mailto, telLink } from "../config";

type Form = {
  industry: string;
  zone: string;
  revenue: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const industryOptions = [
  { value: "Whole-Home Filtration", icon: Droplets, color: "text-cyan-300" },
  { value: "Water Softeners", icon: Waves, color: "text-sky-300" },
  { value: "Reverse Osmosis", icon: FlaskConical, color: "text-blue-300" },
  { value: "Well Water Treatment", icon: Droplets, color: "text-teal-300" },
  { value: "Other Water Treatment", icon: Sparkles, color: "text-violet-300" }
];

const revenueOptions = ["1–2 people", "3–4 people", "5–6 people", "7+ people"];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Form>({
    industry: "",
    zone: "",
    revenue: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const update = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const canNext =
    (step === 0 && form.industry) ||
    (step === 1 && form.zone) ||
    (step === 2 && form.revenue) ||
    step === 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    // 🔁 Wire to Formspree / HubSpot / your endpoint.
    const body = `Hi NovaElite team,

I'd like to book my FREE in-home water test.

• Concern / system: ${form.industry}
• Address / ZIP: ${form.zone}
• Household size: ${form.revenue}
• Name: ${form.name}
• Company: ${form.company}
• Email: ${form.email}
• Phone: ${form.phone}

${form.message ? `Notes: ${form.message}` : ""}`;
    window.location.href = `${mailto("Inbound: Free Water Test Request")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <section id="contact" className="relative bg-surface-1 py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left value props */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Get Started
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Book your <span className="text-brand-gradient">FREE water test.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Tell us about your home and water concerns. A licensed Miami technician will arrive at your door with
            lab-grade equipment — 30 minutes, zero cost, zero obligation.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "100% free — no sales pressure",
              "Lab-grade results in 30 minutes",
              "Custom system recommendation",
              "0% APR financing available"
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-400" size={20} />
                <span className="text-white/85">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full bg-accent-cyan px-5 py-2.5 text-sm font-bold text-surface-0 shadow-glow transition hover:scale-[1.03] hover:bg-cyan-300"
            >
              <Phone size={16} /> Call · {SITE.phone}
            </a>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Calendar size={16} /> Book on Calendly
            </a>
            <a
              href={mailto()}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Mail size={16} /> {SITE.email}
            </a>
          </div>
        </div>

        {/* Right multi-step form */}
        <div className="relative rounded-3xl border border-white/10 bg-surface-2 p-7 shadow-cardHover md:p-9">
          {!submitted ? (
            <>
              {/* Progress */}
              <div className="mb-7">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-white/55">
                  <span>
                    Step {step + 1} of {totalSteps}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full brand-gradient"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white">What's your biggest water concern?</h3>
                        <p className="mt-1 text-sm text-white/55">Pick the option that best matches what you'd like to fix at home.</p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {industryOptions.map((n) => {
                            const active = form.industry === n.value;
                            return (
                              <button
                                type="button"
                                key={n.value}
                                onClick={() => update("industry", n.value)}
                                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                                  active
                                    ? "border-accent-cyan bg-brand-500/15"
                                    : "border-white/10 bg-surface-3/40 hover:border-white/25"
                                }`}
                              >
                                <n.icon className={n.color} size={20} />
                                <span className="text-sm font-semibold text-white">{n.value}</span>
                                {active && (
                                  <Check className="ml-auto text-accent-cyan" size={16} />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white">What's your address or ZIP?</h3>
                        <p className="mt-1 text-sm text-white/55">
                          So we can confirm availability and dispatch a Miami-area technician.
                        </p>
                        <input
                          type="text"
                          autoFocus
                          value={form.zone}
                          onChange={(e) => update("zone", e.target.value)}
                          placeholder="e.g. 33156 · Pinecrest, FL"
                          className="mt-5 w-full rounded-xl border border-white/10 bg-surface-3/40 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
                        />
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          How big is your home?
                        </h3>
                        <p className="mt-1 text-sm text-white/55">
                          Helps us size the right system for your household.
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {revenueOptions.map((v) => {
                            const active = form.revenue === v;
                            return (
                              <button
                                type="button"
                                key={v}
                                onClick={() => update("revenue", v)}
                                className={`rounded-xl border px-4 py-4 text-center transition ${
                                  active
                                    ? "border-accent-cyan bg-brand-500/15"
                                    : "border-white/10 bg-surface-3/40 hover:border-white/25"
                                }`}
                              >
                                <span className="font-display text-lg font-bold text-white">{v}</span>
                                <span className="block text-xs text-white/55">household</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-4">
                        <h3 className="font-display text-2xl font-bold text-white">Your details</h3>
                        <p className="text-sm text-white/55">
                          We respond within one business day.
                        </p>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Full name"
                          className="w-full rounded-xl border border-white/10 bg-surface-3/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
                        />
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          placeholder="Company name"
                          className="w-full rounded-xl border border-white/10 bg-surface-3/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
                        />
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="Work email"
                          className="w-full rounded-xl border border-white/10 bg-surface-3/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
                        />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="Phone"
                          className="w-full rounded-xl border border-white/10 bg-surface-3/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
                        />
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Anything else we should know? (optional)"
                          className="w-full rounded-xl border border-white/10 bg-surface-3/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="mt-7 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    disabled={step === 0}
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canNext}
                      className="brand-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="brand-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover"
                    >
                      Book my free water test <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-emerald-300">
                <Check size={32} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">Request received!</h3>
              <p className="mt-2 text-white/70">
                A NovaElite technician will reach out shortly to confirm your free water test. Want to lock in a time now? Book directly on Calendly.
              </p>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noreferrer"
                className="brand-gradient mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-card"
              >
                Open Calendly
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
