const alarm_task = {
    date: [],
    time: []
};
(async () => {
    'use strict';
    const timer = document.getElementById('timer');
    const btn = document.getElementById('btn_create')
    setInterval(Sync,1000 - new Date().getUTCMilliseconds());
    Init();
    btn.addEventListener("click",Create);
})();

function Sync() {
    timer.textContent = new Date().toLocaleTimeString('ja-JP');
}

function Init() {
    flatpickr.localize(flatpickr.l10ns.ja);
    flatpickr("#time-pick", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
    });
    flatpickr("#date-pick", {
        minDate: "today",
    });
}

function Create() {
    const date = document.getElementById("date-pick").value;
    const time = document.getElementById("time-pick").value;
    if(alarm_task.date.includes(date) && alarm_task.time.includes(time)) return alert('このアラームはすでに作成されています！');
    alarm_task.date.push(date);
    alarm_task.time.push(time);
    Append();
}

function Append() {
    const tr = document.createElement("tr");
    const d = document.createElement('td');
    d.textContent = alarm_task.date.slice(-1)[0];
    const t = document.createElement('td');
    t.textContent = alarm_task.time.slice(-1)[0];

    tr.appendChild(d);
    tr.appendChild(t);
    const summary = document.getElementById('summary');
    summary.appendChild(tr);
}