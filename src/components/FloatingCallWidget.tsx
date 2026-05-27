import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X, Calendar } from "lucide-react";
import { SITE, calendlyLink, telLink } from "../config";

export default function FloatingCallWidget() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);

  // Auto-open after 8s once per session
  useEffect(() => {
    try {
      if (sessionStorage.getItem("floatingSeen") === "1") {
        setSeen(true);
        return;
      }
    } catch {}
    const t = setTimeout(() => {
      setOpen(true);
      setSeen(true);
      try {
        sessionStorage.setItem("floatingSeen", "1");
      } catch {}
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-30 sm:bottom-24 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="pointer-events-auto mb-3 w-72 rounded-2xl border border-white/10 bg-surface-2 p-4 shadow-cardHover"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-2 top-2 rounded-full p-1.5 text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              <X size={14} />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                <span className="text-2xl">👋</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Speak to a Miami specialist</p>
                <p className="text-xs text-white/55">Avg response · 2 minutes</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={telLink()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-bold text-surface-0 transition hover:bg-emerald-400"
              >
                <Phone size={14} /> Call {SITE.phone}
              </a>
              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Calendar size={14} /> Book on Calendly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Talk to a specialist"
        className="pointer-events-auto relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-surface-0 shadow-cardHover transition hover:scale-105"
      >
        <Phone size={22} />
        {!seen && (
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60" />
        )}
      </button>
    </div>
  );
}
