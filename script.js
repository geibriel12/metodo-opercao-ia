// ==========================================
// 1. LÓGICA DO CRONÔMETRO REGRESSIVO (15 MIN)
// ==========================================
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; 
        }
    }, 1000);
}

// ==========================================
// 2. LÓGICA INTERATIVA DO FAQ (ACORDION)
// ==========================================
document.querySelectorAll('.faq-trigger').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        faqItem.classList.toggle('active');
    });
});

// INITIALIZATION AO CARREGAR A PÁGINA
window.onload = function () {
    var fifteenMinutes = 60 * 15,
        display = document.querySelector('#countdown-timer');
    startTimer(fifteenMinutes, display);
};