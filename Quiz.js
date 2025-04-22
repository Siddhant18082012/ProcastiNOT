const quizData = [
    {
        question: "What Subject would you like to study today",
        options: ["Math", "English", "Sciences", "Social Studies"],
    },
    {
        question: "How much time do you want to dedicate to this session?",
        options: ["15 Minutes", "30 Minutes", "1 Hour", "1 Hour 30 Minutes"],
    },
    {
        question: "How are you feeling today?",
        options: ["Confident", "Motivated", "Tired", "Stressed"],
    },
    {
        question: "What is your main goal?",
        options: ["Learn a New Concept", "Revision on Concepts", "Complete Homework", "Prepare for Tests/ Exams"],
    },
];

const formContainer = document.getElementById("form");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("Submit");
let currentQuestion = 0;
let answers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestion() {
    if (currentQuestion >= quizData.length) {
        displayResults();
        return;
    }

    const questionData = quizData[currentQuestion];

    formContainer.innerHTML = ''; 

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    formContainer.appendChild(questionElement);
    formContainer.appendChild(optionsElement);
}

function displayResults() {
    formContainer.style.display = 'none'; 
    submitButton.style.display = 'none'; 
    let resultsHTML = "<h2>Quiz Results:</h2><ul>";
    for(let i = 0; i < answers.length; i++){
        resultsHTML += "<li>Question " + (i+1) + ": " + answers[i] + "</li>";
    }
    resultsHTML += "</ul>";
    resultContainer.innerHTML = resultsHTML;
}

submitButton.addEventListener("click", function () {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        answers.push(selectedOption.value);
        currentQuestion++;
        displayQuestion();
    } else {
        alert("Please select an option.");
    }
});

displayQuestion(); 
const recommendationDiv = document.getElementById('recommendation'); 

function displayResults() {
    formContainer.style.display = 'none'; 
    submitButton.style.display = 'none'; 

 
    let recommendation = getRecommendation(answers); 


    recommendationDiv.innerHTML = recommendation;
    recommendationDiv.classList.remove('hide'); 
}


function getRecommendation(answers) {
    let subject = answers[0];
    let feeling = answers[2];
    let method = "";
    let description = "";
    if (subject === "Math" && feeling === "Motivated") {
        method = "Active Recall";
        description = "This method involves actively recalling information from memory, which helps strengthen learning and retention.";
    } else if (subject === "Math" && feeling === "Tired") {
        method = "Pomodoro Technique";
        description = "This time management method involves breaking your study session into focused intervals with short breaks, which can help combat fatigue.";
    } else {
    }
    return `<h2>Recommended Study Method: <span class="math-inline">\{method\}</h2\><p\></span>{description}</p>`;
}
function getRecommendation(answers) {
    console.log("getRecommendation called, answers:", answers);
    let subject = answers[0];
    let feeling = answers[2];
    let method = "";
    let description = "";

    if (subject === "Math" && feeling === "Motivated") {
        method = "Active Recall, Spaced Repetition";
        description = "Active recall involves actively retrieving information from memory, while spaced repetition uses increasing intervals to review material.";
    } else if (subject === "Math" && feeling === "Confident") {
        method = "Mind Mapping";
        description = "Create a visual representation of the concepts and their relationships.";
    } else if (subject === "Math" && feeling === "Tired") {
        method = "Pomodoro Technique";
        description = "Break your study session into 25-minute intervals with short breaks.";
    } else if (subject === "Math" && feeling === "Stressed") {
        method = "Pomodoro Technique, Spaced Repetition";
        description = "Combine the Pomodoro Technique with spaced repetition for focused study and long-term retention.";
    } 

    return `<h2>Recommended Study Method: ${method}</h2><p>${description}</p>`;
}