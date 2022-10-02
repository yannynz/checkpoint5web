const gera=document.querySelector('#dados');

gera.addEventListener('click', function buscadia() {
    const week=document.querySelectorAll('.week');
    for(let i =0; i<week.length;i++){
        let day =Number(week[i].querySelector('.day').textContent);
    if (day=0) {
        week[i].classList.add('bg-dark', 'text-light');
    }        
    } 
})

