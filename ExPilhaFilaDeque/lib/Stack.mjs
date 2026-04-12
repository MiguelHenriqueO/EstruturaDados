/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export default class Stack {

    #data       // Vetor privado
    #historyData
    #max

    constructor(max) {
        this.#data = []     // Vetor vazio
        this.#historyData = []
        this.#max = max
    }

    // Método para inserção no vetor
    push(val) {
        if (this.#data.length >= this.#max) {
        console.log("Limite de elementos atingido")
        return
    }
        this.#data.push(val)
    }

    // Método para remoção do vetor
    pop() {
        this.#historyData.push(this.peek())
        return this.#data.pop()
    }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    get history() {
        return this.#historyData
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////