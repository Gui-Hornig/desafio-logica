function calcularNivel(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let nivel; 

  if(vitoria < 10){
    nivel = "Ferro";
  }else if (vitorias <= 20){
    nivel = "Bronze";
  }else if  (vitorias <= 50){
    nivel = "Prata";
  }else if (vitorias <= 80){
    nivel = "outro"
  }else if (vitorias <= 90){
    nivel = "Diamante"
  }else if (vitorias <= 100){
    nivel = "Lendario"
  }else {
    nivel = "Imortal"}

    return {saldo, nivel}
}

let  vitoria = 115
let derrotas = 10
let resultado = calcularNivel(vitoria, derrotas)
console.log (`O heoi tem o saldo de ${resultado.saldo} esta no nivel ${resultado.nivel}`)