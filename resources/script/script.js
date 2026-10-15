// arquivo != pasta

// Arrays === lista

// let compras = ["ovo", "arroz","feijao branco", "sabao em po","sabao em barra"];

// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra => compra.toLowerCase() === busca.toLowerCase().trim())

// let encontrar = compras.indexOf(listaFiltrada)
// console.log(encontrar);

// let users = ["Pedro","Ana","Joana","Diego","Davi","Cristiano"];

// let searchUser = prompt("Digite o nome do usuário que deseja buscar")

// if(searchUser === ""){
//     console.log("não pode enviar em branco");
// }
// else{
//     let user = urses.find(user => user.toLowerCase().includes(searchUser.toLocaleLowerCase().trim()) 
// )
// }



let fila = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel"];
console.log("Fila inicial de clientes:", fila);

//cliente comum
fila.push("Gabriel")

//cliente propietario
fila.unshift("Diana")

//sera remover o primeiro cliente da fila
fila.shift() 

//sera remover o ultimo cliente da fila
fila.pop()



console.log("Fila de clientes:", fila);