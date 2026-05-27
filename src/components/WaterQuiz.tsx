import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Droplets, Waves, FlaskConical, Sparkles, Calendar, Phone } from "lucide-react";
import { calendlyLink, telLink, SITE } from "../config";

type Answer = { q: number; value: string; weight: Record<string, number> };

const questions: { id: number; title: string; subtitle: string; options: { label: string; weight: Record<string, number> }[] }[] = [
  {
    id: 0,
    title: "What's your water source?",
    subtitle: "This determines your filtration strategy.",
    options: [
      { label: "City / Municipal", weight: { whole: 2, ro: 2, softener: 1, well: 0 } },
      { label: "Private Well", weight: { well: 3, whole: 1, softener: 1, ro: 1 } },
      { label: "Not sure", weight: { whole: 2, softener: 1, ro: 1, well: 0 } }
    ]
  },
  {
    id: 1,
    title: "What's your #1 water problem?",
    subtitle: "Pick the one that bothers you the most.",
    options: [
      { label: "Hard water — scale & dry skin", weight: { softener: 3, whole: 1 } },
      { label: "Bad taste / chlorine smell", weight: { ro: 3, whole: 2 } },
      { label: "Rust / iron stains", weight: { well: 2, whole: 2, softener: 1 } },
      { label: "Worried about contaminants (PFAS, lead)", weight: { whole: 3, ro: 2 } }
    ]
  },
  {
    id: 2,
    title: "How many people in your home?",
    subtitle: "Helps us size the right system.",
    options: [
      { label: "1–2", weight: { ro: 2, softener: 1, whole: 1 } },
      { label: "3–4", weight: { softener: 2, whole: 2, ro: 1 } },
      { label: "5+", weight: { whole: 3, softener: 2 } }
    ]
  },
  {
    id: 3,
    title: "What's your priority?",
    subtitle: "We'll match the system to your goal.",
    options: [
      { label: "Drinking water only", weight: { ro: 3 } },
      { label: "Whole-house protection", weight: { whole: 3, softener: 1 } },
      { label: "Fix hard-water damage", weight: { softener: 3 } },
      { label: "Well-water peace of mind", weight: { well: 3, whole: 1 } }
    ]
  }
];

const systems: Record<string, { name: string; tagline: string; icon: typeof Droplets; color: string; industry: string }> = {
  whole: {
    name: "Whole-Home Filtration",
    tagline: "Total protection from your main line — every faucet, every shower, every appliance.",
    icon: Droplets,
    color: "text-cyan-300",
    industry: "Whole-Home Filtration"
  },
  softener: {
    name: "Water Softener",
    tagline: "Eliminate scale, save your appliances, and feel the difference in your skin and hair.",
    icon: Waves,
    color: "text-sky-300",
    industry: "Water Softeners"
  },
  ro: {
    name: "Reverse Osmosis",
    tagline: "Bottled-water purity straight from your kitchen tap — for drinking and cooking.",
    icon: FlaskConical,
    color: "text-blue-300",
    industry: "Reverse Osmosis"
  },
  well: {
    name: "Well Water Treatment",
    tagline: "Custom-built systems for iron, sulfur, bacteria, and pH balancing.",
    icon: Sparkles,
    color: "text-teal-300",
    industry: "Well Water Treatment"
  }
};

export default function WaterQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [done, setDone] = useState(false);

  const select = (value: string, weight: Record<string, number>) => {
    const next = answers.filter((a) => a.q !== step).concat({ q: step, value, weight });
    setAnswers(next);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 220);
    } else {
      setTimeout(() => setDone(true), 220);
    }
  };

  const calcRecommendation = () => {
    const totals: Record<string, number> = { whole: 0, softener: 0, ro: 0, well: 0 };
    answers.forEach((a) => {
      Object.entries(a.weight).forEach(([k, v]) => {
        totals[k] = (totals[k] || 0) + v;
      });
    });
    const top = Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
    return systems[top];
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  const goToContact = () => {
    const rec = calcRecommendation();
    try {
      sessionStorage.setItem("recommendedSystem", rec.industry);
    } catch {}
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const current = questions[step];
  const selected = answers.find((a) => a.q === step)?.value;
  const progress = ((step + (done ? 1 : 0)) / questions.length) * 100;

  return (
    <section id="quiz" className="relative bg-surface-0 py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-25" />
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">60-Second Quiz</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Find the <span className="text-brand-gradient">right water system</span> for your home.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Answer 4 quick questions. We'll recommend the exact system — and book your free water test.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-surface-2 p-7 shadow-cardHover md:p-9">
          {!done ? (
            <>
              <div className="mb-7">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-white/55">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div className="h-full brand-gradient" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-display text-2xl font-bold text-white">{current.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{current.subtitle}</p>
                  <div className="mt-5 grid gap-3">
                    {current.options.map((o) => {
                      const active = selected === o.label;
                      return (
                        <button
                          key={o.label}
                          type="button"
                          onClick={() => select(o.label, o.weight)}
                          className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left transition ${
                            active
                              ? "border-accent-cyan bg-brand-500/15"
                              : "border-white/10 bg-surface-3/40 hover:border-white/25"
                          }`}
                        >
                          <span className="text-sm font-semibold text-white">{o.label}</span>
                          {active && <Check className="text-accent-cyan" size={16} />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <span className="text-xs text-white/45">Click an option to continue</span>
              </div>
            </>
          ) : (
            <ResultPanel rec={calcRecommendation()} onRestart={restart} onBook={goToContact} />
          )}
        </div>
      </div>
    </section>
  );
}

function ResultPanel({
  rec,
  onRestart,
  onBook
}: {
  rec: { name: string; tagline: string; icon: typeof Droplets; color: string; industry: string };
  onRestart: () => void;
  onBook: () => void;
}) {
  const Icon = rec.icon;
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Your match</p>
      <div className="mt-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 ring-1 ring-cyan-500/30">
        <Icon className={rec.color} size={32} />
      </div>
      <h3 className="mt-5 font-display text-3xl font-extrabold text-white">{rec.name}</h3>
      <p className="mx-auto mt-3 max-w-md text-white/75">{rec.tagline}</p>

      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          onClick={onBook}
          className="brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-card transition hover:scale-[1.03]"
        >
          <Calendar size={16} /> Get my free water test
          <ArrowRight size={16} />
        </button>
        <a
          href={calendlyLink()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Calendar size={14} /> Book on Calendly
        </a>
        <a
          href={telLink()}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Phone size={14} /> Call {SITE.phone}
        </a>
      </div>

      <button onClick={onRestart} className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/45 underline-offset-4 transition hover:text-white/80 hover:underline">
        Retake quiz
      </button>
    </motion.div>
  );
}
