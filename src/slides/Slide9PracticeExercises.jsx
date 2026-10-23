import React, { useState } from 'react';
import MathView from '../components/MathView';
import {
  Pencil,
  Lightbulb,
  CheckCircle2,
  Download,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import { sounds } from '../utils/audio';

const CLASS_EXERCISES_PAIRS = [
  {
    id: 'pair1',
    label: 'Ex. 1 e 2 (Senos: Lados)',
    questions: [
      {
        id: 'ex1',
        badge: 'Exercício 1 • Lei dos Senos (Aplicação Direta)',
        badgeColor: 'indigo',
        refText: 'sen 30° = 1/2 | sen 45° = √2/2',
        statement:
          'Em um triângulo ABC, sabemos que Â = 30°, B̂ = 45° e o lado oposto ao vértice A mede a = 12 cm. Utilizando a Lei dos Senos, determine a medida b do lado oposto ao vértice B.',
        hint: 'Monte a proporção 12 / sen 30° = b / sen 45° e simplifique os denominadores "/2".',
        steps: [
          '\\frac{b}{\\text{sen }45^\\circ} = \\frac{12}{\\text{sen }30^\\circ} \\implies \\frac{b}{\\frac{\\sqrt{2}}{2}} = \\frac{12}{\\frac{1}{2}}',
          '\\frac{b}{\\sqrt{2}} = \\frac{12}{1} \\implies \\mathbf{b = 12\\sqrt{2}\\text{ cm}}',
        ],
        note: 'Cortar o denominador "/2" dos dois lados elimina a divisão de frações imediatamente!',
      },
      {
        id: 'ex2',
        badge: 'Exercício 2 • Lei dos Senos + Soma de 180°',
        badgeColor: 'sky',
        refText: 'sen 45° = √2/2 | sen 60° = √3/2',
        statement:
          'No triângulo ABC, os ângulos da base medem Â = 75° e B̂ = 45°, e o lado AC = b = 10 m. Determine a medida do terceiro ângulo Ĉ e calcule o lado c = AB oposto a Ĉ.',
        hint: 'Primeiro ache Ĉ = 180° - (75° + 45°) = 60°. Depois use c / sen 60° = 10 / sen 45°.',
        steps: [
          '\\hat{C} = 180^\\circ - (75^\\circ + 45^\\circ) = \\mathbf{60^\\circ}',
          '\\frac{c}{\\text{sen }60^\\circ} = \\frac{10}{\\text{sen }45^\\circ} \\implies \\frac{c}{\\frac{\\sqrt{3}}{2}} = \\frac{10}{\\frac{\\sqrt{2}}{2}}',
          'c = \\frac{10\\sqrt{3}}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{10\\sqrt{6}}{2} \\implies \\mathbf{c = 5\\sqrt{6}\\text{ m}}',
        ],
        note: 'Sempre que aparecer um ângulo como 75° ou 105°, verifique quanto falta para 180°!',
      },
    ],
  },
  {
    id: 'pair2',
    label: 'Ex. 3 e 4 (Senos: Ângulo e 2R)',
    questions: [
      {
        id: 'ex3',
        badge: 'Exercício 3 • Lei dos Senos (Achando Ângulo)',
        badgeColor: 'emerald',
        refText: 'sen 60° = √3/2 | sen 30° = 1/2',
        statement:
          'Em um triângulo ABC, o lado a = 6√3 cm é oposto ao ângulo Â = 60°, enquanto o lado b = 6 cm é oposto ao ângulo agudo B̂. Calcule sen B̂ e determine a medida em graus de B̂.',
        hint: 'Substitua sen 60° = √3/2 em (6√3) / sen 60° = 6 / sen B̂ e simplifique √3.',
        steps: [
          '\\frac{6\\sqrt{3}}{\\text{sen }60^\\circ} = \\frac{6}{\\text{sen }\\hat{B}} \\implies \\frac{6\\sqrt{3}}{\\frac{\\sqrt{3}}{2}} = \\frac{6}{\\text{sen }\\hat{B}}',
          '12 = \\frac{6}{\\text{sen }\\hat{B}} \\implies \\text{sen }\\hat{B} = \\frac{6}{12} = \\frac{1}{2} \\implies \\mathbf{\\hat{B} = 30^\\circ}',
        ],
        note: 'Como Â = 60° e B̂ = 30°, o terceiro ângulo é Ĉ = 90° (triângulo retângulo)!',
      },
      {
        id: 'ex4',
        badge: 'Exercício 4 • Circunferência Circunscrita (2R)',
        badgeColor: 'purple',
        refText: 'a / sen Â = 2R | sen 30° = 1/2',
        statement:
          'Três quiosques (A, B e C) estão na borda de uma praça circular de raio R. Sabendo que o ângulo Â = 30° é oposto ao lado BC = a = 15 m, calcule o diâmetro (2R) e o raio (R) da praça.',
        hint: 'Use a relação a / sen Â = 2R com a = 15 e sen 30° = 1/2.',
        steps: [
          '\\frac{a}{\\text{sen }\\hat{A}} = 2R \\implies \\frac{15}{\\text{sen }30^\\circ} = 2R',
          '\\frac{15}{\\frac{1}{2}} = 2R \\implies 2R = 30\\text{ m} \\implies \\mathbf{R = 15\\text{ metros}}',
        ],
        note: 'Todo lado oposto a 30° tem medida exatamente igual ao raio R da circunferência circunscrita!',
      },
    ],
  },
  {
    id: 'pair3',
    label: 'Ex. 5 e 6 (Pitágoras vs. Cossenos)',
    questions: [
      {
        id: 'ex5',
        badge: 'Exercício 5 • Pitágoras (90°) vs. Lei dos Cossenos (60°)',
        badgeColor: 'emerald',
        refText: 'cos 90° = 0 | cos 60° = 1/2',
        statement:
          'Dados dois lados fixos b = 6 cm e c = 8 cm formando um ângulo Â, use a Lei dos Cossenos para calcular o terceiro lado a: (a) quando Â = 90° e (b) quando Â = 60°.',
        hint: 'Para 90°, cos 90° = 0 anula o termo final. Para 60°, substitua cos 60° = 1/2.',
        steps: [
          '\\text{a) } \\hat{A}=90^\\circ: a^2 = 6^2 + 8^2 - 2\\cdot 6\\cdot 8\\cdot \\mathbf{0} = 100 \\implies \\mathbf{a = 10\\text{ cm (Pitágoras!)}}',
          '\\text{b) } \\hat{A}=60^\\circ: a^2 = 36 + 64 - 2\\cdot 6\\cdot 8\\cdot \\frac{1}{2} = 100 - 48 = 52 \\implies \\mathbf{a = 2\\sqrt{13}\\text{ cm}}',
        ],
        note: 'Demonstração direta de que o Teorema de Pitágoras é o caso Â = 90° da Lei dos Cossenos!',
      },
      {
        id: 'ex6',
        badge: 'Exercício 6 • Lei dos Cossenos (Caso LAL — 60°)',
        badgeColor: 'amber',
        refText: 'cos 60° = 1/2',
        statement:
          'Dois lados de um terreno triangular medem b = 5 m e c = 8 m e formam entre si um ângulo de 60°. Qual é o comprimento a da cerca no terceiro lado?',
        hint: 'Use a² = 5² + 8² - 2·5·8·cos 60°. Multiplique antes de subtrair!',
        steps: [
          'a^2 = 5^2 + 8^2 - 2\\cdot 5\\cdot 8\\cdot \\frac{1}{2}',
          'a^2 = 25 + 64 - 40 = 49 \\implies a = \\sqrt{49} \\implies \\mathbf{a = 7\\text{ metros}}',
        ],
        note: 'Atenção à ordem das operações: 80 · (1/2) = 40 é calculado antes de subtrair de 89!',
      },
    ],
  },
  {
    id: 'pair4',
    label: 'Ex. 7 e 8 (Cossenos: 120° e Ângulo)',
    questions: [
      {
        id: 'ex7',
        badge: 'Exercício 7 • Lei dos Cossenos com Ângulo Obtuso (120°)',
        badgeColor: 'purple',
        refText: 'cos 120° = -1/2 (negativo!)',
        statement:
          'Dois navios partem de um porto com rotas que formam 120° entre si. Após navegarem 3 km e 5 km, qual é a distância d entre os dois navios?',
        hint: 'Cuidado com o jogo de sinais: -2 · 3 · 5 · (-1/2) fica POSITIVO (+15)!',
        steps: [
          'd^2 = 3^2 + 5^2 - 2\\cdot 3\\cdot 5\\cdot \\left(-\\frac{1}{2}\\right)',
          'd^2 = 9 + 25 + 15 = 49 \\implies d = \\sqrt{49} \\implies \\mathbf{d = 7\\text{ km}}',
        ],
        note: 'Em ângulos obtusos (> 90°), o cosseno é negativo e o sinal de menos vira mais!',
      },
      {
        id: 'ex8',
        badge: 'Exercício 8 • Achando Ângulo pelos 3 Lados (Caso LLL)',
        badgeColor: 'indigo',
        refText: 'cos 120° = -1/2',
        statement:
          'Um triângulo possui lados medindo a = 7 cm, b = 5 cm e c = 3 cm. Aplique a Lei dos Cossenos para calcular cos Â e descobrir a medida do maior ângulo Â (oposto ao lado 7).',
        hint: 'Comece isolando o lado oposto ao ângulo procurado: 7² = 5² + 3² - 2·5·3·cos Â.',
        steps: [
          '7^2 = 5^2 + 3^2 - 2\\cdot 5\\cdot 3\\cdot \\cos\\hat{A} \\implies 49 = 34 - 30\\cdot \\cos\\hat{A}',
          '15 = -30\\cdot \\cos\\hat{A} \\implies \\cos\\hat{A} = -\\frac{1}{2} \\implies \\mathbf{\\hat{A} = 120^\\circ}',
        ],
        note: 'Conhecendo os 3 lados de qualquer triângulo, a Lei dos Cossenos revela todos os seus ângulos!',
      },
    ],
  },
];

export default function Slide9PracticeExercises({ onOpenExerciseOnBlankSlide }) {
  const [activePairId, setActivePairId] = useState('pair1');
  const [revealedHints, setRevealedHints] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});

  const currentPair =
    CLASS_EXERCISES_PAIRS.find((p) => p.id === activePairId) || CLASS_EXERCISES_PAIRS[0];

  const toggleHint = (qId) => {
    setRevealedHints((prev) => ({ ...prev, [qId]: !prev[qId] }));
    sounds.playTone(520, 'sine', 0.1);
  };

  const toggleAnswer = (qId) => {
    setRevealedAnswers((prev) => {
      const next = !prev[qId];
      if (next) sounds.playSuccess();
      return { ...prev, [qId]: next };
    });
  };

  const resetAll = () => {
    setRevealedHints({});
    setRevealedAnswers({});
    sounds.playTone(400, 'sine', 0.1);
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-8 max-w-6xl mx-auto overflow-y-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Resolução de Exercícios com a Turma • 11:05 às 11:25
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Caderno de Exercícios de Aula (Passo a Passo)
          </h2>
        </div>

        {/* Actions: Download PDF & Reset */}
        <div className="flex items-center gap-2">
          <a
            href="/Exercicios_de_Aula_Aula_10_MatMov.pdf"
            download="Exercicios_de_Aula_Aula_10_MatMov.pdf"
            onClick={() => sounds.playSuccess()}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition flex items-center gap-1.5"
            title="Baixar PDF com os 8 Exercícios de Aula + Gabarito Passo a Passo do Professor"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>Baixar PDF de Exercícios de Aula (8 Questões)</span>
          </a>

          <button
            onClick={resetAll}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            title="Ocultar todas as resoluções"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Exercise Pair Selector Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 p-2 rounded-2xl my-2">
        <div className="flex items-center gap-2 px-2 text-xs font-bold text-slate-300">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span>Selecione a bateria de exercícios:</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {CLASS_EXERCISES_PAIRS.map((pair) => (
            <button
              key={pair.id}
              onClick={() => {
                setActivePairId(pair.id);
                sounds.playTone(500, 'sine', 0.08);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                activePairId === pair.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {pair.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two Questions Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto py-1">
        {currentPair.questions.map((q) => {
          const isHintOpen = !!revealedHints[q.id];
          const isAnsOpen = !!revealedAnswers[q.id];

          return (
            <div
              key={q.id}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-xl font-black bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
                    {q.badge}
                  </span>
                  <span className="text-[11px] font-mono text-amber-300/90">{q.refText}</span>
                </div>

                <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-medium mb-3">
                  {q.statement}
                </p>

                {/* Hint toggle */}
                {isHintOpen ? (
                  <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200 mb-3 animate-in fade-in">
                    💡 <strong>Ideia da Resolução:</strong> {q.hint}
                  </div>
                ) : (
                  <button
                    onClick={() => toggleHint(q.id)}
                    className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 mb-3"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Mostrar ideia de montagem</span>
                  </button>
                )}
              </div>

              {/* Solution Area */}
              <div className="space-y-2">
                {isAnsOpen ? (
                  <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 space-y-2 text-xs animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Resolução Passo a Passo:</span>
                      </span>
                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className="text-[11px] text-slate-400 hover:text-white"
                      >
                        Ocultar
                      </button>
                    </div>
                    <div className="space-y-1.5 text-slate-100 bg-slate-950/70 p-2.5 rounded-xl border border-emerald-900/40">
                      {q.steps.map((st, idx) => (
                        <MathView key={idx} math={st} block className="text-xs sm:text-sm" />
                      ))}
                    </div>
                    <div className="text-[11px] text-amber-300/90 pt-1">
                      ⭐ <em>{q.note}</em>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleAnswer(q.id)}
                      className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition"
                    >
                      Projetar Resolução na Tela
                    </button>
                    {onOpenExerciseOnBlankSlide && (
                      <button
                        onClick={() =>
                          onOpenExerciseOnBlankSlide({
                            title: q.badge,
                          })
                        }
                        className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-bold transition flex items-center gap-1"
                        title="Abrir lousa quadriculada em branco para resolver à mão com a caneta"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        <span>Lousa</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="border-t border-slate-800 pt-2 flex flex-wrap items-center justify-between text-xs text-slate-400">
        <div>
          📄 O arquivo <strong>Exercicios_de_Aula_Aula_10_MatMov.pdf</strong> contém todas as 8 questões com figuras e o guia de lousa completo!
        </div>
        <div className="text-amber-400 font-semibold">
          Atalho: Pressione D para desenhar na tela ou B para nova lousa
        </div>
      </div>
    </div>
  );
}
