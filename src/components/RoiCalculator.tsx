import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  format
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-semibold text-white/85">{label}</label>
        <span className="rounded-md bg-brand-500/20 px-2.5 py-0.5 text-sm font-bold text-accent-cyan">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--val" as any]: `${pct}%` }}
        className="w-full"
      />
    </div>
  );
}

export default function RoiCalculator() {
  const [appts, setAppts] = useState(40);
  const [ticket, setTicket] = useState(15000);
  const [closeRate, setCloseRate] = useState(28);

  const { jobs, revenue, profit } = useMemo(() => {
    const jobs = Math.round((appts * closeRate) / 100);
    const revenue = jobs * ticket;
    const profit = revenue * 0.35; // estimated margin
    return { jobs, revenue, profit };
  }, [appts, ticket, closeRate]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">ROI Calculator</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Project your <span className="text-brand-gradient">monthly pipeline.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Drag the sliders to see what booked appointments could mean for your business.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-5"
        >
          {/* Sliders */}
          <div className="rounded-2xl border border-white/10 bg-surface-2 p-7 shadow-card lg:col-span-3">
            <div className="mb-6 flex items-center gap-2 text-accent-cyan">
              <Calculator size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Adjust your numbers</span>
            </div>
            <div className="space-y-7">
              <Slider
                label="Appointments per month"
                min={10}
                max={200}
                step={5}
                value={appts}
                onChange={setAppts}
                format={(v) => `${v} appts`}
              />
              <Slider
                label="Average job value"
                min={3000}
                max={60000}
                step={500}
                value={ticket}
                onChange={setTicket}
                format={fmt}
              />
              <Slider
                label="Close rate"
                min={10}
                max={60}
                step={1}
                value={closeRate}
                onChange={setCloseRate}
                format={(v) => `${v}%`}
              />
            </div>
          </div>

          {/* Results */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-500/40 bg-gradient-to-br from-surface-3 to-brand-700 p-7 text-white shadow-cardHover lg:col-span-2">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-cyan/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-accent-cyan">
                <TrendingUp size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Your monthly potential</span>
              </div>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Closed jobs</p>
                  <p className="font-display text-3xl font-extrabold text-white">{jobs}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Revenue</p>
                  <p className="font-display text-4xl font-extrabold text-white">{fmt(revenue)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Estimated profit</p>
                  <p className="font-display text-2xl font-bold text-white">{fmt(profit)}</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-7 block w-full rounded-full bg-white py-3 text-center text-sm font-bold text-brand-700 transition hover:scale-[1.02] hover:bg-white/90"
              >
                Get this pipeline
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-white/40">
          * Illustrative estimate. Actual results depend on your sales team, market, and ticket size.
        </p>
      </div>
    </section>
  );
}
