let saldos = [100, -20, 200, -30, 150]
let soma = 0
for(let i = 0; i < saldos.length; ++i){
    if(saldos[i] > 0) {
        soma += saldos[i]
    }
}
console.log(soma)