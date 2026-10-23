with open(r'c:\Users\deise\Desktop\Aula10MatMov\scratch\logo_b64.txt', 'r') as f:
    logo_src = f.read().strip()

html_content = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lição de Casa — Aula 10 — Ensino de Matemática</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 14mm 20mm 14mm 20mm;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #000000;
      background: #ffffff;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    .page {{
      width: 100%;
      min-height: 265mm;
      position: relative;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }}

    .page:last-child {{
      page-break-after: avoid;
    }}

    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }}

    .header-logo {{
      height: 48px;
      object-fit: contain;
    }}

    .header-title {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 22px;
      color: #466c9b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }}

    .main-title-block {{
      text-align: center;
      margin: 24px 0 26px 0;
    }}

    .main-title {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 27px;
      color: #466c9b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 2px;
    }}

    .main-subtitle {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 26px;
      color: #466c9b;
      letter-spacing: 0.5px;
    }}

    .lesson-meta {{
      margin-bottom: 24px;
    }}

    .lesson-meta .aula-num {{
      font-family: 'Poppins', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      color: #466c9b;
      margin-bottom: 3px;
    }}

    .lesson-meta .tema {{
      font-family: 'Poppins', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      color: #466c9b;
    }}

    .question-block {{
      margin-bottom: 22px;
    }}

    .question-title {{
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #466c9b;
      margin-bottom: 10px;
    }}

    .question-desc {{
      font-size: 13.5px;
      color: #000000;
      font-weight: 600;
      margin-bottom: 12px;
      line-height: 1.45;
      text-align: justify;
    }}

    .guidance-box {{
      font-size: 12.5px;
      color: #000000;
      font-weight: 400;
      line-height: 1.45;
      margin-bottom: 16px;
      text-align: justify;
    }}

    .guidance-bold {{
      font-weight: 600;
    }}

    .items-list {{
      list-style-type: none;
      padding-left: 2px;
    }}

    .item-row {{
      font-size: 13px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 11px;
      display: flex;
      align-items: baseline;
      gap: 10px;
      line-height: 1.4;
    }}

    .bullet {{
      font-size: 14px;
    }}

    .bullet-red {{
      color: #ee0000;
    }}

    .bullet-black {{
      color: #000000;
    }}

    .example-text {{
      color: #ee0000;
    }}

    .diagram-wrap {{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 6px 0 14px 0;
    }}

    .diagram-wrap svg {{
      max-width: 440px;
      height: auto;
    }}

    .subitems-list {{
      margin-top: 10px;
    }}

    .subitem {{
      font-size: 12.5px;
      color: #000000;
      margin-bottom: 9px;
      line-height: 1.4;
      text-align: justify;
    }}

    .subitem strong {{
      font-weight: 700;
    }}

    .formula {{
      font-family: inherit;
      font-weight: 600;
    }}
  </style>
</head>
<body>

  <!-- ==================== PÁGINA 1 ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA</div>
    </div>

    <div class="main-title-block">
      <div class="main-title">LIÇÃO DE CASA</div>
      <div class="main-subtitle">1° ano</div>
    </div>

    <div class="lesson-meta">
      <div class="aula-num">AULA 10</div>
      <div class="tema">TEMA DA AULA: Lei dos Senos e Lei dos Cossenos (Triângulos Quaisquer)</div>
    </div>

    <!-- Question 1 -->
    <div class="question-block">
      <div class="question-title">Questão 1</div>
      <div class="question-desc">
        Em cada caso abaixo, identifique se você deve usar a Lei dos Senos ou a Lei dos Cossenos e calcule a medida ou o ângulo desconhecido do triângulo ABC.
      </div>
      <div class="guidance-box">
        Lembre-se da regra de escolha: use a <span class="guidance-bold">Lei dos Senos (a / sen A = b / sen B)</span> quando você tiver pares de lado e ângulo oposto. Use a <span class="guidance-bold">Lei dos Cossenos (a² = b² + c² - 2·b·c·cos A)</span> quando você tiver dois lados e o ângulo formado entre eles, ou quando conhecer os três lados. Valores úteis: <span class="guidance-bold">sen 30° = 1/2, sen 45° = √2/2, sen 60° = √3/2, cos 60° = 1/2 e cos 90° = 0</span>.
      </div>

      <ul class="items-list">
        <li class="item-row example-text">
          <span class="bullet bullet-red">•</span>
          <div>
            [Lei dos Senos] Ângulo A = 30°, Ângulo B = 45° e lado a = 8 cm. O lado b mede <span style="text-decoration: underline; font-weight:700;">8√2 cm</span>. Cálculo: 8 / (1/2) = b / (√2/2) ⟹ b = 8√2 cm -> EXEMPLO
          </div>
        </li>
        <li class="item-row">
          <span class="bullet bullet-black">•</span>
          <div>
            [Lei dos Senos] Ângulo A = 30°, Ângulo B = 60° e lado a = 10 cm. O lado b mede ______ cm.
          </div>
        </li>
        <li class="item-row">
          <span class="bullet bullet-black">•</span>
          <div>
            [Lei dos Senos] Lado a = 6√2 cm (oposto a A = 45°) e lado b = 6 cm. O ângulo agudo B mede ______°.
          </div>
        </li>
        <li class="item-row">
          <span class="bullet bullet-black">•</span>
          <div>
            [Lei dos Cossenos] Lados b = 3 cm, c = 8 cm e ângulo entre eles A = 60°. O lado oposto a mede ______ cm.
          </div>
        </li>
        <li class="item-row">
          <span class="bullet bullet-black">•</span>
          <div>
            [Caso Pitágoras na Lei dos Cossenos] Lados b = 6 cm, c = 8 cm e ângulo A = 90°. O lado a mede ______ cm.
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- ==================== PÁGINA 2 ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA</div>
    </div>

    <!-- Question 2 -->
    <div class="question-block" style="margin-bottom: 22px;">
      <div class="question-title">Questão 2</div>

      <!-- Diagram Questão 2 -->
      <div class="diagram-wrap">
        <svg viewBox="0 0 500 185" width="450" height="165" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="50" width="420" height="65" rx="10" fill="#e0f2fe" opacity="0.65" />
          <path d="M 60 72 Q 110 64, 160 72 T 260 72 T 360 72 T 440 72" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5 3" fill="none" />
          <path d="M 70 96 Q 120 88, 170 96 T 270 96 T 370 96 T 430 96" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5 3" fill="none" />
          <text x="425" y="88" fill="#0284c7" font-size="11" font-style="italic" font-weight="bold" text-anchor="end">rio</text>

          <line x1="110" y1="145" x2="280" y2="30" stroke="#64748b" stroke-width="2" stroke-dasharray="5 3" />
          <line x1="245" y1="145" x2="280" y2="30" stroke="#0284c7" stroke-width="3" />
          <line x1="110" y1="145" x2="245" y2="145" stroke="#e11d48" stroke-width="3.5" />

          <circle cx="280" cy="20" r="12" fill="#10b981" />
          <circle cx="110" cy="145" r="4" fill="#1e293b" />
          <circle cx="245" cy="145" r="4" fill="#1e293b" />
          <circle cx="280" cy="30" r="4" fill="#047857" />

          <text x="145" y="138" fill="#d97706" font-size="12" font-weight="bold">45°</text>
          <text x="202" y="136" fill="#7c3aed" font-size="12" font-weight="bold">105°</text>
          <text x="258" y="65" fill="#059669" font-size="12" font-weight="bold" text-anchor="end">Ĉ = ?</text>

          <text x="95" y="158" fill="#1e293b" font-size="14" font-weight="bold">A</text>
          <text x="255" y="158" fill="#1e293b" font-size="14" font-weight="bold">B</text>
          <text x="298" y="26" fill="#047857" font-size="13" font-weight="bold">C (Árvore)</text>

          <text x="310" y="95" fill="#0284c7" font-size="14" font-weight="bold">a = 20 m</text>
          <text x="178" y="172" fill="#e11d48" font-size="14" font-weight="900" text-anchor="middle">c = AB = ?</text>
        </svg>
      </div>

      <div class="question-desc" style="font-weight:400;">
        Para medir a distância entre dois pontos A e B situados na mesma margem de um rio, um topógrafo escolhe uma árvore no ponto C na margem oposta. Ele mede os ângulos <span class="formula">Â = 45°</span> e <span class="formula">B̂ = 105°</span>, além da distância <span class="formula">BC = a = 20 m</span>. Lembre que a soma dos ângulos internos de qualquer triângulo é <span class="formula">180°</span>.
      </div>

      <div class="subitems-list">
        <div class="subitem">
          <strong>a)</strong> Calcule a medida do terceiro ângulo <span class="formula">Ĉ</span> do triângulo ABC e escreva qual lado é oposto ao ângulo <span class="formula">Â</span> e qual lado é oposto ao ângulo <span class="formula">Ĉ</span>.
        </div>
        <div class="subitem">
          <strong>b)</strong> Monte a proporção da Lei dos Senos usando os ângulos <span class="formula">Â = 45°</span> e <span class="formula">Ĉ = 30°</span> e calcule a distância <span class="formula">c = AB</span> entre os dois pontos na margem.
        </div>
      </div>
    </div>

    <!-- Question 3 -->
    <div class="question-block">
      <div class="question-title">Questão 3</div>

      <!-- Diagram Questão 3 -->
      <div class="diagram-wrap">
        <svg viewBox="0 0 460 155" width="420" height="145" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="85,125 375,125 185,25" fill="rgba(59, 130, 246, 0.08)" />
          <line x1="85" y1="125" x2="375" y2="125" stroke="#2563eb" stroke-width="2.8" />
          <line x1="85" y1="125" x2="185" y2="25" stroke="#2563eb" stroke-width="2.8" />
          <line x1="185" y1="25" x2="375" y2="125" stroke="#e11d48" stroke-width="3.2" stroke-dasharray="6 3" />

          <path d="M 122 125 A 37 37 0 0 0 111 99" stroke="#d97706" stroke-width="2.5" fill="rgba(245, 158, 11, 0.15)" />
          <text x="130" y="114" fill="#d97706" font-size="13" font-weight="900">60°</text>

          <text x="68" y="134" fill="#1e293b" font-size="14" font-weight="bold">A</text>
          <text x="385" y="134" fill="#1e293b" font-size="14" font-weight="bold">B</text>
          <text x="185" y="16" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="middle">C</text>

          <text x="115" y="70" fill="#2563eb" font-size="13" font-weight="bold" text-anchor="end">b = 6 cm</text>
          <text x="230" y="145" fill="#2563eb" font-size="13" font-weight="bold" text-anchor="middle">c = 10 cm</text>
          <text x="295" y="68" fill="#e11d48" font-size="14" font-weight="900">a = x = ?</text>
        </svg>
      </div>

      <div class="question-desc" style="font-weight:400;">
        No triângulo ABC representado na figura, conhecemos dois lados adjacentes <span class="formula">b = AC = 6 cm</span> e <span class="formula">c = AB = 10 cm</span>, que formam entre si um ângulo <span class="formula">Â = 60°</span>. Lembre da Lei dos Cossenos: <span class="formula">a² = b² + c² - 2·b·c·cos Â</span>.
      </div>

      <div class="subitems-list">
        <div class="subitem">
          <strong>a)</strong> Aplique a Lei dos Cossenos, sabendo que <span class="formula">cos 60° = 1/2</span>, e calcule a medida exata do lado <span class="formula">a = BC</span>.
        </div>
        <div class="subitem">
          <strong>b)</strong> Em outro triângulo cujos três lados medem <span class="formula">a = 7 cm, b = 5 cm e c = 3 cm</span>, use a Lei dos Cossenos (<span class="formula">7² = 5² + 3² - 2·5·3·cos Â</span>) para descobrir o valor de <span class="formula">cos Â</span> e a medida do ângulo <span class="formula">Â</span> (Dica: <span class="formula">cos 120° = -1/2</span>).
        </div>
        <div class="subitem">
          <strong>c)</strong> Substitua <span class="formula">Â = 90°</span> na fórmula da Lei dos Cossenos e explique com suas palavras por que o Teorema de Pitágoras (<span class="formula">a² = b² + c²</span>) é um caso específico da Lei dos Cossenos.
        </div>
      </div>
    </div>
  </div>

</body>
</html>
'''

with open(r'c:\Users\deise\Desktop\Aula10MatMov\generate_pdf.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
print("Updated generate_pdf.html successfully!")
