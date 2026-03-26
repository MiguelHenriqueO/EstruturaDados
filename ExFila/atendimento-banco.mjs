import Queue from './lib/Queue.mjs'

/*
    

    */

    //1-) Crie um objeto filaBanco e insira os clientes na ordem correta.

    let filaBanco = new Queue()

    filaBanco.enqueue("Cliente 101")
    filaBanco.enqueue("Cliente 102")
    filaBanco.enqueue("Cliente 103")
    filaBanco.enqueue("Cliente 104")
    filaBanco.enqueue("Cliente 105")

    //2-) Imprima a fila antes do atendimento.
    console.log(filaBanco.print())

    //3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da fila e imprima o nome dele.
    console.log(filaBanco.dequeue())

    //4-) Imprima a fila após a remoção.
    console.log(filaBanco.print())

    // 5-) Dois novos clientes pegaram senha:
    filaBanco.enqueue("Cliente 106")
    filaBanco.enqueue("Cliente 107")

    // 6-) Imprima a fila após as alterações.
    console.log(filaBanco.print())

    //7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.
    console.log("O próximo a ser atendido é: ", filaBanco.peek())

    //8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a fila atualizada.
    filaBanco.dequeue()
    console.log(filaBanco.print())


