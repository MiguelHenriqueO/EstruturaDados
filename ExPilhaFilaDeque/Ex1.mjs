import Queue from "./lib/Queue.mjs";

let aten = new Queue
aten.enqueue("mario")
aten.enqueue("roberto")
aten.enqueue("maria")
aten.enqueue("Paulo")


aten.dequeue()
aten.dequeue()

console.log(aten.print())
console.log(aten.OperationCount)
