import Deque from "./lib/Deque.mjs";

let max = new Deque

max.insertFront(3)
max.insertFront(2)
max.insertFront(1)

console.log(max.print())

max.insertBack(4)
max.insertBack(5)

console.log(max.print())

max.insertBack(22)
max.insertFront(33)

console.log(max.print())