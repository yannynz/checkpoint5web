const gera = document.querySelector('#dados');
const num = parseInt(Math.random() * 31 + 1);
let quar = 0
gera.addEventListener('click', function () {
    const day = document.querySelectorAll('.day');
    for (let i = 0; i < day.length; i++) {
        if (Number(day[i].textContent) % 2 == 0 && day[i].textContent != " ") {
            day[i].classList.add('bg-light');
        } else if (day[i].textContent != " " && Number(day[i].textContent) % 2 != 0) {
            day[i].classList.add('bg-warning');
        } else {
            day[i].classList.add('bg-dark');
        }if (Number(day[i].textContent) === num) {
            day[i].textContent = 'Feriado'
            day[i].classList.add('lead')
        }
    }
    for (let i = 2; i < day.length; i += 7) {
        quar = i;
        console.log(quar);
    }
})