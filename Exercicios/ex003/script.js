let valores = [];
let lista = window.document.querySelector('select#ltab');
let ntab = window.document.querySelector('input#tabn');
let res = window.document.querySelector('div#res');

function limpar(){
    res.innerHTML = ``;
    valores = [];
    lista.innerText = '';
}

function isNumero(n){
    if(Number(n) > 0 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}


function inLista(n, vetor){
    if(vetor.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){

    if(isNumero(ntab.value) && !inLista(ntab.value, valores)){
        res.innerHTML = ``;
        valores.push(Number(ntab.value));
        let item = window.document.createElement('option');
        item.text = `Valor ${ntab.value} adicionado`;
        lista.appendChild(item);
    }else{
        alert('Valor inválido ou já encotrado na lista.')
    }
    ntab.value = ``;
    ntab.focus();
}

function finalizar(){
    let totadd = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let totpar = 0;
    let totimpar = 0;

    
    for(let pos in valores){
        soma += valores[pos]

        if(valores[pos] > maior){
            maior = valores[pos]
        }

        if(valores[pos] < menor){
            menor = valores[pos]
        }

        if(valores[pos] % 2 == 0){
            totpar++
        }else{
            totimpar++
        }
    }

    let media = soma/totadd;
    res.innerHTML = `<p>No total, você adicionou ${totadd} valores.</p>`;
    res.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores adicionados é de ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores adicionados é de ${media.toFixed(1)}</p>`
    res.innerHTML += `<p>O total de números pares é ${totpar}.</p>`
    res.innerHTML += `<p>O total de números ímpares é ${totimpar}.</p>`

}