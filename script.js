let currentQuestion = 1;
const totalQuestions = 3;

function nextQuestion(qn) {
    const currentQuestionDiv = document.getElementById(`question${qn}`);
    currentQuestionDiv.style.display = "none";
    if (qn< totalQuestions) {
        const nextQuestionDiv = document.getElementById(`question${qn + 1}`);
        nextQuestionDiv.style.display = "block";
    } else {
        document.getElementById("submit").style.display = "block";
    }
}

function submitQuiz() {
    const correctAnswers = {
        q1: "Paris",
        q2: "4",
        q3: "Elon Musk"
    };

    let score = 0;
    const form = document.getElementById("quiz");
    const q1Answer = form.q1.value;
    const q2Answer = form.q2.value;
    const q3Answer = form.q3.value;

    if (q1Answer === correctAnswers.q1) score++;
    if (q2Answer === correctAnswers.q2) score++;
    if (q3Answer === correctAnswers.q3) score++;
    const result = document.getElementById("result");
    result.textContent = `You scored ${score} out of 3!`;
}
