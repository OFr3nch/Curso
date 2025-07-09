//notas menores que 6
let notas = [7, 5, 6, 4, 8]
let troca = []

for(let i = 0; i < notas.length; ++i){
    if(notas[i] < 6) {
        troca.push(6)
        } else{
        troca.push(notas[i]) 
        }
    }
console.log(troca)