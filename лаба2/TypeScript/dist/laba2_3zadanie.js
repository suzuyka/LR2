"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
// Функция для подсчёта количества нечётных цифр в числе
function count_dig(num) {
    let count = 0; // Счётчик нечётных цифр
    let n = num; // Копия числа для обработки
    while (n > 0) {
        let dig = n % 10; // Получаем последнюю цифру
        if (dig % 2 !== 0) {
            count++; // Если цифра нечётная, увеличиваем счётчик
        }
        n = Math.floor(n / 10); // Убираем последнюю цифру
    }
    return count; // Возвращаем результат
}
function main() {
    // Ввод количества чисел
    const num = parseInt(prompt("Введите количество чисел: ") || "0");
    for (let i = 0; i < num; i++) {
        // Ввод каждого числа
        const n = parseInt(prompt(`${i + 1}: `) || "0");
        console.log(count_dig(n), " "); // Вывод количества нечётных цифр
    }
}
main();
