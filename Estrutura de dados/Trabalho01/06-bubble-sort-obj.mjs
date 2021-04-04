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

import { gastos } from './includes/cota-parlamentar-8.5-mil.mjs'

console.log('ANTES:', gastos)
console.time('Ordenando candidatos...')
bubbleSort(gastos, (obj1, obj2) => {
    if (obj1.id_documento === obj2.id_documento) {  // última comparação id_documento (número)
        if(obj1.nome_parlamentar === obj2.nome_parlamentar) return obj1.partido > obj2.partido
            else return obj2.nome_parlamentar > obj2.nome_parlamentar
        }
    else return obj1.id_documento > obj2.id_documento
})
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', gastos)
console.log({totTrocas, pass, comps})

bubbleSort(gastos, (obj1, obj2) => {
    if (obj1.id_documento === obj2.id_documento) {  // última comparação id_documento (número)
        if(obj1.nome_parlamentar === obj2.nome_parlamentar) return obj1.partido > obj2.partido
            else return obj2.nome_parlamentar > obj2.nome_parlamentar
        }
    else return obj1.id_documento > obj2.id_documento
})