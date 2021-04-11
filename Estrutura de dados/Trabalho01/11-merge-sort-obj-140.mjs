let comps, divisoes, juncoes

 function mergeSort(vetor, fnComp) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            //if(vetEsq[pEsq] < vetDir[pDir]) {
            if(fnComp(vetDir[pDir], vetEsq[pEsq])) {    // Parâmetros invertidos
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps ++
        }
        // Descobrir de qual lado sobrou
        let sobra
        // Sobra à esquerda
        if (pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)

        // Retorna vetor de resultador + sobra
        return[...vetRes, ...sobra]
    }

    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive a posição final NÃO entra)
        let vetEsq = vetor.slice(0, meio)
        // caso o segundo parâmetro do slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)
        divisoes++

        // Chamadas recursivas a função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        return vetFinal
    }
    return vetor    // Vetor de 1 elemento, não modificado, condição de saída
}

import { gastos } from './includes/cota-parlamentar-140-mil.mjs'

comps = 0, divisoes = 0, juncoes = 0
console.time('Ordenando gastos...')
let gastosOrd = mergeSort(gastos, (obj1, obj2) => {
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
console.log('DEPOIS:', gastosOrd)
console.log({comps, divisoes, juncoes, memoria})