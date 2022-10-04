const getMedia = document.querySelector('#btn');
getMedia.addEventListener('click', function() {
    const realMedia =document.querySelectorAll('.materia');
    for (let i = 0; i < realMedia.length; i++) {
        let media1=Number(realMedia[i].querySelector('.media1').textContent);
        let media2=Number(realMedia[i].querySelector('.media2').textContent);
        let mFinal = ((media1*0.4)+(media2*0.6));
        realMedia[i].querySelector('.final').textContent=mFinal.toFixed(1);
        if(mFinal<4){
            realMedia[i].querySelector('.result').textContent="Reprovado";
        }
        else if(mFinal>=4&&mFinal<6){
            realMedia[i].querySelector('.result').textContent="Exame";
        }else{
            realMedia[i].querySelector('.result').textContent="Aprovado"; 
        }
    }

})