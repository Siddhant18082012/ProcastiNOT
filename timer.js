let minutes = 29; 
let seconds = 59;
let timerInterval;
let isWorkTimer = true;

function updateTimerDisplay() {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                if (isWorkTimer) {
                    minutes = 4; 
                    seconds = 59;
                    isWorkTimer = false;
                } else {
                    minutes = 29; 
                    seconds = 59;
                    isWorkTimer = true;
                }
            } else {
                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
            }
            updateTimerDisplay();
        }, 1000);
    }
}

document.getElementById('startTimer').addEventListener('click', startTimer);

document.getElementById('stopTimer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    minutes = 29; 
    seconds = 59;
    isWorkTimer = true;
    updateTimerDisplay();
});

updateTimerDisplay(); 