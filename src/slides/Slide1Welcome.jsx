import React from 'react';
import MathView from '../components/MathView';
import { Sparkles, CheckCircle, Compass, Zap } from 'lucide-react';

export default function Slide1Welcome() {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 max-w-6xl mx-auto overflow-y-auto">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider font-extrabold text-indigo-400">
              Matemática em Movimento — 1º Ano
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Aula 10: Lei dos Senos e Lei dos Cossenos
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-emerald-400">Ao Vivo</span>
          <span className="text-slate-500">•</span>
          <span>Trigonometria em Triângulos Quaisquer</span>
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center py-2">
        {/* Left Side: Overview & Combinados */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Libertando a Trigonometria do Ângulo de 90°!</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Lei dos Senos &amp; Lei dos Cossenos
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hoje vamos aprender a encontrar <strong className="text-amber-400">lados e ângulos desconhecidos</strong> em{' '}
              <strong className="text-indigo-400">qualquer triângulo</strong> (acutângulo, obtusângulo ou retângulo) e descobrir por que o{' '}
              <strong className="text-emerald-400">Teorema de Pitágoras</strong> é um caso especial da Lei dos Cossenos!
            </p>
          </div>

          {/* Combinados do dia */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-3">
            <div className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Objetivos e Combinados de Ouro da Aula:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0 font-bold">1</span>
                <span className="text-slate-200">
                  <strong>Lei dos Senos:</strong> Pares de lado e ângulo oposto em proporção.
                </span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="p-1 rounded-lg bg-purple-500/20 text-purple-400 shrink-0 font-bold">2</span>
                <span className="text-slate-200">
                  <strong>Lei dos Cossenos:</strong> Lados e ângulos em qualquer triângulo.
                </span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 font-bold">3</span>
                <span className="text-slate-200">
                  <strong>Pitágoras Revelado:</strong> O caso especial quando o ângulo é 90°!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Preview of Both Laws */}
        <div className="lg:col-span-5 flex flex-col gap-3.5">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-3 shadow-2xl">
            <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>As Duas Superfórmulas de Hoje:</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
              <div className="text-xs font-bold text-indigo-300 mb-1">1. Lei dos Senos (Casais Opostos):</div>
              <MathView
                math="\frac{a}{\text{sen }\hat{A}} = \frac{b}{\text{sen }\hat{B}} = \frac{c}{\text{sen }\hat{C}}"
                block
                className="text-white text-sm sm:text-base font-bold"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30">
              <div className="text-xs font-bold text-amber-300 mb-1">2. Lei dos Cossenos (Pitágoras Turbinado):</div>
              <MathView
                math="a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \cos\hat{A}"
                block
                className="text-white text-sm sm:text-base font-bold"
              />
            </div>
          </div>

          {/* Quick Schedule Capsule */}
          <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div>
              <span className="text-slate-300 font-semibold">Grade da Aula:</span> 09:30 às 11:30
            </div>
            <div className="text-indigo-400 font-medium">Intervalo às 10:30 (10 min)</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Tip */}
      <div className="border-t border-slate-800/80 pt-3 flex flex-wrap items-center justify-between text-xs text-slate-400">
        <div className="text-indigo-300 font-medium">
          📐 Matemática em Movimento • Aula 10: Lei dos Senos e Lei dos Cossenos
        </div>
        <div className="text-slate-500">
          Aula Interativa • 1º Ano do Ensino Médio
        </div>
      </div>
    </div>
  );
}
