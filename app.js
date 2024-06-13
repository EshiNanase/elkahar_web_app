let tg = window.Telegram.WebApp;
tg.expand();

let params = new URLSearchParams(document.location.search);
document.getElementById('level').innerHTML = `Уровень: ${params.get('level')}`
document.getElementById('exp').innerHTML = `Опыт: ${params.get('exp')}`