// timer_app/static/timer_app/js/script.js
let timeLeft = 0;
let timerId = null;
let isRunning = false;
let initialDuration = 0;
let breakDuration = 5; // Default break time 5 menit

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer-display').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timeLeft <= 0 && initialDuration === 0) return;
    
    isRunning = true;
    document.getElementById('startBtn').disabled = true;
    
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            isRunning = false;
            
            if (initialDuration > 0) {
                showNotification(`Break Time! ${breakDuration} Minutes`);
                timeLeft = breakDuration * 60;
                initialDuration = 0;
                startTimer();
            } else {
                showNotification('Break Time Ended!');
                timeLeft = 0;
                document.getElementById('startBtn').disabled = false;
            }
        }
    }, 1000);
}

function setBreakTime(minutes) {
    breakDuration = minutes;
    showNotification(`Break set to ${minutes} minutes`);
}

function pauseTimer() {
    clearInterval(timerId);
    isRunning = false;
    document.getElementById('startBtn').disabled = false;
}

function resetTimer() {
    clearInterval(timerId);
    timeLeft = initialDuration;
    originalTime = initialDuration;
    isRunning = false;
    updateDisplay();
    document.getElementById('startBtn').disabled = false;
}

function setTime(minutes) {
    initialDuration = minutes * 60; // Simpan durasi awal
    timeLeft = initialDuration;
    originalTime = initialDuration;
    updateDisplay();
}

// Inisialisasi
createCandles();
window.addEventListener('resize', () => {
    document.querySelectorAll('.candle').forEach(c => c.remove());
    createCandles();
});