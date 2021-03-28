/* 
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53 */

let SP = 67836.43
let RJ = 36678.66
let MG = 29229.88
let ES = 27165.48
let outros = 19849.53

total = SP + RJ + MG + ES + outros

porcSP = (SP * 100) / total
porcRJ = (RJ * 100) / total
porcMG = (MG * 100) / total
porcES = (ES * 100) / total
porcOutros = (outros * 100) / total

console.log(`SP: ${porcSP.toFixed(0)}%  , RJ: ${porcRJ.toFixed(0)}% , MG: ${porcMG.toFixed(0)}% , ES: ${porcES.toFixed(0)}% , Outros: ${porcOutros.toFixed(0)}%`)