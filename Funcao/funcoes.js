torrar()

//Funcao sao acoes deixe claro os nomes das funcoes sobre o que ela faz

function torrar(){
 console.log("torrando pão")
 injetarPao() //funcao chamando outra 
}

function injetarPao(){
	console.log("preparando para torrar o pão")
    console.log("finalizado")
}

//Pelas boas praticas cada funcoes precisa fazer alguma coisa diferente para facilitar o debug
//Pode criar uma function main(){} para chamar todas as funcoes necessarias


main()

function main(){
  getData()
  checkValues()
  sendToDatabase()
}

function getData(){
  console.log ("Pegando dados do usuario")
}

function checkValues(){
  console.log("Validando dados")
}

function sendToDatabase (){
  console.log ("Enviando para o Banco de dados")
}