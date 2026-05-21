import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { SITE, mailto, telLink } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-0 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm text-white/65">
              NovaElite is the appointment-generation partner for high-ticket home-services contractors
              across the United States. Exclusive. Pre-qualified. Pay per appointment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-white/75 transition hover:bg-brand-500 hover:text-white hover:border-brand-500"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-wider text-white">Industries</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li><a href="#industries" className="hover:text-accent-cyan">Roofing</a></li>
              <li><a href="#industries" className="hover:text-accent-cyan">Solar</a></li>
              <li><a href="#industries" className="hover:text-accent-cyan">Impact Windows</a></li>
              <li><a href="#industries" className="hover:text-accent-cyan">Water Filtration</a></li>
              <li><a href="#platform" className="hover:text-accent-cyan">All Services</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-bold uppercase tracking-wider text-white">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-accent-cyan" />
                <a href={mailto()} className="hover:text-accent-cyan">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-accent-cyan" />
                <a href={telLink()} className="hover:text-accent-cyan">
                  {SITE.phone}
                </a>
              </li>
              <li><a href="#contact" className="hover:text-accent-cyan">Book a strategy call</a></li>
              <li><a href="#faq" className="hover:text-accent-cyan">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} NovaElite. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-accent-cyan">Privacy</a>
            <a href="#" className="hover:text-accent-cyan">Terms</a>
            <a href="#" className="hover:text-accent-cyan">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
