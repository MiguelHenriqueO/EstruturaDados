export default class Deque{
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    //método para inserção no início da estrutura
    insertFront(val){
        this.#data.unshift(val)
    }

    //método para inserção no final da estrutura
    insertBack(val){
        this.#data.push(val)
    }

    //método para remção do inicio da estrutura

    removeFront(){
        this.#data.shift()
    }

    //método para remoção do final da estrutura

    removeBack(){
        this.#data.pop()
    }

    //métdo para consultar inicio da estrutura

    peekFront(){
        return this.#data[0]
    }

    //métdo para consultar final da estrutura

    peekBack(){
        return this.#data[this.#data.length - 1]  
    }
    

    get isEmpty(){
        return this.#data.length === 0 ? "tem nada ai não irmão" : "ta vazia porra nenhuma"
    }

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