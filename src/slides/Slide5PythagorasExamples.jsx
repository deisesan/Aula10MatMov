import React, { useState } from 'react';
import MathView from '../components/MathView';
import { ChevronRight, RotateCcw, HelpCircle, Compass, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Slide5PythagorasExamples() {
  const [step, setStep] = useState(1);
  const [angleVote, setAngleVote] = useState(null);

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
      sounds.playTone(500 + step * 60, 'sine', 0.15);
    } else {
      sounds.playSuccess();
    }
  };

  const handleVote = (choice) => {
    setAngleVote(choice);
    if (choice === '30') {
      sounds.playSuccess();
    } else {
      sounds.playTone(280, 'sawtooth', 0.2);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Descobrindo Ângulos • 10:18 às 10:30
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Lei dos Senos: Encontrando Ângulos Desconhecidos
          </h2>
        </div>

        <div className="px-3.5 py-1.5 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-xs font-bold text-indigo-200 flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>Conhecemos 2 lados e 1 ângulo oposto!</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2 items-center">
        {/* Left: SVG Triangle & Chat Poll */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">
              Caça ao Ângulo B̂
            </span>
            <span className="text-xs font-mono text-slate-400">a = 8√3 m | b = 8 m</span>
          </div>

          <div className="w-full h-52 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center">
            <svg viewBox="0 0 260 185" className="w-full h-full max-w-[250px]">
              <polygon
                points="35,150 230,150 110,35"
                fill="rgba(56, 189, 248, 0.1)"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              {/* Angle A = 60° */}
              <path d="M 65 150 A 30 30 0 0 0 53 125" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
              <text x="72" y="142" fill="#fbbf24" fontSize="13" fontWeight="bold">60°</text>
              <text x="18" y="156" fill="#94a3b8" fontSize="13" fontWeight="bold">A</text>

              {/* Angle B = ? */}
              <path d="M 195 150 A 35 35 0 0 1 206 125" stroke="#34d399" strokeWidth="2.5" fill="none" />
              <text
                x="165"
                y="142"
                fill={step >= 4 ? '#34d399' : '#f43f5e'}
                fontSize="14"
                fontWeight="black"
              >
                {step >= 4 ? 'B̂ = 30°' : 'B̂ = ?'}
              </text>
              <text x="238" y="156" fill="#94a3b8" fontSize="13" fontWeight="bold">B</text>
              <text x="110" y="24" fill="#94a3b8" fontSize="13" fontWeight="bold" textAnchor="middle">C</text>

              {/* Side a = 8√3 m (opposite to A=60°) */}
              <text x="188" y="85" fill="#fbbf24" fontSize="13" fontWeight="bold">
                a = 8√3 m
              </text>

              {/* Side b = 8 m (opposite to B) */}
              <text x="58" y="85" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="end">
                b = 8 m
              </text>
            </svg>
          </div>

          {/* Interactive Chat Question */}
          <div className="w-full mt-3 bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs">
            <div className="font-semibold text-amber-300 mb-1.5 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pergunta pro Chat: Qual ângulo agudo tem seno = 1/2?</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['30', '45', '60'].map((deg) => (
                <button
                  key={deg}
                  onClick={() => handleVote(deg)}
                  className={`py-1.5 rounded-lg font-bold border transition ${
                    angleVote === deg
                      ? deg === '30'
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                        : 'bg-rose-600/30 border-rose-500 text-rose-300'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {deg}°
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Step-by-Step Resolution */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <h3 className="font-bold text-base text-white mb-1">
              Enunciado (Descobrindo o Ângulo Misterioso):
            </h3>
            <p className="text-slate-200 text-sm">
              Em um triângulo <strong className="text-white">ABC</strong>, o lado <strong className="text-amber-400">a = 8√3 m</strong> é oposto ao ângulo <strong className="text-amber-400">Â = 60°</strong>, e o lado <strong className="text-emerald-400">b = 8 m</strong> é oposto ao ângulo agudo <strong className="text-emerald-400">B̂</strong>. Qual é a medida em graus do ângulo <strong className="text-emerald-400">B̂</strong>?
            </p>
          </div>

          <div className="space-y-2">
            {step >= 1 && (
              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                <span className="text-slate-400 font-bold uppercase">Passo 1: Montar a Lei dos Senos</span>
                <MathView math="\frac{8\sqrt{3}}{\text{sen }60^\circ} = \frac{8}{\text{sen }\hat{B}}" className="text-white font-bold text-base" />
              </div>
            )}
            {step >= 2 && (
              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                <span className="text-slate-400 font-bold uppercase">Passo 2: Substituir sen 60° = √3/2</span>
                <MathView math="\frac{8\sqrt{3}}{\frac{\sqrt{3}}{2}} = \frac{8}{\text{sen }\hat{B}} \implies 16 = \frac{8}{\text{sen }\hat{B}}" className="text-amber-300 font-bold text-base" />
              </div>
            )}
            {step >= 3 && (
              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                <span className="text-slate-400 font-bold uppercase">Passo 3: Isolar o sen B̂</span>
                <MathView math="\text{sen }\hat{B} = \frac{8}{16} \implies \text{sen }\hat{B} = \frac{1}{2}" className="text-purple-300 font-bold text-base" />
              </div>
            )}
            {step >= 4 && (
              <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/50 rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
                <div>
                  <span className="text-emerald-400 font-bold uppercase">Passo 4: Consultar a Tabela de Ângulos</span>
                  <div className="text-xs text-slate-300">Qual ângulo agudo tem seno valendo 1/2?</div>
                </div>
                <MathView math="\text{sen }\hat{B} = \frac{1}{2} \implies \mathbf{\hat{B} = 30^\circ}" className="text-emerald-300 font-black text-lg" />
              </div>
            )}
          </div>

          <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Bônus de Ouro:</strong> Como Â = 60° e B̂ = 30°, o terceiro ângulo Ĉ mede <MathView math="180^\circ - 90^\circ = 90^\circ" />!
            </span>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={nextStep}
              disabled={step >= 4}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition ${
                step >= 4
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
              <span>{step >= 4 ? 'Resolução Concluída' : 'Revelar Próximo Passo'}</span>
            </button>
            <button
              onClick={() => setStep(1)}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              title="Reiniciar passos"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
