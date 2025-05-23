const questions = [
    {
        question: "Qual o principal cereal cultivado no Brasil?",
        answer: "Soja"
    },
    {
        question: "Qual animal é a base da pecuária leiteira?",
        answer: "Vaca"
    },
    {
        question: "Qual sistema de cultivo utiliza pouca água?",
        answer: "Sequeiro"
    },
    {
        question: "Nome de uma máquina agrícola para arar?",
        answer: "Trator"
    },
    {
        question: "Produto derivado do leite?",
        answer: "Queijo"
    },
    {
        question: "O que a irrigação adiciona ao solo?",
        answer: "Água"
    },
    {
        question: "Nome de um agrotóxico comum?",
        answer: "Herbicida"
    },
    {
        question: "Qual a principal fibra cultivada?",
        answer: "Algodão"
    },
    {
        question: "O que é a colheita em grande escala?",
        answer: "Safra"
    },
    {
        question: "Criação de aves para consumo?",
        answer: "Avicultura"
    },
    {
        question: "Qual o centro de uma cidade?",
        answer: "Urbano"
    },
    {
        question: "O que as fábricas produzem?",
        answer: "Bens"
    },
    {
        question: "Qual poder cria as leis?",
        answer: "Legislativo"
    },
    {
        question: "Nome de um imposto comum?",
        answer: "IPTU"
    },
    {
        question: "O que a industrialização gera?",
        answer: "Empregos"
    },
    {
        question: "Qual o principal meio de transporte urbano?",
        answer: "Ônibus"
    },
    {
        question: "Quem administra o município?",
        answer: "Prefeito"
    },
    {
        question: "O que a poluição afeta?",
        answer: "Ar"
    },
    {
        question: "Qual serviço público é essencial?",
        answer: "Saúde"
    },
    {
        question: "O que o governo garante?",
        answer: "Ordem"
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestionIndex].question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    const feedback = document.getElementById("feedback");

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = "Resposta Correta!";
        document.body.classList.add("correct");
        document.body.classList.remove("incorrect");
        document.getElementById("next-button").style.display = "block";
    } else {
        feedback.textContent = "Resposta Errada!";
        document.body.classList.add("incorrect");
        document.body.classList.remove("correct");
        document.getElementById("next-button").style.display = "none";
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        document.body.classList.remove("correct", "incorrect");
    } else {
        alert("Você completou todas as perguntas!");
    }
}

displayQuestion();
