import Deque from "./lib/Deque.mjs";

let deque = new Deque

deque.insertBack("arroz")
deque.insertBack("feijão")
deque.insertBack("repolho")
deque.insertBack("feijão")

console.log(deque.print())