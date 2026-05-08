function factorialIterativo(n){
    const inicio = performance.now()
    let resultado = 1
    
    for(let i = 2; i <=n; i++){
        resultado *= i
    }

    const fim = performance.now()
    const tempoGasto = fim - inicio

    const memoriaPilhaMb = (n *4)/ (1024 * 1024)

    let memoriaTotalMb = 'N/A'
    if(typeof process !== 'undefined' && process.memoryUsage()){
        memoriaTotalMb = process.memoryUsage().heapUsed / 1024 / 1024
    }

    console.clear()
    console.log("--Análise de complexidade Iterativa O(n!)---")
    console.log("Tamanho da entrada: ", n)
    console.log("Resultado Fatorial: ", resultado)
    console.log("Tempo de execução: ", tempoGasto.toFixed(6), ' ms')
    console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMb, "MB")
    console.log("Memória total usada pelo processo: ", 
        typeof memoriaTotalMb === 'number' ? memoriaTotalMb.toFixed(6) + " MB" : memoriaTotalMb

    )


}

const numero = 5000
factorialIterativo(numero)