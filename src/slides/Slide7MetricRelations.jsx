import React, { useState } from 'react';
import MathView from '../components/MathView';
import { Sparkles, Star, Zap, Eye } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Slide7MetricRelations() {
  const [angleDeg, setAngleDeg] = useState(90); // 60, 90, 120 or slider

  const b = 3;
  const c = 4;
  const rad = (angleDeg * Math.PI) / 180;
  const cosVal = Math.cos(rad);
  const aSquared = b * b + c * c - 2 * b * c * cosVal;
  const aVal = Math.sqrt(Math.max(0.01, aSquared));

  // Vertex A at (95, 165), B at (245, 165) -> c = 150px (scale 37.5px per unit)
  const scale = 34;
  const ax = 105;
  const ay = 165;
  const bx = ax + c * scale;
  const by = ay;
  const cx = ax + b * scale * Math.cos(rad);
  const cy = ay - b * scale * Math.sin(rad);

  const selectPresetAngle = (deg) => {
    setAngleDeg(deg);
    if (deg === 90) {
      sounds.playSuccess();
    } else {
      sounds.playTone(deg === 60 ? 520 : 420, 'sine', 0.15);
    }
  };

  const isRightAngle = angleDeg === 90;

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Bloco Central • 10:40 às 10:52
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Lei dos Cossenos &amp; O Caso Específico de Pitágoras
          </h2>
        </div>

        <div className="px-4 py-1.5 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200">
          <MathView math="a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \cos\hat{A}" className="text-sm sm:text-base font-black" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2 items-center">
        {/* Left: Interactive Simulator (From Law of Cosines to Pythagoras!) */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col items-center justify-between shadow-2xl">
          <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-amber-400" />
              Simulador: Varie o Ângulo Â (b = 3, c = 4)
            </span>
            <div className="flex items-center gap-1">
              {[
                { deg: 60, label: '60° (Agudo)' },
                { deg: 90, label: '⭐ 90° (Pitágoras!)' },
                { deg: 120, label: '120° (Obtuso)' },
              ].map((preset) => (
                <button
                  key={preset.deg}
                  onClick={() => selectPresetAngle(preset.deg)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition ${
                    angleDeg === preset.deg
                      ? preset.deg === 90
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30 ring-2 ring-emerald-400'
                        : 'bg-indigo-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Canvas */}
          <div className="w-full h-56 sm:h-60 bg-slate-950 rounded-2xl border border-slate-800 p-2 flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 320 205" className="w-full h-full max-w-[320px]">
              {/* Triangle polygon */}
              <polygon
                points={`${ax},${ay} ${bx},${by} ${cx},${cy}`}
                fill={isRightAngle ? 'rgba(16, 185, 129, 0.14)' : 'rgba(99, 102, 241, 0.12)'}
              />

              {/* Right Angle Square if 90 deg */}
              {isRightAngle && (
                <g>
                  <rect x={ax} y={ay - 16} width="16" height="16" fill="none" stroke="#10b981" strokeWidth="2.5" />
                  <circle cx={ax + 8} cy={ay - 8} r="2" fill="#10b981" />
                </g>
              )}

              {/* Side c (bottom horizontal) */}
              <line x1={ax} y1={ay} x2={bx} y2={by} stroke="#38bdf8" strokeWidth="4" />
              {/* Side b (moving leg) */}
              <line x1={ax} y1={ay} x2={cx} y2={cy} stroke="#a855f7" strokeWidth="4" />
              {/* Side a (opposite to Angle A) */}
              <line
                x1={cx}
                y1={cy}
                x2={bx}
                y2={by}
                stroke={isRightAngle ? '#10b981' : '#f59e0b'}
                strokeWidth="4.5"
              />

              {/* Vertices */}
              <circle cx={ax} cy={ay} r="4" fill="#fbbf24" />
              <circle cx={bx} cy={by} r="4" fill="#38bdf8" />
              <circle cx={cx} cy={cy} r="4" fill="#a855f7" />

              {/* Labels */}
              <text x={ax - 12} y={ay + 15} fill="#fbbf24" fontSize="13" fontWeight="black">
                Â = {angleDeg}°
              </text>
              <text x={(ax + bx) / 2} y={ay + 18} fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">
                c = 4
              </text>
              <text x={cx - 14} y={(ay + cy) / 2} fill="#c084fc" fontSize="13" fontWeight="bold" textAnchor="end">
                b = 3
              </text>
              <text
                x={(cx + bx) / 2 + 12}
                y={(cy + by) / 2 - 6}
                fill={isRightAngle ? '#34d399' : '#fbbf24'}
                fontSize="14"
                fontWeight="black"
              >
                a ≈ {aVal.toFixed(2).replace('.00', '')}
              </text>
            </svg>
          </div>

          {/* Slider */}
          <div className="w-full mt-2.5">
            <input
              type="range"
              min="30"
              max="135"
              step="5"
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Live Algebraic Proof Box */}
          <div
            className={`w-full mt-2 p-3 rounded-2xl border text-xs transition-all ${
              isRightAngle
                ? 'bg-emerald-950/50 border-emerald-500/60 text-emerald-200 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-950 border-slate-800 text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between font-mono font-bold mb-1">
              <span>Para Â = {angleDeg}° (cos {angleDeg}° = {cosVal.toFixed(2).replace('-0.00', '0')}):</span>
              <span className={isRightAngle ? 'text-emerald-400' : 'text-amber-400'}>
                a² = {aSquared.toFixed(1).replace('.0', '')}
              </span>
            </div>
            {isRightAngle ? (
              <div className="text-emerald-300 font-bold">
                🎉 Como <MathView math="\cos 90^\circ = 0" />, o termo <MathView math="-2bc\cos 90^\circ = 0" /> some e sobra <MathView math="\mathbf{a^2 = b^2 + c^2}" /> (Pitágoras)!
              </div>
            ) : (
              <div>
                <MathView
                  math={`a^2 = 3^2 + 4^2 - 2\\cdot 3\\cdot 4\\cdot (${cosVal.toFixed(2)}) = 25 ${
                    -24 * cosVal >= 0 ? '+ ' + (-24 * cosVal).toFixed(1) : (-24 * cosVal).toFixed(1)
                  } = ${aSquared.toFixed(1)}`}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Theory & Proof Why Pythagoras is a Special Case */}
        <div className="lg:col-span-6 space-y-3.5">
          {/* Card 1: General Law of Cosines */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-5 space-y-2.5 shadow-xl">
            <div className="text-xs uppercase font-extrabold text-amber-400 flex items-center gap-1.5">
              <Star className="w-4 h-4" />
              <span>A Fórmula Geral da Lei dos Cossenos:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              O quadrado de qualquer lado é igual à soma dos quadrados dos outros dois lados, <strong className="text-amber-400">menos duas vezes o produto desses lados pelo cosseno do ângulo entre eles</strong>:
            </p>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5 text-center">
              <MathView math="a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \cos\hat{A}" block className="text-amber-300 font-black text-base" />
              <div className="text-[11px] text-slate-400">
                (Sempre comece pelo lado <strong className="text-white">isolado</strong> que fica oposto ao ângulo do cosseno!)
              </div>
            </div>
          </div>

          {/* Card 2: Explicit Proof that Pythagoras is a Special Case */}
          <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/40 rounded-3xl p-4 sm:p-5 space-y-2.5 shadow-xl">
            <div className="text-xs uppercase font-extrabold text-emerald-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              <span>Por que Pitágoras é um Caso Específico da Lei dos Cossenos?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Se o triângulo for <strong className="text-emerald-300">retângulo em A</strong> (<MathView math="\hat{A} = 90^\circ" />), o lado <strong className="text-emerald-300">a</strong> passa a ser a hipotenusa e <strong className="text-white">b, c</strong> são os catetos. Veja a mágica:
            </p>
            <div className="p-3 bg-slate-950/90 rounded-2xl border border-emerald-500/30 flex flex-col gap-1.5 text-xs sm:text-sm">
              <div>
                <MathView math="a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \cos 90^\circ" />
              </div>
              <div>
                <MathView math="a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \mathbf{0}" className="text-amber-300" />
              </div>
              <div>
                <MathView math="\mathbf{a^2 = b^2 + c^2 \quad (\text{Teorema de Pitágoras!})}" className="text-emerald-400 font-black text-base" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-center pt-1">
              <div className="p-1.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sky-300">
                <strong>Se Â &lt; 90°:</strong><br />cos Â &gt; 0 ⟹ a² &lt; b² + c²
              </div>
              <div className="p-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold">
                <strong>Se Â = 90°:</strong><br />cos 90° = 0 ⟹ a² = b² + c²
              </div>
              <div className="p-1.5 rounded-xl bg-slate-950/70 border border-slate-800 text-purple-300">
                <strong>Se Â &gt; 90°:</strong><br />cos Â &lt; 0 ⟹ a² &gt; b² + c²
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
