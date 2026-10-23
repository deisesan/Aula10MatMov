import React, { useState } from 'react';
import MathView from '../components/MathView';
import { ChevronRight, RotateCcw, Lightbulb, Target, Compass } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Slide8MetricExamples() {
  const [activeTab, setActiveTab] = useState('ex1'); // 'ex1', 'ex2', or 'compass'
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
            Resolução Comentada • 10:52 às 11:05
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Trabalhando com a Lei dos Cossenos: Lados e Ângulos
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab('ex1')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'ex1'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Ex. 1: Achar Lado (LAL)</span>
          </button>
          <button
            onClick={() => setActiveTab('ex2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'ex2'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Ex. 2: Achar Ângulo (LLL)</span>
          </button>
          <button
            onClick={() => setActiveTab('compass')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'compass'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Qual Lei Usar?</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="my-auto py-2">
        {activeTab === 'ex1' && (
          /* EXAMPLE 1: Finding Side a when b=5, c=8, A=60° -> a = 7 cm */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* SVG Diagram */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                  Caso LAL (2 Lados e Ângulo no Meio)
                </span>
                <span className="text-xs text-slate-400">b=5, c=8, Â=60°</span>
              </div>

              <div className="w-full h-52 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center">
                <svg viewBox="0 0 280 175" className="w-full h-full max-w-[270px]">
                  <polygon
                    points="45,145 245,145 115,35"
                    fill="rgba(99, 102, 241, 0.1)"
                    stroke="#818cf8"
                    strokeWidth="2.5"
                  />
                  {/* Angle 60 deg at A(45, 145) */}
                  <path d="M 80 145 A 35 35 0 0 0 65 116" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                  <text x="86" y="136" fill="#fbbf24" fontSize="13" fontWeight="bold">60°</text>
                  <text x="28" y="152" fill="#94a3b8" fontSize="13" fontWeight="bold">A</text>
                  <text x="252" y="152" fill="#94a3b8" fontSize="13" fontWeight="bold">B</text>
                  <text x="115" y="24" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>

                  {/* Sides */}
                  <text x="64" y="85" fill="#c084fc" fontSize="13" fontWeight="bold" textAnchor="end">
                    b = 5 cm
                  </text>
                  <text x="145" y="165" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                    c = 8 cm
                  </text>
                  <text
                    x="192"
                    y="82"
                    fill={stepEx1 >= 4 ? '#34d399' : '#f59e0b'}
                    fontSize="15"
                    fontWeight="black"
                  >
                    {stepEx1 >= 4 ? 'a = 7 cm' : 'a = ?'}
                  </text>
                </svg>
              </div>

              <div className="w-full mt-3 text-center text-xs text-slate-400">
                Lado isolado: <strong className="text-amber-300">a</strong> (oposto a 60°)
              </div>
            </div>

            {/* Right: Step-by-Step */}
            <div className="lg:col-span-7 space-y-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="font-bold text-base text-white mb-1">
                  Exemplo 1 (Encontrando um Lado pela Lei dos Cossenos):
                </h3>
                <p className="text-slate-200 text-sm">
                  Dois lados de um triângulo medem <strong className="text-purple-400">5 cm</strong> e <strong className="text-sky-400">8 cm</strong> e formam entre si um ângulo de <strong className="text-amber-400">60°</strong>. Calcule a medida <strong className="text-amber-400">a</strong> do terceiro lado.
                </p>
              </div>

              <div className="space-y-2">
                {stepEx1 >= 1 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 1: Montar a Lei dos Cossenos</span>
                    <MathView math="a^2 = 5^2 + 8^2 - 2\cdot 5\cdot 8\cdot \cos 60^\circ" className="text-white font-bold" />
                  </div>
                )}
                {stepEx1 >= 2 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 2: Potências e cos 60° = 1/2</span>
                    <MathView math="a^2 = 25 + 64 - 80 \cdot \frac{1}{2}" className="text-amber-300 font-bold" />
                  </div>
                )}
                {stepEx1 >= 3 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 3: Multiplicar ANTES de Subtrair!</span>
                    <MathView math="a^2 = 89 - 40 \implies a^2 = 49" className="text-purple-300 font-bold" />
                  </div>
                )}
                {stepEx1 >= 4 && (
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/50 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <div>
                      <span className="text-emerald-400 font-bold uppercase">Passo 4: Raiz Quadrada</span>
                      <div className="text-xs text-slate-300">Tirar a raiz quadrada de 49:</div>
                    </div>
                    <MathView math="a = \sqrt{49} \implies \mathbf{a = 7\text{ cm}}" className="text-emerald-300 font-black text-lg" />
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
                  title="Reiniciar"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ex2' && (
          /* EXAMPLE 2: Finding Angle A when a=7, b=5, c=3 -> cos A = -1/2 -> A = 120° */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">
                  Caso LLL (Conhecemos os 3 Lados!)
                </span>
                <span className="text-xs text-slate-400">a=7, b=5, c=3</span>
              </div>

              <div className="w-full h-52 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center">
                <svg viewBox="0 0 280 175" className="w-full h-full max-w-[270px]">
                  {/* Obtuse triangle at A(95, 145), B(235, 145), C(40, 45) */}
                  <polygon
                    points="95,145 235,145 40,45"
                    fill="rgba(168, 85, 247, 0.1)"
                    stroke="#a855f7"
                    strokeWidth="2.5"
                  />
                  <path d="M 122 145 A 27 27 0 0 0 82 121" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                  <text
                    x="105"
                    y="128"
                    fill={stepEx2 >= 4 ? '#34d399' : '#fbbf24'}
                    fontSize="13"
                    fontWeight="black"
                  >
                    {stepEx2 >= 4 ? 'Â = 120°' : 'Â = ?'}
                  </text>
                  <text x="88" y="162" fill="#94a3b8" fontSize="13" fontWeight="bold">A</text>
                  <text x="242" y="152" fill="#94a3b8" fontSize="13" fontWeight="bold">B</text>
                  <text x="30" y="38" fill="#94a3b8" fontSize="13" fontWeight="bold">C</text>

                  {/* Sides */}
                  <text x="155" y="75" fill="#fbbf24" fontSize="14" fontWeight="black">
                    a = 7 cm (oposto a Â)
                  </text>
                  <text x="50" y="105" fill="#c084fc" fontSize="13" fontWeight="bold" textAnchor="end">
                    b = 5
                  </text>
                  <text x="165" y="164" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                    c = 3 cm
                  </text>
                </svg>
              </div>

              <div className="w-full mt-3 text-center text-xs text-slate-400">
                Isolamos o lado <strong className="text-amber-300">7</strong> porque ele é oposto ao ângulo <strong className="text-amber-300">Â</strong>!
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <h3 className="font-bold text-base text-white mb-1">
                  Exemplo 2 (Encontrando um Ângulo pelos 3 Lados):
                </h3>
                <p className="text-slate-200 text-sm">
                  Os lados de um triângulo medem <strong className="text-amber-400">a = 7 cm</strong>, <strong className="text-purple-400">b = 5 cm</strong> e <strong className="text-sky-400">c = 3 cm</strong>. Determine a medida do maior ângulo interno <strong className="text-amber-400">Â</strong> (oposto ao lado 7).
                </p>
              </div>

              <div className="space-y-2">
                {stepEx2 >= 1 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 1: Isolar o Lado Oposto a Â (7)</span>
                    <MathView math="7^2 = 5^2 + 3^2 - 2\cdot 5\cdot 3\cdot \cos\hat{A}" className="text-white font-bold" />
                  </div>
                )}
                {stepEx2 >= 2 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 2: Resolver as Potências</span>
                    <MathView math="49 = 25 + 9 - 30\cdot \cos\hat{A} \implies 49 = 34 - 30\cdot \cos\hat{A}" className="text-amber-300 font-bold" />
                  </div>
                )}
                {stepEx2 >= 3 && (
                  <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <span className="text-slate-400 font-bold uppercase">Passo 3: Isolar cos Â</span>
                    <MathView math="49 - 34 = -30\cdot \cos\hat{A} \implies \cos\hat{A} = \frac{15}{-30} = -\frac{1}{2}" className="text-purple-300 font-bold" />
                  </div>
                )}
                {stepEx2 >= 4 && (
                  <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/50 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                    <div>
                      <span className="text-emerald-400 font-bold uppercase">Passo 4: Identificar o Ângulo</span>
                      <div className="text-xs text-slate-300">Cosseno negativo (-1/2) indica ângulo obtuso:</div>
                    </div>
                    <MathView math="\cos\hat{A} = -\frac{1}{2} \implies \mathbf{\hat{A} = 120^\circ}" className="text-emerald-300 font-black text-lg" />
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
                      : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>{stepEx2 >= 4 ? 'Resolução Concluída' : 'Revelar Próximo Passo'}</span>
                </button>
                <button
                  onClick={() => setStepEx2(1)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                  title="Reiniciar"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compass' && (
          /* TAB 3: Decision Compass - Law of Sines vs Law of Cosines */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            <div className="bg-indigo-950/30 border border-indigo-500/40 rounded-3xl p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                  Ferramenta 1 • Pares Opostos
                </span>
                <h3 className="text-xl font-black text-white">Quando usar a LEI DOS SENOS?</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <li className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    ✅ <strong>Caso 1 (2 Ângulos e 1 Lado):</strong> Você conhece dois ângulos do triângulo e qualquer lado.
                  </li>
                  <li className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    ✅ <strong>Caso 2 (Casal Completo):</strong> Você tem um par completo (lado + seu ângulo oposto) e quer achar a outra dupla.
                  </li>
                  <li className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    ✅ <strong>Caso 3 (Raio R):</strong> O problema fala em circunferência circunscrita (<MathView math="a / \text{sen }\hat{A} = 2R" />).
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-3 rounded-2xl bg-slate-950 border border-indigo-500/30 text-center">
                <MathView math="\frac{a}{\text{sen }\hat{A}} = \frac{b}{\text{sen }\hat{B}} = \frac{c}{\text{sen }\hat{C}}" className="text-indigo-300 font-bold" />
              </div>
            </div>

            <div className="bg-amber-950/20 border border-amber-500/40 rounded-3xl p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300">
                  Ferramenta 2 • Sanduíche ou 3 Lados
                </span>
                <h3 className="text-xl font-black text-white">Quando usar a LEI DOS COSSENOS?</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <li className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    ✅ <strong>Caso 1 (Sanduíche LAL):</strong> Você conhece <strong className="text-amber-300">2 lados e o ângulo no meio deles</strong> e quer o lado oposto.
                  </li>
                  <li className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    ✅ <strong>Caso 2 (Três Lados LLL):</strong> Você conhece os <strong className="text-amber-300">3 lados</strong> e quer descobrir um ângulo interno.
                  </li>
                  <li className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                    ⭐ <strong>Caso Especial (Â = 90°):</strong> Vira automaticamente o Teorema de Pitágoras (<MathView math="a^2 = b^2 + c^2" />)!
                  </li>
                </ul>
              </div>
              <div className="mt-4 p-3 rounded-2xl bg-slate-950 border border-amber-500/30 text-center">
                <MathView math="a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \cos\hat{A}" className="text-amber-300 font-bold" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
