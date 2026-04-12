import Stack from "./lib/Stack.mjs";

let paginas = new Stack
paginas.push("youtube")
paginas.push("Google")
paginas.push("Twitter")
paginas.push("Netflix")

paginas.pop()
paginas.pop()
paginas.pop()

console.log(paginas.print())
console.log(paginas.history)