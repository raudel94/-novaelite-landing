import { motion } from "framer-motion";
import { Sun, Wind, Home, Droplets, ArrowRight } from "lucide-react";

const niches = [
  {
    icon: Home,
    title: "Roofing Contractors",
    desc: "Homeowners with active damage, insurance claims, or replacement intent — pre-qualified by ZIP, age of roof, and timeline.",
    points: ["Storm-damage targeting", "Insurance-claim leads", "Avg job: $12K–$28K"],
    color: "text-rose-300",
    bg: "bg-rose-500/15",
    ring: "ring-rose-500/30"
  },
  {
    icon: Sun,
    title: "Solar Installers",
    desc: "Homeowners motivated by net-metering windows, rising utility costs, or federal tax credit deadlines.",
    points: ["Utility-bill qualified", "Credit pre-screened", "Avg job: $22K–$45K"],
    color: "text-amber-300",
    bg: "bg-amber-500/15",
    ring: "ring-amber-500/30"
  },
  {
    icon: Wind,
    title: "Impact Window & Door",
    desc: "Coastal homeowners motivated by hurricane prep, insurance discounts, and code-compliance upgrades.",
    points: ["Coastal-zip targeting", "Insurance-savings angle", "Avg job: $15K–$60K"],
    color: "text-sky-300",
    bg: "bg-sky-500/15",
    ring: "ring-sky-500/30"
  },
  {
    icon: Droplets,
    title: "Water Filtration",
    desc: "Health-conscious families with high TDS, municipal-water concerns, or recently moved into a new home.",
    points: ["Water-report qualified", "Family-decision intent", "Avg job: $4K–$9K"],
    color: "text-cyan-300",
    bg: "bg-cyan-500/15",
    ring: "ring-cyan-500/30"
  }
];

export default function Niches() {
  return (
    <section id="industries" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">Industries We Serve</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Built for the contractors{" "}
            <span className="text-brand-gradient">we actually understand.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            We don't sell leads to everybody. We specialize in four high-ticket home-services verticals —
            so our targeting, scripts, and qualifiers are dialed in for your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {niches.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-2 p-7 shadow-card transition hover:-translate-y-1 hover:shadow-cardHover hover:border-brand-500/40"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${n.bg} ${n.color} ring-1 ${n.ring}`}>
                <n.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{n.desc}</p>
              <ul className="mt-5 space-y-2">
                {n.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent-cyan transition hover:gap-2 hover:text-white"
              >
                Request availability <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
