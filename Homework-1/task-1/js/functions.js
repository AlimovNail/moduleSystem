let date = document.querySelector("#chooice__date");
let timer = document.querySelector("#chooice__timer");
let dateCalc = document.querySelector("#datecalc");
let formTimer = document.querySelector("#form__timer");

date.addEventListener('click', function(evt) {
    evt.preventDefault();
    dateCalc.classList.toggle('visible');
});
timer.addEventListener('click', function(evt) {
    evt.preventDefault();
    formTimer.classList.toggle('visible');
});