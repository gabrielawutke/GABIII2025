const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sente que tem clareza sobre seus objetivos de vida?",
        alternativas: [
            {
                texto: "Sim, tenho bem claro o que quero alcançar.",
                afirmacao: " Ter clareza sobre o que você quer alcançar é uma base sólida para o seu desenvolvimento. Continue definindo suas metas e ajustando-as conforme necessário."
            },
            {
                texto: " Não, ainda estou buscando clareza.",
                afirmacao: "  Muitas vezes, a clareza vem com a prática e a reflexão. Dedique um tempo para pensar nos seus valores e o que é mais importante para você. Isso pode ajudar a definir um rumo mais claro"

                
            }
        ]
    },
    {
        enunciado: "Você tem o hábito de refletir sobre suas emoções e comportamentos?",
        alternativas: [
            {
                texto: "Sim, faço isso regularmente.",
                afirmacao: " A autorreflexão é uma ferramenta poderosa para o autoconhecimento. Continue praticando esse hábito, pois ele vai te ajudar a entender melhor suas reações e decisões."
            },
            {
                texto: " Não, quase nunca paro para refletir.",
                afirmacao: " A reflexão pode ser algo a ser cultivado com o tempo. Tente reservar alguns momentos do dia para pensar sobre o que sentiu e por que agiu de determinada forma."

                
            }
        ]
    },
    {
        enunciado: "Você acredita que seus desafios atuais contribuem para seu crescimento pessoal?",
        alternativas: [
            {
                texto: "Sim, vejo os desafios como oportunidades de aprendizado.",
                afirmacao: " Encarar os desafios como oportunidades de crescimento é uma mentalidade muito positiva. Isso pode acelerar sua evolução pessoal e te ajudar a aprender com cada situação."
            },
            {
                texto: "Não, sinto que estou apenas enfrentando obstáculos sem muito progresso.",
                afirmacao: " É natural se sentir assim em alguns momentos. Tente olhar para seus desafios de outra perspectiva: o que você pode aprender com cada obstáculo? Às vezes, mudar o ângulo de visão faz toda a diferença."

            
            }
        ]
    },
    {
        enunciado: "Você costuma sair da sua zona de conforto para alcançar seus objetivos?",
        alternativas: [
            {
                texto: "Sim, me esforço para me desafiar.",
                afirmacao: "  Sair da zona de conforto é essencial para o crescimento. Se você já faz isso regularmente, está no caminho certo para evoluir constantemente."

                
            },
            {
                texto: "Não, prefiro agir dentro da minha zona de conforto.",
                afirmacao:  "A zona de conforto oferece segurança, mas também limita o progresso. Comece com pequenos passos fora da sua rotina e observe os resultados."

                
            }
        ]
    },
    {
        enunciado: "Você tem algum tipo de prática regular para cuidar da sua saúde mental?",
        alternativas: [
            {
                texto: "Sim, tenho práticas como meditação, terapia ou atividades relaxantes.",
                afirmacao: "Cuidar da sua saúde mental é tão importante quanto cuidar da física. Continue dedicando tempo para o que te ajuda a se manter equilibrado emocionalmente."
            },
            {
                texto: "Não, não tenho nenhum hábito regular para cuidar disso.",
                afirmacao: " Muitas pessoas negligenciam a saúde mental. Comece com pequenas práticas, como meditação ou exercícios de respiração, para começar a se sentir mais conectado consigo mesmo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();