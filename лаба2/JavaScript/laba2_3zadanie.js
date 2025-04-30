const readline = require('readline');

function count_dig(num) {
    let count = 0;
    while (num > 0) {
        let dig = num % 10;
        if (dig % 2 !== 0) {
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = 0;         // Количество чисел для обработки
let linesRead = 0;   // Сколько чисел уже прочитано

rl.on('line', (line) => {
    if (num === 0) {
        num = parseInt(line);
        if (num === 0) {
            rl.close(); // Если 0, завершаем ввод
        }
    } else {
        let n = parseInt(line);
        // Выводим количество нечётных цифр, разделяя пробелом, после последнего - перевод строки
        process.stdout.write(count_dig(n) + (linesRead === num - 1 ? '\n' : '\n'));
        linesRead++;
        if (linesRead === num) {
            rl.close(); // Закрываем после обработки всех чисел
        }
    }
});

