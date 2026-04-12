import LinkedList from "./lib/LinkedList.mjs";

let lista1 = new LinkedList

lista1.insert(0,"a")
lista1.insert(1,"b")
lista1.insert(2,"c")
lista1.insert(3,"d")

console.log(lista1.print())


lista1.remove(2)
lista1.removeHead()
lista1.removeTail()

console.log(lista1.print())
console.log(lista1.history)
