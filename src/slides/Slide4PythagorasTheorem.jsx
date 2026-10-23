import React, { useState } from 'react';
import MathView from '../components/MathView';
import { ChevronRight, RotateCcw, Ruler, Compass, Lightbulb } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Slide4PythagorasTheorem() {
  const [activeTab, setActiveTab] = useState('ex1'); // 'ex1' or 'ex2'
  const [stepEx1, setStepEx1] = useState(1);
  const [stepEx2, setStepEx2] = useState(1);

  const nextStepEx1 = () => {
    if (stepEx1 < 4) {
      setStepEx1((prev) => prev + 1);
      sounds.playTone(500 + stepEx1 * 60, 'sine', 0.15);
    } else {
      sounds.playSuccess();
    }
  };

  const nextStepEx2 = () => {
    if (stepEx2 < 4) {
      setStepEx2((prev) => prev + 1);
      sounds.playTone(500 + stepEx2 * 60, 'sine', 0.15);
    } else {
      sounds.playSuccess();
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Resolução Guiada • 10:05 às 10:18
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Lei dos Senos na Prática: Encontrando Lados Desconhecidos
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('ex1')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'ex1'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>Exemplo 1: Direto (30° e 45°)</span>
          </button>
          <button
            onClick={() => setActiveTab('ex2')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'ex2'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Exemplo 2: Com 3º Ângulo (180°)</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-2">
        {activeTab === 'ex1' ? (
          /* EXAMPLE 1: x / sen 30° = 10 / sen 45° -> x = 5√2 cm */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                  Figura Geométrica
                </span>
                <span className="text-xs font-mono text-slate-400">Â = 30° | B̂ = 45°</span>
              </div>

              <div className="w-full h-56 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center">
                <svg viewBox="0 0 260 190" className="w-full h-full max-w-[250px]">
                  <polygon
                    points="30,155 230,155 155,40"
                    fill="rgba(99, 102, 241, 0.12)"
                    stroke="#818cf8"
                    strokeWidth="2.5"
                  />
                  {/* Angle A = 30 deg */}
                  <path d="M 65 155 A 35 35 0 0 0 58 134" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                  <text x="72" y="148" fill="#fbbf24" fontSize="13" fontWeight="bold">30°</text>
                  <text x="15" y="162" fill="#94a3b8" fontSize="13" fontWeight="bold">A</text>

                  {/* Angle B = 45 deg */}
                  <path d="M 200 155 A 30 30 0 0 1 213 130" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                  <text x="172" y="148" fill="#38bdf8" fontSize="13" fontWeight="bold">45°</text>
                  <text x="238" y="162" fill="#94a3b8" fontSize="13" fontWeight="bold">B</text>
                  <text x="155" y="28" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>

                  {/* Opposite side to 45°: b = 10 cm */}
                  <text x="72" y="90" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="end">
                    10 cm
                  </text>

                  {/* Opposite side to 30°: a = x */}
                  <text
                    x="202"
                    y="92"
                    fill={stepEx1 >= 4 ? '#34d399' : '#fbbf24'}
                    fontSize="15"
                    fontWeight="black"
                  >
                    {stepEx1 >= 4 ? 'x = 5√2 cm' : 'x = ?'}
                  </text>
                </svg>
              </div>

              <div className="w-full mt-3 text-center text-xs text-slate-400">
                <strong className="text-amber-300">x</strong> olha para <strong className="text-amber-300">30°</strong> |{' '}
                <strong className="text-sky-300">10 cm</strong> olha para <strong className="text-sky-300">45°</strong>
              </div>
            </div>

            {/* Right: Step-by-Step Resolution */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="font-bold text-base text-white mb-1">
                  Exemplo 1 (Encontrando medida desconhecida):
                </h3>
                <p className="text-slate-200 text-sm">
                  No triângulo <strong className="text-white">ABC</strong>, temos <strong className="text-amber-400">Â = 30°</strong>,{' '}
                  <strong className="text-sky-400">B̂ = 45°</strong> e o lado oposto a B̂ mede <strong className="text-sky-400">10 cm</strong>. Qual é a medida <strong className="text-amber-400">x</strong> do lado oposto a Â?
                </p>
              </div>

              <div className="space-y-2">
                {stepEx1 >= 1 && (
                  <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-sm animate-in fade-in">
                    <span className="text-slate-400 text-xs font-bold uppercase">Passo 1: Montar os Pares Opostos</span>
                    <MathView math="\frac{x}{\text{sen }30^\circ} = \frac{10}{\text{sen }45^\circ}" className="text-white font-bold text-base" />
                  </div>
                )}

                {stepEx1 >= 2 && (
                  <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-sm animate-in fade-in">
                    <span className="text-slate-400 text-xs font-bold uppercase">Passo 2: Substituir da Tabela</span>
                    <MathView math="\frac{x}{\frac{1}{2}} = \frac{10}{\frac{\sqrt{2}}{2}}" className="text-amber-300 font-bold text-base" />
                  </div>
                )}

                {stepEx1 >= 3 && (
                  <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-sm animate-in fade-in">
                    <span className="text-slate-400 text-xs font-bold uppercase">Passo 3: Cortar os "/2" e Multiplicar</span>
                    <MathView math="x \cdot \sqrt{2} = 10 \cdot 1 \implies x = \frac{10}{\sqrt{2}}" className="text-purple-300 font-bold text-base" />
                  </div>
                )}

                {stepEx1 >= 4 && (
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/50 rounded-xl flex items-center justify-between text-sm animate-in fade-in">
                    <div>
                      <span className="text-emerald-400 text-xs font-bold uppercase">Passo 4: Racionalizar</span>
                      <div className="text-xs text-slate-300 mt-0.5">Multiplicar em cima e embaixo por √2:</div>
                    </div>
                    <MathView math="x = \frac{10\sqrt{2}}{2} \implies \mathbf{x = 5\sqrt{2}\text{ cm}}" className="text-emerald-300 font-black text-base sm:text-lg" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={nextStepEx1}
                  disabled={stepEx1 >= 4}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition ${
                    stepEx1 >= 4
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>{stepEx1 >= 4 ? 'Resolução Concluída' : 'Revelar Próximo Passo'}</span>
                </button>

                <button
                  onClick={() => setStepEx1(1)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                  title="Reiniciar passos"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* EXAMPLE 2: Finding 3rd angle first (A=75°, B=45° -> C=60°) then c / sen 60° = 8 / sen 45° */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                  Armadilha de Prova!
                </span>
                <span className="text-xs font-mono text-slate-400">Ache o 3º ângulo primeiro</span>
              </div>

              <div className="w-full h-56 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center">
                <svg viewBox="0 0 260 190" className="w-full h-full max-w-[250px]">
                  <polygon
                    points="40,155 225,155 110,35"
                    fill="rgba(245, 158, 11, 0.1)"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                  />
                  <text x="25" y="162" fill="#94a3b8" fontSize="13" fontWeight="bold">A</text>
                  <text x="56" y="145" fill="#94a3b8" fontSize="12" fontWeight="bold">75°</text>

                  <text x="235" y="162" fill="#94a3b8" fontSize="13" fontWeight="bold">B</text>
                  <text x="182" y="145" fill="#38bdf8" fontSize="12" fontWeight="bold">45°</text>

                  <text x="110" y="22" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>
                  <text x="112" y="62" fill="#34d399" fontSize="13" fontWeight="black" textAnchor="middle">
                    {stepEx2 >= 1 ? 'Ĉ = 60°' : 'Ĉ = ?'}
                  </text>

                  {/* Side b = 8 m (opposite to 45°) */}
                  <text x="62" y="92" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="end">
                    8 m
                  </text>

                  {/* Side c = y (opposite to C = 60°) */}
                  <text
                    x="132"
                    y="176"
                    fill={stepEx2 >= 4 ? '#34d399' : '#fbbf24'}
                    fontSize="14"
                    fontWeight="black"
                    textAnchor="middle"
                  >
                    {stepEx2 >= 4 ? 'y = 4√6 m' : 'y = ? (oposto a Ĉ)'}
                  </text>
                </svg>
              </div>

              <div className="w-full mt-3 p-2 rounded-xl bg-amber-950/30 border border-amber-500/30 text-center text-xs text-amber-200 flex items-center justify-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Não sabemos sen 75°, mas o lado y usa o ângulo Ĉ = 60°!</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="font-bold text-base text-white mb-1">
                  Exemplo 2 (Usando a soma de 180° + Lei dos Senos):
                </h3>
                <p className="text-slate-200 text-sm">
                  Em um triângulo <strong className="text-white">ABC</strong>, <strong className="text-slate-300">Â = 75°</strong>,{' '}
                  <strong className="text-sky-400">B̂ = 45°</strong> e o lado <strong className="text-sky-400">b = AC = 8 m</strong>. Calcule a medida <strong className="text-amber-400">y</strong> do lado <strong className="text-emerald-400">AB</strong> (oposto ao vértice C).
                </p>
              </div>

              <div className="space-y-2">
                {stepEx2 >= 1 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-emerald-400 font-bold uppercase">Passo 1: Achar o Ângulo Ĉ (180°)</span>
                    <MathView math="\hat{C} = 180^\circ - (75^\circ + 45^\circ) = \mathbf{60^\circ}" className="text-emerald-300 font-bold" />
                  </div>
                )}
                {stepEx2 >= 2 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 2: Montar a Lei dos Senos</span>
                    <MathView math="\frac{y}{\text{sen }60^\circ} = \frac{8}{\text{sen }45^\circ} \implies \frac{y}{\frac{\sqrt{3}}{2}} = \frac{8}{\frac{\sqrt{2}}{2}}" className="text-white font-bold" />
                  </div>
                )}
                {stepEx2 >= 3 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 3: Cortar "/2" e Isolar y</span>
                    <MathView math="y \cdot \sqrt{2} = 8\sqrt{3} \implies y = \frac{8\sqrt{3}}{\sqrt{2}}" className="text-amber-300 font-bold" />
                  </div>
                )}
                {stepEx2 >= 4 && (
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/50 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <div>
                      <span className="text-emerald-400 font-bold uppercase">Passo 4: Racionalizar por √2</span>
                      <div className="text-xs text-slate-300">Lembrando que √3 · √2 = √6:</div>
                    </div>
                    <MathView math="y = \frac{8\sqrt{6}}{2} \implies \mathbf{y = 4\sqrt{6}\text{ metros}}" className="text-emerald-300 font-black text-base" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={nextStepEx2}
                  disabled={stepEx2 >= 4}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition ${
                    stepEx2 >= 4
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>{stepEx2 >= 4 ? 'Resolução Concluída' : 'Revelar Próximo Passo'}</span>
                </button>
                <button
                  onClick={() => setStepEx2(1)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                  title="Reiniciar passos"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
