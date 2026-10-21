/**
 * Conteúdo — NR 12 Máquina Manipuladora a Vácuo · Leroy Merlin
 * Gerado a partir do PDF "Nr 12 - MANIPULADOR DE SACARIA A VÁCUO promima a gravar 30 slide" (30 slides).
 * Somente o que está no PDF. Lacunas para o SESMT estão no roteiro HTML.
 *
 * Tipos: cover | content | video | image | quiz-intro | question | match | finale
 *
 * Vídeos: ainda sem embed/playerId (Panda). Preencher "embed" e "playerId" em cada tela type:"video".
 * Fotos: assets/fotos/*.png (a gerar com os prompts do roteiro; sem a imagem, a tela mostra o ícone).
 *
 * Desafios por módulo:
 *  M1 Primeira Norma         → 4 question (cartoes)   · mínimo 3
 *  M2 Vale ou Não Vale       → 4 question             · mínimo 3
 *  M3 Conheça a Máquina      → 4 question (cartoes)   · mínimo 3
 *  M4 Dever e Documento      → 4 question             · mínimo 3
 *  M5 Passo a Passo Seguro   → 5 question (cartoes)   · mínimo 4
 */
window.QUESTION_SCREEN_SESSION = {
  "meta": {
    "title": "NR 12 – Máquina manipuladora a vácuo",
    "brand": "TecnoCursos",
    "musicSrc": "musica/musica_foco.mp3"
  },
  "modules": [
    {
      "id": 1,
      "title": "Conceitos e a NR 12",
      "meta": "Vídeo + texto · desafio Primeira Norma",
      "titleUnlock": {
        "title": "BASE DA NR 12",
        "body": "Você conhece a NR 12 e o que a capacitação ensina.",
        "icon": "📘"
      },
      "screens": [
        {
          "id": "m1-cover",
          "type": "cover",
          "title": "Módulo 1 — Conceitos e a NR 12",
          "subtitle": "O conteúdo programático da capacitação, o que é uma máquina e a manipuladora a vácuo, a NR 12 e os seus anexos.",
          "transcript": "Módulo 1, Conceitos e a NR 12. O conteúdo programático da capacitação, o que é uma máquina e a manipuladora a vácuo, a NR 12 e os seus anexos. Na imagem: Capa do Módulo 1: conceitos e a NR 12.",
          "image": "assets/fotos/capamodulo1.png",
          "imageAlt": "Capa do Módulo 1: conceitos e a NR 12"
        },
        {
          "id": "m1-v-abertura",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "A NR 12 e a manipuladora a vácuo",
          "duration": "1:10",
          "scene": "Abertura do treinamento com cenas da manipuladora a vácuo no armazém",
          "brief": "Armazém com o manipulador a vácuo; operador movendo sacaria com postura correta; escudo da NR 12; caminho dos cinco módulos.",
          "body": "A máquina manipuladora a vácuo transporta e manipula sacaria de forma ergonômica. A NR 12 trata da segurança do trabalho em máquinas e equipamentos.",
          "transcript": "Vídeo. A NR 12 e a manipuladora a vácuo.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=cd9fabf3-d20a-4638-8fab-4ccb80991ee6",
          "playerId": "panda-cd9fabf3-d20a-4638-8fab-4ccb80991ee6"
        },
        {
          "id": "m1-v-conteudo",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O que a capacitação ensina",
          "duration": "1:00",
          "scene": "Os tópicos do Anexo II da NR 12 em sequência: riscos, proteções, o que fazer com proteção danificada, método de trabalho e bloqueio da máquina.",
          "brief": "Pixar 3D para comportamentos e ícones verdes para as ideias; locução calma.",
          "body": "A capacitação em NR 12 segue o conteúdo programático do Anexo II da norma. Ele começa pelos conceitos de máquina e da NR 12.",
          "transcript": "Vídeo. O que a capacitação ensina.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8a47d5ce-272c-4a18-9181-0b04593f0599",
          "playerId": "panda-8a47d5ce-272c-4a18-9181-0b04593f0599"
        },
        {
          "id": "m1-programatico",
          "type": "content",
          "layout": "resp",
          "kicker": "📄 Texto",
          "title": "Conteúdo programático da capacitação",
          "cards": [
            {
              "icon": "⚠️",
              "title": "Riscos e proteções",
              "body": "Os riscos de cada máquina e as proteções específicas contra cada um deles. Como e por que as proteções devem ser usadas."
            },
            {
              "icon": "🔧",
              "title": "Remover ou danificar",
              "body": "Como e em que circunstâncias uma proteção pode ser removida, e por quem. O que fazer, por exemplo, contatar o supervisor, se uma proteção foi danificada ou perdeu sua função."
            },
            {
              "icon": "📋",
              "title": "Segurança na utilização",
              "body": "Princípios de segurança, segurança para riscos mecânicos, elétricos e outros relevantes, e método de trabalho seguro."
            },
            {
              "icon": "🔒",
              "title": "Permissão e bloqueio",
              "body": "Permissão de trabalho e sistema de bloqueio de funcionamento da máquina durante inspeção, limpeza, lubrificação e manutenção."
            }
          ],
          "transcript": "Conteúdo programático da capacitação. Riscos e proteções: Os riscos de cada máquina e as proteções específicas contra cada um deles. Como e por que as proteções devem ser usadas. Remover ou danificar: Como e em que circunstâncias uma proteção pode ser removida, e por quem. O que fazer, por exemplo, contatar o supervisor, se uma proteção foi danificada ou perdeu sua função. Segurança na utilização: Princípios de segurança, segurança para riscos mecânicos, elétricos e outros relevantes, e método de trabalho seguro. Permissão e bloqueio: Permissão de trabalho e sistema de bloqueio de funcionamento da máquina durante inspeção, limpeza, lubrificação e manutenção."
        },
        {
          "id": "m1-v-conceitos",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O que é a manipuladora a vácuo",
          "duration": "0:55",
          "scene": "O conceito de máquina e a manipuladora a vácuo em uso: sistema fechado, unidade de controle e ventosa.",
          "brief": "Foto cinematográfica real do equipamento; sem personagem.",
          "body": "Uma máquina é um dispositivo artificial que utiliza a conversão de energia para atingir objetivos predeterminados. A máquina manipuladora a vácuo, também conhecida como máquina de sucção ou manipulador de sacaria a vácuo, é uma máquina pneumática.",
          "transcript": "Vídeo. O que é a manipuladora a vácuo.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=f37c071b-3009-4466-8f63-2a9ea0381884",
          "playerId": "panda-f37c071b-3009-4466-8f63-2a9ea0381884"
        },
        {
          "id": "m1-conceitos",
          "type": "content",
          "layout": "fatores",
          "tag": "Definição",
          "kicker": "📄 Texto",
          "title": "O que é uma máquina e a manipuladora a vácuo",
          "cards": [
            {
              "image": "assets/fotos/m1-conceitos-1.png",
              "imageAlt": "Serra de esquadria elétrica",
              "icon": "⚙️",
              "tone": "orange",
              "title": "Máquina",
              "body": "Dispositivo artificial que utiliza a conversão de energia para atingir objetivos predeterminados."
            },
            {
              "image": "assets/fotos/m1-conceitos-2.png",
              "imageAlt": "Máquina manipuladora a vácuo suspendendo um saco",
              "icon": "🌬️",
              "tone": "blue",
              "title": "Manipuladora a vácuo",
              "body": "Também chamada de máquina de sucção ou manipulador de sacaria a vácuo. Máquina pneumática para transporte e manipulação de sacarias de forma ergonômica."
            },
            {
              "image": "assets/fotos/m1-conceitos-3.png",
              "imageAlt": "Peças do sistema fechado da manipuladora",
              "icon": "🔧",
              "tone": "purple",
              "title": "Sistema fechado",
              "body": "Bomba de vácuo, mangueira de ar, tubo e terminal de sucção, com válvula de retenção e unidade de controle com alavanca de operação e ventosa."
            }
          ],
          "transcript": "O que é uma máquina e a manipuladora a vácuo. Máquina: Dispositivo artificial que utiliza a conversão de energia para atingir objetivos predeterminados. Na imagem: Serra de esquadria elétrica. Manipuladora a vácuo: Também chamada de máquina de sucção ou manipulador de sacaria a vácuo. Máquina pneumática para transporte e manipulação de sacarias de forma ergonômica. Na imagem: Máquina manipuladora a vácuo suspendendo um saco. Sistema fechado: Bomba de vácuo, mangueira de ar, tubo e terminal de sucção, com válvula de retenção e unidade de controle com alavanca de operação e ventosa. Na imagem: Peças do sistema fechado da manipuladora."
        },
        {
          "id": "m1-sobre-nr12",
          "type": "content",
          "skin": "agents",
          "banner": "assets/fotos/p4-faixa.png",
          "bannerAlt": "Escudo verde com marca de verificação, uma engrenagem e um capacete",
          "kicker": "📄 Texto",
          "title": "Sobre a NR 12",
          "cards": [
            {
              "icon": "📜",
              "lead": "Norma 1",
              "title": "Norma do MTE",
              "body": "Segurança do Trabalho em Máquinas e Equipamentos"
            },
            {
              "icon": "📐",
              "lead": "Norma 2",
              "title": "Referências técnicas",
              "body": "Princípios fundamentais e medidas de proteção, com os anexos"
            },
            {
              "icon": "🛡️",
              "lead": "Norma 3",
              "title": "Saúde e integridade",
              "body": "Resguarda os trabalhadores, com requisitos mínimos de prevenção"
            },
            {
              "icon": "🏭",
              "lead": "Norma 4",
              "title": "Projeto e utilização",
              "body": "Também fabricação, importação, comercialização, exposição e cessão"
            },
            {
              "icon": "🌎",
              "lead": "Norma 5",
              "title": "Atividades econômicas",
              "body": "Vale em todas, sem prejuízo das demais NRs"
            }
          ],
          "transcript": "Sobre a NR 12. Norma do MTE: Segurança do Trabalho em Máquinas e Equipamentos. Referências técnicas: Princípios fundamentais e medidas de proteção, com os anexos. Saúde e integridade: Resguarda os trabalhadores, com requisitos mínimos de prevenção. Projeto e utilização: Também fabricação, importação, comercialização, exposição e cessão. Atividades econômicas: Vale em todas, sem prejuízo das demais NRs."
        },
        {
          "id": "m1-sobre-nr12-2",
          "type": "content",
          "layout": "resp",
          "kicker": "📄 Texto",
          "title": "A NR 12 e as outras normas",
          "cards": [
            {
              "icon": "📚",
              "title": "Demais NRs",
              "body": "Sem prejuízo das demais NRs aprovadas pela Portaria MTb n.º 3.214, de 8 de junho de 1978."
            },
            {
              "icon": "📑",
              "title": "Normas técnicas",
              "body": "Normas técnicas oficiais ou normas internacionais aplicáveis."
            },
            {
              "icon": "🇪🇺",
              "title": "Normas Europeias",
              "body": "Na ausência ou omissão destas, opcionalmente, as normas Europeias tipo “C” harmonizadas."
            }
          ],
          "transcript": "A NR 12 e as outras normas. Demais NRs: Sem prejuízo das demais NRs aprovadas pela Portaria MTb n.º 3.214, de 8 de junho de 1978. Normas técnicas: Normas técnicas oficiais ou normas internacionais aplicáveis. Normas Europeias: Na ausência ou omissão destas, opcionalmente, as normas Europeias tipo “C” harmonizadas."
        },
        {
          "id": "m1-anexos",
          "type": "content",
          "layout": "fatores",
          "tag": "Anexos",
          "kicker": "📄 Texto",
          "title": "Os anexos da NR 12",
          "cards": [
            {
              "icon": "📘",
              "tone": "green",
              "title": "Anexos I a IV",
              "body": "I: detectores de presença optoeletrônicos. II: conteúdo programático da capacitação. III: meios de acesso a máquinas e equipamentos. IV: glossário.",
              "image": "assets/fotos/m1-anexos-1.png",
              "imageAlt": "Cortina de luz, escada de acesso e livro de glossário"
            },
            {
              "icon": "📗",
              "tone": "blue",
              "title": "Anexos V a VIII",
              "body": "V: motosserras. VI: panificação e confeitaria. VII: açougue, mercearia, bares e restaurantes. VIII: prensas e similares.",
              "image": "assets/fotos/m1-anexos-2.png",
              "imageAlt": "Motosserra, prensa pequena e masseira de padaria"
            },
            {
              "icon": "📙",
              "tone": "orange",
              "title": "Anexos IX a XII",
              "body": "IX: injetora de materiais plásticos. X: calçados e afins. XI: uso agrícola e florestal. XII: equipamentos de guindar para elevação de pessoas e trabalho em altura.",
              "image": "assets/fotos/m1-anexos-3.png",
              "imageAlt": "Injetora de plástico, trator agrícola e plataforma elevatória"
            }
          ],
          "transcript": "Os anexos da NR 12. Anexos I a IV: I: detectores de presença optoeletrônicos. II: conteúdo programático da capacitação. III: meios de acesso a máquinas e equipamentos. IV: glossário. Na imagem: Cortina de luz, escada de acesso e livro de glossário. Anexos V a VIII: V: motosserras. VI: panificação e confeitaria. VII: açougue, mercearia, bares e restaurantes. VIII: prensas e similares. Na imagem: Motosserra, prensa pequena e masseira de padaria. Anexos IX a XII: IX: injetora de materiais plásticos. X: calçados e afins. XI: uso agrícola e florestal. XII: equipamentos de guindar para elevação de pessoas e trabalho em altura. Na imagem: Injetora de plástico, trator agrícola e plataforma elevatória."
        },
        {
          "id": "m1-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Primeira norma",
          "count": 4,
          "minCorrect": 3,
          "icon": "📘",
          "body": "4 perguntas cronometradas sobre os conceitos e a NR 12. Mínimo de <strong>3 acertos</strong> para avançar.",
          "transcript": "Desafio, Primeira norma. 4 perguntas cronometradas sobre os conceitos e a NR 12. Mínimo de 3 acertos para avançar."
        },
        {
          "id": "m1-q1",
          "type": "question",
          "question": "Segundo o treinamento, o que é uma máquina?",
          "alternatives": [
            {
              "id": "a",
              "text": "Somente um equipamento ligado na tomada",
              "correct": false
            },
            {
              "id": "b",
              "text": "Qualquer objeto que possa ser levantado por uma pessoa",
              "correct": false
            },
            {
              "id": "c",
              "text": "Um dispositivo artificial que utiliza a conversão de energia para atingir objetivos predeterminados",
              "correct": true
            }
          ],
          "explanation": "Máquina é um dispositivo artificial que utiliza a conversão de energia para atingir objetivos predeterminados.",
          "review": "Conceito de máquina",
          "transcript": "Segundo o treinamento, o que é uma máquina? Opção 1: Somente um equipamento ligado na tomada. Opção 2: Qualquer objeto que possa ser levantado por uma pessoa. Opção 3: Um dispositivo artificial que utiliza a conversão de energia para atingir objetivos predeterminados. Na imagem: Ilustração neutra: armazém com várias máquinas ao fundo.",
          "image": "assets/fotos/m1p1.png",
          "imageAlt": "Ilustração neutra: armazém com várias máquinas ao fundo",
          "variant": "cartoes",
          "confirm": true
        },
        {
          "id": "m1-q2",
          "type": "question",
          "question": "A NR 12 trata de que assunto?",
          "alternatives": [
            {
              "id": "a",
              "text": "Somente da fabricação, sem tratar do uso das máquinas",
              "correct": false
            },
            {
              "id": "b",
              "text": "Apenas das roupas de trabalho",
              "correct": false
            },
            {
              "id": "c",
              "text": "Segurança do trabalho em máquinas e equipamentos",
              "correct": true
            }
          ],
          "explanation": "A NR 12 trata da Segurança do Trabalho em Máquinas e Equipamentos, desde o projeto e a utilização até a fabricação, a importação e a comercialização.",
          "review": "Objetivo da NR 12",
          "transcript": "A NR 12 trata de que assunto? Opção 1: Somente da fabricação, sem tratar do uso das máquinas. Opção 2: Apenas das roupas de trabalho. Opção 3: Segurança do trabalho em máquinas e equipamentos. Na imagem: Ilustração neutra: colaborador diante de várias máquinas.",
          "image": "assets/fotos/m1p2.png",
          "imageAlt": "Ilustração neutra: colaborador diante de várias máquinas",
          "variant": "cartoes",
          "confirm": true
        },
        {
          "id": "m1-q3",
          "type": "question",
          "question": "Qual destes assuntos faz parte do conteúdo programático da capacitação (Anexo II)?",
          "alternatives": [
            {
              "id": "a",
              "text": "Sistema de bloqueio de funcionamento da máquina durante inspeção, limpeza, lubrificação e manutenção",
              "correct": true
            },
            {
              "id": "b",
              "text": "Seleção de fornecedores de sacaria",
              "correct": false
            },
            {
              "id": "c",
              "text": "Cálculo da comissão por venda",
              "correct": false
            }
          ],
          "explanation": "O bloqueio de funcionamento da máquina durante inspeção, limpeza, lubrificação e manutenção é o item i do Anexo II.",
          "review": "Conteúdo programático",
          "transcript": "Qual destes assuntos faz parte do conteúdo programático da capacitação (Anexo II)? Opção 1: Sistema de bloqueio de funcionamento da máquina durante inspeção, limpeza, lubrificação e manutenção. Opção 2: Seleção de fornecedores de sacaria. Opção 3: Cálculo da comissão por venda. Na imagem: Ilustração neutra: sala de treinamento.",
          "image": "assets/fotos/m1p3.png",
          "imageAlt": "Ilustração neutra: sala de treinamento",
          "variant": "cartoes",
          "confirm": true
        },
        {
          "id": "m1-q4",
          "type": "question",
          "question": "Qual anexo da NR 12 trata do conteúdo programático da capacitação?",
          "alternatives": [
            {
              "id": "a",
              "text": "Anexo I",
              "correct": false
            },
            {
              "id": "b",
              "text": "Anexo II",
              "correct": true
            },
            {
              "id": "c",
              "text": "Anexo IV",
              "correct": false
            }
          ],
          "explanation": "O Anexo II é o conteúdo programático da capacitação. O Anexo I trata de detectores de presença e o Anexo IV é o glossário.",
          "review": "Anexos da NR 12",
          "transcript": "Qual anexo da NR 12 trata do conteúdo programático da capacitação? Opção 1: Anexo I. Opção 2: Anexo II. Opção 3: Anexo IV. Na imagem: Ilustração neutra: pasta de documentos sobre uma mesa.",
          "image": "assets/fotos/m1p4.png",
          "imageAlt": "Ilustração neutra: pasta de documentos sobre uma mesa",
          "variant": "cartoes",
          "confirm": true
        }
      ]
    },
    {
      "id": 2,
      "title": "Quando a NR 12 não se aplica",
      "meta": "Vídeo + texto · desafio Vale ou Não Vale",
      "titleUnlock": {
        "title": "LIMITES DA NR 12",
        "body": "Você sabe o que fica fora da NR 12.",
        "icon": "📏"
      },
      "screens": [
        {
          "id": "m2-cover",
          "type": "cover",
          "title": "Módulo 2 — Quando a NR 12 não se aplica",
          "subtitle": "Força humana ou animal, museus, feiras e eventos, eletrodomésticos e equipamentos estáticos.",
          "transcript": "Módulo 2, Quando a NR 12 não se aplica. Força humana ou animal, museus, feiras e eventos, eletrodomésticos e equipamentos estáticos. Na imagem: Capa do Módulo 2: quando a NR 12 não se aplica.",
          "image": "assets/fotos/capamodulo2.png",
          "imageAlt": "Capa do Módulo 2: quando a NR 12 não se aplica"
        },
        {
          "id": "m2-v-nao-aplica",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Os casos em que a NR 12 não se aplica",
          "duration": "1:10",
          "scene": "Exemplos reais de equipamentos que ficam fora da NR 12, um por vez",
          "brief": "Charrete e arado; paleteira manual; máquina antiga em museu; eletrodomésticos; tanques e caldeiras.",
          "body": "O item 12.1.4 diz em quais casos a NR 12 não se aplica: força humana ou animal, museus, feiras e eventos, eletrodomésticos e equipamentos estáticos.",
          "transcript": "Vídeo. Os casos em que a NR 12 não se aplica.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b4f76c6e-2158-458e-9305-3d1f6d6c68bb",
          "playerId": "panda-b4f76c6e-2158-458e-9305-3d1f6d6c68bb"
        },
        {
          "id": "m2-forca-humana",
          "type": "content",
          "layout": "duo",
          "kicker": "📄 Texto",
          "title": "Força humana ou animal",
          "cards": [
            {
              "icon": "🐴",
              "thumbs": [
                "assets/fotos/p6-1.png"
              ],
              "lead": "Exemplos",
              "title": "Charretes e arados",
              "body": "Movidos ou impulsionados por força humana ou animal."
            },
            {
              "icon": "🛒",
              "thumbs": [
                "assets/fotos/p6-2.png"
              ],
              "lead": "Exemplo",
              "title": "Paleteiras manuais",
              "body": "Equipamento movido por força humana."
            }
          ],
          "items": [
            {
              "icon": "📜",
              "title": "12.1.4 Esta NR não se aplica:",
              "text": "a) às máquinas e equipamentos movidos ou impulsionados por força humana ou animal."
            }
          ],
          "transcript": "Força humana ou animal. Charretes e arados: Movidos ou impulsionados por força humana ou animal. Paleteiras manuais: Equipamento movido por força humana. 12.1.4 Esta NR não se aplica: a) às máquinas e equipamentos movidos ou impulsionados por força humana ou animal."
        },
        {
          "id": "m2-museu-eletro",
          "type": "content",
          "layout": "duo",
          "kicker": "📄 Texto",
          "title": "Museus, feiras, eventos e eletrodomésticos",
          "cards": [
            {
              "icon": "🏛️",
              "thumbs": [
                "assets/fotos/p8-1.png"
              ],
              "lead": "Item b",
              "title": "Museus, feiras e eventos",
              "body": "Para fins históricos ou antiguidades, sem uso produtivo."
            },
            {
              "icon": "🍳",
              "thumbs": [
                "assets/fotos/p8-2.png"
              ],
              "lead": "Item c",
              "title": "Eletrodomésticos",
              "body": "Máquinas e equipamentos classificados como eletrodomésticos."
            }
          ],
          "items": [
            {
              "icon": "📜",
              "title": "12.1.4 Esta NR não se aplica:",
              "text": "b) às máquinas expostas em museus, feiras e eventos, desde que haja medidas que garantam a integridade física de visitantes e expositores; c) aos eletrodomésticos."
            }
          ],
          "transcript": "Museus, feiras, eventos e eletrodomésticos. Museus, feiras e eventos: Para fins históricos ou antiguidades, sem uso produtivo. Eletrodomésticos: Máquinas e equipamentos classificados como eletrodomésticos. 12.1.4 Esta NR não se aplica: b) às máquinas expostas em museus, feiras e eventos, desde que haja medidas que garantam a integridade física de visitantes e expositores; c) aos eletrodomésticos."
        },
        {
          "id": "m2-estaticos-1",
          "type": "content",
          "layout": "duo",
          "kicker": "📄 Texto",
          "title": "Equipamentos estáticos: Auto-Forno e caldeiras",
          "cards": [
            {
              "icon": "🔥",
              "thumbs": [
                "assets/fotos/p9-1.png"
              ],
              "lead": "Exemplo",
              "title": "Auto-Forno",
              "body": "Equipamento estático: fora da NR 12."
            },
            {
              "icon": "♨️",
              "thumbs": [
                "assets/fotos/p9-2.png"
              ],
              "lead": "Exemplo",
              "title": "Caldeiras",
              "body": "Equipamento estático: fora da NR 12."
            }
          ],
          "items": [
            {
              "icon": "📜",
              "title": "12.1.4 Esta NR não se aplica:",
              "text": "d) aos equipamentos estáticos."
            }
          ],
          "transcript": "Equipamentos estáticos: Auto-Forno e caldeiras. Auto-Forno: Equipamento estático: fora da NR 12. Caldeiras: Equipamento estático: fora da NR 12. 12.1.4 Esta NR não se aplica: d) aos equipamentos estáticos."
        },
        {
          "id": "m2-estaticos-2",
          "type": "content",
          "layout": "duo",
          "kicker": "📄 Texto",
          "title": "Equipamentos estáticos: tanques e tubulações",
          "cards": [
            {
              "icon": "🛢️",
              "thumbs": [
                "assets/fotos/p9-3.png"
              ],
              "lead": "Exemplo",
              "title": "Tanques",
              "body": "Equipamento estático: fora da NR 12."
            },
            {
              "icon": "🔩",
              "thumbs": [
                "assets/fotos/p9-4.png"
              ],
              "lead": "Exemplo",
              "title": "Tubulações sobre pressão",
              "body": "Equipamento estático: fora da NR 12."
            }
          ],
          "items": [
            {
              "icon": "📜",
              "title": "12.1.4 Esta NR não se aplica:",
              "text": "d) aos equipamentos estáticos."
            }
          ],
          "transcript": "Equipamentos estáticos: tanques e tubulações. Tanques: Equipamento estático: fora da NR 12. Tubulações sobre pressão: Equipamento estático: fora da NR 12. 12.1.4 Esta NR não se aplica: d) aos equipamentos estáticos."
        },
        {
          "id": "m2-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Vale ou não vale",
          "count": 1,
          "minCorrect": 1,
          "icon": "📏",
          "body": "Ligue cada equipamento ao motivo pelo qual a NR 12 não se aplica a ele. Mínimo de <strong>1 acertos</strong> para avançar.",
          "transcript": "Desafio, Vale ou não vale. Ligue cada equipamento ao motivo pelo qual a NR 12 não se aplica a ele. Mínimo de 1 acertos para avançar."
        },
        {
          "id": "m2-match",
          "type": "match",
          "title": "Ligue o equipamento ao motivo",
          "body": "Toque em um equipamento e depois no motivo pelo qual ele fica fora da NR 12.",
          "leftTitle": "Equipamento",
          "rightTitle": "Por que fica fora",
          "pairs": [
            {
              "ex": "Charrete",
              "body": "Movida por força animal"
            },
            {
              "ex": "Paleteira manual",
              "body": "Movida por força humana"
            },
            {
              "ex": "Peça antiga num museu",
              "body": "Exposta para fins históricos"
            },
            {
              "ex": "Batedeira doméstica",
              "body": "Classificada como eletrodoméstico"
            },
            {
              "ex": "Caldeira",
              "body": "Equipamento estático"
            }
          ],
          "review": "Casos fora da NR 12",
          "transcript": "Ligue o equipamento ao motivo. Toque em um equipamento e depois no motivo pelo qual ele fica fora da NR 12."
        }
      ]
    },
    {
      "id": 3,
      "title": "Conhecendo a manipuladora",
      "meta": "Vídeo + texto · desafio Conheça a Máquina",
      "titleUnlock": {
        "title": "MÁQUINA CONHECIDA",
        "body": "Você conhece a capacidade, a ventosa e as peças da manipuladora.",
        "icon": "🌬️"
      },
      "screens": [
        {
          "id": "m3-cover",
          "type": "cover",
          "title": "Módulo 3 — Conhecendo a manipuladora",
          "subtitle": "Capacidade, ventosa, acessórios, componentes principais e os modelos Movtek e Alsanner.",
          "transcript": "Módulo 3, Conhecendo a manipuladora. Capacidade, ventosa, acessórios, componentes principais e os modelos Movtek e Alsanner. Na imagem: Capa do Módulo 3: conhecendo a manipuladora.",
          "image": "assets/fotos/capamodulo3.png",
          "imageAlt": "Capa do Módulo 3: conhecendo a manipuladora"
        },
        {
          "id": "m3-v-maquina",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "A máquina por dentro e por fora",
          "duration": "0:45",
          "scene": "Capacidade, ventosa de silicone, tipos de saco e acessórios",
          "brief": "Ventosa de silicone; sacos de ráfia, papel Kraft e plástico; terminal giratório e engate rápido.",
          "body": "A manipuladora suporta sacos de 60 a 80 kgf, dependendo do modelo, e tem ventosa de silicone. Há acessórios, como o terminal giratório inferior e o engate rápido.",
          "transcript": "Vídeo. A máquina por dentro e por fora.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=6f936bcb-b632-4ad2-8108-6220648191ef",
          "playerId": "panda-6f936bcb-b632-4ad2-8108-6220648191ef"
        },
        {
          "id": "m3-caracteristicas",
          "type": "content",
          "layout": "resp",
          "kicker": "📄 Texto",
          "title": "Características do equipamento",
          "cards": [
            {
              "icon": "⚖️",
              "title": "Capacidade para sacos",
              "body": "De 60 a 80 kgf (dependendo do modelo).",
              "image": "assets/fotos/m3-carac-1.png",
              "imageAlt": "Saco de cimento suspenso pela manipuladora, indicando a capacidade"
            },
            {
              "icon": "⭕",
              "title": "Ventosa em silicone",
              "body": "Perfil esponjoso ou emborrachado tipo saia, que acompanha as deformações dos sacos.",
              "image": "assets/fotos/m3-carac-2.png",
              "imageAlt": "Ventosa de silicone com perfil esponjoso tipo saia"
            },
            {
              "icon": "📦",
              "title": "Tipos de saco",
              "body": "Ráfia, plástico, papel Kraft, fechados com costura, amarrados e outros.",
              "image": "assets/fotos/m3-carac-3.png",
              "imageAlt": "Sacos de ráfia, de plástico e de papel Kraft"
            },
            {
              "icon": "🔌",
              "title": "Acessórios",
              "body": "Terminais giratório inferior e engate rápido.",
              "image": "assets/fotos/m3-carac-4.png",
              "imageAlt": "Terminal giratório inferior e engate rápido"
            }
          ],
          "transcript": "Características do equipamento. Capacidade para sacos: De 60 a 80 kgf (dependendo do modelo). Na imagem: Saco de cimento suspenso pela manipuladora, indicando a capacidade. Ventosa em silicone: Perfil esponjoso ou emborrachado tipo saia, que acompanha as deformações dos sacos. Na imagem: Ventosa de silicone com perfil esponjoso tipo saia. Tipos de saco: Ráfia, plástico, papel Kraft, fechados com costura, amarrados e outros. Na imagem: Sacos de ráfia, de plástico e de papel Kraft. Acessórios: Terminais giratório inferior e engate rápido. Na imagem: Terminal giratório inferior e engate rápido."
        },
        {
          "id": "m3-avisos",
          "type": "content",
          "layout": "resp-risk",
          "kicker": "📄 Texto",
          "title": "Dois pontos de atenção",
          "items": [
            {
              "icon": "⚖️",
              "title": "Capacidade",
              "text": "de 60 a 80 kgf, dependendo do modelo."
            },
            {
              "icon": "🔌",
              "title": "Acessórios",
              "text": "podem ser usados para facilitar a utilização do manipulador."
            }
          ],
          "transcript": "Dois pontos de atenção. Capacidade: de 60 a 80 kgf, dependendo do modelo. Acessórios: podem ser usados para facilitar a utilização do manipulador."
        },
        {
          "id": "m3-v-componentes",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Os componentes principais",
          "duration": "1:10",
          "scene": "Os três grupos de peças do esquema: elevação e suspensão, sucção, e bomba e energia.",
          "brief": "Esquemas técnicos verdes com rótulos exatos; sem personagem.",
          "body": "Veja os componentes principais da manipuladora. Na parte de elevação e suspensão, estão a sapata deslizante, o trole de aço para equipamento, a talha elétrica e a mangueira de sucção.",
          "transcript": "Vídeo. Os componentes principais.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=51ea8dac-1952-42f5-a902-463a57145ae6",
          "playerId": "panda-51ea8dac-1952-42f5-a902-463a57145ae6"
        },
        {
          "id": "m3-componentes",
          "type": "content",
          "layout": "fatores",
          "tag": "Componentes",
          "kicker": "📄 Texto",
          "title": "Componentes principais da manipuladora",
          "cards": [
            {
              "icon": "🏗️",
              "tone": "blue",
              "title": "Elevação e suspensão",
              "image": "assets/fotos/m3-comp-1.png",
              "imageAlt": "Sapata, trole, talha elétrica e mangueira de sucção",
              "body": "Sapata deslizante, trole de aço para equipamento, talha elétrica e mangueira de sucção."
            },
            {
              "icon": "🌬️",
              "tone": "orange",
              "title": "Sucção",
              "image": "assets/fotos/m3-comp-2.png",
              "imageAlt": "Cabeçote, vacuômetro, engate rápido, giratório inferior e terminal de sucção",
              "body": "Cabeçote VB, vacuômetro, engate rápido, giratório inferior (opcional) e terminal de sucção."
            },
            {
              "icon": "⚡",
              "tone": "purple",
              "title": "Bomba e energia",
              "image": "assets/fotos/m3-comp-3.png",
              "imageAlt": "Bomba de vácuo, filtro, painel elétrico e abafador de ruído",
              "body": "Filtro, conector roscado 2\", válvula reguladora, painel elétrico, abafador de ruído, proteção acústica e bomba de vácuo."
            }
          ],
          "transcript": "Componentes principais da manipuladora. Elevação e suspensão: Sapata deslizante, trole de aço para equipamento, talha elétrica e mangueira de sucção. Na imagem: Sapata, trole, talha elétrica e mangueira de sucção. Sucção: Cabeçote VB, vacuômetro, engate rápido, giratório inferior (opcional) e terminal de sucção. Na imagem: Cabeçote, vacuômetro, engate rápido, giratório inferior e terminal de sucção. Bomba e energia: Filtro, conector roscado 2\", válvula reguladora, painel elétrico, abafador de ruído, proteção acústica e bomba de vácuo. Na imagem: Bomba de vácuo, filtro, painel elétrico e abafador de ruído."
        },
        {
          "id": "m3-v-modelos",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Os modelos Movtek e Alsanner",
          "duration": "0:40",
          "scene": "As duas marcas da manipuladora a vácuo, uma de cada vez.",
          "brief": "Foto cinematográfica real dos equipamentos; sem personagem.",
          "body": "O treinamento apresenta duas marcas de máquina manipuladora a vácuo: a Movtek e a Alsanner. Observe o equipamento de cada uma.",
          "transcript": "Vídeo. Os modelos Movtek e Alsanner.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2fcf2254-4a56-4807-b037-d2861241b991",
          "playerId": "panda-2fcf2254-4a56-4807-b037-d2861241b991"
        },
        {
          "id": "m3-modelos",
          "type": "content",
          "look": "galeria",
          "kicker": "📄 Texto",
          "title": "Máquina manipuladora a vácuo: marca Movtek",
          "cards": [
            {
              "image": "assets/fotos/m3-movtek-1.png",
              "imageAlt": "Cabeçote de sucção laranja sobre um saco de papel"
            },
            {
              "image": "assets/fotos/m3-movtek-2.png",
              "imageAlt": "Operador conduzindo um saco com a manipuladora Movtek"
            },
            {
              "image": "assets/fotos/m3-movtek-3.png",
              "imageAlt": "Manipuladora Movtek amarela com tubo laranja ao lado de sacos no palete"
            },
            {
              "image": "assets/fotos/m3-movtek-4.png",
              "imageAlt": "Operador com a manipuladora Movtek junto de sacos no palete"
            },
            {
              "image": "assets/fotos/m3-movtek-5.png",
              "imageAlt": "Manipuladora Movtek laranja junto de sacos de cimento empilhados"
            }
          ],
          "transcript": "Máquina manipuladora a vácuo: marca Movtek. Na imagem: Cabeçote de sucção laranja sobre um saco de papel. Na imagem: Operador conduzindo um saco com a manipuladora Movtek. Na imagem: Manipuladora Movtek amarela com tubo laranja ao lado de sacos no palete. Na imagem: Operador com a manipuladora Movtek junto de sacos no palete. Na imagem: Manipuladora Movtek laranja junto de sacos de cimento empilhados."
        },
        {
          "id": "m3-modelo-alsanner",
          "type": "content",
          "look": "galeria",
          "kicker": "📄 Texto",
          "title": "Máquina manipuladora a vácuo: marca Alsanner",
          "cards": [
            {
              "image": "assets/fotos/m3-alsanner-1.png",
              "imageAlt": "Manipuladora Alsanner amarela junto de pilhas de sacos"
            },
            {
              "image": "assets/fotos/m3-alsanner-2.png",
              "imageAlt": "Cabeçote da Alsanner com alças, tubo preto e ventosa sobre um saco"
            },
            {
              "image": "assets/fotos/m3-alsanner-3.png",
              "imageAlt": "Manipuladora Alsanner com tubo vermelho em um galpão"
            }
          ],
          "transcript": "Máquina manipuladora a vácuo: marca Alsanner. Na imagem: Manipuladora Alsanner amarela junto de pilhas de sacos. Na imagem: Cabeçote da Alsanner com alças, tubo preto e ventosa sobre um saco. Na imagem: Manipuladora Alsanner com tubo vermelho em um galpão."
        },
        {
          "id": "m3-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Conheça a máquina",
          "count": 1,
          "minCorrect": 1,
          "icon": "🌬️",
          "body": "Complete a frase com as palavras certas, como o treinamento apresenta a máquina. Mínimo de <strong>1 acertos</strong> para avançar.",
          "transcript": "Desafio, Conheça a máquina. Complete a frase com as palavras certas, como o treinamento apresenta a máquina. Mínimo de 1 acertos para avançar."
        },
        {
          "id": "m3-fill",
          "type": "fill",
          "title": "Complete a frase",
          "body": "Toque nas palavras de baixo para preencher as lacunas, na ordem.",
          "text": "A manipuladora suporta sacos de {{60 a 80 kgf}}, dependendo do modelo. A ventosa do terminal de sucção é de {{silicone}}, com perfil esponjoso ou emborrachado tipo {{saia}}. Entre os acessórios estão o terminal giratório {{inferior}} e o {{engate rápido}}.",
          "extra": [
            "10 a 20 kgf",
            "vidro",
            "copo",
            "superior"
          ],
          "review": "Capacidade, ventosa e acessórios",
          "transcript": "Complete a frase. Toque nas palavras de baixo para preencher as lacunas, na ordem."
        }
      ]
    },
    {
      "id": 4,
      "title": "Seus deveres e a Instrução de Trabalho",
      "meta": "Vídeo + texto · desafio Dever e Documento",
      "titleUnlock": {
        "title": "DEVER CUMPRIDO",
        "body": "Você sabe o que cabe ao trabalhador e onde achar a Instrução de Trabalho.",
        "icon": "📋"
      },
      "screens": [
        {
          "id": "m4-cover",
          "type": "cover",
          "title": "Módulo 4 — Seus deveres e a Instrução de Trabalho",
          "subtitle": "O que cabe ao trabalhador pela NR 12 e como acessar a Instrução de Trabalho.",
          "transcript": "Módulo 4, Seus deveres e a Instrução de Trabalho. O que cabe ao trabalhador pela NR 12 e como acessar a Instrução de Trabalho. Na imagem: Capa do Módulo 4: deveres e Instrução de Trabalho.",
          "image": "assets/fotos/capamodulo4.png",
          "imageAlt": "Capa do Módulo 4: deveres e Instrução de Trabalho"
        },
        {
          "id": "m4-v-deveres",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O que a NR 12 pede de você",
          "duration": "0:55",
          "scene": "Os deveres do trabalhador: seguir os procedimentos e comunicar o superior se uma proteção foi removida, danificada ou perdeu a função",
          "brief": "Operador seguindo o procedimento; operador comunicando o superior sobre uma proteção.",
          "body": "Cabe ao trabalhador cumprir os procedimentos, não alterar proteções, comunicar o superior, participar dos treinamentos e colaborar com o empregador. A formação de NR 12 é obrigatória.",
          "transcript": "Vídeo. O que a NR 12 pede de você.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=06bc1082-4390-4609-976a-9a8893613305",
          "playerId": "panda-06bc1082-4390-4609-976a-9a8893613305"
        },
        {
          "id": "m4-deveres",
          "type": "content",
          "layout": "quickcards",
          "qcStyle": "checklist",
          "kicker": "📄 Texto",
          "title": "Cabe aos trabalhadores",
          "items": [
            {
              "icon": "📋",
              "title": "Procedimentos seguros",
              "text": "Cumprir as orientações de operação, abastecimento, limpeza, manutenção, inspeção, transporte, desativação, desmonte e descarte.",
              "image": "assets/fotos/p14-1.png",
              "imageAlt": "Colaborador lendo um procedimento"
            },
            {
              "icon": "🛡️",
              "title": "Não alterar proteções",
              "text": "Nenhuma alteração nas proteções mecânicas ou dispositivos de segurança.",
              "image": "assets/fotos/p14-2.png",
              "imageAlt": "Colaborador conferindo uma proteção fixa"
            },
            {
              "icon": "📣",
              "title": "Comunicar o superior",
              "text": "Se uma proteção foi removida, danificada ou perdeu sua função.",
              "image": "assets/fotos/p14-3.png",
              "imageAlt": "Colaborador falando com o superior"
            },
            {
              "icon": "🎓",
              "title": "Participar dos treinamentos",
              "text": "Os fornecidos pelo empregador para atender às exigências da NR 12.",
              "image": "assets/fotos/p14-4.png",
              "imageAlt": "Colaboradores em treinamento"
            },
            {
              "icon": "🤝",
              "title": "Colaborar com o empregador",
              "text": "Na implementação das disposições contidas na NR 12.",
              "image": "assets/fotos/p14-5.png",
              "imageAlt": "Aperto de mão entre colaboradores"
            },
            {
              "icon": "🪪",
              "title": "Formação obrigatória",
              "text": "É obrigatória a formação de NR 12 para utilizar a máquina manipuladora a vácuo.",
              "image": "assets/fotos/p14-6.png",
              "imageAlt": "Colaborador em frente à manipuladora a vácuo"
            }
          ],
          "transcript": "Cabe aos trabalhadores. Procedimentos seguros: Cumprir as orientações de operação, abastecimento, limpeza, manutenção, inspeção, transporte, desativação, desmonte e descarte. Na imagem: Colaborador lendo um procedimento. Não alterar proteções: Nenhuma alteração nas proteções mecânicas ou dispositivos de segurança. Na imagem: Colaborador conferindo uma proteção fixa. Comunicar o superior: Se uma proteção foi removida, danificada ou perdeu sua função. Na imagem: Colaborador falando com o superior. Participar dos treinamentos: Os fornecidos pelo empregador para atender às exigências da NR 12. Na imagem: Colaboradores em treinamento. Colaborar com o empregador: Na implementação das disposições contidas na NR 12. Na imagem: Aperto de mão entre colaboradores. Formação obrigatória: É obrigatória a formação de NR 12 para utilizar a máquina manipuladora a vácuo. Na imagem: Colaborador em frente à manipuladora a vácuo."
        },
        {
          "id": "m4-v-instrucao",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Como acessar a Instrução de Trabalho",
          "duration": "1:00",
          "scene": "O caminho no portal: ícone do PORTAL 3PIR, pesquisa, lupinha, Página Inicial de Documentos e o nome da Instrução.",
          "brief": "Ícones verdes minimalistas; sem personagem.",
          "body": "Antes de operar a manipuladora, leia e observe a Instrução de Trabalho. Ela está disponível no PORTAL 3PIR, dentro do ServiceNow.",
          "transcript": "Vídeo. Como acessar a Instrução de Trabalho.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e7f3792f-69f1-4baf-a656-010995fbb9fa",
          "playerId": "panda-e7f3792f-69f1-4baf-a656-010995fbb9fa"
        },
        {
          "id": "m4-instrucao",
          "type": "content",
          "steps": true,
          "stepSkin": "equip",
          "stepUnit": "Passo",
          "stepNext": "Próximo passo",
          "stepFinish": "Concluir",
          "kicker": "📄 Texto",
          "title": "Como acessar a Instrução de Trabalho",
          "items": [
            {
              "image": "assets/fotos/p15.png",
              "icon": "💻",
              "title": "Portal 3PIR",
              "text": "Antes de operar, ler a Instrução de Trabalho disponível no PORTAL 3PIR, dentro do ServiceNow."
            },
            {
              "image": "assets/fotos/p16.png",
              "icon": "🔎",
              "title": "Pesquisar",
              "text": "Pesquisar por “manipuladora”, escolher a Instrução de Trabalho da Máquina Manipuladora de Sacaria a Vácuo e clicar na lupinha."
            },
            {
              "image": "assets/fotos/p17.png",
              "icon": "📄",
              "title": "Abrir o documento",
              "text": "Na Página Inicial de Documentos, clicar no nome da Instrução de Trabalho Manipuladora de Sacaria a Vácuo."
            },
            {
              "image": "assets/fotos/p18.png",
              "icon": "📝",
              "title": "Passo a passo",
              "text": "Dentro dela está a descrição das operações, com o passo a passo para operação segura do equipamento."
            }
          ],
          "transcript": "Como acessar a Instrução de Trabalho. Portal 3PIR: Antes de operar, ler a Instrução de Trabalho disponível no PORTAL 3PIR, dentro do ServiceNow. Pesquisar: Pesquisar por “manipuladora”, escolher a Instrução de Trabalho da Máquina Manipuladora de Sacaria a Vácuo e clicar na lupinha. Abrir o documento: Na Página Inicial de Documentos, clicar no nome da Instrução de Trabalho Manipuladora de Sacaria a Vácuo. Passo a passo: Dentro dela está a descrição das operações, com o passo a passo para operação segura do equipamento."
        },
        {
          "id": "m4-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Dever e documento",
          "count": 1,
          "minCorrect": 1,
          "icon": "📋",
          "body": "Classifique cada atitude: é o que o trabalhador deve ou não deve fazer. Mínimo de <strong>1 acertos</strong> para avançar.",
          "transcript": "Desafio, Dever e documento. Classifique cada atitude: é o que o trabalhador deve ou não deve fazer. Mínimo de 1 acertos para avançar."
        },
        {
          "id": "m4-sort",
          "type": "sort",
          "title": "Deve ou não deve?",
          "body": "Um cartão por vez: escolha o grupo certo.",
          "leftLabel": "O trabalhador deve",
          "rightLabel": "O trabalhador não deve",
          "items": [
            {
              "text": "Cumprir os procedimentos seguros de operação, limpeza e manutenção",
              "side": "left",
              "why": "cumprir os procedimentos seguros"
            },
            {
              "text": "Alterar uma proteção mecânica para facilitar o trabalho",
              "side": "right",
              "why": "não se altera proteção nem dispositivo de segurança"
            },
            {
              "text": "Comunicar o superior imediato quando uma proteção foi removida",
              "side": "left",
              "why": "comunicar o superior imediato"
            },
            {
              "text": "Consertar sozinho a máquina que apresentou falha",
              "side": "right",
              "why": "não faz intervenção; comunica o líder"
            },
            {
              "text": "Participar dos treinamentos e colaborar com o empregador",
              "side": "left",
              "why": "participar dos treinamentos"
            },
            {
              "text": "Operar a manipuladora sem a formação de NR 12",
              "side": "right",
              "why": "a formação de NR 12 é obrigatória"
            },
            {
              "text": "Ler a Instrução de Trabalho no PORTAL 3PIR antes de operar",
              "side": "left",
              "why": "ler e observar a Instrução de Trabalho"
            },
            {
              "text": "Deixar uma proteção removida e continuar trabalhando",
              "side": "right",
              "why": "deve comunicar o superior"
            }
          ],
          "review": "Deveres do trabalhador",
          "transcript": "Deve ou não deve?. Um cartão por vez: escolha o grupo certo."
        }
      ]
    },
    {
      "id": 5,
      "title": "Operação segura, passo a passo",
      "meta": "Vídeo + texto · desafio Passo a Passo Seguro",
      "titleUnlock": {
        "title": "OPERADOR SEGURO",
        "body": "Você sabe os 11 passos da operação segura e as recomendações.",
        "icon": "🛡️"
      },
      "screens": [
        {
          "id": "m5-cover",
          "type": "cover",
          "title": "Módulo 5 — Operação segura, passo a passo",
          "subtitle": "Os 11 passos da Instrução de Trabalho, as recomendações de segurança e o fechamento do treinamento.",
          "transcript": "Módulo 5, Operação segura, passo a passo. Os 11 passos da Instrução de Trabalho, as recomendações de segurança e o fechamento do treinamento. Na imagem: Capa do Módulo 5: operação segura passo a passo.",
          "image": "assets/fotos/capamodulo5.png",
          "imageAlt": "Capa do Módulo 5: operação segura passo a passo"
        },
        {
          "id": "m5-v-passos-1-5",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Antes de operar: passos 1 a 5",
          "duration": "1:10",
          "scene": "Colaborador sem adornos, com luva tricotada e botina, local limpo, área isolada e sinalizada e a conferência da máquina e do filtro.",
          "brief": "Pixar 3D para comportamentos; foto real quando mostra o equipamento.",
          "body": "Primeiro passo: é proibida a utilização de adornos. Segundo: use os EPIs antes do início das atividades, como luva tricotada e calçado de segurança, tipo botina.",
          "transcript": "Vídeo. Antes de operar: passos 1 a 5.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c1003baa-87f4-46c3-861a-227e120cd8b1",
          "playerId": "panda-c1003baa-87f4-46c3-861a-227e120cd8b1"
        },
        {
          "id": "m5-passos-1-5",
          "type": "content",
          "layout": "quickcards",
          "qcStyle": "checklist",
          "kicker": "📄 Texto",
          "title": "Antes de operar: passos 1 a 5",
          "items": [
            {
              "icon": "🚫",
              "title": "Passo 1 · Sem adornos",
              "text": "É proibida a utilização de adornos.",
              "image": "assets/fotos/m5-p1.png",
              "imageAlt": "Colaboradora guardando relógio e anel antes de operar"
            },
            {
              "icon": "🧤",
              "title": "Passo 2 · EPIs",
              "text": "Usar luva tricotada e calçado de segurança, tipo botina, antes do início das atividades.",
              "image": "assets/fotos/m5-p2.png",
              "imageAlt": "Colaborador mostrando luva tricotada e botina"
            },
            {
              "icon": "🧹",
              "title": "Passo 3 · Local limpo",
              "text": "Manter o local sempre limpo e organizado.",
              "image": "assets/fotos/m5-p3.png",
              "imageAlt": "Colaborador varrendo e organizando a área da manipuladora"
            },
            {
              "icon": "🚧",
              "title": "Passo 4 · Área isolada",
              "text": "Deixar a área isolada e sinalizada, com distância de segurança mínima de 1,5 m no perímetro do manipulador.",
              "image": "assets/fotos/m5-p4.png",
              "imageAlt": "Área da manipuladora isolada com cones e fita"
            },
            {
              "icon": "🔍",
              "title": "Passo 5 · Verificar",
              "text": "Verificar sempre se a máquina funciona de forma correta e se o filtro está limpo.",
              "image": "assets/fotos/m5-p5.png",
              "imageAlt": "Colaborador verificando a máquina e o filtro"
            }
          ],
          "transcript": "Antes de operar: passos 1 a 5. Passo 1 Sem adornos: É proibida a utilização de adornos. Na imagem: Colaboradora guardando relógio e anel antes de operar. Passo 2 EPIs: Usar luva tricotada e calçado de segurança, tipo botina, antes do início das atividades. Na imagem: Colaborador mostrando luva tricotada e botina. Passo 3 Local limpo: Manter o local sempre limpo e organizado. Na imagem: Colaborador varrendo e organizando a área da manipuladora. Passo 4 Área isolada: Deixar a área isolada e sinalizada, com distância de segurança mínima de 1,5 m no perímetro do manipulador. Na imagem: Área da manipuladora isolada com cones e fita. Passo 5 Verificar: Verificar sempre se a máquina funciona de forma correta e se o filtro está limpo. Na imagem: Colaborador verificando a máquina e o filtro."
        },
        {
          "id": "m5-v-passos-6-10",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "Operar a máquina: passos 6 a 10",
          "duration": "1:20",
          "scene": "Botoeira de liga e desliga, puxar o tubo, ativar o vácuo na alavanca, levar a carga e soltar a sacaria.",
          "brief": "Foto cinematográfica real do operador fazendo o certo.",
          "body": "Sexto passo: ligue a máquina apertando a botoeira de liga e desliga da unidade de acionamento. Sétimo: puxe o tubo para levantamento do manipulador até a sacaria.",
          "transcript": "Vídeo. Operar a máquina: passos 6 a 10.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=77acc523-d3e0-45c9-b524-8d109e5d6219",
          "playerId": "panda-77acc523-d3e0-45c9-b524-8d109e5d6219"
        },
        {
          "id": "m5-passos-6-10",
          "type": "content",
          "layout": "quickcards",
          "qcStyle": "checklist",
          "kicker": "📄 Texto",
          "title": "Operar a máquina: passos 6 a 10",
          "items": [
            {
              "icon": "🔘",
              "title": "Passo 6 · Ligar",
              "text": "Ligar a máquina apertando a botoeira de liga e desliga da unidade de acionamento.",
              "image": "assets/fotos/m5-p6.png",
              "imageAlt": "Colaborador apertando a botoeira de liga e desliga"
            },
            {
              "icon": "🪝",
              "title": "Passo 7 · Puxar o tubo",
              "text": "Puxar o tubo para levantamento do manipulador até a sacaria.",
              "image": "assets/fotos/m5-p7.png",
              "imageAlt": "Colaborador puxando o tubo laranja até o saco"
            },
            {
              "icon": "🖐️",
              "title": "Passo 8 · Segurar a carga",
              "text": "Segurar a carga com as ventosas do terminal giratório e usar a alavanca no braço para ativar a força do vácuo.",
              "image": "assets/fotos/m5-p8.png",
              "imageAlt": "Colaborador acionando a alavanca com a ventosa sobre o saco"
            },
            {
              "icon": "🚚",
              "title": "Passo 9 · Levar a carga",
              "text": "Levar a carga com cuidado até o carro do cliente ou, se for o caso, à paletização.",
              "image": "assets/fotos/m5-p9.png",
              "imageAlt": "Colaborador conduzindo o saco suspenso até o carro do cliente"
            },
            {
              "icon": "🔓",
              "title": "Passo 10 · Soltar",
              "text": "Soltar a sacaria desativando a válvula de liberação do vácuo da ventosa, na alça de comando.",
              "image": "assets/fotos/m5-p10.png",
              "imageAlt": "Colaborador soltando o saco com a válvula da alça de comando"
            }
          ],
          "transcript": "Operar a máquina: passos 6 a 10. Passo 6 Ligar: Ligar a máquina apertando a botoeira de liga e desliga da unidade de acionamento. Na imagem: Colaborador apertando a botoeira de liga e desliga. Passo 7 Puxar o tubo: Puxar o tubo para levantamento do manipulador até a sacaria. Na imagem: Colaborador puxando o tubo laranja até o saco. Passo 8 Segurar a carga: Segurar a carga com as ventosas do terminal giratório e usar a alavanca no braço para ativar a força do vácuo. Na imagem: Colaborador acionando a alavanca com a ventosa sobre o saco. Passo 9 Levar a carga: Levar a carga com cuidado até o carro do cliente ou, se for o caso, à paletização. Na imagem: Colaborador conduzindo o saco suspenso até o carro do cliente. Passo 10 Soltar: Soltar a sacaria desativando a válvula de liberação do vácuo da ventosa, na alça de comando. Na imagem: Colaborador soltando o saco com a válvula da alça de comando."
        },
        {
          "id": "m5-v-extintor",
          "type": "video",
          "kicker": "🎥 Vídeo",
          "title": "O extintor e as demais recomendações",
          "duration": "1:10",
          "scene": "Extintor de CO2 ao lado da manipuladora e as recomendações: manutenção, falha da máquina, equipamentos de segurança, pessoas capacitadas e inspeções.",
          "brief": "Foto real para o extintor; Pixar 3D para comportamentos; ícones verdes para ideias.",
          "body": "Décimo primeiro passo: disponibilize um extintor contra incêndio, de CO2, próximo ao equipamento. E estas são as demais recomendações de segurança.",
          "transcript": "Vídeo. O extintor e as demais recomendações.",
          "embed": "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=439da4b9-a8fb-453b-b697-59cb23d59aea",
          "playerId": "panda-439da4b9-a8fb-453b-b697-59cb23d59aea"
        },
        {
          "id": "m5-passo-11",
          "type": "content",
          "layout": "quickcards",
          "qcStyle": "checklist",
          "kicker": "📄 Texto",
          "title": "Passo 11 e recomendações de segurança",
          "items": [
            {
              "icon": "🧯",
              "title": "Passo 11 · Extintor",
              "text": "Disponibilizar um extintor contra incêndio (CO2) próximo ao equipamento.",
              "image": "assets/fotos/m5-p11.png",
              "imageAlt": "Extintor de CO2 ao lado da manipuladora"
            },
            {
              "icon": "🛠️",
              "title": "Manutenção e inspeção",
              "text": "Realizar manutenções preventivas regularmente, testes e inspeções periódicas.",
              "image": "assets/fotos/m5-rec-1.png",
              "imageAlt": "Técnico realizando manutenção preventiva"
            },
            {
              "icon": "⛔",
              "title": "Em caso de falha",
              "text": "Não faça nenhuma intervenção. Comunique o seu líder para acionar a manutenção corretiva.",
              "image": "assets/fotos/m5-rec-2.png",
              "imageAlt": "Colaborador afastado da máquina comunicando o líder"
            },
            {
              "icon": "🦺",
              "title": "Segurança e fabricante",
              "text": "Utilizar equipamentos de segurança durante a operação e seguir as instruções de uso do fabricante.",
              "image": "assets/fotos/m5-rec-3.png",
              "imageAlt": "Colaborador lendo o manual do fabricante"
            },
            {
              "icon": "🪪",
              "title": "Pessoas capacitadas",
              "text": "Capacitar os operadores e não permitir o uso da máquina por pessoas não autorizadas ou capacitadas.",
              "image": "assets/fotos/m5-rec-4.png",
              "imageAlt": "Operador capacitado com crachá e outra pessoa atrás da faixa"
            }
          ],
          "transcript": "Passo 11 e recomendações de segurança. Passo 11 Extintor: Disponibilizar um extintor contra incêndio (CO2) próximo ao equipamento. Na imagem: Extintor de CO2 ao lado da manipuladora. Manutenção e inspeção: Realizar manutenções preventivas regularmente, testes e inspeções periódicas. Na imagem: Técnico realizando manutenção preventiva. Em caso de falha: Não faça nenhuma intervenção. Comunique o seu líder para acionar a manutenção corretiva. Na imagem: Colaborador afastado da máquina comunicando o líder. Segurança e fabricante: Utilizar equipamentos de segurança durante a operação e seguir as instruções de uso do fabricante. Na imagem: Colaborador lendo o manual do fabricante. Pessoas capacitadas: Capacitar os operadores e não permitir o uso da máquina por pessoas não autorizadas ou capacitadas. Na imagem: Operador capacitado com crachá e outra pessoa atrás da faixa."
        },
        {
          "id": "m5-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Passo a passo seguro",
          "count": 2,
          "minCorrect": 2,
          "icon": "🛡️",
          "body": "Ordene os passos da Instrução de Trabalho: primeiro antes de operar, depois operando a máquina. Mínimo de <strong>2 acertos</strong> para avançar.",
          "transcript": "Desafio, Passo a passo seguro. Ordene os passos da Instrução de Trabalho: primeiro antes de operar, depois operando a máquina. Mínimo de 2 acertos para avançar."
        },
        {
          "id": "m5-order-1",
          "type": "order",
          "title": "Ordene: antes de operar",
          "time": 60,
          "body": "Toque nos passos 1 a 5 na ordem da Instrução de Trabalho.",
          "items": [
            {
              "key": "a",
              "text": "É proibida a utilização de adornos",
              "rank": 1
            },
            {
              "key": "b",
              "text": "Usar os EPIs antes de iniciar as atividades",
              "rank": 2
            },
            {
              "key": "c",
              "text": "Manter o local limpo e organizado",
              "rank": 3
            },
            {
              "key": "d",
              "text": "Isolar e sinalizar a área, com 1,5 m de distância de segurança",
              "rank": 4
            },
            {
              "key": "e",
              "text": "Verificar se a máquina funciona e se o filtro está limpo",
              "rank": 5
            }
          ],
          "review": "Passos 1 a 5",
          "transcript": "Ordene: antes de operar. Toque nos passos 1 a 5 na ordem da Instrução de Trabalho."
        },
        {
          "id": "m5-order-2",
          "type": "order",
          "title": "Ordene: operando a máquina",
          "time": 60,
          "body": "Toque nos passos 6 a 10 na ordem da Instrução de Trabalho.",
          "items": [
            {
              "key": "a",
              "text": "Ligar a máquina na botoeira de liga e desliga",
              "rank": 1
            },
            {
              "key": "b",
              "text": "Puxar o tubo de levantamento até a sacaria",
              "rank": 2
            },
            {
              "key": "c",
              "text": "Segurar a carga com a ventosa, usando a alavanca no braço",
              "rank": 3
            },
            {
              "key": "d",
              "text": "Levar a carga com cuidado ao carro do cliente ou à paletização",
              "rank": 4
            },
            {
              "key": "e",
              "text": "Soltar a sacaria desativando a válvula de liberação do vácuo",
              "rank": 5
            }
          ],
          "review": "Passos 6 a 10",
          "transcript": "Ordene: operando a máquina. Toque nos passos 6 a 10 na ordem da Instrução de Trabalho."
        },
        {
          "id": "m5-finale",
          "type": "finale",
          "kicker": "🏆 Conclusão",
          "eyebrow": "Certificado de conclusão",
          "title": "Parabéns",
          "image": "assets/fotos/capa parabens.png",
          "imageAlt": "Capa de parabéns — conclusão do treinamento",
          "body": "Você concluiu o treinamento NR 12 – Máquina manipuladora a vácuo.",
          "quote": "Sua vida vale mais do que qualquer atalho.",
          "chips": [
            "NR 12",
            "Manipuladora a vácuo",
            "Leroy Merlin"
          ],
          "transcript": "Certificado de conclusão. Parabéns. Você concluiu o treinamento NR 12 – Máquina manipuladora a vácuo. Sua vida vale mais do que qualquer atalho. Na imagem: Capa de parabéns, conclusão do treinamento."
        }
      ]
    }
  ]
};
