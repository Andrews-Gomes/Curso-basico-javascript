function verificar(){
    let txtn = window.document.querySelector('input#txtano');
    let res = window.document.querySelector('div#resultado');
    let radiosex = window.document.getElementsByName('radsex');
    let data = new Date();
    let anoAtual = data.getFullYear();

    if(txtn.value.length == 0 || txtn.value > anoAtual || txtn.value < 0){
        window.alert('Dados inválidos / Faltam dados')
    }else{

        var idade = anoAtual - Number(txtn.value);
        var sexo = '';
        let img = window.document.createElement('img')
        img.setAttribute('id','foto')

        if(radiosex[0].checked){
            sexo = 'Homem';
            
            if(idade <= 12){
                //Criança
                img.setAttribute('src','./imagens/homemcriança.png')
            }else if(idade <= 24){
                //Jovem
                img.setAttribute('src','./imagens/homemjovem.png')
            }else if(idade <= 50){
                //Adulto
                img.setAttribute('src','./imagens/homemadulto.png')
            }else{
                //Idoso
                img.setAttribute('src','./imagens/homemvelho.png')
            }
        }else if(radiosex[1].checked){
            sexo = 'Mulher';

            if(idade <= 12){
                //Criança
                img.setAttribute('src','./imagens/mulhercriança.png')
            }else if(idade <= 24){
                //Jovem
                img.setAttribute('src','./imagens/mulherjovem.png')
            }else if(idade <= 50){
                //Adulto
                img.setAttribute('src','./imagens/mulheradulta.png')
            }else{
                //Idoso
                img.setAttribute('src','./imagens/mulhervelha.png')
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${sexo} de ${idade} anos`;
        res.appendChild(img);

    }
}