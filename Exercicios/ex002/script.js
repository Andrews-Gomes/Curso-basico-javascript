function gerar(){
    let lista = window.document.querySelector('select#ltab');
    let ntab = window.document.querySelector('input#ntabuada');
    if(ntab.value.length == 0){
        window.alert('Por favor, digite um número acima');
    }else{
        lista.innerHTML = ``;
        let n = Number(ntab.value);
        for(let c = 1; c <= 10; c++){
            let item = window.document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `ntab${c}`
            lista.appendChild(item);
        }
    }
}