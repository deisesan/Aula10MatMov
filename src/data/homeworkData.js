export const HOMEWORK_LESSON_10 = {
  id: 'aula_10',
  lessonNumber: 'AULA 10',
  grade: '1º Ano',
  topic: 'Lei dos Senos e Lei dos Cossenos (Triângulos Quaisquer)',
  chapter: 'Trigonometria em Triângulos Quaisquer',
  date: 'Material Oficial da Aula 10',
  points: 20,
  deadline: 'Enviar foto legível da resolução no canal oficial até a próxima aula',

  instructions: [
    'Resolva todas as questões no seu caderno de Matemática de forma organizada.',
    'Destaque qual lei foi escolhida (Lei dos Senos ou Lei dos Cossenos), os cálculos e as unidades (cm, m, graus).',
    'Tire uma foto nítida e bem iluminada do seu caderno e envie pelo canal oficial para garantir seus +20 pontos!',
  ],

  questions: [
    {
      id: 1,
      title: 'Questão 1 — Aplicação Direta: Lei dos Senos e Lei dos Cossenos',
      subtitle:
        'Em cada caso abaixo, identifique se você deve usar a Lei dos Senos ou a Lei dos Cossenos e calcule a medida ou o ângulo desconhecido do triângulo ABC.',
      guidance:
        'Lembre-se da regra de escolha: use a Lei dos Senos (a / sen A = b / sen B) quando você tiver pares de lado e ângulo oposto. Use a Lei dos Cossenos (a² = b² + c² - 2·b·c·cos A) quando você tiver dois lados e o ângulo formado entre eles, ou quando conhecer os três lados. Valores úteis: sen 30° = 1/2, sen 45° = √2/2, sen 60° = √3/2, cos 60° = 1/2 e cos 90° = 0.',
      example: {
        text: 'Lei dos Senos: Ângulo A = 30°, Ângulo B = 45° e lado a = 8 cm. O lado b mede 8√2 cm.',
        calc: '8 / sen 30° = b / sen 45° ⟹ 8 / (1/2) = b / (√2/2) ⟹ b = 8√2 cm ➔ EXEMPLO',
      },
      items: [
        {
          label: 'Item A',
          text: '[Lei dos Senos] Ângulo A = 30°, Ângulo B = 60° e lado a = 10 cm. O lado b mede ______ cm.',
          hint: '10 / sen 30° = b / sen 60° ⟹ 10 / (1/2) = b / (√3/2)',
          answer: '10√3 cm',
        },
        {
          label: 'Item B',
          text: '[Lei dos Senos] Lado a = 6√2 cm (oposto a A = 45°) e lado b = 6 cm. O ângulo agudo B mede ______°.',
          hint: '6√2 / (√2/2) = 6 / sen B ⟹ 12 = 6 / sen B ⟹ sen B = 1/2',
          answer: '30° (pois sen 30° = 1/2)',
        },
        {
          label: 'Item C',
          text: '[Lei dos Cossenos] Lados b = 3 cm, c = 8 cm e ângulo entre eles A = 60°. O lado oposto a mede ______ cm.',
          hint: 'a² = 3² + 8² - 2·3·8·cos 60° = 9 + 64 - 48·(1/2) = 73 - 24 = 49',
          answer: '7 cm (pois √49 = 7)',
        },
        {
          label: 'Item D',
          text: '[Caso Pitágoras na Lei dos Cossenos] Lados b = 6 cm, c = 8 cm e ângulo A = 90°. O lado a mede ______ cm.',
          hint: 'a² = 6² + 8² - 2·6·8·cos 90° = 36 + 64 - 0 = 100 ⟹ a = √100',
          answer: '10 cm',
        },
      ],
    },
    {
      id: 2,
      title: 'Questão 2 — Situação Real: Medindo a Distância no Rio com a Lei dos Senos',
      diagramType: 'river_sine_law',
      description:
        'Para medir a distância entre dois pontos A e B situados na mesma margem de um rio, um topógrafo escolhe um ponto de referência C (uma árvore) na margem oposta. Com um teodolito, ele mede os ângulos Â = 45° e B̂ = 105°, além da distância BC = a = 20 m. Lembre que a soma dos ângulos internos de qualquer triângulo é 180°.',
      subitems: [
        {
          id: 'a',
          question:
            'a) Calcule a medida do terceiro ângulo Ĉ do triângulo ABC e escreva qual lado é oposto ao ângulo Â e qual lado é oposto ao ângulo Ĉ.',
          expected:
            'Ĉ = 180° - (45° + 105°) = 180° - 150° = 30°. O lado oposto ao ângulo Â (45°) é BC = a = 20 m, e o lado oposto ao ângulo Ĉ (30°) é AB = c.',
        },
        {
          id: 'b',
          question:
            'b) Monte a proporção da Lei dos Senos usando os ângulos Â = 45° e Ĉ = 30° e calcule a distância c = AB entre os dois pontos na margem.',
          expected:
            'c / sen 30° = 20 / sen 45° ⟹ c / (1/2) = 20 / (√2/2) ⟹ c · √2 = 20 ⟹ c = 20 / √2 = 10√2 metros (aprox. 14,14 m).',
        },
      ],
    },
    {
      id: 3,
      title: 'Questão 3 — Lei dos Cossenos e o Teorema de Pitágoras como Caso Específico',
      diagramType: 'cosine_law_triangle',
      description:
        'No triângulo ABC representado na figura, conhecemos dois lados adjacentes b = AC = 6 cm e c = AB = 10 cm, que formam entre si um ângulo Â = 60°. Desejamos encontrar a medida x do terceiro lado (a = BC), oposto ao ângulo de 60°.',
      subitems: [
        {
          id: 'a',
          question:
            'a) Aplique a Lei dos Cossenos (a² = b² + c² - 2·b·c·cos Â), sabendo que cos 60° = 1/2, e calcule a medida exata do lado a = BC.',
          expected:
            'a² = 6² + 10² - 2 · 6 · 10 · (1/2) ⟹ a² = 36 + 100 - 60 = 76 ⟹ a = √76 = 2√19 cm.',
        },
        {
          id: 'b',
          question:
            'b) Em outro triângulo cujos três lados medem a = 7 cm, b = 5 cm e c = 3 cm, use a Lei dos Cossenos (7² = 5² + 3² - 2·5·3·cos Â) para descobrir o valor de cos Â e a medida do ângulo Â (Dica: cos 120° = -1/2).',
          expected:
            '49 = 25 + 9 - 30·cos Â ⟹ 49 = 34 - 30·cos Â ⟹ 15 = -30·cos Â ⟹ cos Â = -15/30 = -1/2 ⟹ Â = 120°.',
        },
        {
          id: 'c',
          question:
            'c) Substitua Â = 90° na fórmula da Lei dos Cossenos (a² = b² + c² - 2·b·c·cos 90°) e explique com suas palavras por que o Teorema de Pitágoras é um caso específico da Lei dos Cossenos.',
          expected:
            'Como cos 90° = 0, o termo -2·b·c·cos 90° fica igual a -2·b·c·0 = 0, restando exatamente a² = b² + c². Assim, o Teorema de Pitágoras é o caso especial da Lei dos Cossenos quando o triângulo possui um ângulo reto de 90°.',
        },
      ],
    },
  ],
};

// Mantém a Aula 8 disponível para consulta rápida caso o professor queira comparar Pitágoras com a Aula 10
export const HOMEWORK_LESSON_8 = {
  id: 'aula_08',
  lessonNumber: 'AULA 8',
  grade: '1º Ano',
  topic: 'Triângulos: Teorema de Pitágoras e Relações Métricas (Capítulo 6)',
  chapter: 'Capítulo 6',
  date: 'Material Oficial da Aula 08',
  points: 20,
  deadline: 'Enviar foto legível da resolução no canal oficial',

  instructions: [
    'Resolva todas as questões no seu caderno de Matemática de forma organizada.',
    'Destaque os cálculos, as fórmulas utilizadas e as unidades de medida (cm, m).',
  ],

  questions: [
    {
      id: 1,
      title: 'Questão 1 — Reconhecimento e Aplicação do Teorema de Pitágoras',
      subtitle:
        'Em cada caso abaixo, use o Teorema de Pitágoras (a² = b² + c²) para calcular a medida desconhecida do triângulo retângulo.',
      guidance:
        'A hipotenusa (a) é sempre o maior lado do triângulo retângulo e está oposta ao ângulo de 90°.',
      example: {
        text: 'Catetos: 3 cm e 4 cm. A hipotenusa mede 5 cm.',
        calc: 'a² = 3² + 4² = 9 + 16 = 25 ⟹ a = √25 = 5 cm ➔ EXEMPLO',
      },
      items: [
        {
          label: 'Item A',
          text: 'Catetos: 6 cm e 8 cm. A hipotenusa mede ______ cm.',
          hint: 'a² = 6² + 8² = 36 + 64 = 100 ⟹ a = √100',
          answer: '10 cm',
        },
        {
          label: 'Item B',
          text: 'Hipotenusa: 10 cm e um cateto: 6 cm. O outro cateto mede ______ cm.',
          hint: 'b² = 10² - 6² = 100 - 36 = 64 ⟹ b = √64',
          answer: '8 cm',
        },
        {
          label: 'Item C',
          text: 'Catetos: 5 cm e 12 cm. A hipotenusa mede ______ cm.',
          hint: 'a² = 5² + 12² = 25 + 144 = 169 ⟹ a = √169',
          answer: '13 cm',
        },
        {
          label: 'Item D',
          text: 'Hipotenusa: 25 cm e um cateto: 7 cm. O outro cateto mede ______ cm.',
          hint: 'b² = 25² - 7² = 625 - 49 = 576 ⟹ b = √576',
          answer: '24 cm',
        },
      ],
    },
    {
      id: 2,
      title: 'Questão 2 — Situação Real: Manutenção no Poste com Escada',
      diagramType: 'ladder_pole',
      description:
        'Para realizar a manutenção na lâmpada de um poste vertical de 12 m de altura, uma equipe posiciona a base de uma escada a 5 m de distância da base do poste.',
      subitems: [
        {
          id: 'a',
          question: 'a) Escreva quem é a hipotenusa e quem são os catetos nessa situação geométrica.',
          expected: 'A escada é a hipotenusa (oposta a 90°). O poste (12 m) e o chão (5 m) são os catetos.',
        },
        {
          id: 'b',
          question: 'b) Calcule o comprimento L da escada.',
          expected: 'L² = 12² + 5² = 169 ⟹ L = 13 metros.',
        },
      ],
    },
    {
      id: 3,
      title: 'Questão 3 — Relações Métricas no Triângulo Retângulo',
      diagramType: 'metric_triangle',
      description:
        'No triângulo retângulo ABC, a altura AH = h divide a hipotenusa em m = 9 cm e n = 16 cm.',
      subitems: [
        {
          id: 'a',
          question: 'a) Calcule a medida total da hipotenusa a = BC.',
          expected: 'a = 9 + 16 = 25 cm.',
        },
        {
          id: 'b',
          question: 'b) Calcule a altura h e o cateto b = AC.',
          expected: 'h = √(9·16) = 12 cm; b = √(25·16) = 20 cm.',
        },
      ],
    },
  ],
};
