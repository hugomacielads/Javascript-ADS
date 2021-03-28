    function fibo(n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        return fibo(n-1) + fibo(n - 2);
        /* Chamadas recursivas a função fibo() para sempre somar as duas últimas posições da sequência fibonacci*/ 
    }

    // Posição 3 na seguência de Fibonacci: 1 + 2 = 3
    console.log(fibo(3))

    // Posição 5 na seguência de Fibonacci: 5 + 3 = 8
    console.log(fibo(5))

    // Posição 7 na seguência de Fibonacci: 13 + 8 = 21 
    console.log(fibo(7))

    let fibonacci = []

    fibonacci.push(fibo(1))
    fibonacci.push(fibo(2))
    fibonacci.push(fibo(3))
    fibonacci.push(fibo(4))
    fibonacci.push(fibo(5))
    fibonacci.push(fibo(6))

    console.log(fibonacci)
