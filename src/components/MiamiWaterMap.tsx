import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import { calendlyLink } from "../config";

type Level = "very-hard" | "hard" | "moderate";

type Zone = {
  id: string;
  name: string;
  short: string;
  zips: string;
  hardness: string;
  level: Level;
  note: string;
  center: [number, number];
  // intensity 0..1 used to build the heatmap density
  intensity: number;
  // approx radius (in degrees lat) for spreading sample points around the centroid
  spreadLat: number;
  spreadLng: number;
};

const LEVEL_DOT: Record<Level, string> = {
  "very-hard": "#dc2626",
  hard: "#f59e0b",
  moderate: "#06b6d4"
};
const LEVEL_LABEL: Record<Level, string> = {
  "very-hard": "Very Hard (15+ gpg)",
  hard: "Hard (10-15 gpg)",
  moderate: "Moderate (7-10 gpg)"
};

// Miami-Dade neighborhood centroids + hardness data (real lat/lng)
const zones: Zone[] = [
  {
    id: "aventura",
    name: "Aventura / North Miami Beach",
    short: "Aventura",
    zips: "33160 · 33162 · 33180",
    hardness: "Moderate · 9 gpg",
    level: "moderate",
    note: "Newer treatment plant — but chlorine taste and trace minerals persist.",
    center: [25.96, -80.15],
    intensity: 0.45,
    spreadLat: 0.035, spreadLng: 0.035
  },
  {
    id: "doral",
    name: "Doral / Hialeah",
    short: "Doral",
    zips: "33010 · 33012 · 33166 · 33172",
    hardness: "Very Hard · 17 gpg",
    level: "very-hard",
    note: "Industrial corridor with well-water blends — high mineral load.",
    center: [25.88, -80.34],
    intensity: 0.95,
    spreadLat: 0.055, spreadLng: 0.06
  },
  {
    id: "miami-beach",
    name: "Miami Beach / South Beach",
    short: "Miami Beach",
    zips: "33139 · 33140 · 33141",
    hardness: "Very Hard · 16 gpg",
    level: "very-hard",
    note: "Coastal mineral exposure + salt-air corrosion accelerates scaling.",
    center: [25.81, -80.13],
    intensity: 0.85,
    spreadLat: 0.06, spreadLng: 0.018
  },
  {
    id: "downtown",
    name: "Downtown / Brickell / Wynwood",
    short: "Downtown",
    zips: "33125 · 33127 · 33130 · 33132",
    hardness: "Hard · 13 gpg",
    level: "hard",
    note: "Aging downtown mains. High chlorine + chloramine treatment.",
    center: [25.78, -80.22],
    intensity: 0.72,
    spreadLat: 0.05, spreadLng: 0.05
  },
  {
    id: "coral-gables",
    name: "Coral Gables / Coconut Grove",
    short: "Coral Gables",
    zips: "33133 · 33134 · 33143 · 33146",
    hardness: "Hard · 13 gpg",
    level: "hard",
    note: "1920s-era infrastructure increases scaling and lead-pipe risk.",
    center: [25.71, -80.26],
    intensity: 0.72,
    spreadLat: 0.04, spreadLng: 0.055
  },
  {
    id: "kendall",
    name: "Kendall / Pinecrest",
    short: "Kendall",
    zips: "33156 · 33176 · 33186 · 33196",
    hardness: "Very Hard · 18 gpg",
    level: "very-hard",
    note: "Among the HARDEST hardness readings in all of Miami-Dade.",
    center: [25.66, -80.35],
    intensity: 1.0,
    spreadLat: 0.06, spreadLng: 0.08
  },
  {
    id: "homestead",
    name: "Cutler Bay / Homestead",
    short: "Homestead",
    zips: "33030 · 33032 · 33157 · 33189",
    hardness: "Hard + Well risk",
    level: "hard",
    note: "Mix of municipal supply and private wells — testing strongly advised.",
    center: [25.51, -80.40],
    intensity: 0.78,
    spreadLat: 0.08, spreadLng: 0.09
  }
];

const MIAMI_CENTER: [number, number] = [25.76, -80.27];

// Build dense sample points around each zone — leaflet.heat blends them into a real heatmap
function buildHeatPoints(): [number, number, number][] {
  const pts: [number, number, number][] = [];
  zones.forEach((z) => {
    const samples = 60; // 60 samples per zone → smooth gradient
    for (let i = 0; i < samples; i++) {
      // Gaussian-ish spread around center
      const a = Math.random();
      const b = Math.random();
      const r = Math.sqrt(-2 * Math.log(a || 0.0001));
      const theta = 2 * Math.PI * b;
      const dLat = r * Math.cos(theta) * z.spreadLat * 0.4;
      const dLng = r * Math.sin(theta) * z.spreadLng * 0.4;
      pts.push([z.center[0] + dLat, z.center[1] + dLng, z.intensity]);
    }
  });
  return pts;
}

// Heat layer component
function HeatLayer() {
  const map = useMap();
  useEffect(() => {
    const points = buildHeatPoints();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const heat = (L as any).heatLayer(points, {
      radius: 38,
      blur: 45,
      maxZoom: 13,
      max: 1.0,
      minOpacity: 0.45,
      gradient: {
        0.0: "#06b6d4",  // cyan — moderate
        0.4: "#22d3ee",
        0.55: "#fbbf24", // amber — hard
        0.7: "#f97316",
        0.85: "#ef4444",
        1.0: "#dc2626"   // red — very hard
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map]);
  return null;
}

export default function MiamiWaterMap() {
  const [activeId, setActiveId] = useState<string>("kendall");
  const active = zones.find((z) => z.id === activeId) ?? zones[5];

  return (
    <section className="relative bg-surface-0 py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:42px_42px] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-cyan sm:text-xs">
            Miami Water Quality Heatmap
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            What's the water like <span className="text-brand-gradient">in your neighborhood?</span>
          </h2>
          <p className="mt-4 text-base text-white/70 sm:mt-5 sm:text-lg">
            Real heatmap of water hardness across Miami-Dade. Hot spots = harder water. Tap any pin for details.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-5">
          {/* Real interactive Miami heatmap */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-2 shadow-cardHover sm:rounded-3xl">
              <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[600px]">
                <MapContainer
                  center={MIAMI_CENTER}
                  zoom={10}
                  scrollWheelZoom={false}
                  className="h-full w-full"
                  attributionControl={false}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; OpenStreetMap &copy; CARTO'
                  />

                  <HeatLayer />

                  {zones.map((z) => (
                    <CircleMarker
                      key={`pin-${z.id}`}
                      center={z.center}
                      radius={z.id === activeId ? 10 : 6}
                      pathOptions={{
                        color: "#ffffff",
                        weight: 2,
                        fillColor: LEVEL_DOT[z.level],
                        fillOpacity: 1
                      }}
                      eventHandlers={{ click: () => setActiveId(z.id) }}
                    >
                      <Tooltip direction="top" offset={[0, -8]}>
                        <span className="text-xs font-bold">{z.short} · {z.hardness}</span>
                      </Tooltip>
                    </CircleMarker>
                  ))}
                </MapContainer>

                {/* Legend overlay */}
                <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-[400] flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface-1/90 px-3 py-2 text-[10px] text-white/85 backdrop-blur sm:gap-4 sm:text-xs">
                  {(["very-hard", "hard", "moderate"] as Level[]).map((l) => (
                    <span key={l} className="inline-flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full" style={{ background: LEVEL_DOT[l] }} />
                      {LEVEL_LABEL[l]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-white/45 sm:text-xs">
              Map © OpenStreetMap / CARTO · Hardness data: Miami-Dade WASD + NovaElite field tests.
            </p>
          </div>

          {/* Active zone panel */}
          <div className="lg:col-span-2">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-accent-cyan/40 bg-gradient-to-br from-cyan-500/10 via-surface-2 to-surface-2 p-5 shadow-glow sm:rounded-3xl sm:p-7"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-accent-cyan sm:text-xs">
                <MapPin size={14} /> Selected zone
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                {active.name}
              </h3>
              <p className="mt-1 text-xs text-white/55 sm:text-sm">ZIPs: {active.zips}</p>

              <div className="mt-4 rounded-xl border border-white/10 bg-surface-3/40 p-4 sm:mt-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">Average hardness</p>
                <p className="mt-1 font-display text-xl font-extrabold text-white sm:text-2xl">{active.hardness}</p>
                <p className="mt-2 text-sm text-white/75">{active.note}</p>
              </div>

              <a
                href={calendlyLink()}
                target="_blank"
                rel="noreferrer"
                className="brand-gradient mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-card transition hover:scale-[1.02] sm:mt-6"
              >
                <Calendar size={14} /> Book free test in {active.short}
              </a>
            </motion.div>

            {/* Quick zone selector for mobile (tap chips) */}
            <div className="mt-4 flex flex-wrap gap-2 lg:mt-5">
              {zones.map((z) => (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setActiveId(z.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    activeId === z.id
                      ? "border-accent-cyan bg-accent-cyan/15 text-white"
                      : "border-white/15 bg-white/[0.03] text-white/70 hover:bg-white/10"
                  }`}
                >
                  <span
                    className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
                    style={{ background: LEVEL_DOT[z.level] }}
                  />
                  {z.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}