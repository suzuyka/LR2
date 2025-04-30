const readline = require('readline');

// Проверяет, является ли число простым
function isprostoe(N) {
    if (N < 2) return false; // Числа меньше 2 не простые
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return false; // Делится без остатка - не простое
    }
    return true;
}

// Находит ближайшее простое число к N
function near(N) {
    if (isprostoe(N)) return N; // Если N простое - возвращаем его
    let lower = N - 1;
    let upper = N + 1;

    while (true) {
        if (isprostoe(lower)) return lower; // Ищем простое вниз
        if (isprostoe(upper)) return upper; // Ищем простое вверх
        lower--;
        upper++;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Запрашиваем число у пользователя
rl.question('Пример: ', (input) => {
    const N = parseInt(input, 10);
    const num = near(N);
    const res = N - num;

    console.log('Ближайшее простое: ' + num);
    console.log('Результат: ' + res);

    rl.close();
});

