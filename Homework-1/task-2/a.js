function loadB() {
    const check = checkReplay('./b.js');
    if (check) {
        const scriptB = document.createElement('script');

        scriptB.src = './b.js';

        document.head.insertAdjacentElement('beforeend', scriptB);
    }
}

loadB();