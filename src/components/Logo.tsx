export default function Logo({
  className = "h-10 w-auto",
  variant = "light"
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // "light" = used on dark backgrounds (white text)
  // "dark"  = used on light backgrounds (dark text)
  const wordColor = variant === "light" ? "text-white" : "text-ink-900";
  const taglineColor = variant === "light" ? "text-white/60" : "text-ink-500";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Use a transparent-bg PNG at public/logo.png — renders seamlessly at any size,
          over any backdrop (hero glow, navbar blur, footer). */}
      <img
        src="/logo.png"
        alt="NovaElite logo"
        className="h-full w-auto shrink-0 object-contain"
      />

      <div className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight sm:text-xl ${wordColor}`}>
          Nova<span className="text-brand-gradient">Elite</span>
        </span>
        <span className={`mt-0.5 text-[8px] font-semibold uppercase tracking-[0.22em] sm:text-[9px] ${taglineColor}`}>
          Appointments for Contractors
        </span>
      </div>
    </div>
  );
}
