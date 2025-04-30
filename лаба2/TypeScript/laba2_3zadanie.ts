import promptSync from 'prompt-sync';
const prompt = promptSync();
// Функция для подсчёта количества нечётных цифр в числе
function count_dig(num: number): number {
    let count = 0;        // Счётчик нечётных цифр
    let n = num;          // Копия числа для обработки
    while (n > 0) {
        let dig = n % 10; // Получаем последнюю цифру
        if (dig % 2 !== 0) {
            count++;      // Если цифра нечётная, увеличиваем счётчик
        }
        n = Math.floor(n / 10); // Убираем последнюю цифру
    }
    return count;         // Возвращаем результат
}

function main() {
    // Ввод количества чисел
    const num: number = parseInt(prompt("Введите количество чисел: ") || "0");

    for (let i = 0; i < num; i++) {
        // Ввод каждого числа
        const n: number = parseInt(prompt(`${i + 1}: `) || "0");
        console.log(count_dig(n), " "); // Вывод количества нечётных цифр
    }
}

main();

