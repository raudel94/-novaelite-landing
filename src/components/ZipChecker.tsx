import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle2, AlertCircle, Calendar, Mail, Phone } from "lucide-react";
import { SITE, calendlyLink, telLink, mailto } from "../config";

// Miami-Dade + Broward county ZIP range
const MIN_ZIP = 33010;
const MAX_ZIP = 33399;

type Status = "idle" | "ok" | "out";

export default function ZipChecker() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    const n = parseInt(zip, 10);
    if (!zip.match(/^\d{5}$/) || isNaN(n)) return;
    setStatus(n >= MIN_ZIP && n <= MAX_ZIP ? "ok" : "out");
  };

  const joinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) return;
    const subject = `Waitlist — ZIP ${zip}`;
    const body = `Please add me to the NovaElite Water waitlist.\n\nZIP: ${zip}\nEmail: ${email}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setJoined(true);
  };

  return (
    <div className="mt-6 w-full max-w-xl rounded-2xl border border-white/10 bg-surface-2/70 p-5 shadow-card backdrop-blur">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-cyan">
        <MapPin size={14} /> Check availability in your area
      </p>

      <form onSubmit={check} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          inputMode="numeric"
          maxLength={5}
          value={zip}
          onChange={(e) => {
            setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
            setStatus("idle");
            setJoined(false);
          }}
          placeholder="Enter your ZIP code"
          className="flex-1 rounded-xl border border-white/10 bg-surface-3/60 px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
        />
        <button
          type="submit"
          className="brand-gradient inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-card transition hover:scale-[1.02]"
        >
          Check ZIP
        </button>
      </form>

      <AnimatePresence mode="wait">
        {status === "ok" && (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4"
          >
            <p className="flex items-center gap-2 text-sm font-bold text-emerald-300">
              <CheckCircle2 size={16} /> Great news — we serve {zip}!
            </p>
            <p className="mt-1 text-sm text-white/75">
              Book your <strong className="text-white">FREE in-home water test</strong> now. A licensed
              technician arrives at your home with lab-grade equipment.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-surface-0 transition hover:bg-emerald-400"
              >
                <Calendar size={14} /> Book Free Water Test
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={14} /> Call {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}

        {status === "out" && !joined && (
          <motion.div
            key="out"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4"
          >
            <p className="flex items-center gap-2 text-sm font-bold text-amber-200">
              <AlertCircle size={16} /> We're currently Miami-only.
            </p>
            <p className="mt-1 text-sm text-white/75">
              Join the waitlist and we'll notify you the moment we expand to {zip}.
            </p>
            <form onSubmit={joinWaitlist} className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-xl border border-white/10 bg-surface-3/60 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/30"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                <Mail size={14} /> Join Waitlist
              </button>
            </form>
          </motion.div>
        )}

        {joined && (
          <motion.div
            key="joined"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-200"
          >
            <CheckCircle2 className="mb-1 inline" size={16} /> You're on the list. We'll be in touch via{" "}
            {email || "email"}.{" "}
            <a href={mailto("Waitlist follow-up")} className="underline">
              Email us
            </a>{" "}
            anytime.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
