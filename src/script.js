(async () => {
    'use strict';
    const timer = document.getElementById('timer');
    setInterval(Sync,1000 - new Date().getUTCMilliseconds());
})();

function Sync() {
    timer.textContent = new Date().toLocaleTimeString('ja-JP');
}