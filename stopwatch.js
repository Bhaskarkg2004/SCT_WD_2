
let minutes = 0, seconds = 0, milliseconds = 0;
let timerInterval;
let isRunning = false;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const lapTimesEl = document.getElementById('lap-times');

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(startTimer, 10);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapTimesEl.innerHTML = ''; 
});

document.getElementById('lap').addEventListener('click', () => {
    if (isRunning) {
        const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
        const li = document.createElement('li');
        li.textContent = `Lap ${lapTimesEl.children.length + 1}: ${lapTime}`;
        lapTimesEl.appendChild(li);
    }
});

function startTimer() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
    millisecondsEl.textContent = pad(milliseconds);
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
