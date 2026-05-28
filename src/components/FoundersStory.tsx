import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FoundersStory() {
  return (
    <section className="relative bg-surface-1 py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-2 via-surface-2 to-surface-3 p-8 md:p-14"
        >
          <Quote className="absolute -right-6 -top-6 text-accent-cyan/15" size={180} strokeWidth={1.5} />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
              Why we launched NovaElite
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              We built NovaElite because{" "}
              <span className="text-brand-gradient">home-service owners deserved better.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
              <p>
                For years we watched skilled contractors — water-treatment dealers, roofers, HVAC
                operators, solar installers — get burned by lead-gen companies selling the same
                homeowner to 4 competitors, junk web forms, and agencies that had never
                stepped foot on a job site.
              </p>
              <p>
                The model was broken. Owners were paying for clicks while their sales calendars
                stayed empty.
              </p>
              <p className="text-white">
                <strong>So we flipped it.</strong> We built a system where you only pay when a
                qualified homeowner is on your calendar — confirmed, exclusive, and ready to
                meet. No middlemen. No shared inboxes. No excuses.
              </p>
              <p>
                That's NovaElite. A premium appointment system built for service businesses
                that take their craft seriously and want a marketing partner that does the same.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-surface-3/50 px-5 py-3">
              <img
                src="/logo.png"
                alt="NovaElite"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <div>
                <p className="text-sm font-bold text-white">The NovaElite team</p>
                <p className="text-xs text-white/55">Miami, FL · Founded 2026</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
