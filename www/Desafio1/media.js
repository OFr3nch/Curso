function media(lista){
    let soma = 0
    for(let i = 0; i < lista.length; ++i){
        soma += lista[i]
    }
    console.log(soma/lista.length)        
}
module.exports = media