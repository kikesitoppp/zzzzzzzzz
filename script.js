document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const answers = {
        question1: "DENIS ENRIQUE BENAVIDES CAIPE",
        question2: "13/04/2004",
        question3: "24",
        question4: "Bayern de Múnich",
        question5: "NEYMAR",
        question6: "Coctiki",
        question7: "TE QUIERO"
    };

    let correctAnswers = 0;
    let incorrectAnswers = 0;

    const formData = new FormData(event.target);

    for (let [question, correctAnswer] of Object.entries(answers)) {
        let userAnswer = formData.get(question);
        
        if (question === "question4" || question === "question6") {
            userAnswer = userAnswer ? userAnswer : "";
        } else {
            userAnswer = userAnswer ? userAnswer.trim() : "";
        }

        if (userAnswer.toUpperCase() === correctAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    }

    document.getElementById('quiz-form').style.display = 'none';
    const results = document.getElementById('results');
    results.style.display = 'block';
    document.getElementById('correct-count').innerText = `Correctas: ${correctAnswers}`;
    document.getElementById('incorrect-count').innerText = `Incorrectas: ${incorrectAnswers}`;
    let finalMessage = '';

    if (correctAnswers === Object.keys(answers).length) {
        finalMessage = 'Me quiero mucho, pero yo te quiero más :)';
    } else if (correctAnswers > incorrectAnswers) {
        finalMessage = 'Me quieres pero quiéreme más :)';
    } else {
        finalMessage = 'No me quieres :(';
    }

    document.getElementById('final-message').innerText = finalMessage;

    setTimeout(() => {
        results.innerHTML += '<p>¡EXCELENTE MI AMOR SIGUE ASÍ! ❤️❤️❤️</p>';
    }, 1000);
});
