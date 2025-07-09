let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let vazio = []

for(let i = 0; i < numeros.length; ++i) {
    if(numeros[i] % 2 == 0){
        vazio.push(numeros[i])
    }
}
console.log(vazio)