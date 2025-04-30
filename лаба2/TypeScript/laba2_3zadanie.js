"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
// Функция для подсчёта количества нечётных цифр в числе
function count_dig(num) {
    var count = 0; // Счётчик нечётных цифр
    var n = num; // Копия числа для обработки
    while (n > 0) {
        var dig = n % 10; // Получаем последнюю цифру
        if (dig % 2 !== 0) {
            count++; // Если цифра нечётная, увеличиваем счётчик
        }
        n = Math.floor(n / 10); // Убираем последнюю цифру
    }
    return count; // Возвращаем результат
}
function main() {
    // Ввод количества чисел
    var num = parseInt(prompt("Введите количество чисел: ") || "0");
    for (var i = 0; i < num; i++) {
        // Ввод каждого числа
        var n = parseInt(prompt("".concat(i + 1, ": ")) || "0");
        console.log(count_dig(n), " "); // Вывод количества нечётных цифр
    }
}
main();
