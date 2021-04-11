let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim =  vetor.length - 1) {
    if(fim > ini) {
        pass++
        const pivot = fim
        let div = ini - 1
        // Loop for vai ate a PENÚLTIMA posição
        for(let i = ini; i < fim; i++) {
            // if (vetor[i] < vetor[pivot]) {
            if(fnComp(vetor[pivot], vetor[i])) {
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        // Colocamos o pivô no seu lugar definitivo
        // if(vetor[pivot] < vetor[div]) {
        if(fnComp(vetor[div], vetor[pivot])) {  // Parâmetros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        // Ordena o subvetor à esquerda do pivô
        quickSort(vetor, fnComp, ini, div - 1)

        // Ordena o subvetor à direita do pivô
        quickSort(vetor, fnComp, div + 1, fim)
        }
    }

import { gastos } from './includes/cota-parlamentar-282-mil.mjs'

trocas = 0, pass = 0, comps = 0
//console.log('ANTES:', candidatos)
console.time('Ordenando gastos...')
quickSort(gastos, (obj1, obj2) => {
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