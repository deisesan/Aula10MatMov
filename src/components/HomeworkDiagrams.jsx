import React from 'react';

export default function HomeworkDiagram({ type, className = 'w-full max-w-md mx-auto' }) {
  if (type === 'river_sine_law') {
    // Lesson 10 Questão 2: Travessia do Rio com Lei dos Senos (Â = 45°, B̂ = 105°, Ĉ = 30°, BC = 20 m, AB = c = ?)
    return (
      <svg
        viewBox="0 0 520 270"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* River Water Band */}
        <rect x="40" y="75" width="440" height="95" rx="12" fill="#e0f2fe" opacity="0.65" />
        <path
          d="M 60 105 Q 110 95, 160 105 T 260 105 T 360 105 T 460 105"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
        <path
          d="M 70 140 Q 120 130, 170 140 T 270 140 T 370 140 T 450 140"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
        <text x="435" y="125" fill="#0284c7" fontSize="12" fontStyle="italic" fontWeight="bold" textAnchor="end">
          rio (correnteza)
        </text>

        {/* Triangle Vertices:
            C (top - tree on opposite bank): (290, 48)
            A (bottom left bank): (110, 205)
            B (bottom right bank): (255, 205)
        */}
        {/* Sight line AC (b) */}
        <line x1="110" y1="205" x2="290" y2="48" stroke="#64748b" strokeWidth="2.5" strokeDasharray="6 4" />
        {/* Sight line BC (a = 20 m) */}
        <line x1="255" y1="205" x2="290" y2="48" stroke="#0284c7" strokeWidth="3.5" />
        {/* Bank base AB (c = ?) */}
        <line x1="110" y1="205" x2="255" y2="205" stroke="#e11d48" strokeWidth="4" />

        {/* Tree at C (290, 48) */}
        <circle cx="290" cy="34" r="16" fill="#10b981" />
        <circle cx="290" cy="34" r="10" fill="#059669" />
        <line x1="290" y1="44" x2="290" y2="54" stroke="#78350f" strokeWidth="4" />

        {/* Points A, B, C */}
        <circle cx="110" cy="205" r="5" fill="#1e293b" />
        <circle cx="255" cy="205" r="5" fill="#1e293b" />
        <circle cx="290" cy="48" r="4.5" fill="#047857" />

        {/* Angle arcs & labels */}
        <path d="M 142 205 A 32 32 0 0 0 134 184" stroke="#d97706" strokeWidth="2.5" fill="none" />
        <text x="150" y="196" fill="#d97706" fontSize="14" fontWeight="bold">
          45°
        </text>

        <path d="M 227 205 A 28 28 0 0 1 261 178" stroke="#7c3aed" strokeWidth="2.5" fill="none" />
        <text x="208" y="192" fill="#7c3aed" fontSize="13" fontWeight="bold">
          105°
        </text>

        <text x="268" y="88" fill="#059669" fontSize="13" fontWeight="bold" textAnchor="end">
          Ĉ = ?
        </text>

        {/* Vertex Labels */}
        <text x="92" y="222" fill="#1e293b" className="dark:fill-slate-100" fontSize="16" fontWeight="bold">
          A
        </text>
        <text x="266" y="222" fill="#1e293b" className="dark:fill-slate-100" fontSize="16" fontWeight="bold">
          B
        </text>
        <text x="314" y="42" fill="#047857" fontSize="15" fontWeight="bold">
          C (Árvore)
        </text>

        {/* Side Labels */}
        <text x="325" y="132" fill="#0284c7" fontSize="16" fontWeight="bold">
          a = 20 m
        </text>
        <path d="M 110 215 L 110 225 L 255 225 L 255 215" stroke="#e11d48" strokeWidth="2" fill="none" />
        <text x="182" y="246" fill="#e11d48" fontSize="16" fontWeight="900" textAnchor="middle">
          c = AB = ?
        </text>
      </svg>
    );
  }

  if (type === 'cosine_law_triangle') {
    // Lesson 10 Questão 3: Lei dos Cossenos (b = 6 cm, c = 10 cm, Â = 60°, a = BC = ?)
    return (
      <svg
        viewBox="0 0 500 250"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertices: A(90, 200), B(410, 200), C(200, 45) */}
        <polygon
          points="90,200 410,200 200,45"
          fill="rgba(59, 130, 246, 0.08)"
        />
        {/* Side c = AB = 10 cm */}
        <line x1="90" y1="200" x2="410" y2="200" stroke="#2563eb" strokeWidth="3.5" />
        {/* Side b = AC = 6 cm */}
        <line x1="90" y1="200" x2="200" y2="45" stroke="#2563eb" strokeWidth="3.5" />
        {/* Side a = BC = x = ? (opposite to 60°) */}
        <line x1="200" y1="45" x2="410" y2="200" stroke="#e11d48" strokeWidth="4" strokeDasharray="7 4" />

        {/* Angle arc at A (60°) */}
        <path d="M 135 200 A 45 45 0 0 0 116 163" stroke="#d97706" strokeWidth="3" fill="rgba(245, 158, 11, 0.15)" />
        <text x="145" y="185" fill="#d97706" fontSize="16" fontWeight="900">
          60°
        </text>

        {/* Arrow from 60° to opposite side a */}
        <line x1="175" y1="168" x2="285" y2="128" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Vertices */}
        <circle cx="90" cy="200" r="4.5" fill="#1e40af" />
        <circle cx="410" cy="200" r="4.5" fill="#1e40af" />
        <circle cx="200" cy="45" r="4.5" fill="#1e40af" />

        <text x="70" y="215" fill="#1e293b" className="dark:fill-slate-100" fontSize="18" fontWeight="bold">
          A
        </text>
        <text x="422" y="215" fill="#1e293b" className="dark:fill-slate-100" fontSize="18" fontWeight="bold">
          B
        </text>
        <text x="200" y="30" fill="#1e293b" className="dark:fill-slate-100" fontSize="18" fontWeight="bold" textAnchor="middle">
          C
        </text>

        {/* Side Labels */}
        <text x="120" y="112" fill="#2563eb" fontSize="16" fontWeight="bold" textAnchor="end">
          b = 6 cm
        </text>
        <text x="250" y="228" fill="#2563eb" fontSize="16" fontWeight="bold" textAnchor="middle">
          c = 10 cm
        </text>
        <text x="325" y="110" fill="#e11d48" fontSize="18" fontWeight="900">
          a = x = ?
        </text>
      </svg>
    );
  }

  return null;
}
