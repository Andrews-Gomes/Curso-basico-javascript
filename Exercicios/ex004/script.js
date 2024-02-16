function carregar(){
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let horatxt = window.document.querySelector('div#hora');
    let imghora = window.document.querySelector('img#foto')

    if(minuto < 10){
        horatxt.innerHTML = `Agora são ${hora}:0${minuto}<br>`;
    }else{
        horatxt.innerHTML = `Agora são ${hora}:${minuto}<br>`;
    }

    if(hora >= 5 && hora < 12){
        horatxt.innerHTML+=`Bom dia!`;
        imghora.src = './imagens/fotomanha.png'
        window.document.body.style.backgroundColor = '#F9C98A';
    }else if(hora >= 12 && hora < 18){
        horatxt.innerHTML += `Boa tarde!`;
        imghora.src = './imagens/fototarde.png'
        window.document.body.style.backgroundColor = '#91562A';
    }else{
        horatxt.innerHTML += `Boa noite!`;
        imghora.src = './imagens/fotonoite.png'
        window.document.body.style.backgroundColor = '#121215';
    }

}