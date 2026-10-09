import Link from 'next/link'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
]

function RobotLogo() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Robô Kaynã Viana"
      style={{ overflow: 'visible' }}
    >
      <style>{`
        @keyframes kv-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes kv-wave {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(30deg); }
          35% { transform: rotate(-20deg); }
          55% { transform: rotate(30deg); }
          75% { transform: rotate(-15deg); }
        }
        @keyframes kv-blink {
          0%, 88%, 100% { transform: scaleY(1); }
          93% { transform: scaleY(0.08); }
        }
        @keyframes kv-blink2 {
          0%, 80%, 100% { transform: scaleY(1); }
          85% { transform: scaleY(0.08); }
        }
        @keyframes kv-antenna {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes kv-antenna2 {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes kv-chest {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }
        .kv-body    { animation: kv-float 2.4s ease-in-out infinite; }
        .kv-arm     { transform-origin: 20px 54px; animation: kv-wave 2s ease-in-out infinite; }
        .kv-eye-l   { transform-origin: 43px 29px; animation: kv-blink  3.8s ease-in-out infinite; }
        .kv-eye-r   { transform-origin: 57px 29px; animation: kv-blink2 3.8s ease-in-out infinite 0.6s; }
        .kv-ant1    { transform-origin: 38px 5px; animation: kv-antenna  1.6s ease-in-out infinite; }
        .kv-ant2    { transform-origin: 62px 5px; animation: kv-antenna2 1.6s ease-in-out infinite 0.5s; }
        .kv-chest   { animation: kv-chest 2s ease-in-out infinite; }
      `}</style>

      {/* ── FLOATING BODY ── */}
      <g className="kv-body">

        {/* Antennas */}
        <line x1="42" y1="13" x2="38" y2="4" stroke="#0e7490" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="58" y1="13" x2="62" y2="4" stroke="#0e7490" strokeWidth="2.2" strokeLinecap="round"/>
        <circle className="kv-ant1" cx="38" cy="3.5" r="3.2" fill="#22d3ee"/>
        <circle className="kv-ant2" cx="62" cy="3.5" r="3.2" fill="#22d3ee"/>

        {/* Head shell */}
        <rect x="27" y="12" width="46" height="33" rx="10" fill="#0c2233"/>
        <rect x="29" y="14" width="42" height="29" rx="8" fill="#163347" opacity="0.9"/>

        {/* Face visor */}
        <rect x="32" y="17" width="36" height="22" rx="6" fill="#062030"/>
        <rect x="32" y="17" width="36" height="22" rx="6" fill="url(#kvScreenGrad)" opacity="0.6"/>

        {/* Eye LEFT */}
        <g className="kv-eye-l">
          <rect x="36" y="22" width="12" height="9" rx="3.5" fill="#22d3ee"/>
          <rect x="38.5" y="24" width="5" height="5" rx="2" fill="#0891b2" opacity="0.95"/>
          <circle cx="40" cy="25.5" r="1.2" fill="white" opacity="0.85"/>
        </g>

        {/* Eye RIGHT */}
        <g className="kv-eye-r">
          <rect x="52" y="22" width="12" height="9" rx="3.5" fill="#22d3ee"/>
          <rect x="54.5" y="24" width="5" height="5" rx="2" fill="#0891b2" opacity="0.95"/>
          <circle cx="56" cy="25.5" r="1.2" fill="white" opacity="0.85"/>
        </g>

        {/* Smile */}
        <path d="M42 35 Q50 42 58 35" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" fill="none"/>

        {/* Ear panels */}
        <rect x="20" y="19" width="9" height="15" rx="3.5" fill="#0c2233"/>
        <rect x="21" y="21" width="7" height="11" rx="2.5" fill="#22d3ee" opacity="0.25"/>
        <rect x="71" y="19" width="9" height="15" rx="3.5" fill="#0c2233"/>
        <rect x="72" y="21" width="7" height="11" rx="2.5" fill="#22d3ee" opacity="0.25"/>

        {/* Neck */}
        <rect x="43" y="45" width="14" height="7" rx="3.5" fill="#0c2233"/>

        {/* Body */}
        <ellipse cx="50" cy="76" rx="24" ry="22" fill="#0c2233"/>
        <ellipse cx="50" cy="76" rx="20" ry="18" fill="#163347" opacity="0.75"/>

        {/* Chest panel */}
        <rect x="36" y="63" width="28" height="16" rx="6" fill="#062030"/>
        <rect x="38" y="66" width="24" height="10" rx="4" className="kv-chest" fill="#22d3ee" opacity="0.7"/>
        <rect x="40" y="68" width="20" height="6" rx="3" fill="#0891b2" opacity="0.85"/>

        {/* RIGHT arm (static, down) */}
        <rect x="73" y="53" width="10" height="24" rx="5" fill="#0c2233"/>
        <rect x="74" y="55" width="8" height="20" rx="4" fill="#163347" opacity="0.65"/>
        {/* Right hand */}
        <rect x="71" y="75" width="13" height="10" rx="5" fill="#0c2233"/>
        <rect x="72" y="76" width="3.5" height="7" rx="1.8" fill="#163347"/>
        <rect x="76.5" y="76" width="3.5" height="7" rx="1.8" fill="#163347"/>
        <rect x="81" y="77" width="2.5" height="5.5" rx="1.2" fill="#163347"/>

        {/* Legs */}
        <rect x="39" y="95" width="10" height="12" rx="5" fill="#0c2233"/>
        <rect x="51" y="95" width="10" height="12" rx="5" fill="#0c2233"/>

        {/* Feet */}
        <ellipse cx="44" cy="107" rx="8" ry="4" fill="#081929"/>
        <ellipse cx="56" cy="107" rx="8" ry="4" fill="#081929"/>
      </g>

      {/* ── WAVING LEFT ARM (own origin) ── */}
      <g className="kv-arm">
        <rect x="17" y="52" width="10" height="24" rx="5" fill="#0c2233"/>
        <rect x="18" y="54" width="8" height="20" rx="4" fill="#163347" opacity="0.65"/>
        {/* Left hand */}
        <g transform="translate(13 74)">
          <rect x="0" y="0" width="13" height="10" rx="5" fill="#0c2233"/>
          <rect x="1" y="1.5" width="3.5" height="6.5" rx="1.8" fill="#163347"/>
          <rect x="5.5" y="0.5" width="3.5" height="8" rx="1.8" fill="#163347"/>
          <rect x="10" y="1.5" width="2.5" height="6" rx="1.2" fill="#163347"/>
          {/* Thumb */}
          <rect x="-1.5" y="-2" width="3" height="5.5" rx="1.5" fill="#0c2233" transform="rotate(-25)"/>
        </g>
      </g>

      <defs>
        <linearGradient id="kvScreenGrad" x1="32" y1="17" x2="68" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="hidden md:block sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="w-full flex h-16 items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32">


        <nav aria-label="Navegação principal" className="hidden md:block w-full">
          <ul className="flex items-center justify-end gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
