import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Droplets,
  Coffee,
  Shirt,
  Flame,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Calendar,
  Phone
} from "lucide-react";
import { SITE, mailto, telLink } from "../config";

type Form = {
  industry: string;
  zone: string;
  revenue: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const symptomOptions = [
  { value: "White spots on faucets", icon: Sparkles, color: "text-cyan-300" },
  { value: "Strange smell in the water", icon: AlertCircle, color: "text-amber-300" },
  { value: "Metallic or bitter taste", icon: Coffee, color: "text-orange-300" },
  { value: "Dry skin after showering", icon: Droplets, color: "text-sky-300" },
  { value: "Stiff or rough laundry", icon: Shirt, color: "text-violet-300" },
  { value: "Scale buildup on appliances", icon: Flame, color: "text-rose-300" },
  { value: "Cloudy or sediment-filled water", icon: Droplets, color: "text-teal-300" }
];

const revenueOptions = ["1–2 people", "3–4 people", "5–6 people", "7+ people"];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [symptoms, setSymptoms] = useState<Set<string>>(new Set());
  const [form, setForm] = useState<Form>({
    industry: "",
    zone: "",
    revenue: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const toggleSymptom = (s: string) => {
    setSymptoms((prev) => {
      const nextSet = new Set(prev);
      nextSet.has(s) ? nextSet.delete(s) : nextSet.add(s);
      setForm((f) => ({ ...f, industry: Array.from(nextSet).join(", ") }));
      return nextSet;
    });
  };

  const update = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const canNext =
    (step === 0 && symptoms.size > 0) ||
    (step === 1 && form.zone) ||
    (step === 2 && form.revenue) ||
    step === 3;

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || submitting) return;
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "/water" })
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(error || `Request failed (${res.status})`);
      }

      setSubmitted(true);
    } catch (err) {
      // Fallback: open mail client if the API fails (network/server down)
      const body = `Hi NovaElite team,

I'd like to book my FREE in-home water test.

• Symptoms: ${form.industry}
• Address / ZIP: ${form.zone}
• Household size: ${form.revenue}
• Name: ${form.name}
• Email: ${form.email}
• Phone: ${form.phone}
${form.message ? `\nNotes: ${form.message}` : ""}`;
      const fallbackMsg = err instanceof Error ? err.message : "Network error";
      setErrorMsg(`${fallbackMsg}. Opening your email app as backup…`);
      setTimeout(() => {
        window.location.href = `${mailto("Inbound: Free Water Test Request")}&body=${encodeURIComponent(body)}`;
      }, 1500);
    } finally {
      setSubmitting(false);
    }
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
                        <h3 className="font-display text-2xl font-bold text-white">Are you noticing any of these water issues?</h3>
                        <p className="mt-1 text-sm text-white/55">Tick every problem you've seen at home — the more, the better we can help.</p>
                        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {symptomOptions.map((s) => {
                            const active = symptoms.has(s.value);
                            return (
                              <button
                                type="button"
                                key={s.value}
                                onClick={() => toggleSymptom(s.value)}
                                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                                  active
                                    ? "border-accent-cyan bg-brand-500/15"
                                    : "border-white/10 bg-surface-3/40 hover:border-white/25"
                                }`}
                              >
                                <s.icon className={s.color} size={20} />
                                <span className="text-sm font-semibold text-white">{s.value}</span>
                                {active && (
                                  <Check className="ml-auto text-accent-cyan" size={16} />
                                )}
                              </button>
                            );
                          })}
                        </div>
                        {symptoms.size > 0 && (
                          <p className="mt-4 text-xs font-semibold text-accent-cyan">
                            {symptoms.size} problem{symptoms.size > 1 ? "s" : ""} selected
                          </p>
                        )}
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
                          We'll call you within 24 hours to confirm your free water test.
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
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="Email"
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
                      disabled={submitting}
                      className="brand-gradient inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-card transition hover:scale-[1.03] hover:shadow-cardHover disabled:cursor-wait disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Submit"} <ArrowRight size={14} />
                    </button>
                  )}
                </div>
                {errorMsg && (
                  <p className="mt-4 text-center text-sm text-amber-300">{errorMsg}</p>
                )}
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
                A NovaElite technician will reach out within 24 hours to confirm your free water test.
                Check your inbox — we just sent you a confirmation email.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
