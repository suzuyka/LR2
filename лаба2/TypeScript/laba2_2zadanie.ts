import promptSync from 'prompt-sync';
const prompt = promptSync();

function main() {
    // Ввод данных
    const N: number = parseInt(prompt("Введите N: ") || "0");
    const M: number = parseInt(prompt("Введите M: ") || "0");

    let total: number = 0;         // Общее количество выпитых банок
    let emptybot: number = 0;      // Количество пустых банок
    let iterations: number = 0;    // Количество итераций
    let currentN = N;              // Текущее количество полных банок

    // Вывод начального состояния
    console.log("\nДано:");
    console.log(("☺" as string).repeat(currentN));

    console.log("\nПроцесс:");
    while (currentN > 0 || emptybot >= M) {
        // Фаза "выпивания"
        total += currentN;
        emptybot += currentN;
        currentN = 0;
        iterations++;

        // Вывод пустых банок
        console.log(("©" as string).repeat(emptybot) + " (пустые банки)");

        // Обмен пустых банок
        if (emptybot >= M) {
            currentN = Math.floor(emptybot / M);
            emptybot %= M;
            iterations++;
            
            // Вывод новых полных банок
            console.log(("☺" as string).repeat(currentN) + " (полные банки после обмена)");
        }
    }

    // Итоговый результат
    console.log("\nВыпитые банки:", total);
    console.log("Итерации:", iterations);
}

main();

