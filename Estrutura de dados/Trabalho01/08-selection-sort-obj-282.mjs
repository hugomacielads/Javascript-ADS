let trocas, pass, comps

 function selectionSort(vetor, fnComp) {

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++) {
            //if (vetor[j] < vetor[menor]) menor = j
            // Na passagem para função de comparação, a ordem dos
            // objetos precisa ser invertida
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }

    // Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)

        // if(vetor[menor] < vetor[i]) {
        
        if(fnComp(vetor[i], vetor[menor])) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ] 
            trocas++
        }
        comps++
    }
}

// Função de comparação retorna true caso o PRIMEIRO objeto seja MAIOR que o SEGUNDO

import { gastos } from './includes/cota-parlamentar-282-mil.mjs'

console.log('ANTES:', gastos)
console.time('Ordenando gastos...')
selectionSort(gastos, (obj1, obj2) => {
    if(obj1.partido === obj2.partido) {
        // Empate no partido, desempate no nome parlamentar
        if(obj1.nome_parlamentar === obj2.nome_parlamentar) return obj1.id_documento > obj2.id_documento
        // Partido igual, nome parlamentar igual, diferencia por nome parlamentar
        else return obj1.nome_parlamentar > obj2.nome_parlamentar
    }
    // Partidos diferentes, diferencia por partido
    else return obj1.partido > obj2.partido
})

console.timeEnd('Ordenando gastos...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('DEPOIS:', gastos)
console.log({trocas, pass, comps, memoria})