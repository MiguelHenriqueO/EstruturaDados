import Stack from "./lib/Stack.mjs";

let paginas = new Stack (5)
paginas.push("youtube")
paginas.push("Google")
paginas.push("Twitter")
paginas.push("Netflix")
paginas.push("Linkedin")
paginas.push("GitHub")
paginas.push("ChatGpt")


console.log(paginas.print())
