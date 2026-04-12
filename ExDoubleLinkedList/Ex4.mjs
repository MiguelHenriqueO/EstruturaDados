import LinkedList from "./lib/LinkedList.mjs";

let lista = new LinkedList

lista.insertTail("a")
lista.insertTail("b")
lista.insertTail("a")
lista.insertTail("c")
lista.insertTail("a")

console.log(lista.print())
// ( [0]: a, [1]: b, [2]: a, [3]: c, [4]: a )

lista.removeAll("a")

console.log(lista.print())
// ( [0]: b, [1]: c )