let userName = getFirstName("Guilherme-mendes-de-souza ", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Guilherme mendes de souza ", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}