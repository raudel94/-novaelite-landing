import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { SITE, waLink } from "../config";

const links = [
  { href: "#industries", label: "Industries" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#calculator", label: "ROI Calculator" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-surface-0/85 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="#" aria-label="NovaElite home">
          <Logo variant="light" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/75 transition hover:text-accent-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 hover:text-emerald-200"
          >
            <MessageCircle size={14} /> {SITE.phone}
          </a>
          <a
            href="#contact"
            className="brand-gradient inline-flex items-center rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:scale-[1.03]"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface-0/95 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1 p-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-sm font-bold text-emerald-300"
            >
              <MessageCircle size={14} /> WhatsApp · {SITE.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="brand-gradient mt-2 rounded-full px-5 py-3 text-center text-sm font-bold text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
