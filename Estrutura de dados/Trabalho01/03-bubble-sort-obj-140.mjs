let totTrocas, pass, comps

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0
        pass ++
        //Percurso do vetor, da primeira até a PENÚLTIMA posição
        for (let i = 0; i <= vetor.length - 2; i++) {
            // if (vetor[i] > vetor[i + 1]) {
            if (fnComp(vetor[i], vetor[i + 1])) {
                // Troca direta em JS via desestrutuação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]

                trocas ++
            }
            comps ++
        }
        totTrocas += trocas

    } while (trocas > 0)
}

import { gastos } from './includes/cota-parlamentar-140-mil.mjs'

console.log('ANTES:', gastos)
console.time('Ordenando candidatos...')
bubbleSort(gastos, (obj1, obj2) => {
    if(obj1.partido === obj2.partido) {
        // Empate no partido, desempate no nome parlamentar
        if(obj1.nome_parlamentar === obj2.nome_parlamentar) return obj1.id_documento > obj2.id_documento
        // Partido igual, nome parlamentar igual, diferencia por nome parlamentar
        else return obj1.nome_parlamentar > obj2.nome_parlamentar
    }
    // Partidos diferentes, diferencia por partido
    else return obj1.partido > obj2.partido
})

console.timeEnd('Ordenando candidatos...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('DEPOIS:', gastos)
console.log({totTrocas, pass, comps, memoria})