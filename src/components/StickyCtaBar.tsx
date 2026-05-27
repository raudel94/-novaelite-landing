import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Phone, X } from "lucide-react";
import { SITE, calendlyLink, telLink } from "../config";

const DISMISS_KEY = "stickyCtaDismissed";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {}

    const handler = () => {
      const scrolled = window.scrollY > 600;
      const contact = document.getElementById("contact");
      let inContact = false;
      if (contact) {
        const rect = contact.getBoundingClientRect();
        inContact = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(scrolled && !inContact);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-surface-1/95 backdrop-blur supports-[backdrop-filter]:bg-surface-1/80"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
            <div className="hidden flex-1 sm:block">
              <p className="text-sm font-bold text-white">Ready to know what's in your water?</p>
              <p className="text-xs text-white/60">Free in-home test · 30 min · No obligation</p>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="brand-gradient inline-flex h-11 flex-1 basis-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 text-xs font-bold text-white shadow-card transition hover:scale-[1.02] sm:h-auto sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <Calendar size={14} /> Book Free Test
              </a>
              <a
                href={telLink()}
                className="inline-flex h-11 flex-1 basis-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent-cyan px-3 text-xs font-bold text-surface-0 transition hover:bg-cyan-300 sm:h-auto sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">Call {SITE.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
            </div>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss"
              className="rounded-full p-2 text-white/55 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
