import LinkedList from "./lib/LinkedList.mjs"

let lista = new LinkedList

lista.insertTail("A")
lista.insertTail("B")
lista.insertTail("C")
lista.insertTail("D")

console.log("Antes:")
console.log(lista.print())

lista.reverse()

console.log("Depois:")
console.log(lista.print())