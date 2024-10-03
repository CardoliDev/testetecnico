function fibonacciCheck(num) { 

    if (num < 0) { 

        return `${num} não pertence à sequência de Fibonacci.`; 

    } 

 

    let fib = [0, 1]; 

 

    // Gera a sequência de Fibonacci até o número informado 

    while (true) { 

        let nextFib = fib[fib.length - 1] + fib[fib.length - 2]; 

        if (nextFib > num) { 

            break; 

        } 

        fib.push(nextFib); 

    } 

 

    // Verifica se o número pertence à sequência 

    if (fib.includes(num)) { 

        return `${num} pertence à sequência de Fibonacci.`; 

    } else { 

        return `${num} não pertence à sequência de Fibonacci.`; 

    } 

} 

 

// Exemplo de uso 

let numberToCheck = 21; // Altere este valor para testar outros números caso queira

console.log(fibonacciCheck(numberToCheck)); 