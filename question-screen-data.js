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
          "transcript": "Módulo 1: Conceitos e a NR 12.",
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
          "transcript": "Vídeo de abertura: a NR 12 e a máquina manipuladora a vácuo."
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
          "transcript": "Vídeo: O que a capacitação ensina."
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
          "transcript": "Conteúdo programático da capacitação, Anexo II da NR 12: riscos e proteções; funcionamento das proteções; como e em que circunstâncias uma proteção pode ser removida, e por quem; o que fazer se uma proteção foi danificada; princípios de segurança; riscos mecânicos, elétricos e outros; método de trabalho seguro; permissão de trabalho; e bloqueio de funcionamento da máquina durante inspeção, limpeza, lubrificação e manutenção."
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
          "transcript": "Vídeo: O que é a manipuladora a vácuo."
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
          "transcript": "Máquina é um dispositivo artificial que utiliza a conversão de energia. A manipuladora a vácuo é uma máquina pneumática para transporte e manipulação de sacarias de forma ergonômica, com um sistema fechado de bomba de vácuo, mangueira de ar, tubo e terminal de sucção."
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
          "transcript": "Sobre a NR 12: norma do Ministério do Trabalho e Emprego que trata da segurança do trabalho em máquinas e equipamentos, com requisitos mínimos de prevenção nas fases de projeto e de utilização, e ainda à fabricação, importação, comercialização, exposição e cessão a qualquer título, em todas as atividades econômicas."
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
          "transcript": "A NR 12 vale sem prejuízo das demais NRs da Portaria 3.214 de 1978, das normas técnicas oficiais ou internacionais aplicáveis e, na ausência destas, opcionalmente, das normas Europeias tipo C harmonizadas."
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
          "transcript": "Os anexos da NR 12, do Anexo I ao Anexo XII. O Anexo II é o conteúdo programático da capacitação."
        },
        {
          "id": "m1-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Primeira norma",
          "count": 4,
          "minCorrect": 3,
          "icon": "📘",
          "body": "4 perguntas cronometradas sobre os conceitos e a NR 12. Mínimo de <strong>3 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 1: Primeira norma."
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
          "transcript": "Segundo o treinamento, o que é uma máquina?",
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
          "transcript": "A NR 12 trata de que assunto?",
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
          "transcript": "Qual destes assuntos faz parte do conteúdo programático da capacitação (Anexo II)?",
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
          "transcript": "Qual anexo da NR 12 trata do conteúdo programático da capacitação?",
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
          "transcript": "Módulo 2: Quando a NR 12 não se aplica.",
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
          "transcript": "Vídeo: os casos em que a NR 12 não se aplica."
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
          "transcript": "Item 12.1.4 a: a NR 12 não se aplica às máquinas e equipamentos movidos ou impulsionados por força humana ou animal. Exemplos: charretes, arados e paleteiras manuais."
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
          "transcript": "A NR 12 não se aplica a máquinas expostas em museus, feiras e eventos para fins históricos, desde que a integridade física de visitantes e expositores seja preservada, nem a eletrodomésticos."
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
          "transcript": "Equipamentos estáticos não estão na NR 12. Exemplos: Auto-Forno e caldeiras."
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
          "transcript": "Equipamentos estáticos não estão na NR 12. Exemplos: tanques e tubulações sobre pressão."
        },
        {
          "id": "m2-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Vale ou não vale",
          "count": 1,
          "minCorrect": 1,
          "icon": "📏",
          "body": "Ligue cada equipamento ao motivo pelo qual a NR 12 não se aplica a ele. Mínimo de <strong>1 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 2: Vale ou não vale."
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
          "transcript": "Ligue cada equipamento ao motivo pelo qual a NR 12 não se aplica a ele."
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
          "transcript": "Módulo 3: Conhecendo a manipuladora.",
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
          "transcript": "Vídeo: capacidade, ventosa e acessórios da manipuladora."
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
          "transcript": "Características: capacidade de sessenta a oitenta quilogramas-força, ventosa em silicone, vários tipos de saco e acessórios como o terminal giratório inferior e o engate rápido."
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
          "transcript": "A capacidade depende do modelo. Os equipamentos podem usar acessórios para facilitar a utilização."
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
          "transcript": "Vídeo: Os componentes principais."
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
          "transcript": "Componentes principais: elevação e suspensão, sucção, e bomba e energia. Dezesseis peças no total."
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
          "transcript": "Vídeo: Os modelos Movtek e Alsanner."
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
          "transcript": "Máquina manipuladora a vácuo, marca Movtek."
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
          "transcript": "Máquina manipuladora a vácuo, marca Alsanner."
        },
        {
          "id": "m3-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Conheça a máquina",
          "count": 1,
          "minCorrect": 1,
          "icon": "🌬️",
          "body": "Complete a frase com as palavras certas, como o treinamento apresenta a máquina. Mínimo de <strong>1 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 3: Conheça a máquina."
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
          "transcript": "Complete a frase sobre a capacidade, a ventosa e os acessórios da manipuladora."
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
          "transcript": "Módulo 4: Seus deveres e a Instrução de Trabalho.",
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
          "transcript": "Vídeo: o que a NR 12 pede de você."
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
          "transcript": "O que cabe aos trabalhadores: cumprir os procedimentos seguros, não alterar proteções, comunicar o superior, participar dos treinamentos e colaborar com o empregador. A formação de NR 12 é obrigatória para usar a máquina manipuladora a vácuo."
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
          "transcript": "Vídeo: Como acessar a Instrução de Trabalho."
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
          "transcript": "Como acessar a Instrução de Trabalho: PORTAL 3PIR no ServiceNow, pesquisar manipuladora, abrir o documento e seguir o passo a passo."
        },
        {
          "id": "m4-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Dever e documento",
          "count": 1,
          "minCorrect": 1,
          "icon": "📋",
          "body": "Classifique cada atitude: é o que o trabalhador deve ou não deve fazer. Mínimo de <strong>1 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 4: Dever e documento."
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
          "transcript": "Classifique cada atitude entre o que o trabalhador deve e o que não deve fazer."
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
          "transcript": "Módulo 5: Operação segura, passo a passo.",
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
          "transcript": "Vídeo: Antes de operar: passos 1 a 5."
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
          "transcript": "Passos um a cinco: sem adornos, usar os EPIs, local limpo e organizado, área isolada e sinalizada com distância mínima de um metro e meio, e verificar se a máquina funciona corretamente e se o filtro está limpo."
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
          "transcript": "Vídeo: Operar a máquina: passos 6 a 10."
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
          "transcript": "Passos seis a dez: ligar pela botoeira, puxar o tubo até a sacaria, segurar a carga com as ventosas e a alavanca, levar a carga com cuidado e soltar a sacaria desativando a válvula de liberação do vácuo na alça de comando."
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
          "transcript": "Vídeo: O extintor e as demais recomendações."
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
          "transcript": "Passo onze: extintor de CO2 próximo ao equipamento. Recomendações: manutenção preventiva e inspeções periódicas, não intervir em caso de falha e comunicar o líder, usar equipamentos de segurança e seguir o fabricante, e capacitar os operadores."
        },
        {
          "id": "m5-quiz-intro",
          "type": "quiz-intro",
          "title": "Desafio — Passo a passo seguro",
          "count": 2,
          "minCorrect": 2,
          "icon": "🛡️",
          "body": "Ordene os passos da Instrução de Trabalho: primeiro antes de operar, depois operando a máquina. Mínimo de <strong>2 acertos</strong> para avançar.",
          "transcript": "Desafio do módulo 5: Passo a passo seguro."
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
          "transcript": "Ordene os passos 1 a 5 antes de operar a manipuladora."
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
          "transcript": "Ordene os passos 6 a 10 para operar a manipuladora."
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
          "transcript": "Parabéns. Você finalizou o NR 12, Máquina manipuladora a vácuo."
        }
      ]
    }
  ]
};
