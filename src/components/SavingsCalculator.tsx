import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Users, Wrench, ArrowRight, Calendar, TrendingDown } from "lucide-react";
import { calendlyLink } from "../config";

export default function SavingsCalculator() {
  const [bottled, setBottled] = useState(60); // monthly $ on bottled water
  const [people, setPeople] = useState(4);
  const [heaterAge, setHeaterAge] = useState(6); // years

  const yearly = useMemo(() => {
    const bottledYr = bottled * 12;
    const plumbingDamage = heaterAge * 95; // scale damage compounds
    const applianceImpact = people * 110; // soap, detergent, replacement
    const total = Math.round(bottledYr + plumbingDamage + applianceImpact);
    return { bottledYr, plumbingDamage, applianceImpact, total };
  }, [bottled, people, heaterAge]);

  return (
    <section className="relative bg-surface-1 py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Your Savings</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            How much is bad water <span className="text-brand-gradient">costing you?</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Move the sliders. We'll show what untreated water silently drains from your wallet every year.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Sliders */}
          <div className="space-y-7 rounded-3xl border border-white/10 bg-surface-2 p-7 shadow-card md:p-9">
            <Slider
              icon={DollarSign}
              label="Bottled water you buy per month"
              value={bottled}
              min={0}
              max={300}
              step={5}
              suffix="$"
              prefix=""
              onChange={setBottled}
              display={`$${bottled}/mo`}
            />
            <Slider
              icon={Users}
              label="People living in your home"
              value={people}
              min={1}
              max={8}
              step={1}
              onChange={setPeople}
              display={`${people} ${people === 1 ? "person" : "people"}`}
            />
            <Slider
              icon={Wrench}
              label="Age of your water heater"
              value={heaterAge}
              min={0}
              max={15}
              step={1}
              onChange={setHeaterAge}
              display={`${heaterAge} ${heaterAge === 1 ? "year" : "years"}`}
            />
          </div>

          {/* Result */}
          <motion.div
            key={yearly.total}
            initial={{ opacity: 0.6, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col rounded-3xl border border-accent-cyan/40 bg-gradient-to-br from-cyan-500/15 via-surface-2 to-surface-2 p-7 shadow-cardHover md:p-9"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
              <TrendingDown size={14} /> Hidden cost / year
            </p>
            <p className="mt-3 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              ${yearly.total.toLocaleString()}
            </p>
            <p className="mt-2 text-white/70">
              Every year you wait, that's money flowing down the drain.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Bottled water</span>
                <span className="font-bold text-white">${yearly.bottledYr.toLocaleString()}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Plumbing & heater damage</span>
                <span className="font-bold text-white">${yearly.plumbingDamage.toLocaleString()}</span>
              </li>
              <li className="flex justify-between">
                <span>Appliances · soap · skin care</span>
                <span className="font-bold text-white">${yearly.applianceImpact.toLocaleString()}</span>
              </li>
            </ul>

            <div className="mt-auto pt-7">
              <a
                href="#contact"
                className="brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-card transition hover:scale-[1.02]"
              >
                <Calendar size={16} /> Stop the leak — book free test
                <ArrowRight size={14} />
              </a>
              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Pick a time on Calendly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  icon: Icon,
  label,
  value,
  min,
  max,
  step,
  onChange,
  display
}: {
  icon: typeof DollarSign;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <Icon size={18} />
          </div>
          <span className="text-sm font-semibold text-white/85">{label}</span>
        </div>
        <span className="font-display text-xl font-extrabold text-accent-cyan">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-400 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-cyan [&::-webkit-slider-thumb]:shadow-glow"
      />
    </div>
  );
}
