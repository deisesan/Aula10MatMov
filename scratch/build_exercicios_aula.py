with open(r'c:\Users\deise\Desktop\Aula10MatMov\scratch\logo_b64.txt', 'r') as f:
    logo_src = f.read().strip()

html_exercicios = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lista de Exercícios Resolvidos — Aula 10 — Lei dos Senos e Lei dos Cossenos</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 11mm 15mm 11mm 15mm;
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
      min-height: 273mm;
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
      margin-bottom: 8px;
      padding-bottom: 5px;
      border-bottom: 2px solid #466c9b;
    }}

    .header-logo {{
      height: 38px;
      object-fit: contain;
    }}

    .header-title {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 19px;
      color: #466c9b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }}

    .title-banner {{
      background: #f0f6ff;
      border: 1.5px solid #bfdbfe;
      border-left: 6px solid #466c9b;
      border-radius: 8px;
      padding: 8px 12px;
      margin-bottom: 9px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}

    .title-banner h1 {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 18px;
      color: #466c9b;
      letter-spacing: 0.5px;
      font-weight: normal;
    }}

    .title-banner p {{
      font-size: 11px;
      color: #334155;
      font-weight: 600;
    }}

    .formula-strip {{
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 7px;
      padding: 5px 10px;
      margin-bottom: 9px;
      font-size: 10.5px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 4px;
    }}

    .ex-card {{
      border: 1.3px solid #cbd5e1;
      border-radius: 9px;
      padding: 8px 12px;
      margin-bottom: 8px;
      background: #ffffff;
    }}

    .ex-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 3px;
      margin-bottom: 5px;
    }}

    .ex-num {{
      font-size: 12px;
      font-weight: 800;
      color: #466c9b;
      text-transform: uppercase;
    }}

    .ex-tag {{
      font-size: 9.5px;
      font-weight: 700;
      padding: 1.5px 7px;
      border-radius: 10px;
      background: #e0e7ff;
      color: #3730a3;
    }}

    .ex-tag.cos {{
      background: #fef3c7;
      color: #92400e;
    }}

    .ex-tag.pit {{
      background: #dcfce7;
      color: #166534;
    }}

    .ex-body {{
      display: flex;
      gap: 12px;
      align-items: center;
    }}

    .ex-text {{
      flex: 1;
      font-size: 11.2px;
      color: #0f172a;
      text-align: justify;
    }}

    .ex-diagram {{
      width: 155px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 7px;
      padding: 3px;
    }}

    .sol-box {{
      margin-top: 5px;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-left: 4px solid #16a34a;
      padding: 5px 9px;
      border-radius: 0 6px 6px 0;
      font-size: 10.8px;
    }}

    .sol-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2px;
      font-weight: 700;
      color: #166534;
      font-size: 10.8px;
    }}

    .calc {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.3px;
      color: #0f172a;
      margin: 1.5px 0;
    }}

    .ans-badge {{
      display: inline-block;
      background: #16a34a;
      color: #ffffff;
      font-weight: 800;
      padding: 1px 7px;
      border-radius: 4px;
      font-size: 10.2px;
    }}

    .footer-note {{
      margin-top: auto;
      padding-top: 5px;
      border-top: 1px dashed #cbd5e1;
      display: flex;
      justify-content: space-between;
      font-size: 9.5px;
      color: #64748b;
    }}
  </style>
</head>
<body>

  <!-- ==================== PÁGINA 1: EXERCÍCIOS 1 A 5 (LEI DOS SENOS) ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA — AULA 10</div>
    </div>

    <div class="title-banner">
      <div>
        <h1>LISTA DE EXERCÍCIOS COM SOLUÇÕES PASSO A PASSO</h1>
        <p>Parte 1: Lei dos Senos (Encontrar Lados, Ângulos, Soma de 180° e Raio R)</p>
      </div>
      <div style="text-align: right; font-size: 10.5px; font-weight: 700; color: #466c9b;">
        1º Ano • Ensino Médio<br>Exercícios 1 a 5
      </div>
    </div>

    <div class="formula-strip">
      <div><strong>Lei dos Senos:</strong> a / sen Â = b / sen B̂ = c / sen Ĉ = 2R</div>
      <div><strong>Soma Interna:</strong> Â + B̂ + Ĉ = 180°</div>
      <div><strong>Tabela:</strong> sen 30° = 1/2 | sen 45° = √2/2 | sen 60° = √3/2</div>
    </div>

    <!-- EXERCÍCIO 1 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 1 — Encontrando um Lado Desconhecido (Aplicação Direta)</span>
        <span class="ex-tag">Lei dos Senos • Lado</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Em um triângulo <strong>ABC</strong>, sabemos que o ângulo <strong>Â = 30°</strong>, o ângulo <strong>B̂ = 45°</strong> e o lado oposto ao vértice A mede <strong>a = 12 cm</strong>. Utilizando a Lei dos Senos, determine a medida <strong>b</strong> do lado oposto ao vértice B.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="18,72 152,72 105,12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
            <text x="34" y="66" fill="#d97706" font-size="9.5" font-weight="bold">30°</text>
            <text x="116" y="66" fill="#0284c7" font-size="9.5" font-weight="bold">45°</text>
            <text x="133" y="42" fill="#d97706" font-size="10" font-weight="bold">12 cm</text>
            <text x="52" y="40" fill="#e11d48" font-size="10.5" font-weight="bold" text-anchor="end">b = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: b = 12√2 cm</span>
        </div>
        <div class="calc">1) Pares opostos: lado 12 oposto a 30° e lado b oposto a 45° ⟹ b / sen 45° = 12 / sen 30°</div>
        <div class="calc">2) Substituindo sen 45° = √2/2 e sen 30° = 1/2:  b / (√2 / 2) = 12 / (1 / 2)</div>
        <div class="calc">3) Simplificando os denominadores "/2":  b / √2 = 12 / 1 ⟹ <strong>b = 12√2 cm</strong></div>
      </div>
    </div>

    <!-- EXERCÍCIO 2 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 2 — Soma dos Ângulos Internos (180°) + Lei dos Senos</span>
        <span class="ex-tag">Lei dos Senos • 3º Ângulo</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          No triângulo <strong>ABC</strong>, os ângulos da base medem <strong>Â = 75°</strong> e <strong>B̂ = 45°</strong>, e o lado <strong>AC = b = 10 m</strong>. Determine a medida do terceiro ângulo <strong>Ĉ</strong> e calcule o lado <strong>c = AB</strong> oposto ao ângulo Ĉ.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="22,68 148,68 78,10" fill="#fef3c7" fill-opacity="0.4" stroke="#d97706" stroke-width="2"/>
            <text x="35" y="62" fill="#475569" font-size="9.5" font-weight="bold">75°</text>
            <text x="115" y="62" fill="#0284c7" font-size="9.5" font-weight="bold">45°</text>
            <text x="78" y="27" fill="#059669" font-size="9.5" font-weight="bold" text-anchor="middle">Ĉ=?</text>
            <text x="42" y="38" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="end">10 m</text>
            <text x="85" y="79" fill="#e11d48" font-size="10" font-weight="bold" text-anchor="middle">c = AB = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: Ĉ = 60° e c = 5√6 m</span>
        </div>
        <div class="calc">1) 3º ângulo pela soma de 180°: Ĉ = 180° - (75° + 45°) = 180° - 120° ⟹ <strong>Ĉ = 60°</strong></div>
        <div class="calc">2) Lei dos Senos com os pares (b=10, 45°) e (c, 60°): c / sen 60° = 10 / sen 45° ⟹ c / (√3/2) = 10 / (√2/2)</div>
        <div class="calc">3) Cortando "/2" e racionalizando: c·√2 = 10√3 ⟹ c = (10√3)/√2 = 10√6 / 2 ⟹ <strong>c = 5√6 m</strong></div>
      </div>
    </div>

    <!-- EXERCÍCIO 3 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 3 — Encontrando um Ângulo Desconhecido pela Lei dos Senos</span>
        <span class="ex-tag">Lei dos Senos • Ângulo</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Em um triângulo <strong>ABC</strong>, o lado <strong>a = 6√3 cm</strong> é oposto ao ângulo <strong>Â = 60°</strong>, enquanto o lado <strong>b = 6 cm</strong> é oposto ao ângulo agudo <strong>B̂</strong>. Calcule <strong>sen B̂</strong> e determine a medida dos ângulos <strong>B̂</strong> e <strong>Ĉ</strong>.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="22,72 148,72 72,12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <text x="36" y="65" fill="#d97706" font-size="9.5" font-weight="bold">60°</text>
            <text x="112" y="65" fill="#e11d48" font-size="9.5" font-weight="bold">B̂ = ?</text>
            <text x="118" y="38" fill="#d97706" font-size="10" font-weight="bold">6√3 cm</text>
            <text x="40" y="38" fill="#16a34a" font-size="10" font-weight="bold" text-anchor="end">6 cm</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: B̂ = 30° e Ĉ = 90°</span>
        </div>
        <div class="calc">1) Lei dos Senos: 6√3 / sen 60° = 6 / sen B̂ ⟹ 6√3 / (√3 / 2) = 6 / sen B̂</div>
        <div class="calc">2) Simplificando √3 no lado esquerdo: 12 = 6 / sen B̂ ⟹ sen B̂ = 6 / 12 = <strong>1/2</strong></div>
        <div class="calc">3) Como sen 30° = 1/2, temos <strong>B̂ = 30°</strong>. Logo, Ĉ = 180° - (60° + 30°) = <strong>90°</strong>.</div>
      </div>
    </div>

    <!-- EXERCÍCIO 4 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 4 — Lei dos Senos e o Raio da Circunferência Circunscrita (2R)</span>
        <span class="ex-tag">Lei dos Senos • 2R</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Três quiosques (A, B e C) estão localizados na borda de uma praça circular de raio <strong>R</strong>. Sabendo que o ângulo <strong>Â = 30°</strong> é oposto à corda <strong>BC = a = 15 m</strong>, use a relação <strong>a / sen Â = 2R</strong> para encontrar o diâmetro e o raio dessa praça.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <!-- Center (85, 42), r = 34: A(55, 58), B(115, 58), C(79, 8.5) all on circle! -->
            <circle cx="85" cy="42" r="34" fill="#faf5ff" stroke="#9333ea" stroke-width="1.6" stroke-dasharray="4 3"/>
            <polygon points="55,58 115,58 79,8.5" fill="rgba(99,102,241,0.1)" stroke="#6366f1" stroke-width="2"/>
            <circle cx="55" cy="58" r="2.2" fill="#d97706"/>
            <circle cx="115" cy="58" r="2.2" fill="#6366f1"/>
            <circle cx="79" cy="8.5" r="2.2" fill="#6366f1"/>
            <text x="63" y="54" fill="#d97706" font-size="9" font-weight="bold">30°</text>
            <text x="104" y="32" fill="#6366f1" font-size="9.5" font-weight="bold">15 m</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Diâmetro 2R = 30 m | Raio R = 15 m</span>
        </div>
        <div class="calc">1) Pela relação do círculo circunscrito: a / sen Â = 2R ⟹ 15 / sen 30° = 2R</div>
        <div class="calc">2) Como sen 30° = 1/2:  15 / (1/2) = 2R ⟹ <strong>2R = 30 m (diâmetro)</strong> ⟹ <strong>R = 15 m (raio)</strong>.</div>
      </div>
    </div>

    <!-- EXERCÍCIO 5 -->
    <div class="ex-card" style="margin-bottom: 0;">
      <div class="ex-header">
        <span class="ex-num">Exercício 5 — Problema Contextualizado: Medindo a Distância no Rio</span>
        <span class="ex-tag">Lei dos Senos • Topografia</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Para medir a distância entre dois pontos <strong>A</strong> e <strong>B</strong> na mesma margem de um rio, um topógrafo mira uma árvore <strong>C</strong> na outra margem e mede <strong>Â = 45°</strong>, <strong>B̂ = 105°</strong> e <strong>BC = a = 20 m</strong>. Qual é a distância <strong>c = AB</strong>?
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <rect x="10" y="24" width="150" height="24" rx="4" fill="#e0f2fe"/>
            <polygon points="30,68 110,68 125,12" fill="none" stroke="#0284c7" stroke-width="2"/>
            <text x="44" y="63" fill="#d97706" font-size="9" font-weight="bold">45°</text>
            <text x="84" y="62" fill="#7c3aed" font-size="8.5" font-weight="bold">105°</text>
            <text x="126" y="44" fill="#0284c7" font-size="9.5" font-weight="bold">20 m</text>
            <text x="70" y="79" fill="#e11d48" font-size="9.5" font-weight="bold" text-anchor="middle">c = AB = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: c = 10√2 m (≈ 14,14 m)</span>
        </div>
        <div class="calc">1) Ângulo Ĉ na árvore: Ĉ = 180° - (45° + 105°) = 180° - 150° = <strong>30°</strong></div>
        <div class="calc">2) Lei dos Senos: c / sen 30° = 20 / sen 45° ⟹ c / (1/2) = 20 / (√2/2) ⟹ c·√2 = 20 ⟹ <strong>c = 10√2 m</strong>.</div>
      </div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Lista de Exercícios Resolvidos (Aula 10: Lei dos Senos e dos Cossenos)</span>
      <span>Página 1 de 2</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 2: EXERCÍCIOS 6 A 10 (LEI DOS COSSENOS & PITÁGORAS) ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA — AULA 10</div>
    </div>

    <div class="title-banner" style="background: #fffbeb; border-color: #fde68a; border-left-color: #d97706;">
      <div>
        <h1 style="color: #92400e;">LISTA DE EXERCÍCIOS COM SOLUÇÕES PASSO A PASSO</h1>
        <p>Parte 2: Lei dos Cossenos e o Teorema de Pitágoras como Caso Específico</p>
      </div>
      <div style="text-align: right; font-size: 10.5px; font-weight: 700; color: #92400e;">
        1º Ano • Ensino Médio<br>Exercícios 6 a 10
      </div>
    </div>

    <div class="formula-strip">
      <div><strong>Lei dos Cossenos:</strong> a² = b² + c² - 2·b·c·cos Â</div>
      <div><strong>Caso Â = 90°:</strong> cos 90° = 0 ⟹ a² = b² + c² (Pitágoras)</div>
      <div><strong>Valores:</strong> cos 45° = √2/2 | cos 60° = 1/2 | cos 90° = 0 | cos 120° = -1/2</div>
    </div>

    <!-- EXERCÍCIO 6 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 6 — Pitágoras (90°) como Caso Específico vs. Ângulo Agudo (60°)</span>
        <span class="ex-tag pit">Pitágoras vs. Cossenos</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Considere dois lados de medidas <strong>b = 6 cm</strong> e <strong>c = 8 cm</strong> que formam entre si um ângulo <strong>Â</strong>. Pela Lei dos Cossenos (<strong>a² = b² + c² - 2·b·c·cos Â</strong>), calcule o terceiro lado <strong>a</strong> quando: <strong>a) Â = 90°</strong> e <strong>b) Â = 60°</strong>.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <line x1="25" y1="68" x2="140" y2="68" stroke="#2563eb" stroke-width="2.2"/>
            <line x1="25" y1="68" x2="25" y2="14" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="3 3"/>
            <line x1="25" y1="68" x2="70" y2="18" stroke="#d97706" stroke-width="2.2"/>
            <line x1="70" y1="18" x2="140" y2="68" stroke="#e11d48" stroke-width="2"/>
            <text x="82" y="79" fill="#2563eb" font-size="9.5" font-weight="bold" text-anchor="middle">c = 8 cm</text>
            <text x="42" y="38" fill="#d97706" font-size="9.5" font-weight="bold">b=6</text>
            <text x="115" y="38" fill="#e11d48" font-size="10" font-weight="bold">a = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">a) 10 cm (Pitágoras) | b) 2√13 cm</span>
        </div>
        <div class="calc">a) Para Â = 90° (cos 90° = 0): a² = 6² + 8² - 2·6·8·(0) = 36 + 64 - 0 = 100 ⟹ <strong>a = 10 cm</strong> (Teorema de Pitágoras!).</div>
        <div class="calc">b) Para Â = 60° (cos 60° = 1/2): a² = 36 + 64 - 2·6·8·(1/2) = 100 - 48 = 52 ⟹ a = √52 = <strong>2√13 cm (≈ 7,21 cm)</strong>.</div>
      </div>
    </div>

    <!-- EXERCÍCIO 7 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 7 — Encontrando Lado Desconhecido (Caso LAL — Ângulo de 60°)</span>
        <span class="ex-tag cos">Lei dos Cossenos • Lado</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Dois lados de um terreno triangular medem <strong>b = 5 m</strong> e <strong>c = 8 m</strong> e formam entre si um ângulo de <strong>60°</strong>. Qual é o comprimento <strong>a</strong> da cerca necessária para fechar o terceiro lado oposto ao ângulo de 60°?
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="22,68 148,68 70,14" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
            <text x="38" y="62" fill="#d97706" font-size="9.5" font-weight="bold">60°</text>
            <text x="38" y="38" fill="#0f172a" font-size="9.5" font-weight="bold" text-anchor="end">5 m</text>
            <text x="85" y="79" fill="#0f172a" font-size="9.5" font-weight="bold" text-anchor="middle">8 m</text>
            <text x="118" y="38" fill="#e11d48" font-size="10" font-weight="bold">a = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: a = 7 metros</span>
        </div>
        <div class="calc">1) Lei dos Cossenos: a² = 5² + 8² - 2 · 5 · 8 · cos 60° ⟹ a² = 25 + 64 - 80 · (1/2)</div>
        <div class="calc">2) Multiplicando antes de subtrair: a² = 89 - 40 = 49 ⟹ a = √49 ⟹ <strong>a = 7 metros</strong>.</div>
      </div>
    </div>

    <!-- EXERCÍCIO 8 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 8 — Lei dos Cossenos com Ângulo de 45° e Radical</span>
        <span class="ex-tag cos">Lei dos Cossenos • 45°</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Em um triângulo <strong>ABC</strong>, os lados adjacentes ao ângulo <strong>Â = 45°</strong> medem <strong>b = 4√2 cm</strong> e <strong>c = 5 cm</strong>. Sabendo que <strong>cos 45° = √2 / 2</strong>, determine a medida exata do lado <strong>a</strong> oposto ao ângulo Â.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="24,68 146,68 76,14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
            <text x="40" y="62" fill="#d97706" font-size="9.5" font-weight="bold">45°</text>
            <text x="42" y="38" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="end">4√2 cm</text>
            <text x="85" y="79" fill="#1e40af" font-size="9.5" font-weight="bold" text-anchor="middle">5 cm</text>
            <text x="118" y="38" fill="#e11d48" font-size="10" font-weight="bold">a = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: a = √17 cm</span>
        </div>
        <div class="calc">1) Lei dos Cossenos: a² = (4√2)² + 5² - 2 · (4√2) · 5 · cos 45°</div>
        <div class="calc">2) Como (4√2)² = 16·2 = 32 e cos 45° = √2/2:  a² = 32 + 25 - 40√2 · (√2 / 2)</div>
        <div class="calc">3) Como √2 · √2 = 2, cortamos com "/2":  a² = 57 - 40 = 17 ⟹ <strong>a = √17 cm (≈ 4,12 cm)</strong>.</div>
      </div>
    </div>

    <!-- EXERCÍCIO 9 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 9 — Lei dos Cossenos com Ângulo Obtuso (120°)</span>
        <span class="ex-tag cos">Lei dos Cossenos • 120°</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Dois navios partem de um mesmo porto P em linha reta, com rotas que formam um ângulo obtuso de <strong>120°</strong> entre si. Num determinado instante, um navegou <strong>3 km</strong> e o outro <strong>5 km</strong>. Qual é a distância <strong>d</strong> entre eles? (Dado: <strong>cos 120° = -1/2</strong>).
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="62,68 152,68 18,16" fill="#faf5ff" stroke="#7c3aed" stroke-width="2"/>
            <text x="68" y="59" fill="#7c3aed" font-size="9" font-weight="bold">120°</text>
            <text x="34" y="52" fill="#0f172a" font-size="9.5" font-weight="bold" text-anchor="end">3 km</text>
            <text x="108" y="79" fill="#0f172a" font-size="9.5" font-weight="bold" text-anchor="middle">5 km</text>
            <text x="95" y="36" fill="#e11d48" font-size="10" font-weight="bold">d = ?</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">Resposta: d = 7 km</span>
        </div>
        <div class="calc">1) Lei dos Cossenos: d² = 3² + 5² - 2 · 3 · 5 · cos 120° ⟹ d² = 9 + 25 - 30 · (-1/2)</div>
        <div class="calc">2) Atenção ao sinal (menos com menos dá MAIS!): d² = 34 + 15 = 49 ⟹ d = √49 ⟹ <strong>d = 7 km</strong>.</div>
      </div>
    </div>

    <!-- EXERCÍCIO 10 -->
    <div class="ex-card" style="margin-bottom: 0;">
      <div class="ex-header">
        <span class="ex-num">Exercício 10 — Encontrando um Ângulo quando Conhecemos os 3 Lados (Caso LLL)</span>
        <span class="ex-tag cos">Lei dos Cossenos • Ângulo</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Um triângulo possui lados medindo <strong>a = 7 cm</strong>, <strong>b = 5 cm</strong> e <strong>c = 3 cm</strong>. Sabendo que o ângulo <strong>Â</strong> é oposto ao lado <strong>a = 7 cm</strong>, aplique a Lei dos Cossenos para calcular <strong>cos Â</strong> e descobrir a medida do ângulo <strong>Â</strong>.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 170 82" width="145" height="70">
            <polygon points="62,68 150,68 20,16" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
            <text x="68" y="59" fill="#e11d48" font-size="9.5" font-weight="bold">Â = ?</text>
            <text x="34" y="52" fill="#0f172a" font-size="9.5" font-weight="bold" text-anchor="end">5 cm</text>
            <text x="106" y="79" fill="#0f172a" font-size="9.5" font-weight="bold" text-anchor="middle">3 cm</text>
            <text x="96" y="36" fill="#0284c7" font-size="10" font-weight="bold">a = 7 cm</text>
          </svg>
        </div>
      </div>
      <div class="sol-box">
        <div class="sol-header">
          <span>✓ Resolução Passo a Passo:</span>
          <span class="ans-badge">cos Â = -1/2 ⟹ Â = 120°</span>
        </div>
        <div class="calc">1) Isolando o lado 7 (oposto a Â): 7² = 5² + 3² - 2 · 5 · 3 · cos Â ⟹ 49 = 25 + 9 - 30 · cos Â</div>
        <div class="calc">2) Isolando cos Â: 49 - 34 = -30 · cos Â ⟹ 15 = -30 · cos Â ⟹ cos Â = -15/30 = <strong>-1/2</strong> ⟹ <strong>Â = 120°</strong>.</div>
      </div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Lista de Exercícios Resolvidos (Aula 10: Lei dos Senos e dos Cossenos)</span>
      <span>Página 2 de 2</span>
    </div>
  </div>

</body>
</html>
'''

with open(r'c:\Users\deise\Desktop\Aula10MatMov\generate_exercicios_aula.html', 'w', encoding='utf-8') as f:
    f.write(html_exercicios)
print("Updated generate_exercicios_aula.html with 10 solved exercises successfully!")
