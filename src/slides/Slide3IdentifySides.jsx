import React, { useState } from 'react';
import MathView from '../components/MathView';
import { HelpCircle, Sparkles, CircleDot } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Slide3IdentifySides() {
  const [highlightPair, setHighlightPair] = useState('all'); // 'pairA', 'pairB', 'pairC', 'circumcircle', 'all'
  const [challengeAnswer, setChallengeAnswer] = useState(null);

  const setMode = (mode) => {
    setHighlightPair(mode);
    sounds.playTone(mode === 'pairA' ? 523.25 : mode === 'pairB' ? 587.33 : 659.25, 'sine', 0.15);
  };

  const handleChallenge = (answer) => {
    setChallengeAnswer(answer);
    if (answer === 'correta') {
      sounds.playSuccess();
    } else {
      sounds.playTone(280, 'sawtooth', 0.25);
    }
  };

  const isA = highlightPair === 'pairA' || highlightPair === 'all';
  const isB = highlightPair === 'pairB' || highlightPair === 'all';
  const isC = highlightPair === 'pairC' || highlightPair === 'all';
  const showCircle = highlightPair === 'circumcircle';

  // Exact Circumcircle: Center (160, 115), Radius R = 85
  // Exact vertices on the circle (85^2 = 7225):
  // A(85, 155)  -> (-75)^2 + 40^2  = 5625 + 1600 = 7225
  // B(235, 155) -> (+75)^2 + 40^2  = 5625 + 1600 = 7225
  // C(147, 31)  -> (-13)^2 + (-84)^2 = 169 + 7056 = 7225

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Conceito Fundamental • 09:45 às 10:05
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Introdução à Lei dos Senos: A Dança dos Pares Opostos
          </h2>
        </div>

        {/* Highlight Controls */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
          <button
            onClick={() => setMode('pairA')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              highlightPair === 'pairA'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Par A (a / sen Â)
          </button>
          <button
            onClick={() => setMode('pairB')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              highlightPair === 'pairB'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Par B (b / sen B̂)
          </button>
          <button
            onClick={() => setMode('pairC')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              highlightPair === 'pairC'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Par C (c / sen Ĉ)
          </button>
          <button
            onClick={() => setMode('circumcircle')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
              highlightPair === 'circumcircle'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CircleDot className="w-3.5 h-3.5" />
            <span>= 2R</span>
          </button>
          <button
            onClick={() => setMode('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              highlightPair === 'all'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Todos
          </button>
        </div>
      </div>

      {/* Main Content: Interactive Diagram + Formula Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-center">
        {/* Left: Interactive SVG of Law of Sines */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-300">
              Clique nos botões acima para iluminar cada par Lado ⟷ Ângulo Oposto
            </span>
          </div>

          <div className="w-full h-64 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center relative">
            <svg viewBox="0 0 320 220" className="w-full h-full max-w-[320px]">
              {/* Circumcircle passing EXACTLY through A(85,155), B(235,155), C(147,31) */}
              <circle
                cx="160"
                cy="115"
                r="85"
                fill={showCircle ? 'rgba(168, 85, 247, 0.08)' : 'none'}
                stroke={showCircle ? '#a855f7' : '#334155'}
                strokeWidth={showCircle ? '2.5' : '1.2'}
                strokeDasharray="5 4"
                opacity={showCircle ? 1 : 0.45}
              />

              {showCircle && (
                <g className="animate-in fade-in">
                  {/* Horizontal Diameter = 2R from (75, 115) to (245, 115) */}
                  <line x1="75" y1="115" x2="245" y2="115" stroke="#c084fc" strokeWidth="2.2" />
                  {/* Radius line from center (160,115) to B(235,155) */}
                  <line x1="160" y1="115" x2="235" y2="155" stroke="#e879f9" strokeWidth="1.8" strokeDasharray="3 3" />
                  <circle cx="160" cy="115" r="4" fill="#c084fc" />
                  <text x="160" y="107" fill="#e9d5ff" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Diâmetro = 2R
                  </text>
                  <text x="205" y="132" fill="#f0abfc" fontSize="10" fontWeight="bold">
                    R
                  </text>
                </g>
              )}

              {/* Triangle vertices inscribed in the circle: A(85, 155), B(235, 155), C(147, 31) */}
              <polygon points="85,155 235,155 147,31" fill="rgba(99, 102, 241, 0.1)" />

              {/* Side c (AB - bottom, opposite to C) */}
              <line
                x1="85" y1="155" x2="235" y2="155"
                stroke={isC ? '#10b981' : '#475569'}
                strokeWidth={isC ? '4.5' : '2.5'}
              />
              {/* Side a (BC - right, opposite to A) */}
              <line
                x1="235" y1="155" x2="147" y2="31"
                stroke={isA ? '#f59e0b' : '#475569'}
                strokeWidth={isA ? '4.5' : '2.5'}
              />
              {/* Side b (AC - left, opposite to B) */}
              <line
                x1="85" y1="155" x2="147" y2="31"
                stroke={isB ? '#38bdf8' : '#475569'}
                strokeWidth={isB ? '4.5' : '2.5'}
              />

              {/* Opposite Arrows */}
              {isA && (
                <line
                  x1="108" y1="142" x2="185" y2="95"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              )}
              {isB && (
                <line
                  x1="210" y1="142" x2="120" y2="95"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              )}
              {isC && (
                <line
                  x1="149" y1="58" x2="156" y2="148"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
              )}

              {/* Vertex & Angle A(85, 155) */}
              <circle cx="85" cy="155" r="4.5" fill="#f59e0b" />
              <text x="64" y="166" fill={isA ? '#fbbf24' : '#94a3b8'} fontSize="14" fontWeight="black">
                Â
              </text>
              {/* Side a label */}
              <text x="202" y="88" fill={isA ? '#fbbf24' : '#94a3b8'} fontSize="15" fontWeight="black">
                a
              </text>

              {/* Vertex & Angle B(235, 155) */}
              <circle cx="235" cy="155" r="4.5" fill="#38bdf8" />
              <text x="246" y="166" fill={isB ? '#38bdf8' : '#94a3b8'} fontSize="14" fontWeight="black">
                B̂
              </text>
              {/* Side b label */}
              <text x="98" y="88" fill={isB ? '#38bdf8' : '#94a3b8'} fontSize="15" fontWeight="black">
                b
              </text>

              {/* Vertex & Angle C(147, 31) */}
              <circle cx="147" cy="31" r="4.5" fill="#10b981" />
              <text x="147" y="18" fill={isC ? '#34d399' : '#94a3b8'} fontSize="14" fontWeight="black" textAnchor="middle">
                Ĉ
              </text>
              {/* Side c label */}
              <text x="160" y="175" fill={isC ? '#34d399' : '#94a3b8'} fontSize="15" fontWeight="black" textAnchor="middle">
                c
              </text>
            </svg>
          </div>

          <div className="w-full mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-300">
            <strong>Triângulo Inscrito na Circunferência:</strong> Os 3 vértices A, B e C tocam exatamente a circunferência de raio R!
          </div>
        </div>

        {/* Right: Law of Sines Formula & Live Chat Challenge */}
        <div className="lg:col-span-6 space-y-4">
          {/* Formula Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-3 shadow-xl">
            <div className="text-xs uppercase font-extrabold text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Enunciado da Lei dos Senos:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Em qualquer triângulo <strong className="text-white">ABC</strong>, as medidas dos lados são diretamente proporcionais aos <strong className="text-indigo-400">senos dos seus respectivos ângulos opostos</strong>:
            </p>
            <div className="p-4 rounded-2xl bg-slate-950 border border-indigo-500/40 text-center">
              <MathView
                math="\frac{a}{\text{sen }\hat{A}} = \frac{b}{\text{sen }\hat{B}} = \frac{c}{\text{sen }\hat{C}} = 2R"
                block
                className="text-lg sm:text-xl font-black text-amber-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                <strong className="text-indigo-300 block">Quando usar?</strong>
                Quando temos <strong className="text-white">2 ângulos e 1 lado</strong>, ou <strong className="text-white">2 lados e 1 ângulo oposto</strong>.
              </div>
              <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-800/40">
                <strong className="text-purple-300 block">Quem é R?</strong>
                É o raio da circunferência circunscrita ao triângulo!
              </div>
            </div>
          </div>

          {/* Verificação de Montagem */}
          <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/40 rounded-3xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Verificação Rápida: Qual montagem está CORRETA?
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 mb-3">
              Se o lado <strong className="text-amber-400">x</strong> está oposto ao ângulo de <strong className="text-amber-400">30°</strong>, e o lado de <strong className="text-sky-400">10 cm</strong> está oposto ao ângulo de <strong className="text-sky-400">45°</strong>, como montamos a Lei dos Senos?
            </p>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => handleChallenge('correta')}
                className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition ${
                  challengeAnswer === 'correta'
                    ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <div className="text-[11px] text-slate-400 mb-1">Opção A</div>
                <MathView math="\frac{x}{\text{sen }30^\circ} = \frac{10}{\text{sen }45^\circ}" />
              </button>
              <button
                onClick={() => handleChallenge('errada')}
                className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition ${
                  challengeAnswer === 'errada'
                    ? 'bg-rose-600/30 border-rose-500 text-rose-300 ring-2 ring-rose-500'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <div className="text-[11px] text-slate-400 mb-1">Opção B</div>
                <MathView math="\frac{x}{\text{sen }45^\circ} = \frac{10}{\text{sen }30^\circ}" />
              </button>
            </div>

            {challengeAnswer && (
              <div
                className={`mt-2.5 text-xs p-2.5 rounded-xl font-medium ${
                  challengeAnswer === 'correta'
                    ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800'
                    : 'bg-rose-950/50 text-rose-300 border border-rose-800'
                }`}
              >
                {challengeAnswer === 'correta'
                  ? '🎉 PERFEITO! O lado x fica sobre sen 30° (seu oposto) e o lado 10 fica sobre sen 45° (seu oposto)!'
                  : '⚠️ Cuidado! Na Opção B os casais foram trocados. Cada lado deve ficar em cima do seno do SEU ângulo oposto!'}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
