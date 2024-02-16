function contar(){
    let txtinicio = window.document.querySelector('input#txti')
    let txtfim = window.document.querySelector('input#txtf')
    let txtpasso = window.document.querySelector('input#txtp')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        window.alert('Preencha todos os dados antes de contar')
    }else{
        let res = window.document.querySelector('div#res')
        let i = Number(txtinicio.value);
        let f = Number(txtfim.value);
        let p = Number(txtpasso.value);
        if(p <= 0){
            window.alert('Passo ínvalido. Considerando passo 1')
            p = 1;
        }
        res.innerHTML = `Contando: <br>`;
        if(i < f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else if(i > f){
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}