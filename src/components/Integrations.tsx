const logos = [
  "HubSpot",
  "Salesforce",
  "ServiceTitan",
  "JobNimbus",
  "AccuLynx",
  "Housecall Pro",
  "Meta Business",
  "Google Ads",
  "Zapier",
  "Twilio"
];

export default function Integrations() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-white/5 bg-surface-1 py-14">
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-white/45">
        Built to plug into your existing stack
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 px-6 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="select-none whitespace-nowrap font-display text-2xl font-bold text-white/35 transition hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
