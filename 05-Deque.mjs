import Deque from "./lib/Deque.mjs";

//Lista de compras

let listaCompras = new Deque()

console.log(listaCompras.print())
console.log("A lista está vazia? \n" + listaCompras.isEmpty)

//alimenticio

listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("sal")
console.log(listaCompras.print())


//produto de limpeza
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água sanitaria")
console.log(listaCompras.print())

console.log("A lista está vazia? \n" + listaCompras.isEmpty)

listaCompras.insertFront("Café")
listaCompras.insertFront("Açúcar")
console.log(listaCompras.print())

listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")

console.log(listaCompras.print())

let removido = listaCompras.removeFront()
console.log({removido})
console.log(listaCompras.print())

let front = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log({front})
console.log({ultimo})



