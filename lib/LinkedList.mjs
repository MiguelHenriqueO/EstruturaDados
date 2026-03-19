class Node{
    constructor(val){
        this.data = val
        this.next = null
    }
}

export default class LinkedList{
    #head // inicio da lista(cabeça)
    #tail // fim da lista (calda)
    #count // quantidade de nodos da lista

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    //getter que retorna se a lista encadeada está vazia ou não
    get isEmpty(){
        this.#count === 0
    }

    //getter que retorna a quantidade de elementos da lista encadeada

    get count(){
        return this.#count
    }

    //Método para inserir em qualquer posição
    insert(pos, val){
        // cria um nodo para armazenar o valor inserido
        const inserted = new Node(val)

        // 1° caso: lista está vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        
        // 2° caso: lista não vazia, inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted
        }
        
        //3° caso: inserção no final da fila
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //4° caso: inserir no meio da lista.

        else{
            let before = this.#head
            for(let i = 1; i < pos; i++){
                before = before.next
            }

            let after = before.next

            inserted.next = after
            before.next = inserted
        }

        this.#count ++


    }

    //método para inserção na primeira posição atalho
    insertedHead(val){
        this.insert(0, val)
    }

    //Inserção na ultima posição
    insertedTail(val){
        this.insert(this.#count, val)
    }

    //método para remoção de um nodo na lista
    remove(pos){
        //1° caso: a lista está vazia ou posição informada esta fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        let removed

        //2° caso remoção do inicio da lista
        if(pos === 0){
            removed = this.#head
            this.#head = this.#head.next

            if(this.#count === 1){
                this.#tail = null
            }
        }

        //3° caso remoção de nodo intermediário ou final
        else{
            let before = this.#head
            for(let i = 1; i < pos; i ++){
                before = before.next
            }

            removed = before.next

            let after = removed.next

            before.next = after

            if(pos === this.#count - 1){
                this.#tail = before
            }
        }

        this.#count --

        return removed.data
    }
}