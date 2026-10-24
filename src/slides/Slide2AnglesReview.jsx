import React, { useState } from 'react';
import MathView from '../components/MathView';
import { HelpCircle, CheckCircle, Lightbulb, Triangle, Table } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Slide2AnglesReview() {
  const [angleA, setAngleA] = useState(36);
  const [angleB, setAngleB] = useState(49);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const angleC = Math.max(10, 180 - angleA - angleB);

  const handleOptionClick = (opt) => {
    setSelectedOption(opt);
    if (opt === 'B') {
      sounds.playSuccess();
    } else {
      sounds.playTone(300, 'sawtooth', 0.2);
    }
  };

  const handleReveal = () => {
    setQuizRevealed(true);
    setSelectedOption('B');
    sounds.playSuccess();
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Aquecimento &amp; Base • 09:35 às 09:45
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Revisão: Soma de 180°, Pares Opostos e Tabela de Ouro
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300">
          <Triangle className="w-4 h-4 text-indigo-400" />
          <span>Válido para QUALQUER Triângulo</span>
        </div>
      </div>

      {/* 3 Columns / Cards of Theory */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
        {/* 1. Soma dos Ângulos */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1">
              1. Regra dos 180°
            </div>
            <h3 className="text-base font-bold text-white mb-2">Descobrindo o 3º Ângulo</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Se o problema der <strong className="text-white">dois ângulos</strong> de um triângulo qualquer, você descobre o terceiro imediatamente:
            </p>
          </div>
          <div className="p-2.5 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-center">
            <MathView math="\hat{A} + \hat{B} + \hat{C} = 180^\circ" block className="text-indigo-200 text-base font-bold" />
          </div>
        </div>

        {/* 2. Regra dos Casais Opostos */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-1">
              2. Convenção Universal
            </div>
            <h3 className="text-base font-bold text-white mb-2">Pares Lado-Ângulo Oposto</h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-1.5 rounded-lg bg-slate-950/50 flex justify-between">
                <span>🎯 Vértice <strong className="text-amber-400">Â</strong> olha para:</span>
                <span className="font-bold text-amber-300">Lado a (BC)</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-950/50 flex justify-between">
                <span>🎯 Vértice <strong className="text-sky-400">B̂</strong> olha para:</span>
                <span className="font-bold text-sky-300">Lado b (AC)</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-950/50 flex justify-between">
                <span>🎯 Vértice <strong className="text-emerald-400">Ĉ</strong> olha para:</span>
                <span className="font-bold text-emerald-300">Lado c (AB)</span>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 mt-2 italic text-center">
            Maior ângulo ⟺ Maior lado oposto!
          </div>
        </div>

        {/* 3. Tabela de Ouro + Ângulos Obtusos */}
        <div className="bg-gradient-to-br from-amber-950/20 to-slate-900 border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-1.5 flex items-center gap-1">
              <Table className="w-3.5 h-3.5" />
              <span>3. Tabela que Salva a Prova</span>
            </div>
            <table className="w-full text-center text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400">
                  <th className="py-1 text-left">Razão</th>
                  <th className="py-1 text-amber-300">30°</th>
                  <th className="py-1 text-amber-300">45°</th>
                  <th className="py-1 text-amber-300">60°</th>
                  <th className="py-1 text-emerald-400">90°</th>
                  <th className="py-1 text-purple-300">120°</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono text-[11px]">
                <tr>
                  <td className="py-1.5 font-sans font-bold text-sky-400 text-left">sen</td>
                  <td>1/2</td>
                  <td>√2/2</td>
                  <td>√3/2</td>
                  <td className="text-emerald-300 font-bold">1</td>
                  <td>√3/2</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-sans font-bold text-rose-400 text-left">cos</td>
                  <td>√3/2</td>
                  <td>√2/2</td>
                  <td>1/2</td>
                  <td className="text-emerald-300 font-black">0</td>
                  <td className="text-purple-300 font-bold">-1/2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration & Quiz Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Dynamic Triangle Visualizer */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-200">Triângulo Qualquer ABC:</span>
            <span className="text-amber-400 font-mono font-bold">
              {angleA}° + {angleB}° + {angleC}° = 180°
            </span>
          </div>

          <div className="relative w-full h-44 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-2">
            <svg viewBox="0 0 280 175" className="w-full h-full max-w-[270px]">
              <polygon
                points="35,145 245,145 115,30"
                fill="rgba(99, 102, 241, 0.12)"
                stroke="#818cf8"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Vertex labels & angles */}
              <text x="20" y="155" fill="#fbbf24" fontSize="13" fontWeight="bold">A</text>
              <text x="52" y="138" fill="#fbbf24" fontSize="12" fontWeight="bold">{angleA}°</text>

              <text x="253" y="155" fill="#38bdf8" fontSize="13" fontWeight="bold">B</text>
              <text x="202" y="138" fill="#38bdf8" fontSize="12" fontWeight="bold">{angleB}°</text>

              <text x="115" y="20" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>
              <text x="115" y="55" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">{angleC}°</text>

              {/* Opposite sides */}
              <text x="190" y="80" fill="#fbbf24" fontSize="13" fontWeight="black">a (oposto a Â)</text>
              <text x="58" y="80" fill="#38bdf8" fontSize="13" fontWeight="black" textAnchor="end">b</text>
              <text x="140" y="164" fill="#34d399" fontSize="13" fontWeight="black" textAnchor="middle">c (oposto a Ĉ)</text>
            </svg>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 mb-0.5">
                <span>Ângulo Â:</span>
                <span className="text-amber-400 font-bold">{angleA}°</span>
              </div>
              <input
                type="range"
                min="25"
                max="80"
                value={angleA}
                onChange={(e) => setAngleA(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-slate-400 mb-0.5">
                <span>Ângulo B̂:</span>
                <span className="text-sky-400 font-bold">{angleB}°</span>
              </div>
              <input
                type="range"
                min="25"
                max="85"
                value={angleB}
                onChange={(e) => setAngleB(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Interactive Chat Quiz */}
        <div className="lg:col-span-7 bg-gradient-to-br from-indigo-950/30 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white text-base">Desafio Relâmpago para o Chat:</h3>
            </div>

            <p className="text-slate-200 text-sm sm:text-base font-semibold mb-4 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
              "Em um triângulo qualquer, sabemos que <span className="text-amber-400">Â = 45°</span> e <span className="text-sky-400">B̂ = 75°</span>. Quanto mede o terceiro ângulo <span className="text-emerald-400">Ĉ</span> e quanto vale o seu seno?"
            </p>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                { id: 'A', text: '45° (√2/2)' },
                { id: 'B', text: '60° (√3/2)', isCorrect: true },
                { id: 'C', text: '30° (1/2)' },
                { id: 'D', text: '70°' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleOptionClick(opt.id)}
                  className={`p-3 rounded-xl border font-bold text-sm transition-all flex flex-col items-center justify-center ${
                    selectedOption === opt.id
                      ? opt.isCorrect
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500'
                        : 'bg-rose-600/30 border-rose-500 text-rose-300'
                      : 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span className="text-xs text-slate-400">{opt.id}</span>
                  <span className="text-base">{opt.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Reveal & Step by step */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
            <button
              onClick={handleReveal}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Revelar Resolução Comentada</span>
            </button>

            {quizRevealed && (
              <div className="text-xs sm:text-sm text-emerald-400 font-bold animate-in fade-in">
                <MathView math="\hat{C} = 180^\circ - (45^\circ + 75^\circ) = \mathbf{60^\circ} \implies \text{sen }60^\circ = \frac{\sqrt{3}}{2}" /> ✅
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
