    function fibo(n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        return fibo(n-1) + fibo(n - 2);
        /* Chamadas recursivas a função fibo() para sempre somar as duas últimas posições da sequência fibonacci*/ 
    }

    let fibonacci = []

    for (let i = 1; i <= 15; i++) {
        fibonacci.push(fibo(i))
    }

    console.log(fibonacci)

    