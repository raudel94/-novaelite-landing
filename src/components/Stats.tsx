import { useEffect, useRef, useState } from "react";
import { Users, Calendar, TrendingUp, Award } from "lucide-react";

type Stat = {
  icon: typeof Users;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Users, value: 12500, suffix: "+", label: "Appointments delivered" },
  { icon: Calendar, value: 200, suffix: "+", label: "Service businesses scaled" },
  { icon: TrendingUp, value: 8, suffix: "x", label: "Average client ROI" },
  { icon: Award, value: 96, suffix: "%", label: "Client retention rate" }
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const inView = useInView(ref as any);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold tracking-tight text-white md:text-5xl">
      {prefix}
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" className="relative border-y border-white/5 bg-surface-1 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-accent-cyan ring-1 ring-brand-500/30">
              <s.icon size={22} />
            </div>
            <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
            <p className="mt-1 text-sm font-medium text-white/55">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
