# 📐 Matemática em Movimento — Aula 10: Lei dos Senos e Lei dos Cossenos
> Plataforma de Apresentação de Slides Interativos para Aula Online (1º Ano)

Projeto interativo completo pronto para rodar e usar em sala de aula ou chamada de vídeo (Google Meet, Microsoft Teams, Zoom). Focado na BNCC (**EM13MAT308**, **EF09MA13** e **EF09MA14**), com recursos pedagógicos em tempo real para engajamento dos alunos pelo chat.

---

## 🚀 Como Iniciar a Apresentação (Muito Fácil!)

### Opção 1: Com 1 Duplo Clique (Windows)
Basta dar um duplo clique no arquivo:
* 📄 **`iniciar_aula.bat`** (Inicia o servidor e abre o navegador automaticamente em `http://localhost:5173`)

### Opção 2: Pelo Terminal
```bash
npm run dev
```
Abra o navegador em: [http://localhost:5173](http://localhost:5173)

---

## ⌨️ Atalhos de Teclado para o Professor

| Tecla | Ação |
| :--- | :--- |
| **`Espaço`** ou **`→`** | Avançar para o próximo slide |
| **`←`** | Voltar para o slide anterior |
| **`1` a `9` e `0`** | Pular instantaneamente para o Slide correspondente (1 a 10) |
| **`H`** | Abrir o **Material Oficial da Lição de Casa** (Slide 11) |
| **`B`** | Adicionar um **Slide em Branco (Lousa Quadriculada)** após o slide atual |
| **`N`** | Abrir/fechar **Notas do Professor** (Roteiro, "O que falar", chat e dicas) |
| **`P`** | Abrir **Janela Privada do Apresentador (2ª Tela)** |
| **`D`** | Ativar/desativar **Caneta de Lousa Virtual** (desenhar e circular na tela) |
| **`F`** | Alternar **Modo Tela Cheia** (Fullscreen) |

---

## 🛠️ Recursos Interativos Desenvolvidos Slide a Slide

1. **Slide 1 — Acolhimento e Abertura (09:30 - 09:35)**
   * Banner de abertura oficial, objetivos da Aula 10 e combinados de ouro do dia.
   * **Termômetro da Turma Interativo**: botões para registrar os "Bons dias" e cadernos abertos que chegam no chat.

2. **Slide 2 — Revisão: Soma de 180°, Pares Opostos e Tabela de Ouro (09:35 - 09:45)**
   * Regra de ouro para encontrar o 3º ângulo ($\hat{A} + \hat{B} + \hat{C} = 180^\circ$), convenção dos pares opostos ($a \leftrightarrow \hat{A}$, $b \leftrightarrow \hat{B}$, $c \leftrightarrow \hat{C}$) e tabela trigonométrica ($30^\circ, 45^\circ, 60^\circ, 90^\circ, 120^\circ$).
   * **Simulador Dinâmico de Ângulos** e **Quiz Relâmpago** no chat.

3. **Slide 3 — Introdução à Lei dos Senos (09:45 - 10:05)**
   * Apresentação visual de $\frac{a}{\text{sen }\hat{A}} = \frac{b}{\text{sen }\hat{B}} = \frac{c}{\text{sen }\hat{C}} = 2R$.
   * **Iluminador de Pares Opostos**: botões interativos para destacar cada par lado-ângulo oposto e a circunferência circunscrita ($2R$).
   * Dinâmica ao vivo no chat para identificar a montagem correta da proporção.

4. **Slide 4 — Lei dos Senos na Prática: Encontrando Lados (10:05 - 10:18)**
   * **Exemplo 1:** Cálculo direto de lado desconhecido com $30^\circ$ e $45^\circ$ passo a passo.
   * **Exemplo 2:** Encontrando primeiro o 3º ângulo pela soma de $180^\circ$ antes de aplicar a Lei dos Senos.

5. **Slide 5 — Lei dos Senos na Prática: Encontrando Ângulos (10:18 - 10:30)**
   * Resolução passo a passo para descobrir o seno de um ângulo desconhecido e consultar a tabela trigonométrica ($\text{sen }\hat{B} = 1/2 \implies \hat{B} = 30^\circ$).

6. **Slide 6 — Intervalo de Tela (10:30 - 10:40)**
   * **Cronômetro regressivo funcional de 10 minutos** com alarme sonoro e dicas de descanso visual e hidratação.

7. **Slide 7 — Lei dos Cossenos & O Caso Específico de Pitágoras (10:40 - 10:52)**
   * Apresentação de $a^2 = b^2 + c^2 - 2\cdot b\cdot c\cdot \cos\hat{A}$.
   * **Simulador Geométrico Interativo (De Cossenos a Pitágoras)**: varie o ângulo $\hat{A}$ entre agudo ($60^\circ$), reto ($90^\circ$) e obtuso ($120^\circ$). Quando $\hat{A} = 90^\circ$, $\cos 90^\circ = 0$, o termo $-2bc\cos 90^\circ$ zera na tela e demonstra visualmente que o **Teorema de Pitágoras ($a^2 = b^2 + c^2$) é um caso específico da Lei dos Cossenos**!

8. **Slide 8 — Trabalhando com a Lei dos Cossenos: Lados, Ângulos e Bússola (10:52 - 11:05)**
   * **Exemplo 1 (LAL):** Cálculo de medida desconhecida dados 2 lados ($5$ e $8\text{ cm}$) e o ângulo entre eles ($60^\circ \implies a = 7\text{ cm}$).
   * **Exemplo 2 (LLL):** Cálculo de ângulo desconhecido dados os 3 lados ($3, 5, 7\text{ cm} \implies \cos\hat{A} = -1/2 \implies \hat{A} = 120^\circ$).
   * **Bússola de Decisão**: guia comparativo rápido de quando usar Lei dos Senos vs. Lei dos Cossenos.

9. **Slide 9 — Prática Guiada no Caderno (11:05 - 11:20)**
   * **Timer de 5 minutos integrado** + 2 exercícios selecionados (Q1: Lei dos Senos e Q2: Lei dos Cossenos) com botões de Dica e Resolução Comentada.

10. **Slide 10 — Fechamento e Lição de Casa (11:20 - 11:30)**
    * Efeito comemorativo de confetes, avisos do Moodle, plantão Wikimática e download do PDF oficial.

11. **Slide 11 — Material Oficial da Lição de Casa (11:25 - 11:30)**
    * Folha A4 oficial da Lição de Casa da Aula 10 pronta para impressão/PDF, gabarito do professor e integração com o Quadro em Branco.
