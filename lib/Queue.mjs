export default class Queue{

    #data // vetor privado

    constructor(){
        this.#data = []
    }


    //método para inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    //método para remoção da fila
    dequeue(){
        return this.#data.shift()
    }

    //método para consultar início da fila sem remover o elemento
    peek(){
        return this.#data[0]
    }

    // a fila está vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    //método de impressão da fila
    print(){
        let output = "[ "
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }

            output += `(${i+1}°): ${this.#data[i]}`
        }

        return output + " ]"
    }
}