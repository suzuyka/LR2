"use strict";
// Проверяет, является ли число простым
function isprostoe(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return n > 1; // Числа <= 1 не считаются простыми
}
// Находит ближайшее простое число к n
function near(n) {
    if (isprostoe(n))
        return n; // Если n простое - возвращаем его
    let lower = n - 1;
    let upper = n + 1;
    while (true) {
        if (isprostoe(lower))
            return lower; // Ищем простое вниз
        if (isprostoe(upper))
            return upper; // Ищем простое вверх
        lower--;
        upper++;
    }
}
function main() {
    // Ввод числа
    const n = parseInt(prompt("Пример: ") || "0");
    const num = near(n); // Находим ближайшее простое
    const res = n - num; // Разница
    console.log(`Ближайшее простое: ${num}`);
    console.log(`Результат: ${res}`);
}
