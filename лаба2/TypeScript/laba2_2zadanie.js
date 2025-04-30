"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
function main() {
    // Ввод данных
    var N = parseInt(prompt("Введите N: ") || "0");
    var M = parseInt(prompt("Введите M: ") || "0");
    var total = 0; // Общее количество выпитых банок
    var emptybot = 0; // Количество пустых банок
    var iterations = 0; // Количество итераций
    var currentN = N; // Текущее количество полных банок
    // Вывод начального состояния
    console.log("\nДано:");
    console.log("☺".repeat(currentN));
    console.log("\nПроцесс:");
    while (currentN > 0 || emptybot >= M) {
        // Фаза "выпивания"
        total += currentN;
        emptybot += currentN;
        currentN = 0;
        iterations++;
        // Вывод пустых банок
        console.log("©".repeat(emptybot) + " (пустые банки)");
        // Обмен пустых банок
        if (emptybot >= M) {
            currentN = Math.floor(emptybot / M);
            emptybot %= M;
            iterations++;
            // Вывод новых полных банок
            console.log("☺".repeat(currentN) + " (полные банки после обмена)");
        }
    }
    // Итоговый результат
    console.log("\nВыпитые банки:", total);
    console.log("Итерации:", iterations);
}
main();
