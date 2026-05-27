import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

// Single verified Unsplash photo. We apply a sepia/yellow CSS filter to the
// BEFORE side to simulate untreated, discolored water — guarantees both halves
// render reliably even if a remote image fails.
const WATER_IMG =
  "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1600&q=80";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setFromClientX(clientX);
  };

  return (
    <section className="relative bg-surface-0 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            See the difference
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Before NovaElite. <span className="text-brand-gradient">After NovaElite.</span>
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Drag the slider. Real water from a Miami home — before and after a NovaElite filtration system.
          </p>
        </div>

        <div
          ref={ref}
          onMouseMove={onMove}
          onTouchMove={onMove}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchEnd={() => (dragging.current = false)}
          className="relative mt-8 aspect-[4/5] w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-cardHover sm:mt-12 sm:aspect-[16/10] sm:rounded-3xl"
        >
          {/* BEFORE — sepia/yellow filter makes the same photo look untreated */}
          <img
            src={WATER_IMG}
            alt="Untreated tap water with discoloration"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            style={{
              filter:
                "sepia(0.85) saturate(1.6) hue-rotate(-15deg) brightness(0.78) contrast(1.05)"
            }}
          />
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black/65 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200 backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:text-xs">
            Before · Untreated
          </span>

          {/* AFTER — crystal-clear water (no filter) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <img
              src={WATER_IMG}
              alt="Crystal-clear filtered water"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <span className="absolute right-3 top-3 rounded-full bg-cyan-500/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-50 backdrop-blur sm:right-5 sm:top-5 sm:px-3 sm:text-xs">
              After · NovaElite
            </span>
          </div>

          {/* Slider line + handle */}
          <div
            className="absolute inset-y-0 z-20 w-1 bg-white shadow-glow"
            style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          >
            <button
              type="button"
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
              aria-label="Drag to compare"
              className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center rounded-full border-2 border-white bg-surface-1 text-white shadow-glow active:cursor-grabbing sm:h-12 sm:w-12"
            >
              <MoveHorizontal size={18} />
            </button>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 text-center text-xs text-white/55 sm:mt-6 sm:text-sm"
        >
          ← Drag the divider to compare →
        </motion.p>
      </div>
    </section>
  );
}
