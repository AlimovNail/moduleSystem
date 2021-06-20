define(["app"], function ({
    loadScriptArr
}) {
    loadScriptArr(['./common.js', './common.js', './timer.js', './a.js'], () => {
        console.log('loadScriptArr');
    });
});