import type { MockupKind } from "@/types/nicheExtras";

interface MockupArtProps {
  kind: MockupKind;
  className?: string;
}

export default function MockupArt({ kind, className = "" }: MockupArtProps) {
  switch (kind) {
    case "old":
      return <MockupOld className={className} />;
    case "modern":
      return <MockupModern className={className} />;
    case "services":
      return <MockupServices className={className} />;
    case "booking":
      return <MockupBooking className={className} />;
    case "admin":
      return <MockupAdmin className={className} />;
    case "chat":
      return <MockupChat className={className} />;
  }
}

function BrowserFrame({
  children,
  viewBox,
  className = "",
}: {
  children: React.ReactNode;
  viewBox: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      className={`block w-full h-full ${className}`}
      role="img"
    >
      {children}
    </svg>
  );
}

function MockupOld({ className }: { className?: string }) {
  return (
    <BrowserFrame viewBox="0 0 400 400" className={className}>
      <defs>
        <linearGradient id="old-banner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4d35e" />
          <stop offset="100%" stopColor="#a3c585" />
        </linearGradient>
      </defs>
      {/* Page background — beige/dated */}
      <rect width="400" height="400" rx="12" fill="#ece6d8" />

      {/* Header with garish red border */}
      <rect x="0" y="0" width="400" height="44" fill="#ffffff" />
      <rect x="0" y="44" width="400" height="2" fill="#c92626" />
      {/* Logo block */}
      <rect x="14" y="12" width="20" height="20" fill="#7b3f9c" />
      <rect x="40" y="14" width="58" height="6" fill="#3a3a3a" />
      <rect x="40" y="24" width="38" height="4" fill="#888888" />
      {/* Nav links: blue, underlined */}
      <g fill="#0d4ec5">
        <rect x="200" y="18" width="32" height="6" />
        <rect x="240" y="18" width="40" height="6" />
        <rect x="288" y="18" width="36" height="6" />
        <rect x="332" y="18" width="48" height="6" />
      </g>
      <g fill="#0d4ec5">
        <rect x="200" y="26" width="32" height="1" />
        <rect x="240" y="26" width="40" height="1" />
        <rect x="288" y="26" width="36" height="1" />
        <rect x="332" y="26" width="48" height="1" />
      </g>

      {/* Hero banner with cheesy gradient + bold inset text */}
      <rect x="14" y="58" width="372" height="120" fill="url(#old-banner)" />
      <rect x="30" y="76" width="220" height="14" fill="#ffffff" />
      <rect x="30" y="96" width="180" height="8" fill="#ffffff" opacity="0.85" />
      <rect x="30" y="112" width="160" height="8" fill="#ffffff" opacity="0.7" />
      {/* Cheap red CTA */}
      <rect x="30" y="138" width="118" height="26" rx="2" fill="#c92626" />
      <rect x="46" y="148" width="86" height="6" fill="#ffffff" />
      {/* Stock photo placeholder corner */}
      <circle cx="332" cy="118" r="36" fill="#ffffff" opacity="0.55" />
      <circle cx="332" cy="106" r="12" fill="#3a3a3a" opacity="0.4" />
      <path
        d="M312 142 q20 -22 40 0"
        stroke="#3a3a3a"
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />

      {/* Cluttered service tiles row 1 */}
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${14 + i * 124}, 192)`}>
            <rect width="118" height="74" fill="#ffffff" stroke="#cfc7b3" />
            <rect x="8" y="8" width="20" height="20" fill="#a8a8a8" />
            <rect x="34" y="10" width="68" height="6" fill="#3a3a3a" />
            <rect x="34" y="22" width="48" height="4" fill="#888888" />
            <rect x="8" y="38" width="102" height="3" fill="#cfc7b3" />
            <rect x="8" y="46" width="92" height="3" fill="#cfc7b3" />
            <rect x="8" y="54" width="78" height="3" fill="#cfc7b3" />
            <rect x="8" y="62" width="38" height="6" fill="#0d4ec5" />
          </g>
        ))}
      </g>

      {/* Tiles row 2 */}
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${14 + i * 124}, 274)`}>
            <rect width="118" height="60" fill="#ffffff" stroke="#cfc7b3" />
            <rect x="8" y="8" width="20" height="20" fill="#a8a8a8" />
            <rect x="34" y="10" width="68" height="6" fill="#3a3a3a" />
            <rect x="34" y="22" width="48" height="4" fill="#888888" />
            <rect x="8" y="38" width="62" height="3" fill="#cfc7b3" />
            <rect x="8" y="46" width="38" height="6" fill="#0d4ec5" />
          </g>
        ))}
      </g>

      {/* Footer: phone in red, address in gray */}
      <rect x="0" y="350" width="400" height="50" fill="#3a3a3a" />
      <rect x="14" y="362" width="120" height="8" fill="#ff5252" />
      <rect x="14" y="374" width="200" height="4" fill="#bdbdbd" />
      <rect x="14" y="382" width="160" height="4" fill="#bdbdbd" />
      <rect x="320" y="362" width="64" height="8" fill="#bdbdbd" />
      <rect x="320" y="376" width="64" height="8" fill="#bdbdbd" />
    </BrowserFrame>
  );
}

function MockupModern({ className }: { className?: string }) {
  return (
    <BrowserFrame viewBox="0 0 400 400" className={className}>
      <defs>
        <linearGradient id="modern-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0d18" />
          <stop offset="100%" stopColor="#070912" />
        </linearGradient>
        <linearGradient id="modern-hero-text" x1="0" y1="0" x2="1" y2="0">
          <stop offset="22%" stopColor="#ffffff" />
          <stop offset="93%" stopColor="#FFB5E6" />
        </linearGradient>
        <linearGradient id="modern-cta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0899FC" />
          <stop offset="100%" stopColor="#FF49B8" />
        </linearGradient>
      </defs>

      {/* Page background — dark */}
      <rect width="400" height="400" rx="12" fill="url(#modern-bg)" />

      {/* Header pill */}
      <rect
        x="20"
        y="18"
        width="360"
        height="34"
        rx="17"
        fill="#ffffff"
        opacity="0.04"
      />
      <rect
        x="20"
        y="18"
        width="360"
        height="34"
        rx="17"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />
      <rect x="36" y="30" width="42" height="10" rx="2" fill="#ffffff" opacity="0.92" />
      <g fill="#ffffff" opacity="0.62">
        <rect x="178" y="32" width="34" height="6" />
        <rect x="220" y="32" width="32" height="6" />
        <rect x="260" y="32" width="32" height="6" />
      </g>
      {/* CTA pill */}
      <rect x="298" y="22" width="74" height="26" rx="13" fill="#ffffff" opacity="0.95" />
      <rect x="316" y="32" width="38" height="6" fill="#0a0d18" />

      {/* Hero block */}
      <rect
        x="20"
        y="68"
        width="360"
        height="172"
        rx="20"
        fill="#ffffff"
        opacity="0.04"
      />
      <rect
        x="20"
        y="68"
        width="360"
        height="172"
        rx="20"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.08"
      />
      {/* Eyebrow badge */}
      <rect
        x="36"
        y="84"
        width="128"
        height="20"
        rx="10"
        fill="#ffffff"
        opacity="0.06"
      />
      <rect x="48" y="91" width="100" height="6" fill="#ffffff" opacity="0.65" />
      {/* H1 — gradient bars */}
      <rect x="36" y="118" width="320" height="14" rx="2" fill="url(#modern-hero-text)" />
      <rect x="36" y="138" width="240" height="14" rx="2" fill="url(#modern-hero-text)" />
      {/* Subtitle */}
      <rect x="36" y="166" width="280" height="6" fill="#ffffff" opacity="0.55" />
      <rect x="36" y="178" width="240" height="6" fill="#ffffff" opacity="0.45" />
      {/* CTA */}
      <rect x="36" y="200" width="148" height="28" rx="14" fill="url(#modern-cta)" />
      <rect x="62" y="210" width="96" height="8" fill="#ffffff" />
      <rect x="196" y="200" width="120" height="28" rx="14" fill="none" stroke="#ffffff" strokeOpacity="0.4" />
      <rect x="218" y="210" width="76" height="8" fill="#ffffff" opacity="0.85" />

      {/* 3 cards */}
      <g>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${20 + i * 124}, 256)`}>
            <rect
              width="116"
              height="100"
              rx="14"
              fill="#ffffff"
              opacity="0.04"
            />
            <rect
              width="116"
              height="100"
              rx="14"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.08"
            />
            <rect
              x="12"
              y="12"
              width="28"
              height="28"
              rx="8"
              fill="url(#modern-cta)"
            />
            <rect x="12" y="50" width="78" height="7" fill="#ffffff" opacity="0.92" />
            <rect x="12" y="64" width="92" height="4" fill="#ffffff" opacity="0.5" />
            <rect x="12" y="74" width="80" height="4" fill="#ffffff" opacity="0.5" />
            <rect x="12" y="84" width="56" height="4" fill="#ffffff" opacity="0.5" />
          </g>
        ))}
      </g>

      {/* Reviews bar */}
      <g transform="translate(20, 374)">
        {[0, 1, 2, 3, 4].map((i) => (
          <polygon
            key={i}
            points="6,0 7.5,4 12,4.4 8.5,7 9.5,11 6,9 2.5,11 3.5,7 0,4.4 4.5,4"
            fill="#FFB5E6"
            transform={`translate(${i * 16}, 0)`}
          />
        ))}
        <rect x="86" y="3" width="80" height="6" fill="#ffffff" opacity="0.6" />
      </g>
    </BrowserFrame>
  );
}

function ChromeBar() {
  return (
    <g>
      <rect x="0" y="0" width="480" height="28" rx="12" fill="#1b1f2e" />
      <rect x="0" y="14" width="480" height="14" fill="#1b1f2e" />
      <circle cx="14" cy="14" r="4" fill="#ff5f57" />
      <circle cx="28" cy="14" r="4" fill="#febc2e" />
      <circle cx="42" cy="14" r="4" fill="#28c840" />
      <rect x="120" y="7" width="240" height="14" rx="7" fill="#0e1220" />
      <rect x="138" y="11" width="180" height="6" fill="#ffffff" opacity="0.35" />
    </g>
  );
}

function MockupServices({ className }: { className?: string }) {
  return (
    <BrowserFrame viewBox="0 0 480 320" className={className}>
      <defs>
        <linearGradient id="srv-cta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0899FC" />
          <stop offset="100%" stopColor="#FF49B8" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="480" height="320" rx="12" fill="#0a0d18" />
      <ChromeBar />

      {/* Section title bar */}
      <rect x="20" y="44" width="120" height="10" rx="2" fill="#ffffff" opacity="0.9" />
      <rect x="20" y="60" width="180" height="6" fill="#ffffff" opacity="0.45" />

      {/* Sidebar with categories */}
      <rect x="20" y="80" width="116" height="220" rx="10" fill="#ffffff" opacity="0.04" />
      <rect x="20" y="80" width="116" height="220" rx="10" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
      {[
        "Терапія",
        "Стоматологія",
        "Кардіологія",
        "Гінекологія",
        "ЛОР",
        "Діагностика",
      ].map((_, i) => {
        const y = 92 + i * 30;
        const active = i === 1;
        return (
          <g key={i}>
            {active && <rect x="26" y={y - 2} width="104" height="22" rx="6" fill="url(#srv-cta)" opacity="0.18" />}
            <rect x="34" y={y + 4} width="6" height="6" rx="1" fill={active ? "#FFB5E6" : "#ffffff"} opacity={active ? 1 : 0.55} />
            <rect x="46" y={y + 4} width={active ? 70 : 60} height="6" fill="#ffffff" opacity={active ? 0.95 : 0.55} />
          </g>
        );
      })}

      {/* 3-column service cards grid */}
      <g>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <g key={i} transform={`translate(${152 + col * 110}, ${80 + row * 110})`}>
              <rect width="100" height="100" rx="10" fill="#ffffff" opacity="0.04" />
              <rect width="100" height="100" rx="10" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
              <rect x="12" y="12" width="22" height="22" rx="6" fill="url(#srv-cta)" />
              <rect x="12" y="44" width="68" height="6" fill="#ffffff" opacity="0.9" />
              <rect x="12" y="56" width="76" height="4" fill="#ffffff" opacity="0.45" />
              <rect x="12" y="64" width="58" height="4" fill="#ffffff" opacity="0.45" />
              <rect x="12" y="80" width="44" height="6" fill="#FFB5E6" opacity="0.85" />
            </g>
          );
        })}
      </g>
    </BrowserFrame>
  );
}

function MockupBooking({ className }: { className?: string }) {
  return (
    <BrowserFrame viewBox="0 0 480 320" className={className}>
      <defs>
        <linearGradient id="bk-cta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0899FC" />
          <stop offset="100%" stopColor="#FF49B8" />
        </linearGradient>
      </defs>
      <rect width="480" height="320" rx="12" fill="#0a0d18" />
      <ChromeBar />

      {/* Title */}
      <rect x="20" y="44" width="160" height="10" rx="2" fill="#ffffff" opacity="0.9" />
      <rect x="20" y="60" width="220" height="6" fill="#ffffff" opacity="0.45" />

      {/* 3 step indicator */}
      <g transform="translate(20, 82)">
        {[0, 1, 2].map((i) => {
          const active = i <= 1;
          return (
            <g key={i} transform={`translate(${i * 80}, 0)`}>
              <circle
                cx="12"
                cy="12"
                r="11"
                fill={active ? "url(#bk-cta)" : "#ffffff"}
                fillOpacity={active ? 1 : 0.08}
                stroke="#ffffff"
                strokeOpacity={active ? 0 : 0.2}
              />
              <rect x="6" y="9" width="12" height="6" fill="#ffffff" opacity={active ? 0.95 : 0.4} />
              <rect x="30" y="6" width="44" height="5" fill="#ffffff" opacity="0.7" />
              <rect x="30" y="16" width="32" height="4" fill="#ffffff" opacity="0.4" />
            </g>
          );
        })}
        <rect x="24" y="11" width="56" height="2" fill="url(#bk-cta)" />
        <rect x="104" y="11" width="56" height="2" fill="url(#bk-cta)" opacity="0.4" />
      </g>

      {/* Step 2: doctor selected */}
      <g transform="translate(20, 124)">
        <rect width="200" height="170" rx="12" fill="#ffffff" opacity="0.04" />
        <rect width="200" height="170" rx="12" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="14" y="14" width="80" height="6" fill="#ffffff" opacity="0.85" />
        {/* Doctor cards */}
        {[0, 1, 2].map((i) => {
          const active = i === 1;
          return (
            <g key={i} transform={`translate(14, ${30 + i * 44})`}>
              <rect
                width="172"
                height="38"
                rx="8"
                fill={active ? "#FF49B8" : "#ffffff"}
                fillOpacity={active ? 0.18 : 0.04}
                stroke={active ? "#FF49B8" : "#ffffff"}
                strokeOpacity={active ? 0.6 : 0.08}
              />
              <circle cx="22" cy="19" r="11" fill="url(#bk-cta)" opacity={active ? 1 : 0.6} />
              <rect x="40" y="11" width="84" height="6" fill="#ffffff" opacity={active ? 0.95 : 0.7} />
              <rect x="40" y="22" width="64" height="4" fill="#ffffff" opacity="0.45" />
              {active && (
                <g transform="translate(146, 13)">
                  <circle cx="6" cy="6" r="6" fill="#FFB5E6" />
                  <path d="M3 6 l2 2 l4 -4" stroke="#0a0d18" strokeWidth="1.4" fill="none" />
                </g>
              )}
            </g>
          );
        })}
      </g>

      {/* Step 3: calendar grid */}
      <g transform="translate(232, 124)">
        <rect width="228" height="124" rx="12" fill="#ffffff" opacity="0.04" />
        <rect width="228" height="124" rx="12" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
        <rect x="14" y="14" width="60" height="6" fill="#ffffff" opacity="0.85" />
        <rect x="180" y="14" width="36" height="6" fill="#ffffff" opacity="0.45" />
        {/* 4×7 grid of slots */}
        {Array.from({ length: 28 }).map((_, i) => {
          const col = i % 7;
          const row = Math.floor(i / 7);
          const x = 14 + col * 30;
          const y = 30 + row * 22;
          const isSel = i === 17;
          const isAvail = [3, 5, 9, 12, 17, 20, 24].includes(i);
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width="24"
              height="16"
              rx="3"
              fill={isSel ? "url(#bk-cta)" : isAvail ? "#ffffff" : "#ffffff"}
              fillOpacity={isSel ? 1 : isAvail ? 0.16 : 0.04}
            />
          );
        })}
      </g>

      {/* Confirm button */}
      <rect x="232" y="260" width="228" height="34" rx="17" fill="url(#bk-cta)" />
      <rect x="296" y="273" width="100" height="8" fill="#ffffff" opacity="0.95" />
    </BrowserFrame>
  );
}

function MockupChat({ className }: { className?: string }) {
  return (
    <BrowserFrame viewBox="0 0 480 360" className={className}>
      <defs>
        <linearGradient id="ch-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0899FC" />
          <stop offset="100%" stopColor="#FF49B8" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" rx="12" fill="#0a0d18" />

      {/* App header */}
      <rect x="0" y="0" width="480" height="44" fill="#0e1220" />
      <circle cx="34" cy="22" r="13" fill="url(#ch-gradient)" />
      <rect x="22" y="18" width="10" height="2" fill="#ffffff" opacity="0.85" />
      <rect x="22" y="22" width="14" height="2" fill="#ffffff" opacity="0.85" />
      <rect x="56" y="16" width="120" height="6" fill="#ffffff" opacity="0.92" />
      <rect x="56" y="26" width="80" height="4" fill="#ffffff" opacity="0.4" />

      {/* Message bubbles */}
      {/* Their bubble (left) */}
      <g transform="translate(20, 60)">
        <rect width="220" height="28" rx="14" fill="#ffffff" opacity="0.06" />
        <rect x="14" y="10" width="180" height="4" fill="#ffffff" opacity="0.7" />
        <rect x="14" y="18" width="140" height="4" fill="#ffffff" opacity="0.7" />
      </g>
      <g transform="translate(20, 96)">
        <rect width="160" height="22" rx="11" fill="#ffffff" opacity="0.06" />
        <rect x="14" y="9" width="120" height="4" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Date separator */}
      <rect x="206" y="132" width="68" height="14" rx="7" fill="#ffffff" opacity="0.05" />
      <rect x="226" y="138" width="28" height="3" fill="#ffffff" opacity="0.4" />

      {/* Our bubble (right, big positive review) */}
      <g transform="translate(140, 158)">
        <rect width="320" height="100" rx="14" fill="url(#ch-gradient)" opacity="0.92" />
        <rect x="14" y="14" width="280" height="5" fill="#ffffff" opacity="0.95" />
        <rect x="14" y="24" width="290" height="5" fill="#ffffff" opacity="0.95" />
        <rect x="14" y="34" width="246" height="5" fill="#ffffff" opacity="0.95" />
        <rect x="14" y="50" width="260" height="5" fill="#ffffff" opacity="0.85" />
        <rect x="14" y="60" width="230" height="5" fill="#ffffff" opacity="0.85" />
        <rect x="14" y="76" width="180" height="5" fill="#ffffff" opacity="0.95" />
        {/* Time + read mark */}
        <rect x="270" y="86" width="20" height="3" fill="#ffffff" opacity="0.7" />
        <path
          d="M295 86 l3 3 l5 -5 M300 86 l3 3 l5 -5"
          stroke="#ffffff"
          strokeOpacity="0.85"
          strokeWidth="1.4"
          fill="none"
        />
      </g>

      {/* Their reply */}
      <g transform="translate(20, 282)">
        <rect width="240" height="22" rx="11" fill="#ffffff" opacity="0.06" />
        <rect x="14" y="9" width="200" height="4" fill="#ffffff" opacity="0.7" />
      </g>

      {/* Input bar */}
      <rect x="0" y="320" width="480" height="40" fill="#0e1220" />
      <rect x="20" y="332" width="380" height="20" rx="10" fill="#ffffff" opacity="0.06" />
      <rect x="34" y="340" width="120" height="4" fill="#ffffff" opacity="0.4" />
      <circle cx="430" cy="342" r="14" fill="url(#ch-gradient)" />
      <path
        d="M425 342 l8 -4 l-3 4 l3 4 z"
        fill="#ffffff"
      />
    </BrowserFrame>
  );
}

function MockupAdmin({ className }: { className?: string }) {
  return (
    <BrowserFrame viewBox="0 0 480 320" className={className}>
      <defs>
        <linearGradient id="adm-cta" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0899FC" />
          <stop offset="100%" stopColor="#FF49B8" />
        </linearGradient>
      </defs>
      <rect width="480" height="320" rx="12" fill="#0a0d18" />
      <ChromeBar />

      {/* App top bar */}
      <rect x="0" y="28" width="480" height="36" fill="#0e1220" />
      <rect x="20" y="42" width="44" height="8" fill="#ffffff" opacity="0.95" />
      <rect x="80" y="44" width="60" height="6" fill="#ffffff" opacity="0.5" />
      {/* Search */}
      <rect x="180" y="36" width="160" height="20" rx="10" fill="#ffffff" opacity="0.06" />
      <rect x="194" y="44" width="80" height="4" fill="#ffffff" opacity="0.4" />
      {/* Avatar */}
      <circle cx="450" cy="46" r="10" fill="url(#adm-cta)" />

      {/* Sidebar */}
      <rect x="0" y="64" width="120" height="256" fill="#0e1220" />
      {[
        "Послуги",
        "Лікарі",
        "Ціни",
        "Заявки",
        "Розклад",
        "Налаштування",
      ].map((_, i) => {
        const y = 80 + i * 32;
        const active = i === 0;
        return (
          <g key={i}>
            {active && <rect x="8" y={y - 4} width="104" height="24" rx="6" fill="url(#adm-cta)" opacity="0.2" />}
            <rect x="20" y={y + 2} width="6" height="6" rx="1" fill={active ? "#FFB5E6" : "#ffffff"} opacity={active ? 1 : 0.5} />
            <rect x="32" y={y + 2} width={active ? 56 : 48} height="6" fill="#ffffff" opacity={active ? 0.95 : 0.5} />
          </g>
        );
      })}

      {/* Page title + button */}
      <rect x="140" y="80" width="120" height="10" rx="2" fill="#ffffff" opacity="0.95" />
      <rect x="392" y="78" width="68" height="22" rx="11" fill="url(#adm-cta)" />
      <rect x="406" y="86" width="40" height="6" fill="#ffffff" opacity="0.95" />

      {/* Table */}
      <g transform="translate(140, 110)">
        {/* Header row */}
        <rect width="320" height="20" rx="6" fill="#ffffff" opacity="0.06" />
        <rect x="14" y="7" width="60" height="5" fill="#ffffff" opacity="0.55" />
        <rect x="160" y="7" width="40" height="5" fill="#ffffff" opacity="0.55" />
        <rect x="220" y="7" width="40" height="5" fill="#ffffff" opacity="0.55" />
        <rect x="278" y="7" width="32" height="5" fill="#ffffff" opacity="0.55" />

        {/* Rows */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(0, ${28 + i * 28})`}>
            <rect width="320" height="22" rx="6" fill="#ffffff" opacity="0.03" />
            <rect x="14" y="8" width="120" height="6" fill="#ffffff" opacity="0.75" />
            <rect x="160" y="8" width="48" height="6" fill="#ffffff" opacity="0.55" />
            <rect x="220" y="8" width="36" height="6" fill="#FFB5E6" opacity="0.85" />
            <rect x="278" y="6" width="14" height="10" rx="2" fill="#ffffff" opacity="0.12" />
            <rect x="296" y="6" width="14" height="10" rx="2" fill="#ffffff" opacity="0.12" />
          </g>
        ))}
      </g>
    </BrowserFrame>
  );
}
