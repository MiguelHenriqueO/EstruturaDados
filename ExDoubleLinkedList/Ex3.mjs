import LinkedList from "./lib/LinkedList.mjs"

let lista = new LinkedList

lista.insertTail("A")
lista.insertTail("B")
lista.insertTail("A")
lista.insertTail("C")
lista.insertTail("A")

console.log(lista.print())
console.log(lista.countOccurrences("A"))