import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend
} from "recharts";

// 1. Household adoption by system type (% of U.S. households)
// Sources: WQA Consumer Opinion Study (2023), EPA, USGS, industry trade estimates.
const adoption = [
  { name: "No treatment", value: 42 },
  { name: "Softener", value: 28 },
  { name: "Whole-home", value: 14 },
  { name: "RO", value: 12 },
  { name: "Well", value: 11 }
];

// 2. Why homeowners install water treatment
const reasons = [
  { name: "Health / contaminants", value: 35 },
  { name: "Taste & odor", value: 25 },
  { name: "Hard water / scale", value: 20 },
  { name: "Appliance protection", value: 12 },
  { name: "Well water", value: 8 }
];

// 3. U.S. residential water-treatment market size (USD billions)
const marketSize = [
  { year: "2018", value: 3.6 },
  { year: "2019", value: 3.9 },
  { year: "2020", value: 4.3 },
  { year: "2021", value: 4.8 },
  { year: "2022", value: 5.3 },
  { year: "2023", value: 5.9 },
  { year: "2024", value: 6.5 },
  { year: "2025", value: 7.1 },
  { year: "2026", value: 7.8 }
];

const PIE_COLORS = ["#22d3ee", "#0ea5e9", "#3b82f6", "#6366f1", "#a855f7"];
const CYAN = "#22d3ee";

function ChartCard({
  title,
  source,
  children
}: {
  title: string;
  source: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface-2 p-6 shadow-card"
    >
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <div className="mt-4 h-72 w-full">{children}</div>
      <p className="mt-4 text-[11px] uppercase tracking-wider text-white/40">
        Source: {source}
      </p>
    </motion.div>
  );
}

export default function WaterMarketCharts() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            U.S. Water Treatment Market
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The demand is <span className="text-brand-gradient">already there.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            85% of U.S. homes have hard water. 77% of consumers worry about household water
            quality. The market is growing 8–9% every year — we put your business in front of the
            homeowners actively shopping for a solution.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Bar chart */}
          <ChartCard
            title="Household adoption by system type (U.S.)"
            source="WQA Consumer Opinion Study 2023, EPA, USGS"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adoption} margin={{ top: 10, right: 16, left: -16, bottom: 16 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 11 }}
                  interval={0}
                  dy={6}
                  axisLine={{ stroke: "rgba(255,255,255,0.15)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 11 }}
                  unit="%"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "rgba(34,211,238,0.08)" }}
                  contentStyle={{
                    background: "#0b1530",
                    border: "1px solid rgba(34,211,238,0.4)",
                    borderRadius: 12,
                    color: "#fff"
                  }}
                  formatter={(v: any) => [`${v}%`, "Households"] as [string, string]}
                />
                <Bar dataKey="value" fill={CYAN} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donut chart */}
          <ChartCard
            title="Why homeowners install treatment"
            source="WQA 2023 Consumer Opinion Study"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reasons}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={95}
                  paddingAngle={2}
                  stroke="none"
                >
                  {reasons.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#0b1530",
                    border: "1px solid rgba(34,211,238,0.4)",
                    borderRadius: 12,
                    color: "#fff"
                  }}
                  formatter={(v: any) => [`${v}%`, "Share"] as [string, string]}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Area chart full width */}
          <div className="lg:col-span-2">
            <ChartCard
              title="U.S. residential water-treatment market size (USD billions)"
              source="Grand View Research, Fortune Business Insights"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketSize} margin={{ top: 10, right: 24, left: -16, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cyanFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={CYAN} stopOpacity={0.55} />
                      <stop offset="100%" stopColor={CYAN} stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "rgba(255,255,255,0.65)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.15)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 11 }}
                    unit="B"
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0b1530",
                      border: "1px solid rgba(34,211,238,0.4)",
                      borderRadius: 12,
                      color: "#fff"
                    }}
                    formatter={(v: any) => [`$${v}B`, "Market"] as [string, string]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={CYAN}
                    strokeWidth={3}
                    fill="url(#cyanFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { v: "85%", l: "of U.S. homes have hard water" },
            { v: "77%", l: "of consumers worry about water quality" },
            { v: "43M+", l: "Americans drink from private wells" }
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-white">{s.v}</p>
              <p className="mt-1 text-sm text-white/65">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
