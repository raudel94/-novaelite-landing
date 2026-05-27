import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { SITE, telLink } from "../config";

// Home (/) anchors — match real ids in components
const homeLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "Why Us" },
  { href: "#faq", label: "FAQ" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isWater = pathname.startsWith("/water");

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 lg:px-8">
        <Link to="/" aria-label="NovaElite home" className="shrink-0">
          <Logo variant="light" />
        </Link>

        {/* WATER ROUTE: only Logo + phone pill (icon-only on mobile) */}
        {isWater ? (
          <>
            <a
              href={telLink()}
              className="hidden items-center gap-2 rounded-full border border-cyan-400/40 bg-surface-2/70 px-4 py-2 text-sm font-bold text-white shadow-card backdrop-blur transition hover:border-cyan-400 hover:bg-surface-2 sm:inline-flex"
              aria-label={`Call ${SITE.phone}`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-accent-cyan ring-1 ring-cyan-400/40">
                <Phone size={12} />
              </span>
              <span className="whitespace-nowrap">{SITE.phone}</span>
            </a>
            <a
              href={telLink()}
              aria-label={`Call ${SITE.phone}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-surface-2/70 text-accent-cyan sm:hidden"
            >
              <Phone size={16} />
            </a>
          </>
        ) : (
          <>
            <nav className="hidden items-center gap-8 lg:flex">
              {homeLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-white/75 transition hover:text-accent-cyan"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={telLink()}
                className="hidden items-center gap-2 rounded-full border border-cyan-400/40 bg-surface-2/70 px-4 py-2 text-sm font-bold text-white shadow-card backdrop-blur transition hover:border-cyan-400 hover:bg-surface-2 sm:inline-flex"
                aria-label={`Call ${SITE.phone}`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-accent-cyan ring-1 ring-cyan-400/40">
                  <Phone size={12} />
                </span>
                <span className="whitespace-nowrap">{SITE.phone}</span>
              </a>

              <a
                href={telLink()}
                aria-label={`Call ${SITE.phone}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-surface-2/70 text-accent-cyan sm:hidden"
              >
                <Phone size={16} />
              </a>

              <button
                onClick={() => setOpen((v) => !v)}
                className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
                aria-label="Menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </>
        )}
      </div>

      {!isWater && open && (
        <div className="border-t border-white/10 bg-surface-0/95 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1 p-5">
            {homeLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
