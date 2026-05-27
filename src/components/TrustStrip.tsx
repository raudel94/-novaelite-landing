import { motion } from "framer-motion";
import { Home, Beaker, Star, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Home, value: "200+", label: "Miami Homes Served" },
  { icon: Beaker, value: "50K+", label: "Gallons Tested" },
  { icon: Star, value: "4.9★", label: "Customer Rating" },
  { icon: ShieldCheck, value: "Licensed", label: "& Insured in FL" }
];

export default function TrustStrip() {
  return (
    <section className="relative border-y border-white/5 bg-surface-0 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/30 sm:h-12 sm:w-12">
                <s.icon size={20} />
              </div>
              <div>
                <p className="font-display text-xl font-extrabold text-white sm:text-2xl md:text-3xl">{s.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/55 sm:text-xs">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
