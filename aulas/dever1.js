//valores > 10
let numeros = [3, 12, 8, 25, 7]

let contador = 0

for(let i = 0; i < numeros.length; ++i) {
    if(numeros[i] > 10){
        ++contador
    }
}
console.log(contador)