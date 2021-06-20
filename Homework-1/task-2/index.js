"use strict";

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.insertAdjacentElement('beforeend', script);
}

function loadScriptArr(src, callback) {
    src.forEach((el) => {

        const check = checkReplay(el);

        if (check) {
            const script = document.createElement('script');
            script.src = el;
            script.onload = callback;
            document.head.insertAdjacentElement('beforeend', script);
        }
    });
}

function loadScriptCallBack(callback) {
    const src = ['./common.js', './timer.js', './a.js']
    src.forEach((el) => {
        const script = document.createElement('script');
        script.src = el;
        script.onload = callback;
        document.head.insertAdjacentElement('beforeend', script);
    });
}


// Вариант с массивом
loadScriptArr(['./common.js', './timer.js', './a.js', './common.js', './b.js'], () => {
    console.log('loadScriptArr');
});

/*
// Вариант с callback
loadScriptCallBack(() => {
    console.log('loadCallBack');
});


// Вариант со строкой
loadScript('./common.js', () => {
    // Функция, которая находится в common.js
    log();

    console.log('index.js');
});*/


function checkReplay(replay) {
    const scriptArr = document.head.getElementsByTagName('script');

    let check = true;

    for (let i = 0; i < scriptArr.length; i++) {
        if (scriptArr[i].attributes[0].nodeValue == replay) {
            check = false;
            break;
        }
    }
    return check;
}