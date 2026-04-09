import DoublyLinkedList from "./lib/DoublyLinkedList.mjs";

const lista = new DoublyLinkedList()

console.log("Lista está vazia? \n",lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert(0, "Fiat")
console.log("Lista está vazia? \n",lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert(0, "Opala")
console.log(lista.print())

lista.insertTail("Chevete")
console.log(lista.print())

lista.insert(1, "Corcel")
console.log(lista.print())

let removida = lista.remove(0)
console.log({removida},lista.print())

removida = lista.remove(1)
console.log({removida},lista.print())

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
console.log({pos0, pos1})

let posChevete = lista.indexOf("Chevete")
console.log({posChevete})

