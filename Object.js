class formaDeBolo{
  constructor(saborDaMassa, saborRecheio){
    this.saborDaMassa = saborDaMassa
    this.saborRecheio = saborRecheio
  }
}

let boloFesta = new formaDeBolo("massa de chocolate", "Recheio de Nutela")

console.log(boloFesta)