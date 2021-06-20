define(function() {
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
    return {
        loadScriptArr
    };
});