const perguntas = [
    {
        pergunta: "Qual é o seu tipo de cabelo?",
        alternativas: [
            "Liso",
            "Ondulado",
            "Cacheado",
            "Crespo"
        ]
    },
    {
        pergunta: "Qual é o principal problema do seu cabelo?",
        alternativas: [
            "Ressecamento",
            "Frizz",
            "Queda",
            "Falta de brilho"
        ]
    },
    {
        pergunta: "Com que frequência você lava o cabelo?",
        alternativas: [
            "Todos os dias",
            "Dia sim, dia não",
            "2 ou 3 vezes por semana",
            "Uma vez por semana"
        ]
    },
    {
        pergunta: "Você costuma usar secador ou chapinha?",
        alternativas: [
            "Todos os dias",
            "Algumas vezes por semana",
            "Raramente",
            "Nunca"
        ]
    },
    {
        pergunta: "Você já fez algum procedimento químico no cabelo?",
        alternativas: [
            "Sim, alisamento",
            "Sim, coloração",
            "Sim, os dois",
            "Não"
        ]
    },
    {
        pergunta: "Como estão as pontas do seu cabelo?",
        alternativas: [
            "Muito ressecadas",
            "Com pontas duplas",
            "Um pouco secas",
            "Saudáveis"
        ]
    },
    {
        pergunta: "Você utiliza produtos específicos para o seu tipo de cabelo?",
        alternativas: [
            "Sempre",
            "Às vezes",
            "Raramente",
            "Não"
        ]
    },
    {
        pergunta: "O que você mais gostaria de melhorar no seu cabelo?",
        alternativas: [
            "Hidratação",
            "Definição",
            "Volume",
            "Brilho"
        ]
    },
    {
        pergunta: "Quanto tempo você costuma dedicar aos cuidados com o cabelo?",
        alternativas: [
            "Mais de 30 minutos por dia",
            "Cerca de 20 minutos",
            "Poucos minutos",
            "Quase nenhum"
        ]
    },
    {
        pergunta: "Qual resultado você gostaria de alcançar?",
        alternativas: [
            "Um cabelo mais hidratado",
            "Um cabelo mais forte",
            "Um cabelo com mais brilho",
            "Um cabelo bonito e saudável"
        ]
    }
];

let perguntaAtual = 0;
let escolhas = [];

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.innerHTML = pergunta.pergunta;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.addEventListener("click", () => {
            escolhas.push(alternativa);
            proximaPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";

    const respostas = escolhas.join(", ");

    textoResultado.innerHTML = `
        <strong>Seu diagnóstico capilar está pronto! 💗</strong>
        <br><br>
        Com base nas suas respostas, o especialista recomenda
        que você mantenha uma rotina de cuidados adequada ao seu
        tipo de cabelo, dando atenção principalmente à hidratação,
        nutrição e proteção dos fios.
        <br><br>
        <strong>Suas escolhas:</strong>
        <br>
        ${respostas}
        <br><br>
        Lembre-se: cada cabelo possui necessidades diferentes.
        O cuidado constante é o segredo para manter os fios
        bonitos, fortes e saudáveis! ✨
    `;
}

caixaResultado.style.display = "none";

mostrarPergunta();
