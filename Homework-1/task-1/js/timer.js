import '../js/howler.js';
let sound = new Howl({
    src: ['./media/beep.mp3']
});
let timerInput = document.querySelector("#time"); // Берём строку
let buttonRun = document.querySelector("#start"); // Берём кнопку запуска
let buttonStop = document.querySelector("#stop"); // Берём кнопку остановки
let timerShow = document.querySelector("#timer"); // Берём блок для показа времени

let timer;



buttonRun.addEventListener('click', function(evt) {
    evt.preventDefault();
    let timeMinut = parseInt(timerInput.value) * 60;
    timer = setInterval(function() {
        let seconds = timeMinut % 60 // Получаем секунды
        let minutes = timeMinut / 60 % 60 // Получаем минуты
        let hour = timeMinut / 60 / 60 % 60 // Получаем часы
        // Условие если время закончилось то...
        if (timeMinut <= 0) {
            // Таймер удаляется
            clearInterval(timer);
            sound.play();
            // Выводит сообщение что время закончилось
            alert("Время закончилось");
            timerShow.innerHTML = "";
            timerInput.value = "";

        } else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            // Выводим строку в блок для показа таймера
            timerShow.innerHTML = strTimer;
        }
        --timeMinut; // Уменьшаем таймер
    }, 1000);
});

buttonStop.addEventListener('click', function(evt) {
    evt.preventDefault();
    clearInterval(timer);
    timerShow.innerHTML = "";
    timerInput.value = "";

});