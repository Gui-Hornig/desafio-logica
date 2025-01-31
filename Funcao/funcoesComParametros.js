torrar("pao de forma");
torrar("pao integral");

function torrar(pao) {
  console.log("torrada feita com " + pao);
}

torrar("pao integral", "guilherme", 10.90);

function torrar(pao, nomeCliente = "*Cliente nao declarou o nome*", valor) {
  console.log("torrada feita com " + pao);
  console.log("Ele e um pedido de " + nomeCliente);
  console.log ("O valor Total e "+ valor)
}


