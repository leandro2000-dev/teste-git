// verificador de numero
let vnum = document.getElementById('txti')
let vlista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

//verifica se o numero digitado está entre 1 e 100
function isNumero(n) {
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }

}
//verifica se o numero digitado ja existe na lista
function isLista(n,l) {
    if(l.indexOf(Number(n))!=-1){
        return true
    } 
    else {
        return false
    }
}
//Adiciona ao arrays os valores
function adicionar() {

    if(isNumero(vnum.value) && !isLista(vnum.value,valores)){
        valores.push(Number(vnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${vnum.value} foi adicionado`
        vlista.appendChild(item)

    }
    else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }

  

    
} 
function finalizar() {
    if(valores.length==0){
        window.alert('Lista vazia')
    }
    else{
        let tot =  valores.length
        let maior = valores[0]
        let menor =  valores[0]
        for(let pos in valores){
            if(valores[pos]>maior){
                maior = valores[pos]
            }
            if(valores[pos]<menor){
                menor = valores[pos]
            }
           // media += (valores[pos])
        }


        //Exibi os resultados
        res.innerHTML=''
        res.innerHTML+=`<p>O maior valor digitado é: ${maior}<p>`
        res.innerHTML+=` <p>O menor valor digitado é:${menor}<p>`
        //res.innerHTML+=` <p>A media dos valores é: ${media}<p>`
    }


}