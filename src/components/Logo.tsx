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
      <svg
        viewBox="0 0 90 80"
        className="h-full w-auto"
        aria-label="NovaElite logo"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="barGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0D47A1" />
            <stop offset="50%" stopColor="#1976D2" />
            <stop offset="100%" stopColor="#42A5F5" />
          </linearGradient>
        </defs>

        {/* White S-curve FIRST — sits BEHIND the arrows so bars stay solid blue */}
        <path
          d="M18 18 C 30 46, 58 46, 70 74"
          stroke="#FFFFFF"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />

        {/* Left arrow bar (equal height) */}
        <path
          d="M14 74 L14 22 L6 22 L20 4 L34 22 L26 22 L26 74 Z"
          fill="url(#barGrad)"
        />

        {/* Right arrow bar (equal height, identical to left) */}
        <path
          d="M62 74 L62 22 L54 22 L68 4 L82 22 L74 22 L74 74 Z"
          fill="url(#barGrad)"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${wordColor}`}>
          Nova<span className="text-brand-gradient">Elite</span>
        </span>
        <span className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] ${taglineColor}`}>
          Appointments for Contractors
        </span>
      </div>
    </div>
  );
}
