const answers = JSON.parse(localStorage.getItem('quizAnswers'));
const recommendationsDiv = document.getElementById('recommendations');

let recommendations = getRecommendations(answers);

recommendationsDiv.innerHTML = recommendations;

function getRecommendations(answers) {
    let subject = answers[0];
    let feeling = answers[2];
    let techniques = [];

    if (subject === "Math") {
        techniques = ["Active Recall", "Pomodoro", "Blurting"];
    } else if (subject === "Sciences") {
        techniques = ["Active Recall", "Spaced Repetition", "SQ3R"];
    } else if (subject === "Social Studies") {
        techniques = ["SQ3R", "Spaced Repetition", "Mind Mapping"];
    } else if (subject === "English") {
        techniques = ["SQ3R", "Mind Mapping", "Blurting"];
    }

    if (feeling === "Motivated") {
        techniques = ["Active Recall", "Spaced Repetition", "Pomodoro Technique", "Mind Mapping"];
    } else if (feeling === "Confident") {
        techniques = ["Mind Mapping"];
    } else if (feeling === "Tired") {
        techniques = ["Pomodoro Technique"];
    } else if (feeling === "Stressed") {
        techniques = ["Pomodoro Technique", "Spaced Repetition"];
    }

    let recommendationText = "<h2>Recommended Study Techniques:</h2><ul>";
    techniques.forEach(technique => {
        recommendationText += `<li>${technique}</li>`;
    });
    recommendationText += "</ul>";

    return recommendationText;
}