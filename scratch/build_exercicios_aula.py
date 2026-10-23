with open(r'c:\Users\deise\Desktop\Aula10MatMov\scratch\logo_b64.txt', 'r') as f:
    logo_src = f.read().strip()

html_exercicios = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Caderno de Exercícios de Aula — Aula 10 — Lei dos Senos e Lei dos Cossenos</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 portrait;
      margin: 12mm 16mm 12mm 16mm;
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
      line-height: 1.42;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    .page {{
      width: 100%;
      min-height: 271mm;
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
      margin-bottom: 10px;
      padding-bottom: 6px;
      border-bottom: 2px solid #466c9b;
    }}

    .header-logo {{
      height: 42px;
      object-fit: contain;
    }}

    .header-title {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 20px;
      color: #466c9b;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }}

    .title-banner {{
      background: #f0f6ff;
      border: 1.5px solid #bfdbfe;
      border-left: 6px solid #466c9b;
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}

    .title-banner h1 {{
      font-family: 'Luckiest Guy', cursive, sans-serif;
      font-size: 20px;
      color: #466c9b;
      letter-spacing: 0.5px;
      font-weight: normal;
    }}

    .title-banner p {{
      font-size: 11.5px;
      color: #334155;
      font-weight: 600;
    }}

    .formula-strip {{
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 7px 12px;
      margin-bottom: 12px;
      font-size: 11px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 6px;
    }}

    .ex-card {{
      border: 1.3px solid #cbd5e1;
      border-radius: 10px;
      padding: 10px 14px;
      margin-bottom: 11px;
      background: #ffffff;
    }}

    .ex-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 4px;
      margin-bottom: 7px;
    }}

    .ex-num {{
      font-size: 12.5px;
      font-weight: 800;
      color: #466c9b;
      text-transform: uppercase;
    }}

    .ex-tag {{
      font-size: 10px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 12px;
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
      gap: 14px;
      align-items: center;
    }}

    .ex-text {{
      flex: 1;
      font-size: 12px;
      color: #0f172a;
      text-align: justify;
    }}

    .ex-diagram {{
      width: 175px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 4px;
    }}

    .work-grid {{
      margin-top: 8px;
      height: 54px;
      border: 1px dashed #94a3b8;
      border-radius: 6px;
      background-image: linear-gradient(to right, rgba(148, 163, 184, 0.18) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px);
      background-size: 14px 14px;
      padding: 4px 8px;
      font-size: 10px;
      color: #64748b;
    }}

    .sol-box {{
      margin-top: 6px;
      background: #f8fafc;
      border-left: 3.5px solid #10b981;
      padding: 6px 10px;
      border-radius: 0 6px 6px 0;
      font-size: 11.5px;
    }}

    .calc {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #0f172a;
      margin: 2px 0;
    }}

    .ans-badge {{
      display: inline-block;
      background: #dcfce7;
      color: #15803d;
      font-weight: 800;
      padding: 1px 7px;
      border-radius: 4px;
      border: 1px solid #86efac;
      font-size: 11px;
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

  <!-- ==================== PÁGINA 1: BLOCO 1 (LEI DOS SENOS) ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA — AULA 10</div>
    </div>

    <div class="title-banner">
      <div>
        <h1>CADERNO DE EXERCÍCIOS DE AULA (RESOLUÇÃO COM A TURMA)</h1>
        <p>Tema: Lei dos Senos, Lei dos Cossenos e o Caso Específico do Teorema de Pitágoras</p>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: 700; color: #466c9b;">
        1º Ano<br>Bloco 1: Lei dos Senos
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
          <svg viewBox="0 0 180 105" width="165" height="95">
            <polygon points="20,90 160,90 110,18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
            <text x="36" y="84" fill="#d97706" font-size="10" font-weight="bold">30°</text>
            <text x="122" y="84" fill="#0284c7" font-size="10" font-weight="bold">45°</text>
            <text x="142" y="52" fill="#d97706" font-size="11" font-weight="bold">12 cm</text>
            <text x="55" y="50" fill="#e11d48" font-size="11" font-weight="bold" text-anchor="end">b = ?</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <!-- EXERCÍCIO 2 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 2 — Usando a Soma dos Ângulos Internos (180°) + Lei dos Senos</span>
        <span class="ex-tag">Lei dos Senos • 3º Ângulo</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          No triângulo <strong>ABC</strong> ao lado, os ângulos da base medem <strong>Â = 75°</strong> e <strong>B̂ = 45°</strong>, e o lado <strong>AC = b = 10 m</strong>.
          <br><strong>a)</strong> Determine a medida do terceiro ângulo <strong>Ĉ</strong>.
          <br><strong>b)</strong> Calcule a medida <strong>c = AB</strong> oposta ao ângulo Ĉ.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <polygon points="25,85 155,85 80,15" fill="#fef3c7" fill-opacity="0.4" stroke="#d97706" stroke-width="2"/>
            <text x="38" y="78" fill="#475569" font-size="10" font-weight="bold">75°</text>
            <text x="122" y="78" fill="#0284c7" font-size="10" font-weight="bold">45°</text>
            <text x="80" y="34" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">Ĉ = ?</text>
            <text x="45" y="48" fill="#0284c7" font-size="11" font-weight="bold" text-anchor="end">10 m</text>
            <text x="90" y="99" fill="#e11d48" font-size="11" font-weight="bold" text-anchor="middle">c = AB = ?</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <!-- EXERCÍCIO 3 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 3 — Encontrando um Ângulo Desconhecido</span>
        <span class="ex-tag">Lei dos Senos • Ângulo</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Em um triângulo <strong>ABC</strong>, o lado <strong>a = 6√3 cm</strong> é oposto ao ângulo <strong>Â = 60°</strong>, enquanto o lado <strong>b = 6 cm</strong> é oposto ao ângulo agudo <strong>B̂</strong>. Calcule o valor de <strong>sen B̂</strong> e determine quantos graus mede o ângulo <strong>B̂</strong> (e também o terceiro ângulo <strong>Ĉ</strong>).
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <polygon points="25,88 155,88 75,18" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <text x="40" y="80" fill="#d97706" font-size="10" font-weight="bold">60°</text>
            <text x="118" y="80" fill="#e11d48" font-size="10" font-weight="bold">B̂ = ?</text>
            <text x="125" y="48" fill="#d97706" font-size="10.5" font-weight="bold">6√3 cm</text>
            <text x="42" y="48" fill="#16a34a" font-size="10.5" font-weight="bold" text-anchor="end">6 cm</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <!-- EXERCÍCIO 4 -->
    <div class="ex-card" style="margin-bottom: 0;">
      <div class="ex-header">
        <span class="ex-num">Exercício 4 — Lei dos Senos e o Raio da Circunferência Circunscrita (2R)</span>
        <span class="ex-tag">Lei dos Senos • 2R</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Três quiosques (A, B e C) estão localizados na borda de uma praça circular de raio <strong>R</strong>. Sabendo que o ângulo <strong>Â = 30°</strong> enxerga a distância <strong>BC = a = 15 metros</strong>, use a relação <strong>a / sen Â = 2R</strong> para encontrar o diâmetro (2R) e o raio (R) dessa praça.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <circle cx="90" cy="52" r="44" fill="#faf5ff" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="4 3"/>
            <polygon points="52,75 128,75 80,10" fill="none" stroke="#6366f1" stroke-width="2"/>
            <text x="64" y="70" fill="#d97706" font-size="9.5" font-weight="bold">30°</text>
            <text x="115" y="42" fill="#6366f1" font-size="10" font-weight="bold">15 m</text>
            <text x="90" y="92" fill="#9333ea" font-size="10" font-weight="bold" text-anchor="middle">R = ?</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Material de Resolução em Sala (Aula 10)</span>
      <span>Página 1 de 4 (Enunciados — Bloco 1)</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 2: BLOCO 2 (LEI DOS COSSENOS & PITÁGORAS) ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">ENSINO DE MATEMÁTICA — AULA 10</div>
    </div>

    <div class="title-banner">
      <div>
        <h1>CADERNO DE EXERCÍCIOS DE AULA — BLOCO 2</h1>
        <p>Tema: Lei dos Cossenos e o Teorema de Pitágoras como Caso Específico</p>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: 700; color: #466c9b;">
        1º Ano<br>Bloco 2: Lei dos Cossenos
      </div>
    </div>

    <div class="formula-strip">
      <div><strong>Lei dos Cossenos:</strong> a² = b² + c² - 2·b·c·cos Â</div>
      <div><strong>Caso Â = 90°:</strong> cos 90° = 0 ⟹ a² = b² + c² (Pitágoras)</div>
      <div><strong>Valores:</strong> cos 60° = 1/2 | cos 90° = 0 | cos 120° = -1/2</div>
    </div>

    <!-- EXERCÍCIO 5 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 5 — Comparando Pitágoras (90°) com a Lei dos Cossenos (60°)</span>
        <span class="ex-tag pit">Pitágoras vs. Cossenos</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Considere dois lados de medidas fixas <strong>b = 6 cm</strong> e <strong>c = 8 cm</strong> que formam entre si um ângulo <strong>Â</strong>. Usando a Lei dos Cossenos (<strong>a² = b² + c² - 2·b·c·cos Â</strong>), calcule o terceiro lado <strong>a</strong> em dois casos:
          <br><strong>a) Quando Â = 90°</strong> (mostre que o termo do cosseno zera e recai no Teorema de Pitágoras).
          <br><strong>b) Quando Â = 60°</strong> (onde cos 60° = 1/2). Compare: o lado <em>a</em> ficou menor ou maior que 10 cm?
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <line x1="25" y1="85" x2="145" y2="85" stroke="#2563eb" stroke-width="2.5"/>
            <line x1="25" y1="85" x2="25" y2="20" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3 3"/>
            <line x1="25" y1="85" x2="75" y2="25" stroke="#d97706" stroke-width="2.5"/>
            <line x1="75" y1="25" x2="145" y2="85" stroke="#e11d48" stroke-width="2.2"/>
            <text x="85" y="98" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">c = 8 cm</text>
            <text x="45" y="48" fill="#d97706" font-size="10" font-weight="bold">b = 6</text>
            <text x="122" y="50" fill="#e11d48" font-size="11" font-weight="bold">a = ?</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <!-- EXERCÍCIO 6 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 6 — Encontrando Lado Desconhecido (Caso LAL — Ângulo Agudo)</span>
        <span class="ex-tag cos">Lei dos Cossenos • Lado</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Dois lados de um terreno triangular medem <strong>b = 5 m</strong> e <strong>c = 8 m</strong> e formam entre si um ângulo de <strong>60°</strong>. Qual é o comprimento <strong>a</strong> da cerca necessária para fechar o terceiro lado desse terreno? (Dado: cos 60° = 1/2).
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <polygon points="25,85 155,85 75,20" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
            <text x="42" y="78" fill="#d97706" font-size="10" font-weight="bold">60°</text>
            <text x="42" y="48" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="end">5 m</text>
            <text x="90" y="98" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="middle">8 m</text>
            <text x="125" y="48" fill="#e11d48" font-size="11" font-weight="bold">a = ?</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <!-- EXERCÍCIO 7 -->
    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Exercício 7 — Lei dos Cossenos com Ângulo Obtuso (120°)</span>
        <span class="ex-tag cos">Lei dos Cossenos • 120°</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Dois navios partem de um mesmo porto P em linha reta, com rotas que formam um ângulo obtuso de <strong>120°</strong> entre si. Num determinado instante, um deles navegou <strong>3 km</strong> e o outro navegou <strong>5 km</strong>. Qual é a distância <strong>d</strong> entre os dois navios? (Atenção ao sinal: <strong>cos 120° = -1/2</strong>).
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <polygon points="65,85 160,85 20,25" fill="#faf5ff" stroke="#7c3aed" stroke-width="2"/>
            <text x="72" y="74" fill="#7c3aed" font-size="10" font-weight="bold">120°</text>
            <text x="35" y="65" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="end">3 km</text>
            <text x="112" y="98" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">5 km</text>
            <text x="100" y="46" fill="#e11d48" font-size="11" font-weight="bold">d = ?</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <!-- EXERCÍCIO 8 -->
    <div class="ex-card" style="margin-bottom: 0;">
      <div class="ex-header">
        <span class="ex-num">Exercício 8 — Encontrando um Ângulo quando Conhecemos os 3 Lados (Caso LLL)</span>
        <span class="ex-tag cos">Lei dos Cossenos • Ângulo</span>
      </div>
      <div class="ex-body">
        <div class="ex-text">
          Um triângulo possui lados medindo <strong>a = 7 cm</strong>, <strong>b = 5 cm</strong> e <strong>c = 3 cm</strong>. Sabendo que o maior ângulo interno está oposto ao maior lado (7 cm), aplique a Lei dos Cossenos para calcular <strong>cos Â</strong> e descobrir quantos graus mede o ângulo <strong>Â</strong>.
        </div>
        <div class="ex-diagram">
          <svg viewBox="0 0 180 105" width="165" height="95">
            <polygon points="65,85 155,85 25,25" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
            <text x="72" y="74" fill="#e11d48" font-size="10.5" font-weight="bold">Â = ?</text>
            <text x="38" y="65" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="end">5 cm</text>
            <text x="110" y="98" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">3 cm</text>
            <text x="102" y="46" fill="#0284c7" font-size="11" font-weight="bold">a = 7 cm</text>
          </svg>
        </div>
      </div>
      <div class="work-grid">Espaço para resolução em aula:</div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Material de Resolução em Sala (Aula 10)</span>
      <span>Página 2 de 4 (Enunciados — Bloco 2)</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 3: RESOLUÇÕES PASSO A PASSO DO PROFESSOR (EX 1 A 4) ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">GUIA DE RESOLUÇÃO EM AULA (PROFESSOR)</div>
    </div>

    <div class="title-banner" style="background: #ecfdf5; border-color: #a7f3d0; border-left-color: #059669;">
      <div>
        <h1 style="color: #065f46;">RESOLUÇÕES COMENTADAS PASSO A PASSO (BLOCO 1: LEI DOS SENOS)</h1>
        <p>Roteiro de lousa pronto para o professor copiar/explicar durante a aula</p>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: 700; color: #065f46;">
        Exercícios 1 a 4
      </div>
    </div>

    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 1 (Â = 30°, B̂ = 45°, a = 12 cm ➔ achar b)</span>
        <span class="ans-badge">Resposta: b = 12√2 cm</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>1º Passo (Identificar pares opostos):</strong> O lado 12 é oposto a 30°; o lado b é oposto a 45°.</div>
        <div class="calc"><strong>2º Passo (Montar a Lei dos Senos):</strong> b / sen 45° = 12 / sen 30°</div>
        <div class="calc"><strong>3º Passo (Substituir valores da tabela):</strong> b / (√2 / 2) = 12 / (1 / 2)</div>
        <div class="calc"><strong>4º Passo (Simplificar os denominadores "/2"):</strong> b / √2 = 12 / 1 ⟹ <strong>b = 12√2 cm</strong></div>
      </div>
    </div>

    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 2 (Â = 75°, B̂ = 45°, b = 10 m ➔ achar Ĉ e c)</span>
        <span class="ans-badge">Resposta: Ĉ = 60° e c = 5√6 m</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>Item a) Achar o 3º ângulo Ĉ pela soma de 180°:</strong></div>
        <div class="calc">Ĉ = 180° - (75° + 45°) = 180° - 120° ⟹ <strong>Ĉ = 60°</strong> (Não precisamos do sen 75°!)</div>
        <div class="calc" style="margin-top:4px;"><strong>Item b) Aplicar a Lei dos Senos com os pares (b, 45°) e (c, 60°):</strong></div>
        <div class="calc">c / sen 60° = 10 / sen 45° ⟹ c / (√3 / 2) = 10 / (√2 / 2)</div>
        <div class="calc">Cortando "/2": c · √2 = 10√3 ⟹ c = 10√3 / √2</div>
        <div class="calc">Racionalizando (× √2 / √2): c = 10√6 / 2 ⟹ <strong>c = 5√6 metros</strong></div>
      </div>
    </div>

    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 3 (a = 6√3 cm, Â = 60°, b = 6 cm ➔ achar ângulo B̂)</span>
        <span class="ans-badge">Resposta: B̂ = 30° (e Ĉ = 90°)</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>1º Passo (Montar a Lei dos Senos):</strong> 6√3 / sen 60° = 6 / sen B̂</div>
        <div class="calc"><strong>2º Passo (Substituir sen 60° = √3/2):</strong> 6√3 / (√3 / 2) = 6 / sen B̂</div>
        <div class="calc"><strong>3º Passo (Simplificar √3 no lado esquerdo):</strong> 12 = 6 / sen B̂ ⟹ sen B̂ = 6 / 12 = <strong>1/2</strong></div>
        <div class="calc"><strong>4º Passo (Consultar a tabela):</strong> O ângulo agudo cujo seno vale 1/2 é <strong>B̂ = 30°</strong>.</div>
        <div class="calc"><strong>Complemento:</strong> O terceiro ângulo é Ĉ = 180° - (60° + 30°) = <strong>90°</strong>.</div>
      </div>
    </div>

    <div class="ex-card" style="margin-bottom: 0;">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 4 (Â = 30°, a = 15 m ➔ achar 2R e R)</span>
        <span class="ans-badge">Resposta: Diâmetro = 30 m | R = 15 m</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>1º Passo (Fórmula estendida da Lei dos Senos):</strong> a / sen Â = 2R</div>
        <div class="calc"><strong>2º Passo (Substituir a = 15 e sen 30° = 1/2):</strong> 15 / (1/2) = 2R</div>
        <div class="calc"><strong>3º Passo (Divisão por 1/2 equivale a multiplicar por 2):</strong> 2R = 30 metros (diâmetro)</div>
        <div class="calc"><strong>4º Passo (Achar o raio R):</strong> R = 30 / 2 ⟹ <strong>R = 15 metros</strong>.</div>
      </div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Guia de Lousa do Professor (Aula 10)</span>
      <span>Página 3 de 4 (Resoluções — Bloco 1)</span>
    </div>
  </div>

  <!-- ==================== PÁGINA 4: RESOLUÇÕES PASSO A PASSO DO PROFESSOR (EX 5 A 8) ==================== -->
  <div class="page">
    <div class="header">
      <img src="{logo_src}" alt="MAT MOV" class="header-logo" />
      <div class="header-title">GUIA DE RESOLUÇÃO EM AULA (PROFESSOR)</div>
    </div>

    <div class="title-banner" style="background: #fffbeb; border-color: #fde68a; border-left-color: #d97706;">
      <div>
        <h1 style="color: #92400e;">RESOLUÇÕES COMENTADAS PASSO A PASSO (BLOCO 2: LEI DOS COSSENOS)</h1>
        <p>Roteiro de lousa pronto para o professor copiar/explicar durante a aula</p>
      </div>
      <div style="text-align: right; font-size: 11px; font-weight: 700; color: #92400e;">
        Exercícios 5 a 8
      </div>
    </div>

    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 5 (b = 6 cm, c = 8 cm: Â = 90° vs. Â = 60°)</span>
        <span class="ans-badge">a) 10 cm (Pitágoras) | b) 2√13 cm</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>Item a) Quando Â = 90° (Caso Específico de Pitágoras):</strong></div>
        <div class="calc">a² = 6² + 8² - 2·6·8·cos 90° ⟹ Como <strong>cos 90° = 0</strong>: a² = 36 + 64 - 96·(0)</div>
        <div class="calc">a² = 36 + 64 = 100 ⟹ a = √100 = <strong>10 cm</strong> (Exatamente o Teorema de Pitágoras!)</div>
        <div class="calc" style="margin-top:4px;"><strong>Item b) Quando Â = 60° (cos 60° = 1/2):</strong></div>
        <div class="calc">a² = 6² + 8² - 2·6·8·(1/2) = 36 + 64 - 48 = 52 ⟹ a = √52 = <strong>2√13 cm (≈ 7,21 cm)</strong></div>
        <div class="calc"><em>Conclusão visual:</em> Como o ângulo fechou de 90° para 60°, o lado oposto diminuiu de 10 cm para ≈ 7,21 cm!</div>
      </div>
    </div>

    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 6 (b = 5 m, c = 8 m, Â = 60° ➔ achar lado a)</span>
        <span class="ans-badge">Resposta: a = 7 metros</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>1º Passo (Montar a Lei dos Cossenos):</strong> a² = 5² + 8² - 2 · 5 · 8 · cos 60°</div>
        <div class="calc"><strong>2º Passo (Substituir potências e cos 60° = 1/2):</strong> a² = 25 + 64 - 80 · (1/2)</div>
        <div class="calc"><strong>3º Passo (Multiplicar antes de subtrair!):</strong> a² = 89 - 40 = 49</div>
        <div class="calc"><strong>4º Passo (Extrair a raiz):</strong> a = √49 ⟹ <strong>a = 7 metros</strong>.</div>
      </div>
    </div>

    <div class="ex-card">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 7 (b = 3 km, c = 5 km, Â = 120° ➔ achar distância d)</span>
        <span class="ans-badge">Resposta: d = 7 km</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>1º Passo (Montar a Lei dos Cossenos):</strong> d² = 3² + 5² - 2 · 3 · 5 · cos 120°</div>
        <div class="calc"><strong>2º Passo (Atenção ao sinal de cos 120° = -1/2):</strong> d² = 9 + 25 - 30 · (-1/2)</div>
        <div class="calc"><strong>3º Passo (Menos com menos dá MAIS!):</strong> d² = 34 + 15 = 49</div>
        <div class="calc"><strong>4º Passo (Extrair a raiz):</strong> d = √49 ⟹ <strong>d = 7 km</strong>.</div>
      </div>
    </div>

    <div class="ex-card" style="margin-bottom: 0;">
      <div class="ex-header">
        <span class="ex-num">Resolução do Exercício 8 (Lados a = 7, b = 5, c = 3 cm ➔ achar ângulo Â)</span>
        <span class="ans-badge">Resposta: cos Â = -1/2 ⟹ Â = 120°</span>
      </div>
      <div class="sol-box">
        <div class="calc"><strong>1º Passo (Isolar o lado oposto ao ângulo Â, que é o 7):</strong> 7² = 5² + 3² - 2 · 5 · 3 · cos Â</div>
        <div class="calc"><strong>2º Passo (Resolver as potências e o produto):</strong> 49 = 25 + 9 - 30 · cos Â ⟹ 49 = 34 - 30 · cos Â</div>
        <div class="calc"><strong>3º Passo (Isolar o termo com cos Â):</strong> 49 - 34 = -30 · cos Â ⟹ 15 = -30 · cos Â</div>
        <div class="calc"><strong>4º Passo (Dividir):</strong> cos Â = 15 / (-30) = <strong>-1/2</strong> ⟹ Logo, <strong>Â = 120°</strong>.</div>
      </div>
    </div>

    <div class="footer-note">
      <span>Matemática em Movimento — Guia de Lousa do Professor (Aula 10)</span>
      <span>Página 4 de 4 (Resoluções — Bloco 2)</span>
    </div>
  </div>

</body>
</html>
'''

with open(r'c:\Users\deise\Desktop\Aula10MatMov\generate_exercicios_aula.html', 'w', encoding='utf-8') as f:
    f.write(html_exercicios)
print("Created generate_exercicios_aula.html successfully!")
