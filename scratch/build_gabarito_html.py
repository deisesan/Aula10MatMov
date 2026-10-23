with open(r'c:\Users\deise\Desktop\Aula10MatMov\scratch\logo_b64.txt', 'r') as f:
    logo_src = f.read().strip()

html_gabarito = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Gabarito Oficial — Lição de Casa — Aula 10 — Ensino de Matemática</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 10mm 18mm 10mm 18mm;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.38;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    .page {{
      width: 100%;
      height: 277mm;
      max-height: 277mm;
      position: relative;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;
    }}

    .page:last-child {{
      page-break-after: avoid;
    }}

    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 1.5px solid #e2e8f0;
    }}

    .header-logo {{
      height: 40px;
      object-fit: contain;
    }}

    .header-title {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 20px;
      color: #466c9b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }}

    .title-block {{
      text-align: center;
      margin-bottom: 12px;
    }}

    .badge-privado {{
      display: inline-block;
      background-color: #fee2e2;
      color: #b91c1c;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 10px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 1px solid #fca5a5;
      margin-bottom: 4px;
    }}

    .main-title {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 22px;
      color: #466c9b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 1px;
    }}

    .main-subtitle {{
      font-family: 'Poppins', sans-serif;
      font-size: 11.5px;
      font-weight: 600;
      color: #64748b;
    }}

    .lesson-meta {{
      background: #f8fafc;
      border-left: 4px solid #466c9b;
      padding: 6px 12px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 12px;
      font-size: 11.5px;
      display: flex;
      justify-content: space-between;
    }}

    .lesson-meta strong {{
      color: #466c9b;
    }}

    .q-box {{
      background: #ffffff;
      border: 1.2px solid #cbd5e1;
      border-radius: 10px;
      padding: 10px 14px;
      margin-bottom: 12px;
    }}

    .q-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 4px;
    }}

    .q-title {{
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      font-weight: 800;
      color: #466c9b;
    }}

    .q-points {{
      background: #ecfdf5;
      color: #047857;
      font-size: 10.5px;
      font-weight: 800;
      padding: 1px 7px;
      border-radius: 5px;
      border: 1px solid #a7f3d0;
    }}

    .step-box {{
      background: #f8fafc;
      border-radius: 6px;
      padding: 8px 10px;
      margin-top: 6px;
      font-size: 11.5px;
    }}

    .calc-row {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      color: #0f172a;
      margin: 3px 0;
    }}

    .answer-tag {{
      display: inline-block;
      background: #dcfce7;
      color: #15803d;
      font-weight: 800;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #86efac;
    }}

    .pitfall {{
      background: #fffbeb;
      border-left: 3px solid #f59e0b;
      padding: 4px 8px;
      font-size: 10.5px;
      color: #92400e;
      margin-top: 5px;
      border-radius: 0 4px 4px 0;
    }}

    .table-res {{
      width: 100%;
      border-collapse: collapse;
      margin-top: 5px;
      font-size: 11px;
    }}

    .table-res th, .table-res td {{
      border: 1px solid #e2e8f0;
      padding: 4px 7px;
      text-align: left;
    }}

    .table-res th {{
      background: #f1f5f9;
      font-weight: 700;
      color: #334155;
    }}

    .table-res tr:nth-child(even) {{
      background: #fafafa;
    }}

    .footer-note {{
      margin-top: auto;
      padding-top: 6px;
      border-top: 1px dashed #cbd5e1;
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #64748b;
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

    <div class="title-block">
      <div class="badge-privado">🔒 Uso Exclusivo do Professor (Material Off-Screen)</div>
      <div class="main-title">GABARITO OFICIAL &amp; GUIA DE CORREÇÃO</div>
      <div class="main-subtitle">Resoluções Passo a Passo • Critérios de Avaliação • Lição de Casa Aula 10</div>
    </div>

    <div class="lesson-meta">
      <div><strong>Turma:</strong> 1º Ano • <strong>Aula:</strong> Aula 10</div>
      <div><strong>Tema:</strong> Lei dos Senos e Lei dos Cossenos</div>
      <div><strong>Valor:</strong> 20 Pontos</div>
    </div>

    <!-- QUESTÃO 1 -->
    <div class="q-box">
      <div class="q-header">
        <span class="q-title">Questão 1 — Aplicação Direta: Lei dos Senos e Lei dos Cossenos</span>
        <span class="q-points">Valor: 6,0 Pontos (1,5 pt cada)</span>
      </div>

      <div style="font-size: 11.5px; margin-bottom: 4px;">
        <strong>Conceito:</strong> Lei dos Senos (<span class="calc-row">a/sen A = b/sen B</span>) e Lei dos Cossenos (<span class="calc-row">a² = b² + c² - 2·b·c·cos A</span>).
      </div>

      <table class="table-res">
        <thead>
          <tr>
            <th>Item</th>
            <th>Dados</th>
            <th>Resolução Passo a Passo</th>
            <th>Resposta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Exemplo</strong></td>
            <td>A=30°, B=45°, a=8 cm</td>
            <td>8 / (1/2) = b / (√2/2) ⟹ b = 8√2 cm</td>
            <td><span class="answer-tag">8√2 cm</span></td>
          </tr>
          <tr>
            <td><strong>Item A</strong></td>
            <td>A=30°, B=60°, a=10 cm</td>
            <td>10 / (1/2) = b / (√3/2) ⟹ b = 10√3 cm</td>
            <td><span class="answer-tag">10√3 cm</span></td>
          </tr>
          <tr>
            <td><strong>Item B</strong></td>
            <td>a=6√2, A=45°, b=6 cm</td>
            <td>6√2 / (√2/2) = 6 / sen B ⟹ 12 = 6 / sen B ⟹ sen B = 1/2 ⟹ B = 30°</td>
            <td><span class="answer-tag">30°</span></td>
          </tr>
          <tr>
            <td><strong>Item C</strong></td>
            <td>b=3, c=8 cm, A=60°</td>
            <td>a² = 3² + 8² - 2·3·8·(1/2) = 9 + 64 - 24 = 49 ⟹ a = √49 = 7 cm</td>
            <td><span class="answer-tag">7 cm</span></td>
          </tr>
          <tr>
            <td><strong>Item D</strong></td>
            <td>b=6, c=8 cm, A=90°</td>
            <td>a² = 6² + 8² - 2·6·8·cos 90° = 36 + 64 - 0 = 100 ⟹ a = √100 = 10 cm</td>
            <td><span class="answer-tag">10 cm</span></td>
          </tr>
        </tbody>
      </table>

      <div class="pitfall">
        ⚠️ <strong>Atenção na correção:</strong> No Item C, verifique se o aluno respeitou a prioridade da multiplicação (48 · 0,5 = 24) antes de subtrair de 73.
      </div>
    </div>

    <!-- QUESTÃO 2 -->
    <div class="q-box" style="margin-bottom: 0;">
      <div class="q-header">
        <span class="q-title">Questão 2 — Situação Real: Medindo a Distância no Rio com a Lei dos Senos</span>
        <span class="q-points">Valor: 7,0 Pontos (Item A: 3,0 pt | Item B: 4,0 pt)</span>
      </div>

      <div class="step-box" style="margin-top: 4px;">
        <strong>Item a) Terceiro Ângulo Ĉ e Pares Opostos (3,0 pontos):</strong>
        <div class="calc-row">• Soma dos ângulos internos: Ĉ = 180° - (45° + 105°) = 180° - 150° = 30° (1,5 pt)</div>
        <p style="margin: 2px 0; color: #1e3a8a;">
          • <strong>Pares opostos (1,5 pt):</strong> O lado oposto ao ângulo Â (45°) é <strong>BC = a = 20 m</strong>, e o lado oposto ao ângulo Ĉ (30°) é <strong>AB = c</strong>.
        </p>
      </div>

      <div class="step-box" style="margin-top: 5px;">
        <strong>Item b) Proporção da Lei dos Senos e Cálculo de c = AB (4,0 pontos):</strong>
        <div class="calc-row">• Montagem: c / sen 30° = 20 / sen 45° (1,5 pt)</div>
        <div class="calc-row">• Substituição: c / (1/2) = 20 / (√2/2) ⟹ c · √2 = 20 (1,0 pt)</div>
        <div class="calc-row">• Racionalização: c = 20 / √2 = (20√2)/2 = 10√2 metros (1,5 pt)</div>
        <div style="margin-top: 3px;">
          <strong>Resposta Final:</strong> <span class="answer-tag">c = 10√2 metros (ou ≈ 14,14 m)</span>
        </div>
      </div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Ficha Técnica do Professor</span>
      <span>Página 1 de 2</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 2 ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA</div>
    </div>

    <!-- QUESTÃO 3 -->
    <div class="q-box">
      <div class="q-header">
        <span class="q-title">Questão 3 — Lei dos Cossenos e o Teorema de Pitágoras como Caso Específico</span>
        <span class="q-points">Valor: 7,0 Pontos (A: 2,5 pt | B: 2,5 pt | C: 2,0 pt)</span>
      </div>

      <div class="step-box">
        <strong>Item a) Cálculo do lado a = BC com b = 6, c = 10 e Â = 60° (2,5 pontos):</strong>
        <div class="calc-row">• a² = 6² + 10² - 2 · 6 · 10 · cos 60° = 36 + 100 - 120 · (1/2)</div>
        <div class="calc-row">• a² = 136 - 60 = 76 ⟹ a = √76 = 2√19 cm</div>
        <div><strong>Resposta:</strong> <span class="answer-tag">a = √76 cm (ou 2√19 cm ≈ 8,72 cm)</span></div>
      </div>

      <div class="step-box" style="margin-top: 6px;">
        <strong>Item b) Cálculo do ângulo Â dados os lados a = 7, b = 5 e c = 3 (2,5 pontos):</strong>
        <div class="calc-row">• 7² = 5² + 3² - 2 · 5 · 3 · cos Â ⟹ 49 = 25 + 9 - 30 · cos Â</div>
        <div class="calc-row">• 49 - 34 = -30 · cos Â ⟹ 15 = -30 · cos Â ⟹ cos Â = -15/30 = -1/2</div>
        <div style="margin-top: 4px;">
          <strong>Respostas:</strong> <span class="answer-tag">cos Â = -1/2</span> e <span class="answer-tag">Â = 120°</span>
        </div>
      </div>

      <div class="step-box" style="margin-top: 6px;">
        <strong>Item c) Demonstração de Pitágoras como Caso Específico da Lei dos Cossenos (2,0 pontos):</strong>
        <div class="calc-row">• Substituindo Â = 90°: a² = b² + c² - 2·b·c·cos 90°</div>
        <div class="calc-row">• Como cos 90° = 0: a² = b² + c² - 2·b·c·0 ⟹ a² = b² + c²</div>
        <p style="margin-top: 2px; color: #1e3a8a;">
          <strong>Justificativa esperada:</strong> Quando o triângulo é retângulo (Â = 90°), o cosseno de 90° vale zero, anulando o termo corretivo (-2·b·c·cos Â) da Lei dos Cossenos e reduzindo-a exatamente ao Teorema de Pitágoras.
        </p>
      </div>
    </div>

    <!-- CRITÉRIOS DE CORREÇÃO E PONTUAÇÃO GERAL -->
    <div class="q-box" style="background: #f8fafc; border-color: #94a3b8; margin-bottom: 0;">
      <div class="q-header">
        <span class="q-title" style="color: #334155;">Rubrica Resumida de Pontuação (Total: 20 Pontos)</span>
        <span class="q-points" style="background:#e0e7ff; color:#3730a3; border-color:#c7d2fe;">Nota Oficial: 0 a 20</span>
      </div>

      <table class="table-res" style="background: #ffffff;">
        <thead>
          <tr>
            <th>Questão / Item</th>
            <th>Critério de Avaliação</th>
            <th>Pontuação Máxima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Q1 (Itens A, B, C, D)</strong></td>
            <td>Escolha e aplicação correta da Lei dos Senos e dos Cossenos (1,5 pt cada)</td>
            <td><strong>6,0 pts</strong></td>
          </tr>
          <tr>
            <td><strong>Q2 (Item A)</strong></td>
            <td>Cálculo de Ĉ = 30° pela soma de 180° e identificação dos lados opostos</td>
            <td><strong>3,0 pts</strong></td>
          </tr>
          <tr>
            <td><strong>Q2 (Item B)</strong></td>
            <td>Montagem da proporção da Lei dos Senos e cálculo de c = 10√2 m</td>
            <td><strong>4,0 pts</strong></td>
          </tr>
          <tr>
            <td><strong>Q3 (Item A)</strong></td>
            <td>Cálculo do terceiro lado pela Lei dos Cossenos: a = √76 = 2√19 cm</td>
            <td><strong>2,5 pts</strong></td>
          </tr>
          <tr>
            <td><strong>Q3 (Item B)</strong></td>
            <td>Isolamento de cos Â = -1/2 e determinação do ângulo obtuso Â = 120°</td>
            <td><strong>2,5 pts</strong></td>
          </tr>
          <tr>
            <td><strong>Q3 (Item C)</strong></td>
            <td>Substituição de cos 90° = 0 mostrando a redução para a² = b² + c² (Pitágoras)</td>
            <td><strong>2,0 pts</strong></td>
          </tr>
          <tr style="background: #f1f5f9; font-weight: bold;">
            <td colspan="2">TOTAL SOMATIVO DA LIÇÃO DE CASA</td>
            <td style="color: #047857; font-size: 12px;">20,0 PONTOS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Ficha Técnica do Professor</span>
      <span>Página 2 de 2</span>
    </div>
  </div>

</body>
</html>
'''

with open(r'c:\Users\deise\Desktop\Aula10MatMov\generate_gabarito.html', 'w', encoding='utf-8') as f:
    f.write(html_gabarito)
print("Updated generate_gabarito.html successfully!")
