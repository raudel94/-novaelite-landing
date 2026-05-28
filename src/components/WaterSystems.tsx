import { motion } from "framer-motion";

const systems = [
  {
    name: "Whole-Home Filtration",
    desc: "Multi-stage carbon and sediment systems that protect every faucet, appliance, and shower — cleaner water at every tap in your home.",
    img: "/water/homefiltration.png",
    alt: "Whole-home water filtration system"
  },
  {
    name: "Water Softeners",
    desc: "Ion-exchange softeners that eliminate hard water and scale buildup — softer skin, brighter laundry, and longer life for your plumbing and appliances.",
    img: "/water/softner.png",
    alt: "Residential water softener system"
  },
  {
    name: "Reverse Osmosis (RO)",
    desc: "Under-sink and whole-home RO systems that deliver bottled-water purity straight from your kitchen tap — perfect for drinking, cooking, and coffee.",
    img: "/water/osmosis.png",
    alt: "Reverse osmosis drinking water system"
  },
  {
    name: "Well Water Treatment",
    desc: "Iron, sulfur, sediment, and bacteria removal for homes on private wells — restore clear, safe water you can trust throughout the house.",
    img: "/water/well.png",
    alt: "Well water treatment equipment"
  }
];

export default function WaterSystems() {
  return (
    <section id="industries" className="relative py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
            Systems we install in Miami homes
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The right solution{" "}
            <span className="text-brand-gradient">for your water — and your home.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            From whole-home filtration to under-sink reverse osmosis, every NovaElite system is hand-picked
            after your free in-home water test — so you only invest in what your home actually needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {systems.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface-1/50 transition hover:-translate-y-1 hover:border-accent-cyan/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-surface-0/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
