// O(1)
//porque a operação de acesso ao primeiro elemento do array é feita em tempo constante, independentemente do tamanho do arry

function example01 (arr){
    if (arr.length === 0) return null
    return arr[0]
}

const arr = [5,6,7,8,9,2,3,4]
//console.log(example01(arr))



// o(log n), a cada iteração o valor de i é multiplicado por 2 oque significa que o número de iterações necessárias para que i atinja n é logaritimico em relação a n
function exampleOLogN(n){
    let i = 1
    while(i < n){
        console.log(i)
        i*= 2
    }
}

//console.log(example02(5));

// O(n), porque a função percorre todos os elementos do array uma vez, realizando uma operação constatne para cada elemento (console.log)

function exampleON(arr){
    for(let i =0; i < arr.length; i ++){
        console.log(arr[i]);
        
    }
}

//console.log(exampleON(arr));

// O(n²), porque a função contem 2 loops alinhados que percorrem todos os elementos do array, resultando em um número total de operações proporcinal ao quadrado do tamanho do array
function exampleON2(arr){
    for (let i =0; i < arr.length; i ++){
        for(let j = 0; j< arr.length; j ++){
            console.log(arr[i], arr[j])
        }
    }
}

console.log(exampleON2(arr))