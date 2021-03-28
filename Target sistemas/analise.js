const fat = [0, 10, 20, 30, 40, 50, 60, 70];

// Buscando o maior valor do vetor
let maior = Math.max.apply(null, fat);

// Buscando o menor valor do vetor
let menor = Math.min.apply(null, fat);

// Argumento de resto para somar todos os elementos do vetor
function somaTudo(...fat) {
    let soma = 0
    for(let i = 0; i < fat.length; i++) {
        soma += fat[i]
    }
    return soma
}

let somaTot = somaTudo(0, 10, 20, 30, 40, 50, 60, 70)

let media = somaTot/(fat.length)

console.log({maior, menor, somaTot, media})